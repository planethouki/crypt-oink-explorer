<template lang="pug">
  .d-flex.flex-wrap
    template(v-for="ton in currentTons")
      .card-wrap(:key="ton.id")
        .card
          template(v-if="!asyncTonsCache[ton.id]")
            .position-absolute(style="top:0;bottom:0;left:0;right:0;background:rgba(255,255,255,0.9);")
              .position-absolute(style="top:50%;left:50%;transform:translate(-50%,-50%);")
                b-spinner(label="Loading")
          template(v-else-if="!asyncTonsCache[ton.id][name].shown")
            .position-absolute(style="top:0;bottom:0;left:0;right:0;background:rgba(255,255,255,0.9);")
              .position-absolute(style="top:50%;left:50%;transform:translate(-50%,-50%);")
                span.d-inline-block.text-center.font-weight-bold.shadow Not in Auction
          .p-3.position-absolute
            nuxt-link(:to="`/ton/${ton.id}`") {{ ton.id }}
          img.w-100(:src="ton.imgSrc")

</template>

<script>
import AccountLinkFacade from '@/components/facade/AccountLinkFacade'

export default {
  name: 'AuctionCard',
  components: { AccountLinkFacade },
  props: {
    name: {
      type: String,
      required: true
    },
    currentTons: {
      type: Array,
      required: true
    },
    asyncTonsCache: {
      type: Object,
      required: true
    }
  }
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
