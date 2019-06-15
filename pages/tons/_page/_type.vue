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
  name: 'Tons',
  components: {
    EntityList,
    EntityCard
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['tabs'])
  },
  asyncData({ params }) {
    return {
      type: params.type || 'card',
      page: params.page || 1
    }
  },
  methods: {}
}
</script>
