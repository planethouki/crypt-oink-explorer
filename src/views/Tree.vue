<template lang="pug">
  main
    section.container
      h1.display-3.mb-4
        router-link.text-decoration-none(to="/familytree/0") Family Tree
      section
        .form-inline
          b-input-group
            b-form-input(name="inputTokenId" type="number" placeholder="ID" v-model="inputTokenId")
            b-input-group-append
              b-button(text="Go" variant="primary" @click="goTokenId") Go
      section
        p {{ progressText }}
    section#chart.container-fulid
      GChart#family-tree-chart(
      :settings="{ packages: ['orgchart'] }"
      :events="chartEvents"
      :options="chartOptions"
      :data="chartData"
      type="OrgChart"
      @ready="onChartReady")
</template>

<script>
// @ is an alias to /src
import { GChart } from 'vue-google-charts';
import ScrollBooster from 'scrollbooster';

export default {
  name: 'tree',
  components: {
    GChart,
  },
  props: {
    tokenId: {
      type: Number,
      default() { return 0; },
    },
  },
  data() {
    return {
      inputTokenId: '',
      progressText: '',
      chartData: null,
      chartEvents: {
        select: () => {
          if (this.chartData === null) return;
          const selected = this.chart.getSelection();
          if (!selected) return;
          const { row } = selected[0];
          const tokenId = this.chartData.getValue(row, 0).split('-')[1];
          this.inputTokenId = tokenId;
        },
      },
      chartOptions: {
        allowHtml: true,
        nodeClass: 'myNodeClass',
        selectedNodeClass: 'mySelectedNodeClass',
      },
      chart: null,
      google: null,
      scrollBooster: null,
    };
  },
  computed: {
  },
  watch: {
    tokenId: {
      handler(newVal, oldVal) {
        if (newVal === 0 && oldVal === 0) return;
        this.reDrawChart();
      },
    },
  },
  mounted() {
  },
  methods: {
    onPageChange(event) {
      this.$router.push({ name: 'tree', params: { tokenId: event } });
    },
    goTokenId() {
      const tokenId = Number(this.inputTokenId);
      this.$router.push({ name: 'tree', params: { tokenId } });
    },
    async getEntityFromTokenId(tokenId) {
      const getEntity = await this.$contracts.EntityCore.methods.getEntity(tokenId).call();
      return {
        id: Number(tokenId),
        tokenId: Number(tokenId),
        breederId: Number(getEntity.breederId),
        seederId: Number(getEntity.seederId),
        generation: Number(getEntity.generation),
      };
    },
    onChartReady(chart, google) {
      // eslint-disable-next-line
      chart.clearChart = () => { console.log('clear chart'); };
      this.chart = chart;
      this.google = google;
      this.reDrawChart();
    },
    async reDrawChart() {
      this.clearScrollBooster();
      const getRandomPrefix = () => Math.floor(Math.random() * Math.floor(10000)).toString();
      const fTag = tokenId => `<div><div class="token-title">${tokenId}</div><img src="${this.$tonImg(tokenId)}" class="token-image"></div>`;
      console.log('drawing start');
      const data = new this.google.visualization.DataTable();
      data.addColumn('string', 'Name');
      data.addColumn('string', 'Manager');
      data.addColumn('string', 'ToolTip');
      const totalSupply = await this.$store.state.totalSupply;
      const rootTokenId = this.tokenId === 0 ? totalSupply : this.tokenId;
      // console.log('draw', rootTokenId);
      this.progressText = `drawing ${rootTokenId}...`;
      let acceptableMaxLevel = 0;
      const recu = async (tokenId, level, randomId) => {
        this.progressText = `getting ${tokenId}...`;
        const breederRandomId = getRandomPrefix();
        const seederRandomId = getRandomPrefix();
        const r = await this.getEntityFromTokenId(tokenId);
        // console.log(r.id, r.generation, r.breederId, r.seederId);
        if (r.generation !== 0) {
          data.addRows([
            [
              { v: `${breederRandomId}-${r.breederId}`, f: fTag(r.breederId) },
              `${randomId}-${r.tokenId}`,
              `#${r.breederId}`,
            ],
            [
              { v: `${seederRandomId}-${r.seederId}`, f: fTag(r.seederId) },
              `${randomId}-${r.tokenId}`,
              `#${r.seederId}`,
            ],
          ]);
          this.chart.draw(data, this.chartOptions);
          if (level < 4) {
            await recu(r.breederId, level + 1, breederRandomId);
            await recu(r.seederId, level + 1, seederRandomId);
          }
          if (acceptableMaxLevel < level + 1) acceptableMaxLevel = level + 1;
        } else if (acceptableMaxLevel < level) acceptableMaxLevel = level;
      };
      data.addRows([
        [{ v: `${'0-'}${rootTokenId}`, f: fTag(rootTokenId) }, '', `#${rootTokenId}`],
      ]);
      this.chart.draw(data, this.chartOptions);
      await recu(rootTokenId, 1, '0');
      this.progressText = '';
      this.chartData = data;
      this.updateScrollBooster();
    },
    clearScrollBooster() {
      if (this.scrollBooster === null) return;
      this.scrollBooster.destroy();
    },
    updateScrollBooster() {
      const viewport = document.querySelector('#chart');
      const content = viewport.querySelector('#family-tree-chart');
      this.scrollBooster = new ScrollBooster({
        viewport,
        content,
        mode: 'x',
        onUpdate: (data) => {
          viewport.scrollLeft = data.position.x;
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
  #chart {
    overflow-y: hidden;
    overflow-x: auto;
    cursor: all-scroll;
  }
  #family-tree-chart {
    & /deep/ .myNodeClass > div {
      border: 2px solid #b5d9ea;
      text-align: center;
      position: relative;
    }
    & /deep/ .mySelectedNodeClass > div {
      border: 2px solid #e3ca4b;
      text-align: center;
      background-color: #fff7ae;
      position: relative;
    }
    & /deep/ .token-title {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
    & /deep/ .token-image {
      width: 100px;
      transform: scale(1.5);
      cursor: pointer;
    }
  }
</style>
