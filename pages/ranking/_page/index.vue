<template lang="pug">
  div.overflow-auto
    b-table#rk-table(
      striped hover
      :per-page="perPage"
      :current-page="page"
      :items="items"
      :fields="fields")
      template(slot="owner" slot-scope="data")
        nuxt-link(
          :to="{ name: 'ownership-address-page-type', params: { address: data.value, type: type, page: 1 } }"
        ) {{ data.value }}
      template(slot="bar" slot-scope="data")
        .d-flex.align-items-center
          .progress.flex-fill
            .progress-bar(
              :style="'width: ' + data.value + '%;'"
              role="progressbar"
              :aria-valuenow="data.value"
              aria-valuemin="0"
              aria-valuemax="100")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  data() {
    return {
      fields: {
        order: {
          label: 'Order'
        },
        owner: {
          label: 'Owner'
        },
        count: {
          label: 'Balance'
        },
        bar: {
          label: 'Graph'
        }
      }
    }
  },
  computed: {
    ...mapGetters('ranking', {
      items: 'ranking'
    }),
    ...mapGetters(['perPage', 'type'])
  },
  asyncData({ params }) {
    const page = params.page || 1
    return {
      page
    }
  }
}
</script>

<style scoped></style>
