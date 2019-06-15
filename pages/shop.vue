<template lang="pug">
  main.container
    h1.display-3.mb-4
      nuxt-link.text-decoration-none(to="/shop") Shop
    Auction(:page="page" :type="type" :name="'shop'" :contract="'AuctionSell'")
</template>

<script>
// @ is an alias to /src
import Auction from '@/components/Auction.vue'

export default {
  name: 'Shop',
  components: {
    Auction
  },
  props: {
    page: {
      type: Number,
      default() {
        return 1
      }
    },
    type: {
      type: String,
      default() {
        return 'card'
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>
