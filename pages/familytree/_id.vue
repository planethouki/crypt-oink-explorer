<template>
  <main>
    <section class="container">
      <h1 class="display-3 mb-4">
        <nuxt-link class="text-decoration-none" to="/familytree/0">
          Family Tree
        </nuxt-link>
      </h1>
      <section class="row">
        <div class="col-12 col-sm-6 offset-sm-6">
          <SearchTokenId
            :input="inputTokenId"
            @click="onClickSearch"
          ></SearchTokenId>
        </div>
      </section>
      <section>
        <p>{{ progressText }}</p>
      </section>
    </section>
    <section id="chart" class="container-fulid">
      <GChart
        id="family-tree-chart"
        :settings="{ packages: ['orgchart'] }"
        :events="chartEvents"
        :options="chartOptions"
        :data="chartData"
        @ready="onChartReady"
        type="OrgChart"
      ></GChart>
    </section>
  </main>
</template>

<script>
import SearchTokenId from '@/components/SearchTokenId.vue'
import { GChart } from 'vue-google-charts'
import ScrollBooster from 'scrollbooster'

export default {
  name: 'Tree',
  components: {
    SearchTokenId,
    GChart
  },
  data() {
    return {
      inputTokenId: '',
      progressText: '',
      chartData: null,
      chartEvents: {
        select: () => {
          if (this.chartData === null) return
          const selected = this.chart.getSelection()
          if (!selected) return
          const { row } = selected[0]
          const tokenId = this.chartData.getValue(row, 0).split('-')[1]
          this.inputTokenId = tokenId
        }
      },
      chartOptions: {
        allowHtml: true,
        nodeClass: 'myNodeClass',
        selectedNodeClass: 'mySelectedNodeClass'
      },
      chart: null,
      google: null,
      scrollBooster: null
    }
  },
  async asyncData({ store, params }) {
    await store.dispatch('doUpdateTotalSupplyIfNotSet')
    let tokenId
    if (params.id) {
      tokenId = params.id === '0' ? store.getters.totalSupply : params.id
    } else {
      tokenId = store.getters.totalSupply
    }
    return {
      tokenId
    }
  },
  methods: {
    async getEntityFromTokenId(tokenId) {
      const tons = await this.$axios.$get(`/tons/${tokenId}`)
      return {
        id: Number(tokenId),
        tokenId: Number(tokenId),
        breederId: tons.breederId,
        seederId: tons.seederId,
        generation: tons.generation
      }
    },
    onChartReady(chart, google) {
      chart.clearChart = () => {
        console.log('clear chart')
      }
      this.chart = chart
      this.google = google
      this.reDrawChart()
    },
    async reDrawChart() {
      this.clearScrollBooster()
      const getRandomPrefix = () =>
        Math.floor(Math.random() * Math.floor(10000)).toString()
      const fTag = (tokenId) =>
        `<div><div class="token-title">${tokenId}</div><img src="${this.$tonImg(
          tokenId
        )}" class="token-image"></div>`
      console.log('drawing start')
      const data = new this.google.visualization.DataTable()
      data.addColumn('string', 'Name')
      data.addColumn('string', 'Manager')
      data.addColumn('string', 'ToolTip')
      const totalSupply = await this.$store.state.totalSupply
      const rootTokenId = this.tokenId === 0 ? totalSupply : this.tokenId
      // console.log('draw', rootTokenId);
      this.progressText = `drawing ${rootTokenId}...`
      let acceptableMaxLevel = 0
      const recu = async (tokenId, level, randomId) => {
        this.progressText = `getting ${tokenId}...`
        const breederRandomId = getRandomPrefix()
        const seederRandomId = getRandomPrefix()
        const r = await this.getEntityFromTokenId(tokenId)
        // console.log(r.id, r.generation, r.breederId, r.seederId);
        if (r.generation !== 0) {
          data.addRows([
            [
              { v: `${breederRandomId}-${r.breederId}`, f: fTag(r.breederId) },
              `${randomId}-${r.tokenId}`,
              `#${r.breederId}`
            ],
            [
              { v: `${seederRandomId}-${r.seederId}`, f: fTag(r.seederId) },
              `${randomId}-${r.tokenId}`,
              `#${r.seederId}`
            ]
          ])
          this.chart.draw(data, this.chartOptions)
          if (level < 4) {
            await recu(r.breederId, level + 1, breederRandomId)
            await recu(r.seederId, level + 1, seederRandomId)
          }
          if (acceptableMaxLevel < level + 1) acceptableMaxLevel = level + 1
        } else if (acceptableMaxLevel < level) acceptableMaxLevel = level
      }
      data.addRows([
        [
          { v: `${'0-'}${rootTokenId}`, f: fTag(rootTokenId) },
          '',
          `#${rootTokenId}`
        ]
      ])
      this.chart.draw(data, this.chartOptions)
      await recu(rootTokenId, 1, '0')
      this.progressText = ''
      this.chartData = data
      this.updateScrollBooster()
    },
    clearScrollBooster() {
      if (this.scrollBooster === null) return
      this.scrollBooster.destroy()
    },
    updateScrollBooster() {
      const viewport = document.querySelector('#chart')
      const content = viewport.querySelector('#family-tree-chart')
      this.scrollBooster = new ScrollBooster({
        viewport,
        content,
        mode: 'x',
        onUpdate: (data) => {
          viewport.scrollLeft = data.position.x
        }
      })
    },
    onClickSearch(tokenId) {
      this.$router.push({ name: 'familytree-id', params: { id: tokenId } })
    }
  }
}
</script>

<style scoped lang="scss">
#chart {
  overflow-y: hidden;
  overflow-x: auto;
  cursor: all-scroll;
}
</style>

<style lang="scss">
#family-tree-chart {
  .myNodeClass > div {
    border: 2px solid #b5d9ea;
    text-align: center;
    position: relative;
  }
  .mySelectedNodeClass > div {
    border: 2px solid #e3ca4b;
    text-align: center;
    background-color: #fff7ae;
    position: relative;
  }
  .token-title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .token-image {
    width: 100px;
    transform: scale(1.5);
    cursor: pointer;
  }
}
</style>
