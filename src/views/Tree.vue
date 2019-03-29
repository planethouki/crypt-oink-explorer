<template lang="pug">
  main.container
    h1.display-3.mb-4
      router-link.text-decoration-none(to="/familytree/0") Family Tree
    .form-inline.float-sm-right
      b-input-group
        b-form-input(name="inputTokenId" type="number" placeholder="ID" v-model="inputTokenId")
        b-input-group-append
          b-button(text="Go" variant="primary" @click="goTokenId") Go
    p {{ progressText }}
    GChart(
    :settings="{ packages: ['orgchart'] }"
    type="OrgChart"
    @ready="onChartReady")
</template>

<script>
// @ is an alias to /src
import { GChart } from 'vue-google-charts';

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
      chartData: [],
      chartOptions: {
        allowHtml: true,
      },
    };
  },
  computed: {
  },
  watch: {
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
    async onChartReady(chart, google) {
      const data = new google.visualization.DataTable();
      data.addColumn('string', 'Name');
      data.addColumn('string', 'Manager');
      data.addColumn('string', 'ToolTip');
      const options = {
        allowHtml: true,
      };
      const totalSupply = await this.$store.state.totalSupply;
      const rootTokenId = this.tokenId === 0 ? totalSupply : this.tokenId;
      console.log('draw', rootTokenId);
      this.progressText = `drawing ${rootTokenId}...`;
      let acceptableMaxLevel = 0;
      const fTag = tokenId => `<div>${tokenId}</div><div><img src="${this.$tonImg(tokenId)}" style="width:20px;"></div>`;
      const recu = async (tokenId, level, randomId) => {
        this.progressText = `getting ${tokenId}...`;
        const breederRandomId = Math.floor(Math.random() * Math.floor(10000)).toString();
        const seederRandomId = Math.floor(Math.random() * Math.floor(10000)).toString();
        const r = await this.getEntityFromTokenId(tokenId);
        console.log(r.id, r.generation, r.breederId, r.seederId);
        if (r.generation !== 0) {
          data.addRows([
            [
              { v: `${breederRandomId}-${r.breederId}`, f: fTag(r.breederId) },
              `${randomId}-${r.tokenId}`,
              '',
            ],
            [
              { v: `${seederRandomId}-${r.seederId}`, f: fTag(r.seederId) },
              `${randomId}-${r.tokenId}`,
              '',
            ],
          ]);
          chart.draw(data, options);
          if (level < 4) {
            await recu(r.breederId, level + 1, breederRandomId);
            await recu(r.seederId, level + 1, seederRandomId);
          }
          if (acceptableMaxLevel < level + 1) acceptableMaxLevel = level + 1;
        } else if (acceptableMaxLevel < level) acceptableMaxLevel = level;
      };
      data.addRows([
        [{ v: `${'0-'}${rootTokenId}`, f: fTag(rootTokenId) }, '', '']
      ]);
      chart.draw(data, options);
      await recu(rootTokenId, 1, '0');
      this.progressText = '';
    },
  },
};
</script>
