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
  data() {
    return {
      inputPage: ''
    }
  },
  computed: {
    ...mapGetters(['totalSupply', 'perPage'])
  },
  async asyncData({ store }) {
    await store.dispatch('doUpdateTotalSupplyIfNotSet')
    return {}
  },
  mounted() {
    const { type, page } = this.$route.params
    if (!(type && page)) {
      const goPage = page || '1'
      const goType = type || this.$store.getters.type || 'card'
      this.$router.push(`/tons/${goPage}/${goType}`)
      return
    }
    const perPage = this.$store.getters.perPage
    const fromId = this.$store.getters.totalSupply - perPage * (page - 1)
    const tokenIds = []
    for (let i = 0; i < perPage; i += 1) {
      if (fromId - i < 1) break
      tokenIds.push(fromId - i)
    }
    this.$store.dispatch('tons/updateTonsFromTokenIds', { tokenIds })
  },
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
