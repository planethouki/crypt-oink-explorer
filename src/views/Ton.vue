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
            .col-lg-3.col-xl-6(v-show="ton." + key)
              dl
                dt= key
                dd= "{{ ton." + key + " }}"
          mixin itemLg(key)
            .col-lg-12.col-xl-12(v-show="ton." + key)
              dl
                dt= key
                dd.text-break= "{{ ton." + key + " }}"
          h3.mb-3 Entity
          .row.mb-5
            +itemLg("owner")
            +item("tokenId")
            +item("isBreeding")
            +item("isReady")
            +item("cooldownIndex")
            +item("nextActionAt")
            +item("matingWithId")
            +item("birthTime")
            +item("breederId")
            +item("seederId")
            +item("generation")
            +itemLg("dna")
          h3.mb-3 Auction Sell
          span(v-show="!ton.sellPrice") None
          .row.mb-5
            +itemLg("sellPrice")
            +itemLg("sellSeller")
            +item("sellSstartingPrice")
            +item("sellEndingPrice")
            +item("sellDuration")
            +item("sellStartedAt")
          h3.mb-3 Auction Seed
          span(v-show="!ton.seedPrice") None
          .row.mb-5
            +itemLg("seedPrice")
            +itemLg("seedSeller")
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
        console.log('not in auction sell', e);
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
        console.log('not in auction sell', e);
      });
      this.partTon.getCurrentPriceSeed.then((price) => {
        if (this.partTon.id !== this.ton.id) return;
        const newTon = Object.assign({}, this.ton);
        newTon.seedPrice = price;
        this.ton = newTon;
      }).catch((e) => {
        console.log('not in auction seed', e);
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
        console.log('not in auction sell', e);
      });
    },
    onPageChange(event) {
      this.$router.push({ name: 'ton', params: { tokenId: event } });
    },
  },
};
</script>
