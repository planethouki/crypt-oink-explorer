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
            account-link-facade(:account="asyncTonsCache[data.item.id][name].seller")
          template(v-else)
            span -
</template>

<script>
import AccountLinkFacade from '@/components/facade/AccountLinkFacade'

export default {
  name: 'AuctionList',
  components: { AccountLinkFacade },
  props: {
    name: {
      type: String,
      required: true
    },
    currentTons: {
      type: Array,
      required: true
    },
    asyncTonsCache: {
      type: Object,
      required: true
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
  }
}
</script>

<style scoped></style>
