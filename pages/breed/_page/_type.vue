<template>
  <section>
    <div class="d-flex d-md-none align-items-end justify-content-between">
      <b-pagination-nav :link-gen="linkGen" :number-of-pages="Math.ceil(this.totalSupply / this.perPage)" :value="page" limit="10" prev-text="prev" next-text="next" use-router="use-router" hide-goto-end-buttons="hide-goto-end-buttons"></b-pagination-nav>
      <b-nav tabs="tabs">
        <template v-for="tab in tabs">
          <b-nav-item v-if="type !== tab.id" :to="{ name: 'breed-page-type', params: { type: tab.id, page } }" active="active">
            <font-awesome-icon :icon="['fas', tab.icon]"></font-awesome-icon>
          </b-nav-item>
        </template>
      </b-nav>
    </div>
    <div class="d-none d-md-flex align-items-end justify-content-between">
      <b-pagination-nav :link-gen="linkGen" :number-of-pages="Math.ceil(this.totalSupply / this.perPage)" :value="page" limit="10" use-router="use-router"></b-pagination-nav>
      <b-nav tabs="tabs">
        <template v-for="tab in tabs">
          <b-nav-item :to="{ name: 'breed-page-type', params: { type: tab.id, page } }" :active="type === tab.id">
            <font-awesome-icon :icon="['fas', tab.icon]"></font-awesome-icon>
          </b-nav-item>
        </template>
      </b-nav>
    </div>
    <section id="tons">
      <template v-for="tab in tabs">
        <component :is="`Auction${tab.text}`" v-if="type === tab.id" name="seed" :currentTons="currentTons" :asyncTonsCache="asyncTonsCache"></component>
      </template>
    </section>
  </section>
</template>

<script>
import AuctionList from '@/components/AuctionList.vue'
import AuctionCard from '@/components/AuctionCard.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    AuctionList,
    AuctionCard
  },
  computed: {
    ...mapGetters(['tabs', 'totalSupply', 'perPage']),
    ...mapGetters('tons', ['currentTons', 'asyncTonsCache'])
  },
  asyncData({ params, store }) {
    const type = params.type || store.getters.type || 'card'
    store.dispatch('doUpdateType', type)
    return {
      page: params.page,
      type
    }
  },
  methods: {
    linkGen(pageNum) {
      return {
        name: 'breed-page-type',
        params: {
          page: pageNum,
          type: this.type
        }
      }
    }
  }
}
</script>
