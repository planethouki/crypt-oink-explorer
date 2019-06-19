<template lang="pug">
  div.overflow-auto
    b-table(striped hover :items="currentTons" :fields="fields" foot-clone)
      template(slot="thumb" slot-scope="data")
        img(:src="data.item.imgSrc" style="height: 45px;")
      template(slot="id" slot-scope="data")
        nuxt-link(:to="`/ton/${data.value}`") {{ data.value }}
      template(slot="generation" slot-scope="data")
        span(v-if="asyncTonsCache[data.item.id]")
          template(v-if="asyncTonsCache[data.item.id].generation === '0'")
            span {{ asyncTonsCache[data.item.id].generation }}
          template(v-else)
            nuxt-link(:to="`/familytree/${data.item.id}`") {{ asyncTonsCache[data.item.id].generation }}
      template(slot="isBreeding" slot-scope="data")
        span(v-if="asyncTonsCache[data.item.id]")
          span {{ asyncTonsCache[data.item.id].isBreeding }}
      template(slot="isReady" slot-scope="data")
        span(v-if="asyncTonsCache[data.item.id]")
          span {{ asyncTonsCache[data.item.id].isReady }}
      template(slot="birthTime" slot-scope="data")
        span(v-if="asyncTonsCache[data.item.id]")
          span {{ $unixtimeFormat(asyncTonsCache[data.item.id].birthTime) }}
      template(slot="owner" slot-scope="data")
        span(v-if="asyncTonsCache[data.item.id]")
          nuxt-link(:to="`/ownership/${asyncTonsCache[data.item.id].owner}`") {{ asyncTonsCache[data.item.id].owner }}
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
            class: 'd-none d-md-table-cell',
            label: 'BirthTime (JST)'
          },
          owner: {
            class: 'd-none d-md-table-cell',
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
