<template lang="pug">
  .d-flex.flex-wrap
    template(v-for="ton in tons")
      .card(:key="ton.id")
        .p-3.position-absolute
          router-link(:to="`/ton/${ton.tokenId}`") {{ ton.tokenId }}
        img.w-100(:src="ton.imgSrc")
</template>

<script>
export default {
  name: 'EntityCard',
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
    };
  },
  mounted() {
  },
  watch: {
  },
  methods: {
  },
};
</script>

<style scoped>
  .card {
    width: 200px;
    height: 230px;
  }
</style>
