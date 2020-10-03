<template lang="pug">
  main.container
    h1.display-3.mb-4
      nuxt-link.text-decoration-none(to="/ton") Ton
    section.row
      .col-12.col-sm-6.order-sm-2
        SearchTokenId(:routeName="'ton-id'")
      .col-12.col-sm-6.order-sm-1
        b-pagination-nav(
          :link-gen="linkGen"
          :number-of-pages="this.totalSupply"
          :value="ton.id"
          limit="1"
          use-router)
    section#ton
      b-row
        b-col(lg="12" xl="6").text-center
          img.w-100(:src="ton.imgSrc" style="max-width:512px;")
        b-col(lg="12" xl="6")
          h3.mb-3 Entity
          b-row.mb-5
            b-col(lg="12" xl="6")
              dl
                dt Id
                dd {{ ton.id }}
            template(v-if="asyncTonsCache[ton.id]")
              b-col(lg="12" xl="12")
                dl
                  dt Owner
                  dd(v-if="asyncTonsCache[ton.id]").text-break
                    account-link-facade(:account="asyncTonsCache[ton.id].owner")
              b-col(lg="12" xl="6")
                dl
                  dt isBreeding
                  dd(v-if="asyncTonsCache[ton.id]") {{ asyncTonsCache[ton.id].isBreeding }}
              b-col(lg="12" xl="6")
                dl
                  dt isReady
                  dd(v-if="asyncTonsCache[ton.id]") {{ asyncTonsCache[ton.id].isReady }}
              b-col(lg="12" xl="6")
                dl
                  dt cooldownIndex
                  dd(v-if="asyncTonsCache[ton.id]") {{ asyncTonsCache[ton.id].cooldownIndex }}
              b-col(lg="12" xl="6")
                dl
                  dt nextActionAt
                  template(v-if="asyncTonsCache[ton.id]")
                    dd(v-if="asyncTonsCache[ton.id].nextActionAt !== '0'") {{ asyncTonsCache[ton.id].nextActionAt }}
                    dd(v-else) -
              b-col(lg="12" xl="6")
                dl
                  dt matingWithId
                  template(v-if="asyncTonsCache[ton.id]")
                    dd(v-if="asyncTonsCache[ton.id].matingWithId !== '0'")
                      nuxt-link(:to="`/ton/${asyncTonsCache[ton.id].matingWithId}`") {{ asyncTonsCache[ton.id].matingWithId }}
                    dd(v-else) -
              b-col(lg="12" xl="6")
                dl
                  dt birthTime
                  dd(v-if="asyncTonsCache[ton.id]") {{ $unixtimeFormat(asyncTonsCache[ton.id].birthTime) }}
              b-col(lg="12" xl="6")
                dl
                  dt breederId
                  template(v-if="asyncTonsCache[ton.id]")
                    dd(v-if="asyncTonsCache[ton.id].breederId !== '0'")
                      nuxt-link(:to="`/ton/${asyncTonsCache[ton.id].breederId}`") {{ asyncTonsCache[ton.id].breederId }}
                    dd(v-else) -
              b-col(lg="12" xl="6")
                dl
                  dt seederId
                  template(v-if="asyncTonsCache[ton.id]")
                    dd(v-if="asyncTonsCache[ton.id].seederId !== '0'")
                      nuxt-link(:to="`/ton/${asyncTonsCache[ton.id].seederId}`") {{ asyncTonsCache[ton.id].seederId }}
                    dd(v-else) -
              b-col(lg="12" xl="6")
                dl
                  dt generation
                  template(v-if="asyncTonsCache[ton.id]")
                    dd(v-if="asyncTonsCache[ton.id].generation !== '0'")
                      nuxt-link(:to="`/familytree/${ton.id}`") {{ asyncTonsCache[ton.id].generation }}
                    dd(v-else) -
              b-col(lg="12" xl="12")
                dl
                  dt dna
                  template(v-if="asyncTonsCache[ton.id]")
                    dd.text-break {{ asyncTonsCache[ton.id].dna }}
            template(v-else)
              .spinner-border.spinner-border(role="status")
                span.sr-only Loading...
          h3.mb-3 Shop
          b-row.mb-5
            template(v-if="asyncTonsCache[ton.id]")
              template(v-if="asyncTonsCache[ton.id].sell.shown")
                b-col(lg="12" xl="6")
                  dl
                    dt Price
                    dd {{ asyncTonsCache[ton.id].sell.price }}
                b-col(lg="12" xl="12")
                  dl
                    dt Seller
                    dd(v-if="asyncTonsCache[ton.id]").text-break
                      account-link-facade(:account="asyncTonsCache[ton.id].sell.seller")
                b-col(lg="12" xl="6")
                  dl
                    dt Starting Price
                    dd {{ asyncTonsCache[ton.id].sell.startingPrice }}
                b-col(lg="12" xl="6")
                  dl
                    dt Ending Price
                    dd {{ asyncTonsCache[ton.id].sell.endingPrice }}
                b-col(lg="12" xl="6")
                  dl
                    dt Duration
                    dd {{ $secondsFormat(asyncTonsCache[ton.id].sell.duration) }}
                b-col(lg="12" xl="6")
                  dl
                    dt startedAt
                    dd(v-if="asyncTonsCache[ton.id]") {{ $unixtimeFormat(asyncTonsCache[ton.id].sell.startedAt) }}
              template(v-else)
                b-col None
            template(v-else)
              .spinner-border.spinner-border(role="status")
                span.sr-only Loading...
          h3.mb-3 Seed
          b-row.mb-5
            template(v-if="asyncTonsCache[ton.id]")
              template(v-if="asyncTonsCache[ton.id].seed.shown")
                b-col(lg="12" xl="6")
                  dl
                    dt Price
                    dd {{ asyncTonsCache[ton.id].seed.price }}
                b-col(lg="12" xl="12")
                  dl
                    dt Seller
                    dd(v-if="asyncTonsCache[ton.id]").text-break
                      account-link-facade(:account="asyncTonsCache[ton.id].seed.seller")
                b-col(lg="12" xl="6")
                  dl
                    dt Starting Price
                    dd {{ asyncTonsCache[ton.id].seed.startingPrice }}
                b-col(lg="12" xl="6")
                  dl
                    dt Ending Price
                    dd {{ asyncTonsCache[ton.id].seed.endingPrice }}
                b-col(lg="12" xl="6")
                  dl
                    dt Duration
                    dd {{ $secondsFormat(asyncTonsCache[ton.id].seed.duration) }}
                b-col(lg="12" xl="6")
                  dl
                    dt startedAt
                    dd(v-if="asyncTonsCache[ton.id]") {{ $unixtimeFormat(asyncTonsCache[ton.id].seed.startedAt) }}
              template(v-else)
                b-col None
            template(v-else)
              .spinner-border.spinner-border(role="status")
                span.sr-only Loading...

</template>

<script>
import SearchTokenId from '@/components/SearchTokenId.vue'
import AccountLinkFacade from '@/components/facade/AccountLinkFacade'
import { mapGetters } from 'vuex'

export default {
  name: 'Ton',
  components: { AccountLinkFacade, SearchTokenId },
  async asyncData({ params, store, redirect }) {
    await store.dispatch('doUpdateTotalSupplyIfNotSet')
    if (params.id) {
      store.dispatch('tons/updateTonsFromTokenIds', {
        tokenIds: [params.id]
      })
    } else {
      redirect(`/ton/${store.getters.totalSupply}`)
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('tons', ['currentTons', 'asyncTonsCache']),
    ...mapGetters(['totalSupply']),
    ton() {
      return this.currentTons[0]
    }
  },
  watch: {},
  mounted() {},
  methods: {
    linkGen(pageNum) {
      return {
        name: 'ton-id',
        params: { id: pageNum }
      }
    }
  }
}
</script>
