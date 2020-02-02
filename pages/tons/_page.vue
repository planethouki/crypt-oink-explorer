<template lang="pug">
  section.mb-4
    .d-flex.align-items-center.justify-content-between.mb-3
      .display-4
        nuxt-link.text-decoration-none(to="/tons") Tons
      div.ml-4
        search-token-id-page(
          :totalSupply="totalSupply"
          :perPage="perPage"
          @click="onClickPageJump")
    nuxt-child
</template>

<script>
import SearchTokenIdPage from '@/components/facade/SearchTokenIdPage'
import { mapGetters } from 'vuex'

export default {
  name: 'Tons',
  components: { SearchTokenIdPage },
  async asyncData({ params, redirect, store }) {
    await store.dispatch('doUpdateTotalSupplyIfNotSet')
    if (!(params.type && params.page)) {
      redirect(
        `/tons/${params.page || '1'}/${params.type ||
          store.getters.type ||
          'card'}`
      )
      return
    }
    const page = params.page
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
  data() {
    return {
      inputPage: ''
    }
  },
  computed: {
    ...mapGetters(['totalSupply', 'perPage'])
  },
  watch: {},
  mounted() {},
  methods: {
    onClickPageJump(page) {
      const params = this.$route.params
      params.page = page
      this.$router.push({
        name: 'tons-page-type',
        params
      })
    }
  }
}
</script>
