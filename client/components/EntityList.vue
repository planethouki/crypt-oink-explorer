<template>
  <div class="overflow-auto">
    <b-table striped="striped" hover="hover" :items="currentTons" :fields="fields" foot-clone="foot-clone">
      <template v-slot:cell(thumb)="data"><img :src="data.item.imgSrc" style="height: 45px;"/></template>
      <template v-slot:cell(id)="data">
        <nuxt-link :to="`/ton/${data.value}`">{{ data.value }}</nuxt-link>
      </template>
      <template v-slot:cell(generation)="data"><span v-if="asyncTonsCache[data.item.id]">
        <template v-if="asyncTonsCache[data.item.id].generation === '0'"><span>{{ asyncTonsCache[data.item.id].generation }}</span></template>
        <template v-else="v-else">
          <nuxt-link :to="`/familytree/${data.item.id}`">{{ asyncTonsCache[data.item.id].generation }}</nuxt-link>
        </template></span></template>
      <template v-slot:cell(isBreeding)="data"><span v-if="asyncTonsCache[data.item.id]"><span>{{ asyncTonsCache[data.item.id].isBreeding }}</span></span></template>
      <template v-slot:cell(isReady)="data"><span v-if="asyncTonsCache[data.item.id]"><span>{{ asyncTonsCache[data.item.id].isReady }}</span></span></template>
      <template v-slot:cell(birthTime)="data"><span v-if="asyncTonsCache[data.item.id]"><span>{{ $unixtimeFormat(asyncTonsCache[data.item.id].birthTime) }}</span></span></template>
      <template v-slot:cell(owner)="data"><span v-if="asyncTonsCache[data.item.id]">
        <account-link-facade :account="asyncTonsCache[data.item.id].owner"></account-link-facade></span></template>
    </b-table>
  </div>
</template>

<script>
import AccountLinkFacade from '@/components/facade/AccountLinkFacade'

export default {
  name: 'EntityList',
  components: { AccountLinkFacade },
  props: {
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
          { key: 'generation', label: 'Gen' },
          {
            key: 'birthTime',
            class: 'd-none d-md-table-cell',
            label: 'BirthTime (JST)'
          },
          { key: 'owner', class: 'd-none d-md-table-cell', label: 'Owner' }
        ]
      }
    }
  }
}
</script>

<style scoped></style>
