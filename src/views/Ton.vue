<template lang="pug">
  main.container
    h1.display-3.mb-4
      router-link.text-decoration-none(to="/ton/0") Ton
    section.row
      .col-12.col-sm-6.order-sm-2
        SearchTokenId(:routeName="'ton'")
      .col-12.col-sm-6.order-sm-1
        b-pagination(
        aria-controls="tons"
        limit="1"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        @change="onPageChange")
    section#ton
      .row
        .col-lg-12.col-xl-6.text-center
          img.w-100(:src="ton.imgSrc" style="max-width:512px;")
        .col-lg-12.col-xl-6
          mixin item(key)
            .col-lg-3.col-xl-6(v-show=`ton.${key}`)
              dl
                dt= key
                dd= "{{ ton." + key + " }}"
          mixin itemLg(key)
            .col-lg-12.col-xl-12(v-show=`ton.${key}`)
              dl
                dt= key
                dd.text-break= "{{ ton." + key + " }}"
          mixin itemAddress(key, to)
            .col-lg-12.col-xl-12(v-if=`ton.${key}`)
              dl
                dt= key
                dd.text-break
                  router-link(:to=to)= "{{ ton." + key + " }}"
          mixin itemTokenId(key, to)
            .col-lg-3.col-xl-6(v-if=`ton.${key}`)
              dl
                dt= key
                dd.text-break
                  router-link(:to=to v-if=`ton.${key} !== '0'`)= "{{ ton." + key + " }}"
                  span(v-if=`ton.${key} === '0'`)= "{{ ton." + key + " }}"
          mixin itemGen(key)
            .col-lg-3.col-xl-6(v-if=`ton.${key}`)
              dl
                dt= key
                dd.text-break
                  router-link(
                  :to="{ name: 'tree', params: { address: ton.generation } }"
                  v-if="ton.generation !== '0'") {{ ton.generation }}
                  span(v-if="ton.generation === '0'") {{ ton.generation }}
          h3.mb-3 Entity
          .row.mb-5
            +itemAddress(
            "owner",
            "{ name: 'ownership', params: { address: ton.owner, type: type, page: 1 } }")
            +item("tokenId")
            +item("isBreeding")
            +item("isReady")
            +item("cooldownIndex")
            +item("nextActionAt")
            +itemTokenId("matingWithId", "{ name: 'ton', params: { tokenId: ton.matingWithId } }")
            +item("birthTime")
            +itemTokenId("breederId", "{ name: 'ton', params: { tokenId: ton.breederId } }")
            +itemTokenId("seederId", "{ name: 'ton', params: { tokenId: ton.seederId } }")
            +itemGen("generation")
            +itemLg("dna")
          h3.mb-3 Auction Sell
          span(v-show="!ton.sellPrice") None
          .row.mb-5
            +itemLg("sellPrice")
            +itemAddress(
            "sellSeller",
            "{ name: 'ownership', params: { address: ton.sellSeller, type: type, page: 1 } }")
            +item("sellSstartingPrice")
            +item("sellEndingPrice")
            +item("sellDuration")
            +item("sellStartedAt")
          h3.mb-3 Auction Seed
          span(v-show="!ton.seedPrice") None
          .row.mb-5
            +itemLg("seedPrice")
            +itemAddress(
            "seedSeller",
            "{ name: 'ownership', params: { address: ton.seedSeller, type: type, page: 1 } }")
            +item("seedSstartingPrice")
            +item("seedEndingPrice")
            +item("seedDuration")
            +item("seedStartedAt")
</template>

<script>
// @ is an alias to /src
import SearchTokenId from '@/components/SearchTokenId.vue';

