<template lang="pug">
  .d-flex.flex-wrap
    template(v-for="ton in tons")
      .card(:key="ton.id" @click="showModal(ton)" v-if="ton.shown === true")
        .p-3.position-absolute {{ ton.tokenId }}
        img.w-100(:src="ton.imgSrc")
    AuctionModal(:ton="ton" @emitHiddenModal="hiddenModal")
</template>

<script>
import AuctionModal from '@/components/AuctionModal.vue';

export default {
  name: 'AuctionCard',
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
    height: 230px;
  }
</style>
