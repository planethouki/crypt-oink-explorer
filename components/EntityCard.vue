<template lang="pug">
  .d-flex.flex-wrap
    template(v-for="ton in currentTons")
      .card(:key="ton.id")
        .p-3.position-absolute
          nuxt-link(:to="`/ton/${ton.id}`") {{ ton.id }}
        img.w-100(:src="ton.imgSrc")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'EntityCard',
  data() {
    return {}
  },
  computed: {
    ...mapGetters('tons', ['currentTons'])
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