export default {
  name: 'ton',
  components: { SearchTokenId },
  props: {
    tokenId: {
      type: Number,
      default() { return 0; },
    },
  },
  data() {
    return {
      currentPage: 1,
      perPage: 1,
      rows: 0,
      partTon: {},
      ton: {},
      tonField: ['tokenId'],
    };
  },
  computed: {
    type() {
      return this.$store.state.type;
    },
  },
  watch: {
    tokenId: {
      handler() {
        this.updatePartTon();
        this.$nextTick(() => {
          this.updatePartTon();
        });
      },
    },
    partTon: {
      handler() {
        this.updateTon();
      },
    },
  },
  mounted() {
    this.$store.state.totalSupply.then((x) => {
      this.rows = x;
      this.$nextTick(() => {
        this.updatePartTon();
      });
    });
  },
  methods: {
    updatePartTon() {
      if (this.rows === 0) return;
      const tokenId = this.tokenId === 0 ? this.rows : this.tokenId;
      this.currentPage = tokenId;
      this.partTon = {
        id: tokenId,
        tokenId,
        imgSrc: this.$tonImg(tokenId),
        getEntity: this.$contracts.EntityCore.methods.getEntity(tokenId).call(),
        ownerOf: this.$contracts.EntityCore.methods.ownerOf(tokenId).call(),
        getAuctionSell: this.$contracts.AuctionSell.methods.getAuction(tokenId).call(),
        getCurrentPriceSell: this.$contracts.AuctionSell.methods.getCurrentPrice(tokenId).call(),
        getAuctionSeed: this.$contracts.AuctionSeed.methods.getAuction(tokenId).call(),
        getCurrentPriceSeed: this.$contracts.AuctionSeed.methods.getCurrentPrice(tokenId).call(),
      };
    },
    updateTon() {
      if (Object.keys(this.partTon).length === 0) return;
      this.ton = {
        id: this.partTon.id,
        tokenId: this.partTon.tokenId,
        imgSrc: this.partTon.imgSrc,
      };
      this.partTon.ownerOf.then((owner) => {
        if (this.partTon.id !== this.ton.id) return;
        const newTon = Object.assign({}, this.ton);
        newTon.owner = owner;
        this.ton = newTon;
      });
      this.partTon.getEntity.then((entity) => {
        if (this.partTon.id !== this.ton.id) return;
        const newTon = Object.assign({}, this.ton);
        newTon.isBreeding = entity.isBreeding;
        newTon.isReady = entity.isReady;
        newTon.cooldownIndex = entity.cooldownIndex;
        newTon.nextActionAt = entity.nextActionAt;
        newTon.matingWithId = entity.matingWithId;
        newTon.birthTime = entity.birthTime;
        newTon.breederId = entity.breederId;
        newTon.seederId = entity.seederId;
        newTon.generation = entity.generation;
        newTon.dna = this.$web3.utils.toHex(entity.dna);
        this.ton = newTon;
      });
      this.partTon.getCurrentPriceSell.then((price) => {
        if (this.partTon.id !== this.ton.id) return;
        const newTon = Object.assign({}, this.ton);
        newTon.sellPrice = price;
        this.ton = newTon;
      }).catch((e) => {
        console.log('not in auction sell', this.partTon.id, ':', e);
      });
      this.partTon.getAuctionSell.then((auction) => {
        if (this.partTon.id !== this.ton.id) return;
        const newTon = Object.assign({}, this.ton);
        newTon.sellSeller = auction.seller;
        newTon.sellSstartingPrice = auction.startingPrice;
        newTon.sellEndingPrice = auction.endingPrice;
        newTon.sellDuration = auction.duration;
        newTon.sellStartedAt = auction.startedAt;
        this.ton = newTon;
      }).catch((e) => {
        console.log('not in auction sell', this.partTon.id, ':', e);
      });
      this.partTon.getCurrentPriceSeed.then((price) => {
        if (this.partTon.id !== this.ton.id) return;
        const newTon = Object.assign({}, this.ton);
        newTon.seedPrice = price;
        this.ton = newTon;
      }).catch((e) => {
        console.log('not in auction seed', this.partTon.id, ':', e);
      });
      this.partTon.getAuctionSeed.then((auction) => {
        if (this.partTon.id !== this.ton.id) return;
        const newTon = Object.assign({}, this.ton);
        newTon.seedSeller = auction.seller;
        newTon.seedSstartingPrice = auction.startingPrice;
        newTon.seedEndingPrice = auction.endingPrice;
        newTon.seedDuration = auction.duration;
        newTon.seedStartedAt = auction.startedAt;
        this.ton = newTon;
      }).catch((e) => {
        console.log('not in auction seed', this.partTon.id, ':', e);
      });
    },
    onPageChange(event) {
      this.$router.push({ name: 'ton', params: { tokenId: event } });
    },
  },
};
</script>
