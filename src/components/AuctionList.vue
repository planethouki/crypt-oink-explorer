<template lang="pug">
  div.overflow-auto
    b-table(striped hover :items="tons" :fields="fields" @row-clicked="showModal")
      template(slot="thumb" slot-scope="data")
        img(:src="data.item.imgSrc" style="height: 45px;")
    AuctionModal(:ton="ton" @emitHiddenModal="hiddenModal")
</template>

<script>
import AuctionModal from '@/components/AuctionModal.vue';

export default {
  name: 'AuctionList',
  components: {
    AuctionModal,
  },
  props: {
    tons: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      ton: {},
      fields: {
        thumb: {
          label: '',
          class: 'p-0',
        },
        id: {
          label: 'Id',
        },
        price: {
          label: 'Price',
        },
        seller: {
          label: 'Seller',
        },
      },
    };
  },
  mounted() {
  },
  watch: {
  },
  methods: {
    showModal(ton) {
      if (ton.hidden) return;
      this.ton = ton;
    },
    hiddenModal() {
      this.ton = {};
    },
  },
};
</script>

<style scoped>
  .card {
    width: 200px;
  }
</style>
