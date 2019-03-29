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
              dt isBreeding
              dd {{ ton.isBreeding }}
          .col-lg-3.col-xl-6
            dl
              dt isReady
              dd {{ ton.isReady }}
          .col-lg-3.col-xl-6
            dl
              dt cooldownIndex
              dd {{ ton.cooldownIndex }}
          .col-lg-3.col-xl-6
            dl
              dt nextActionAt
              dd {{ ton.nextActionAt }}
          .col-lg-3.col-xl-6
            dl
              dt matingWithId
              dd {{ ton.matingWithId }}
          .col-lg-3.col-xl-6
            dl
              dt birthTime
              dd {{ ton.birthTime }}
          .col-lg-3.col-xl-6
            dl
              dt breederId
              dd {{ ton.breederId }}
          .col-lg-3.col-xl-6
            dl
              dt seederId
              dd {{ ton.seederId }}
          .col-lg-3.col-xl-6
            dl
              dt generation
              dd {{ ton.generation }}
          .col-lg-12.col-xl-12
            dl
              dt dna
              dd.text-break {{ ton.dna }}
          .col-lg-12.col-xl-12
            dl
              dt owner
              dd {{ ton.owner }}
</template>

<script>
export default {
  name: 'EntityModal',
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
