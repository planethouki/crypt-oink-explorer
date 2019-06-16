<template lang="pug">
  div
    b-nav(tabs)
      template(v-for="tab in tabs")
        b-nav-item(
          :to="{ name: 'tons-page-type', params: { type: tab.toLowerCase(), page } }"
          :active="type === tab.toLowerCase()") {{ tab }}
    section#tons
      template(v-for="tab in tabs")
        component(:is="`Entity${tab}`" v-if="type === tab.toLowerCase()")
</template>

<script>
import { mapGetters } from 'vuex'
import EntityList from '@/components/EntityList.vue'
import EntityCard from '@/components/EntityCard.vue'

export default {
  components: {
    EntityList,
    EntityCard
  },
  data() {
    return {}
  },
  asyncData({ params, store }) {
    const type = params.type || store.getters.type || 'card'
    store.dispatch('doUpdateType', type)
    return {
      page: params.page || 1
    }
  },
  computed: {
    ...mapGetters(['tabs', 'type'])
  },
  methods: {}
}
</script>
