<template lang="pug">
  .d-flex.flex-wrap
    template(v-for="ton in currentTons")
      .card-wrap(
        :key="ton.id"
        v-if="asyncTonsCache[ton.id] && asyncTonsCache[ton.id][name].shown")
        .card
          .p-3.position-absolute
            nuxt-link(:to="`/ton/${ton.id}`") {{ ton.id }}
          img.w-100(:src="ton.imgSrc")
</template>

<script>
import { mapGetters } from 'vuex'
import AccountLinkFacade from '@/components/facade/AccountLinkFacade'

export default {
  name: 'AuctionCard',
  components: { AccountLinkFacade },
  props: {
    name: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('tons', ['currentTons', 'asyncTonsCache'])
  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.card-wrap {
  position: relative;
  width: calc(100% / 2);
  @media (min-width: 576px) {
    width: calc(100% / 3);
  }
  @media (min-width: 768px) {
    width: calc(100% / 4);
  }
  @media (min-width: 992px) {
    width: calc(100% / 5);
  }
  @media (min-width: 1200px) {
    width: calc(100% / 6);
  }
  @media (min-width: 1440px) {
    width: calc(100% / 8);
  }
  @media (min-width: 1920px) {
    width: calc(100% / 10);
  }
  @media (min-width: 2560px) {
    width: calc(100% / 12);
  }
  &:before {
    content: '';
    display: block;
    padding-top: 115%;
  }
  .card {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
</style>
