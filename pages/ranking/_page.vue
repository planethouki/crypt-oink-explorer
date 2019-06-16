<template lang="pug">
  section.position-relative
    .position-absolute(style="top:0;right:0;")
      small Last Modified: {{ lastModBlockHeight }}
    h1.display-3.mb-4
      nuxt-link.text-decoration-none(to="/ranking") Ranking
    .form-inline.float-sm-right
      b-input-group
        b-form-input(name="inputPage" type="number" placeholder="Page No." v-model="inputPage")
        b-input-group-append
          b-button(text="Go" variant="primary" @click="goPage") Go
    b-pagination-nav(
      :link-gen="linkGen"
      :number-of-pages="Math.ceil(this.rankingCount / this.perPage)"
      :value="page"
      limit="10"
      use-router)
    section#tons
      nuxt-child
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Ranking',
  components: {},
  data() {
    return {
      inputPage: ''
    }
  },
  computed: {
    ...mapGetters(['totalSupply', 'perPage']),
    ...mapGetters('ranking', ['lastModBlockHeight'])
  },
  watch: {},
  async asyncData({ params, store }) {
    const page = params.page || 1
    const perPage = store.getters.perPage
    await store.dispatch('ranking/doUpdate')
    const ranking = store.getters['ranking/ranking']
    const currentRanking = ranking.slice((page - 1) * perPage, page * perPage)
    const rankingCount = ranking.length
    return {
      page,
      rankingCount,
      currentRanking
    }
  },
  mounted() {},
  methods: {
    goPage() {
      const page = Number(this.inputPage)
      this.$router.push({
        name: 'ranking-page',
        params: { page }
      })
    },
    linkGen(pageNum) {
      return {
        name: 'ranking-page',
        params: { page: pageNum }
      }
    }
  }
}
</script>
