<template lang="pug">
  main.container.position-relative
    .position-absolute(style="top:0;right:0;")
      small {{ lastMod }}
    h1.display-3.mb-4
      router-link.text-decoration-none(to="/ownership") Ownership
    .row
      .col-12.col-sm-6
        p
          strong Address &nbsp;
          span {{ address }}
      .col-12.col-sm-6
        b-input-group
          b-form-input(
          name="inputAddress"
          type="text"
          placeholder="Address"
          v-model="inputAddress")
          b-input-group-append
            b-button(text="Go" variant="primary" @click="goAddress") Go
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
    section#tons
      component(v-bind:is="currentTabComponent" :tons="tons" :fields="fields")
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
import EntityList from '@/components/EntityList.vue';
import EntityCard from '@/components/EntityCard.vue';

export default {
  name: 'ownership',
  components: {
    EntityList, EntityCard,
  },
  props: {
    address: {
      type: String,
      default() { return ''; },
    },
    type: {
      type: String,
      default() { return 'card'; },
    },
    page: {
      type: Number,
      default() { return 1; },
    },
  },
  data() {
    return {
      perPage: 50,
      currentPage: 1,
      allTokensId: [],
      tokensId: [],
      currentTab: 'Card',
      tabs: ['Card', 'List'],
      partTons: [],
      tons: [],
      lastMod: '',
      inputAddress: '',
      fields: {
        thumb: {
          label: '',
          class: 'p-0',
        },
        id: {
          label: 'id',
        },
        generation: {
          label: 'gen',
        },
        birthTime: {
          label: 'birthTime',
        },
        breederId: {
          label: 'breederId',
        },
        seederId: {
          label: 'seederId',
        },
      },
    };
  },
  computed: {
    currentTabComponent() {
      return `Entity${this.currentTab}`;
    },
    rows() {
      return this.allTokensId.length;
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
    address: {
      handler() {
        this.getTokensId();
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
    this.getTokensId();
    this.$nextTick(() => {
      this.currentPage = this.page;
    });
  },
  methods: {
    async getTokensId() {
      this.$axios.get('https://cryptoinkexplorer.blob.core.windows.net/api/v1/block.json').then((result) => {
        this.lastMod = `Last Modified: ${result.data.block}`;
      });
      const tokens = await this.$axios.get(`https://cryptoinkexplorer.blob.core.windows.net/api/v1/ownertotokens/${this.address.toLowerCase()}.json`);
      this.allTokensId = tokens.data.reverse();
      this.$nextTick(() => {
        this.currentPage = this.page;
      });
      this.calcTokensId();
    },
    calcTokensId() {
      const a = (this.page - 1) * this.perPage;
      const z = a + this.perPage;
      this.tokensId = this.allTokensId.slice(a, z);
    },
    updatePartTons() {
      this.partTons = this.tokensId.map(tokenId => ({
        id: tokenId,
        tokenId,
        imgSrc: this.$tonImg(tokenId),
        getEntity: this.$contracts.EntityCore.methods.getEntity(tokenId).call(),
        ownerOf: this.$contracts.EntityCore.methods.ownerOf(tokenId).call(),
      }));
    },
    updateTons() {
      this.tons = this.partTons.map(ton => ({
        id: ton.id,
        tokenId: ton.tokenId,
        imgSrc: ton.imgSrc,
      }));
      this.partTons.map((ton, index) => {
        ton.ownerOf.then((owner) => {
          if (!this.tons[index]) return;
          if (ton.id !== this.tons[index].id) return;
          const tons = this.tons.slice();
          tons[index].owner = owner;
          this.tons = tons;
        });
        ton.getEntity.then((entity) => {
          if (!this.tons[index]) return;
          if (ton.id !== this.tons[index].id) return;
          const tons = this.tons.slice();
          tons[index].isBreeding = entity.isBreeding;
          tons[index].isReady = entity.isReady;
          tons[index].cooldownIndex = entity.cooldownIndex;
          tons[index].nextActionAt = entity.nextActionAt;
          tons[index].matingWithId = entity.matingWithId;
          tons[index].birthTime = entity.birthTime;
          tons[index].breederId = entity.breederId;
          tons[index].seederId = entity.seederId;
          tons[index].generation = entity.generation;
          tons[index].dna = this.$web3.utils.toHex(entity.dna);
          this.tons = tons;
        });
        return true;
      });
    },
    tabClick(tab) {
      this.currentTab = tab;
      this.$store.dispatch('doUpdateType', tab.toLowerCase());
      this.$router.push({ name: 'ownership', params: { type: tab.toLowerCase() } });
    },
    onPageChange(event) {
      this.$router.push({ name: 'ownership', params: { page: event } });
    },
    goAddress() {
      this.$router.push({ name: 'ownership', params: { address: this.inputAddress } });
    },
  },
};
</script>
