<template lang="pug">
  div.overflow-auto
    b-table(striped hover :items="currentTons" :fields="fields")
      template(slot="thumb" slot-scope="data")
        img(:src="data.item.imgSrc" style="height: 45px;")
      template(slot="id" slot-scope="data")
        nuxt-link(:to="`/ton/${data.value}`") {{ data.value }}
      template(slot="price" slot-scope="data")
        template(v-if="asyncTonsCache[data.item.id]")
          template(v-if="asyncTonsCache[data.item.id][name].shown")
            span {{ $web3.utils.fromWei(asyncTonsCache[data.item.id][name].price.toString()) }}
          template(v-else)
            span -
      template(slot="seller" slot-scope="data")
        template(v-if="asyncTonsCache[data.item.id]")
          template(v-if="asyncTonsCache[data.item.id][name].shown")
            nuxt-link(:to="`/ownership/${asyncTonsCache[data.item.id][name].seller}`") {{ asyncTonsCache[data.item.id][name].seller }}
          template(v-else)
            span -
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AuctionList',
  props: {
    name: {
      type: String,
      default() {
        return ''
      }
    },
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
          price: {
            label: 'Price'
          },
          seller: {
            label: 'Seller'
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
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped></style>
