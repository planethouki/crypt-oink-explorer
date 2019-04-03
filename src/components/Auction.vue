<template lang="pug">
  div
    .form-inline.float-sm-right
      b-input-group
        b-form-input(name="inputPage" type="number" placeholder="Page No." v-model="inputPage")
        b-input-group-append
          b-button(text="Go" variant="primary" @click="goPage") Go
    b-pagination(
    aria-controls="tons"
    limit="10"
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    @change="onPageChange")
    b-nav(tabs)
      template(v-for="tab in tabs")
        b-nav-item(@click="tabClick(tab)" :active="currentTab === tab") {{ tab }}
      li.nav-item
        .px-3.py-2
          .spinner-border.spinner-border-sm(role="status" v-show="!tonsLoaded")
            span.sr-only Loading...
    section#tons.mb-5
      component(v-bind:is="currentTabComponent" :tons="tons")
    b-pagination(
    aria-controls="tons"
    limit="10"
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    @change="onPageChange")
</template>

<script>
// @ is an alias to /src
import AuctionList from '@/components/AuctionList.vue';
import AuctionCard from '@/components/AuctionCard.vue';

export default {
  name: 'auction',
  components: {
    AuctionList, AuctionCard,
  },
  props: {
    name: {
      type: String,
      default() { return ''; },
    },
    page: {
      type: Number,
      default() { return 1; },
    },
    type: {
      type: String,
      default() { return 'card'; },
    },
    contract: {
      type: String,
      default() { return ''; },
    },
  },
  data() {
    return {
      perPage: 50,
      currentPage: 1,
      rows: 0,
      tokensId: [],
      currentTab: 'Card',
      tabs: ['Card', 'List'],
      partTons: [],
      tons: [],
      tonsLoaded: false,
      inputPage: '',
    };
  },
  computed: {
    currentTabComponent() {
      return `Auction${this.currentTab}`;
    },
  },
  watch: {
    page: {
      handler(newVal) {
        if (this.rows === 0) return;
        this.currentPage = newVal;
        this.calcTokensId();
      },
    },
    type: {
      handler(newVal) {
        this.currentTab = newVal === 'card' ? 'Card' : 'List';
      },
    },
    tokensId: {
      handler() {
        this.updatePartTons();
      },
    },
    partTons: {
      handler() {
        this.updateTons();
      },
    },
  },
  mounted() {
    this.currentTab = this.type === 'card' ? 'Card' : 'List';
    this.$store.state.totalSupply.then((x) => {
      this.rows = x;
      this.$nextTick(() => {
        this.currentPage = this.page;
      });
      this.calcTokensId();
    });
  },
  methods: {
    calcTokensId() {
      const fromId = this.rows - this.perPage * (this.currentPage - 1);
      this.tokensId = [];
      const array = [];
      for (let i = 0; i < this.perPage; i += 1) {
        if ((fromId - i) < 1) break;
        array.push(fromId - i);
      }
      this.tokensId = array;
    },
    updatePartTons() {
      this.partTons = this.tokensId.map(tokenId => ({
        id: tokenId,
        tokenId,
        imgSrc: this.$tonImg(tokenId),
        getAuction: this.$contracts[this.contract].methods.getAuction(tokenId).call(),
        getCurrentPrice: this.$contracts[this.contract].methods.getCurrentPrice(tokenId).call(),
      }));
    },
    updateTons() {
      this.tonsLoaded = false;
      this.tons = this.partTons.map(ton => ({
        id: ton.id,
        tokenId: ton.tokenId,
        imgSrc: ton.imgSrc,
      }));
      const allPromise = [];
      this.partTons.map((ton, index) => {
        const promiseCp = ton.getCurrentPrice.then((price) => {
          if (ton.id !== this.tons[index].id) return;
          const tons = this.tons.slice();
          tons[index].price = price;
          this.tons = tons;
        }).catch(() => {
          console.log('not in auction', ton.id);
          if (ton.id !== this.tons[index].id) return;
          const tons = this.tons.slice();
          tons[index].price = '-';
        });
        const promiseAc = ton.getAuction.then((entity) => {
          if (ton.id !== this.tons[index].id) return;
          const tons = this.tons.slice();
          tons[index].seller = entity.seller;
          tons[index].startingPrice = entity.startingPrice;
          tons[index].endingPrice = entity.endingPrice;
          tons[index].duration = entity.duration;
          tons[index].startedAt = entity.startedAt;
          tons[index].shown = true;
          this.tons = tons;
        }).catch(() => {
          console.log('not in auction', ton.id);
          if (ton.id !== this.tons[index].id) return;
          const tons = this.tons.slice();
          tons[index].hidden = true;
          tons[index].seller = '-';
        });
        allPromise.push(promiseCp, promiseAc);
        Promise.all(allPromise).then(() => {
          this.tonsLoaded = true;
        });
        return true;
      });
    },
    tabClick(tab) {
      this.currentTab = tab;
      this.$store.dispatch('doUpdateType', tab.toLowerCase());
      this.$router.push({ name: this.name, params: { type: tab.toLowerCase() } });
    },
    onPageChange(event) {
      this.$router.push({ name: this.name, params: { page: event } });
    },
    goPage() {
      const page = Number(this.inputPage);
      this.$router.push({ name: this.name, params: { page } });
    },
  },
};
</script>
