<template lang="pug">
  div
    b-nav(tabs)
      template(v-for="tab in tabs")
        b-nav-item(
          :to="{ name: 'shop-page-type', params: { type: tab.id, page } }"
          :active="type === tab.id") {{ tab.text }}
      li.nav-item
        .px-3.py-2
          .spinner-border.spinner-border-sm(role="status" v-show="!tonsLoaded")
            span.sr-only Loading...
    section#tons
      template(v-for="tab in tabs")
        component(:is="`Auction${tab.text}`" v-if="type === tab.id" name="sell")
</template>

<script>
import { mapGetters } from 'vuex'
import AuctionList from '@/components/AuctionList.vue'
import AuctionCard from '@/components/AuctionCard.vue'

export default {
  components: {
    AuctionList,
    AuctionCard
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['tabs', 'type']),
    ...mapGetters('tons', ['tonsLoaded'])
  },
  asyncData({ params, store }) {
    const type = params.type || store.getters.type || 'card'
    store.dispatch('doUpdateType', type)
    return {
      page: params.page || 1
    }
  },
  methods: {}
}
</script>
