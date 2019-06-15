<template lang="pug">
  div.overflow-auto
    b-table(striped hover :items="tons" :fields="fields")
      template(slot="thumb" slot-scope="data")
        img(:src="data.item.imgSrc" style="height: 45px;")
      template(slot="id" slot-scope="data")
        nuxt-link(
        v-if="data.value"
        :to="{ name: 'ton', params: { tokenId: data.value } }") {{ data.value }}
      template(slot="seller" slot-scope="data")
        nuxt-link(
        v-if="data.value"
        :to="{ name: 'ownership', params: { address: data.value } }") {{ data.value }}
</template>

<script>
export default {
  name: 'AuctionList',
  props: {
    tons: {
      type: Array,
      default() {
        return []
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
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped></style>
