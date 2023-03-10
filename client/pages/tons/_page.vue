<template>
  <section class="mb-4">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div class="display-4">
        <nuxt-link class="text-decoration-none" to="/tons">Tons</nuxt-link>
      </div>
      <div class="ml-4">
        <search-token-id-page :totalSupply="totalSupply" :perPage="perPage" @click="onClickPageJump"></search-token-id-page>
      </div>
    </div>
    <nuxt-child></nuxt-child>
  </section>
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
