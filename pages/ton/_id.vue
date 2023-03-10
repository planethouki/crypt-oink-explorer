<template>
  <main class="container">
    <h1 class="display-3 mb-4">
      <nuxt-link class="text-decoration-none" to="/ton">Ton</nuxt-link>
    </h1>
    <section class="row">
      <div class="col-12 col-sm-6 order-sm-2">
        <SearchTokenId @click="onClickSearch"></SearchTokenId>
      </div>
      <div class="col-12 col-sm-6 order-sm-1">
        <b-pagination-nav :link-gen="linkGen" :number-of-pages="this.totalSupply" :value="ton.id" limit="1" use-router="use-router"></b-pagination-nav>
      </div>
    </section>
    <section id="ton">
      <b-row>
        <b-col class="text-center" lg="12" xl="6"><img class="w-100" :src="ton.imgSrc" style="max-width:512px;"/></b-col>
        <b-col lg="12" xl="6">
          <h3 class="mb-3">Entity</h3>
          <b-row class="mb-5">
            <b-col lg="12" xl="6">
              <dl>
                <dt>Id</dt>
                <dd>{{ ton.id }}</dd>
              </dl>
            </b-col>
            <template v-if="asyncTonsCache[ton.id]">
              <b-col lg="12" xl="12">
                <dl>
                  <dt>Owner</dt>
                  <dd class="text-break" v-if="asyncTonsCache[ton.id]">
                    <account-link-facade :account="asyncTonsCache[ton.id].owner"></account-link-facade>
                  </dd>
                </dl>
              </b-col>
              <b-col lg="12" xl="6">
                <dl>
                  <dt>isBreeding</dt>
                  <dd v-if="asyncTonsCache[ton.id]">{{ asyncTonsCache[ton.id].isBreeding }}</dd>
                </dl>
              </b-col>
              <b-col lg="12" xl="6">
                <dl>
                  <dt>isReady</dt>
                  <dd v-if="asyncTonsCache[ton.id]">{{ asyncTonsCache[ton.id].isReady }}</dd>
                </dl>
              </b-col>
              <b-col lg="12" xl="6">
                <dl>
                  <dt>cooldownIndex</dt>
                  <dd v-if="asyncTonsCache[ton.id]">{{ asyncTonsCache[ton.id].cooldownIndex }}</dd>
                </dl>
              </b-col>
              <b-col lg="12" xl="6">
                <dl>
                  <dt>nextActionAt</dt>
                  <template v-if="asyncTonsCache[ton.id]">
                    <dd v-if="asyncTonsCache[ton.id].nextActionAt !== '0'">{{ asyncTonsCache[ton.id].nextActionAt }}</dd>
                    <dd v-else="v-else">-</dd>
                  </template>
                </dl>
              </b-col>
              <b-col lg="12" xl="6">
                <dl>
                  <dt>matingWithId</dt>
                  <template v-if="asyncTonsCache[ton.id]">
                    <dd v-if="asyncTonsCache[ton.id].matingWithId !== '0'">
                      <nuxt-link :to="`/ton/${asyncTonsCache[ton.id].matingWithId}`">{{ asyncTonsCache[ton.id].matingWithId }}</nuxt-link>
                    </dd>
                    <dd v-else="v-else">-</dd>
                  </template>
                </dl>
              </b-col>
              <b-col lg="12" xl="6">
                <dl>
                  <dt>birthTime</dt>
                  <dd v-if="asyncTonsCache[ton.id]">{{ $unixtimeFormat(asyncTonsCache[ton.id].birthTime) }}</dd>
                </dl>
              </b-col>
              <b-col lg="12" xl="6">
                <dl>
                  <dt>breederId</dt>
                  <template v-if="asyncTonsCache[ton.id]">
                    <dd v-if="asyncTonsCache[ton.id].breederId !== '0'">
                      <nuxt-link :to="`/ton/${asyncTonsCache[ton.id].breederId}`">{{ asyncTonsCache[ton.id].breederId }}</nuxt-link>
                    </dd>
                    <dd v-else="v-else">-</dd>
                  </template>
                </dl>
              </b-col>
              <b-col lg="12" xl="6">
                <dl>
                  <dt>seederId</dt>
                  <template v-if="asyncTonsCache[ton.id]">
                    <dd v-if="asyncTonsCache[ton.id].seederId !== '0'">
                      <nuxt-link :to="`/ton/${asyncTonsCache[ton.id].seederId}`">{{ asyncTonsCache[ton.id].seederId }}</nuxt-link>
                    </dd>
                    <dd v-else="v-else">-</dd>
                  </template>
                </dl>
              </b-col>
              <b-col lg="12" xl="6">
                <dl>
                  <dt>generation</dt>
                  <template v-if="asyncTonsCache[ton.id]">
                    <dd v-if="asyncTonsCache[ton.id].generation !== '0'">
                      <nuxt-link :to="`/familytree/${ton.id}`">{{ asyncTonsCache[ton.id].generation }}</nuxt-link>
                    </dd>
                    <dd v-else="v-else">-</dd>
                  </template>
                </dl>
              </b-col>
              <b-col lg="12" xl="12">
                <dl>
                  <dt>dna</dt>
                  <template v-if="asyncTonsCache[ton.id]">
                    <dd class="text-break">{{ asyncTonsCache[ton.id].dna }}</dd>
                  </template>
                </dl>
              </b-col>
            </template>
            <template v-else="v-else">
              <div class="spinner-border spinner-border" role="status"><span class="sr-only">Loading...</span></div>
            </template>
          </b-row>
          <h3 class="mb-3">Shop</h3>
          <b-row class="mb-5">
            <template v-if="asyncTonsCache[ton.id]">
              <template v-if="asyncTonsCache[ton.id].sell.shown">
                <b-col lg="12" xl="6">
                  <dl>
                    <dt>Price</dt>
                    <dd>{{ asyncTonsCache[ton.id].sell.price }}</dd>
                  </dl>
                </b-col>
                <b-col lg="12" xl="12">
                  <dl>
                    <dt>Seller</dt>
                    <dd class="text-break" v-if="asyncTonsCache[ton.id]">
                      <account-link-facade :account="asyncTonsCache[ton.id].sell.seller"></account-link-facade>
                    </dd>
                  </dl>
                </b-col>
                <b-col lg="12" xl="6">
                  <dl>
                    <dt>Starting Price</dt>
                    <dd>{{ asyncTonsCache[ton.id].sell.startingPrice }}</dd>
                  </dl>
                </b-col>
                <b-col lg="12" xl="6">
                  <dl>
                    <dt>Ending Price</dt>
                    <dd>{{ asyncTonsCache[ton.id].sell.endingPrice }}</dd>
                  </dl>
                </b-col>
                <b-col lg="12" xl="6">
                  <dl>
                    <dt>Duration</dt>
                    <dd>{{ $secondsFormat(asyncTonsCache[ton.id].sell.duration) }}</dd>
                  </dl>
                </b-col>
                <b-col lg="12" xl="6">
                  <dl>
                    <dt>startedAt</dt>
                    <dd v-if="asyncTonsCache[ton.id]">{{ $unixtimeFormat(asyncTonsCache[ton.id].sell.startedAt) }}</dd>
                  </dl>
                </b-col>
              </template>
              <template v-else="v-else">
                <b-col>None</b-col>
              </template>
            </template>
            <template v-else="v-else">
              <div class="spinner-border spinner-border" role="status"><span class="sr-only">Loading...</span></div>
            </template>
          </b-row>
          <h3 class="mb-3">Seed</h3>
          <b-row class="mb-5">
            <template v-if="asyncTonsCache[ton.id]">
              <template v-if="asyncTonsCache[ton.id].seed.shown">
                <b-col lg="12" xl="6">
                  <dl>
                    <dt>Price</dt>
                    <dd>{{ asyncTonsCache[ton.id].seed.price }}</dd>
                  </dl>
                </b-col>
                <b-col lg="12" xl="12">
                  <dl>
                    <dt>Seller</dt>
                    <dd class="text-break" v-if="asyncTonsCache[ton.id]">
                      <account-link-facade :account="asyncTonsCache[ton.id].seed.seller"></account-link-facade>
                    </dd>
                  </dl>
                </b-col>
                <b-col lg="12" xl="6">
                  <dl>
                    <dt>Starting Price</dt>
                    <dd>{{ asyncTonsCache[ton.id].seed.startingPrice }}</dd>
                  </dl>
                </b-col>
                <b-col lg="12" xl="6">
                  <dl>
                    <dt>Ending Price</dt>
                    <dd>{{ asyncTonsCache[ton.id].seed.endingPrice }}</dd>
                  </dl>
                </b-col>
                <b-col lg="12" xl="6">
                  <dl>
                    <dt>Duration</dt>
                    <dd>{{ $secondsFormat(asyncTonsCache[ton.id].seed.duration) }}</dd>
                  </dl>
                </b-col>
                <b-col lg="12" xl="6">
                  <dl>
                    <dt>startedAt</dt>
                    <dd v-if="asyncTonsCache[ton.id]">{{ $unixtimeFormat(asyncTonsCache[ton.id].seed.startedAt) }}</dd>
                  </dl>
                </b-col>
              </template>
              <template v-else="v-else">
                <b-col>None</b-col>
              </template>
            </template>
            <template v-else="v-else">
              <div class="spinner-border spinner-border" role="status"><span class="sr-only">Loading...</span></div>
            </template>
          </b-row>
        </b-col>
      </b-row>
    </section>
  </main>
</template>

<script>
import SearchTokenId from '@/components/SearchTokenId.vue'
import AccountLinkFacade from '@/components/facade/AccountLinkFacade'
import { mapGetters } from 'vuex'

export default {
  name: 'Ton',
  components: { AccountLinkFacade, SearchTokenId },
  computed: {
    ...mapGetters('tons', ['currentTons', 'asyncTonsCache']),
    ...mapGetters(['totalSupply']),
    ton() {
      return this.currentTons[0]
    }
  },
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
  methods: {
    linkGen(pageNum) {
      return {
        name: 'ton-id',
        params: { id: pageNum }
      }
    },
    onClickSearch(tokenId) {
      this.$router.push({ name: 'ton-id', params: { id: tokenId } })
    }
  }
}
</script>
