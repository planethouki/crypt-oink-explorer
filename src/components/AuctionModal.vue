<template lang="pug">
  b-modal(ref="entity-modal" @hidden="hiddenModal" size="xl" :title="'#' + ton.tokenId")
    .row
      .col-lg-12.col-xl-6.text-center
        img.w-100(:src="ton.imgSrc" style="max-width:512px;")
      .col-lg-12.col-xl-6
        .row
          .col-lg-3.col-xl-6
            dl
              dt tokenId
              dd {{ ton.tokenId }}
          .col-lg-3.col-xl-6
            dl
              dt price
              dd {{ ton.price }}
          .col-lg-3.col-xl-6
            dl
              dt startingPrice
              dd {{ ton.startingPrice }}
          .col-lg-3.col-xl-6
            dl
              dt endingPrice
              dd {{ ton.endingPrice }}
          .col-lg-3.col-xl-6
            dl
              dt duration
              dd {{ ton.duration }}
          .col-lg-3.col-xl-6
            dl
              dt startedAt
              dd {{ ton.startedAt }}
          .col-lg-3.col-xl-6
            dl
              dt birthTime
              dd {{ ton.price }}
          .col-lg-12.col-xl-12
            dl
              dt seller
              dd {{ ton.seller }}
</template>

<script>
export default {
  name: 'AuctionModal',
  props: {
    ton: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  watch: {
    ton: {
      handler(newVal) {
        if (Object.keys(newVal).length === 0) return;
        this.showModal();
      },
    },
  },
  methods: {
    showModal() {
      this.$refs['entity-modal'].show();
    },
    hiddenModal() {
      this.$emit('emitHiddenModal');
    },
  },
};
</script>

<style scoped>
</style>
