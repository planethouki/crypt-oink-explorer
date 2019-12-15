<template lang="pug">
  section.mb-4
    .d-flex.align-items-center.justify-content-between.mb-3
      .display-4
        nuxt-link.text-decoration-none(to="/shop") Shop
      div.ml-4
        search-token-id-page(
          :totalSupply="totalSupply"
          :perPage="perPage"
          @click="onClickPageJump")
    section#tons.mb-5
      nuxt-child
</template>

<script>
import { mapGetters } from 'vuex'
import SearchTokenIdPage from '@/components/facade/SearchTokenIdPage'

export default {
  name: 'Shop',
  components: { SearchTokenIdPage },
  async asyncData({ params, redirect, store }) {
    console.log(params)
    await store.dispatch('doUpdateTotalSupplyIfNotSet')
    if (!(params.type && params.page)) {
      redirect(
        `/tons/${params.page || '1'}/${params.type ||
          store.getters.type ||
          'card'}`
      )
      return
    }
    const type = params.type || store.getters.type || 'card'
    const page = params.page || 1
    store.dispatch('doUpdateType', type)
    const perPage = store.getters.perPage
    const fromId = store.getters.totalSupply - perPage * (page - 1)
    const tokenIds = []
    for (let i = 0; i < perPage; i += 1) {
      if (fromId - i < 1) break
      tokenIds.push(fromId - i)
    }
    store.dispatch('tons/updateTonsFromTokenIds', { tokenIds })
    return {}
  },
  computed: {
    ...mapGetters(['totalSupply', 'perPage'])
  },
  methods: {
    onClickPageJump(page) {
      const params = this.$route.params
      params.page = page
      this.$router.push({
        name: 'shop-page-type',
        params
      })
    }
  }
}
</script>
