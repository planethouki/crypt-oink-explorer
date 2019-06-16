<template lang="pug">
  div
    b-nav(tabs)
      template(v-for="tab in tabs")
        b-nav-item(
          :to="{ name: 'ownership-address-page-type', params: { type: tab.toLowerCase(), page, address } }"
          :active="type === tab.toLowerCase()") {{ tab }}
    section#tons
      template(v-for="tab in tabs")
        component(:is="`Entity${tab}`" v-if="type === tab.toLowerCase()" :fields="fields")
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
    return {
      fields: {
        thumb: {
          label: '',
          class: 'p-0'
        },
        id: {
          label: 'Id'
        },
        generation: {
          label: 'Gen'
        },
        isBreeding: {
          label: 'isBreeding'
        },
        isReady: {
          label: 'isReady'
        },
        birthTime: {
          label: 'BirthTime (JST)'
        }
      }
    }
  },
  asyncData({ params, store }) {
    const type = params.type || store.getters.type || 'card'
    store.dispatch('doUpdateType', type)
    return {
      page: params.page || 1,
      address: params.address || '0xa2156f24711a631e92e65dc114cf172065ddd49b'
    }
  },
  computed: {
    ...mapGetters(['tabs', 'type'])
  },
  methods: {}
}
</script>
