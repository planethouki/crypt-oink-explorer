<template>
  <div class="overflow-auto">
    <b-table striped="striped" hover="hover" :items="currentTons" :fields="fields">
      <template v-slot:cell(thumb)="data"><img :src="data.item.imgSrc" style="height: 45px;"/></template>
      <template v-slot:cell(id)="data">
        <nuxt-link :to="`/ton/${data.value}`">{{ data.value }}</nuxt-link>
      </template>
      <template v-slot:cell(price)="data">
        <template v-if="asyncTonsCache[data.item.id]">
          <template v-if="asyncTonsCache[data.item.id][name].shown"><span>{{ asyncTonsCache[data.item.id][name].price }}</span></template>
          <template v-else="v-else"><span>-</span></template>
        </template>
        <template v-else="v-else">
          <b-spinner small="small" type="grow"></b-spinner>
        </template>
      </template>
      <template v-slot:cell(seller)="data">
        <template v-if="asyncTonsCache[data.item.id]">
          <template v-if="asyncTonsCache[data.item.id][name].shown">
            <account-link-facade :account="asyncTonsCache[data.item.id][name].seller"></account-link-facade>
          </template>
          <template v-else="v-else"><span>-</span></template>
        </template>
        <template v-else="v-else">
          <b-spinner small="small" type="grow"></b-spinner>
        </template>
      </template>
    </b-table>
  </div>
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
      type: Array,
      default() {
        return [
          { key: 'thumb', label: '', class: 'p-0' },
          { key: 'id', label: 'Id' },
          { key: 'price', label: 'Price' },
          { key: 'seller', label: 'Seller' }
        ]
      }
    }
  }
}
</script>

<style scoped></style>
