<template lang="pug">
  main.container
    h1.display-3.mb-4
      router-link.text-decoration-none(to="/ranking/1") Ranking
    p.text-right
     small {{ lastMod }}
    b-pagination(
    aria-controls="rk-table"
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    @change="onPageChange")
    div.overflow-auto
      b-table#rk-table(
      striped hover
      :per-page="perPage"
      :current-page="tableCurrentPage"
      :items="items"
      :fields="fields")
        template(slot="owner" slot-scope="data")
          router-link(:to="{ name: 'ownership', params: { address: data.value, type: 'card', page: 1 } }") {{ data.value }}
          <!--a(:href="data.item.etherscan" target="_blank") {{ data.value }}-->
        template(slot="count" slot-scope="data")
          .d-flex.align-items-center
            .d-flex.mr-3 {{ data.item.count }}
            .progress.flex-fill
              .progress-bar(
              :style="'width: ' + data.item.bar + '%;'"
              role="progressbar"
              :aria-valuenow="data.item.bar"
              aria-valuemin="0"
              aria-valuemax="100")
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ranking',
  components: {
  },
  props: {
    page: {
      type: Number,
      default() { return 1; },
    },
  },
  data() {
    return {
      currentPage: 1,
      tableCurrentPage: 1,
      perPage: 100,
      items: [
      ],
      fields: {
        order: {
          label: 'Order',
        },
        owner: {
          label: 'Owner',
        },
        count: {
          label: 'Balance',
        },
      },
      lastMod: '',
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  watch: {
    page: {
      handler(newVal) {
        this.currentPage = newVal;
        this.tableCurrentPage = newVal;
      },
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.$axios.get('https://cryptoinkexplorer.blob.core.windows.net/api/v1/block.json').then((result) => {
        this.lastMod = `Last Modified: ${result.data.block}`;
      });
      const rank = await this.$axios.get('https://cryptoinkexplorer.blob.core.windows.net/api/v1/ownerRanking.json');
      this.items = rank.data.map((item, index, items) => ({
        order: item.order,
        owner: item.owner,
        etherscan: `https://etherscan.io/address/${item.owner}`,
        count: item.count,
        bar: Math.floor(item.count / items[0].count * 100),
      }));
      this.$nextTick(() => {
        this.currentPage = this.page;
        this.tableCurrentPage = this.page;
      });
    },
    onPageChange(event) {
      this.$router.push({ name: 'ranking', params: { page: event } });
    },
  },
};
</script>

