<template lang="pug">
  section
    h1.display-3.mb-4
      nuxt-link.text-decoration-none(to="/tons") Tons
    .form-inline.float-sm-right
      b-input-group
        b-form-input(name="inputPage" type="number" placeholder="Page No." v-model="inputPage")
        b-input-group-append
          b-button(text="Go" variant="primary" @click="goPage") Go
    b-pagination-nav(
      :link-gen="linkGen"
      :number-of-pages="Math.ceil(this.totalSupply / this.perPage)"
      :value="page"
      limit="10"
      use-router)
    section#tons
      nuxt-child
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Tons',
  components: {},
  data() {
    return {
      inputPage: ''
    }
  },
  computed: {
    ...mapGetters(['totalSupply', 'perPage', 'type'])
  },
  watch: {},
  async asyncData({ params, store }) {
    console.log(params)
    await store.dispatch('doUpdateTotalSupplyIfNotSet')
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
    return {
      page,
      tokenIds
    }
  },
  mounted() {},
  methods: {
    goPage() {
      const page = Number(this.inputPage)
      this.$router.push({
        name: 'tons-page-type',
        params: { page, type: this.type }
      })
    },
    linkGen(pageNum) {
      return {
        name: 'tons-page-type',
        params: { page: pageNum, type: this.type }
      }
    }
  }
}
</script>
