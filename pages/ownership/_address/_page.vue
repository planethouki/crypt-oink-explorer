<template lang="pug">
  section.position-relative
    .position-absolute(style="top:0;right:0;")
      small Last Modified: {{ lastModBlockHeight }}
    h1.display-3.mb-4
      nuxt-link.text-decoration-none(to="/ownership") Ownership
    .row
      .col-12.col-sm-6
        p
          strong Address &nbsp;
          span {{ address }}
      .col-12.col-sm-6
        b-input-group
          b-form-input(
            name="inputAddress"
            type="text"
            placeholder="Address"
            v-model="inputAddress")
          b-input-group-append
            b-button(text="Go" variant="primary" @click="goAddress") Go
    b-pagination-nav(
      :link-gen="linkGen"
      :number-of-pages="Math.ceil(this.balanceOf / this.perPage)"
      :value="page"
      limit="10"
      use-router)
    section#tons
      nuxt-child
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Ownership',
  components: {},
  data() {
    return {
      inputAddress: ''
    }
  },
  computed: {
    ...mapGetters(['totalSupply', 'perPage', 'type']),
    ...mapGetters('ownership', ['lastModBlockHeight']),
    ...mapGetters('tons', ['currentTons', 'asyncTonsCache'])
  },
  watch: {},
  async asyncData({ params, store, router, error }) {
    console.log(params)
    const type = params.type || store.getters.type || 'card'
    const page = params.page || 1
    const address =
      params.address || '0xa2156f24711a631e92e65dc114cf172065ddd49b'
    store.dispatch('doUpdateType', type)
    let balanceOf
    try {
      await store.dispatch('ownership/doUpdate', { address })
      const allTokenIds = store.getters['ownership/tokens'](address)
      const perPage = store.getters.perPage
      const tokenIds = allTokenIds
        .slice()
        .reverse()
        .slice((page - 1) * perPage, page * perPage)
      balanceOf = allTokenIds.length
      store.dispatch('tons/updateTonsFromTokenIds', { tokenIds })
    } catch (e) {
      console.log(e)
      error()
    }
    return {
      balanceOf,
      address,
      page
    }
  },
  mounted() {},
  methods: {
    goAddress() {
      this.$router.push({
        name: 'ownership-address-page-type',
        params: { page: 1, type: this.type, address: this.inputAddress }
      })
    },
    linkGen(pageNum) {
      return {
        name: 'ownership-address-page-type',
        params: { page: pageNum, type: this.type, address: this.address }
      }
    }
  }
}
</script>
