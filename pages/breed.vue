<template lang="pug">
  main.container
    h1.display-3.mb-4
      nuxt-link.text-decoration-none(to="/shop") Breed
    Auction(:page="page" :type="type" :name="'breed'" :contract="'AuctionSeed'")
</template>

<script>
// @ is an alias to /src
import Auction from '@/components/Auction.vue'

export default {
  name: 'Breed',
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
