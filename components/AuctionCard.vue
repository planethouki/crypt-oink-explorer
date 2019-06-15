<template lang="pug">
  .d-flex.flex-wrap
    template(v-for="ton in tons")
      .card(:key="ton.id" v-if="ton.shown")
        .p-3.position-absolute
          nuxt-link(:to="`/ton/${ton.tokenId}`") {{ ton.tokenId }}
        img.w-100(:src="ton.imgSrc")
</template>

<script>
export default {
  name: 'AuctionCard',
  props: {
    tons: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      ton: {}
    }
  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped>
.card {
  width: 200px;
  height: 230px;
}
</style>
