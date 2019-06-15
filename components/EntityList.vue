<template lang="pug">
  div.overflow-auto
    b-table(striped hover :items="currentTons" :fields="fields")
      template(slot="thumb" slot-scope="data")
        img(:src="data.item.imgSrc" style="height: 45px;")
      template(slot="id" slot-scope="data")
        nuxt-link(:to="`/ton/${data.value}`") {{ data.value }}
      template(slot="generation" slot-scope="data")
        span(v-if="asyncTonsCache.find(t => t.id === data.item.id)")
          template(v-if="asyncTonsCache.find(t => t.id === data.item.id).generation === '0'")
            span {{ asyncTonsCache.find(t => t.id === data.item.id).generation }}
          template(v-else)
            nuxt-link(:to="`/tree/${data.item.id}`") {{ asyncTonsCache.find(t => t.id === data.item.id).generation }}
      template(slot="birthTime" slot-scope="data")
        span(v-if="asyncTonsCache.find(t => t.id === data.item.id)")
          span {{ $unixtimeFormat(asyncTonsCache.find(t => t.id === data.item.id).birthTime) }}
      template(slot="owner" slot-scope="data")
        span(v-if="asyncTonsCache.find(t => t.id === data.item.id)")
          nuxt-link(:to="`/ownership/${asyncTonsCache.find(t => t.id === data.item.id).owner}`") {{ asyncTonsCache.find(t => t.id === data.item.id).owner }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'EntityList',
  props: {
    fields: {
      type: Object,
      default() {
        return {
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
          birthTime: {
            label: 'BirthTime (JST)'
          },
          owner: {
            label: 'Owner'
          }
        }
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('tons', ['currentTons', 'asyncTonsCache'])
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped></style>
