<template lang="pug">
  main.container#main
    h1.display-3.mb-4
      router-link.text-decoration-none(to="/tons") Tons
    .form-inline.float-sm-right
      .form-group.mr-sm-3.mb-2
        input.form-control(name="tokenId" type="number" placeholder="ex.) 1000")
      button.btn.btn-primary.mb-2#getEntity search
    b-pagination(
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    @change="onPageChange")
    b-nav(tabs)
      template(v-for="tab in tabs")
        b-nav-item(@click="tabClick(tab)" :active="currentTab === tab") {{ tab }}
    component(v-bind:is="currentTabComponent" :tons="tons")
</template>

<script>
// @ is an alias to /src
import EntityList from '@/components/EntityList.vue';
import EntityCard from '@/components/EntityCard.vue';

export default {
  name: 'tons',
  components: {
    EntityList, EntityCard,
  },
  props: {
    page: {
      type: Number,
      default() { return 1; },
    },
    type: {
      type: String,
      default() { return 'card'; },
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
    };
  },
  computed: {
    currentTabComponent() {
      return `Entity${this.currentTab}`;
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
      this.$nextTick(function () {
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
          const tons = this.tons.slice();
          tons[index].owner = owner;
          this.tons = tons;
        });
        ton.getEntity.then((entity) => {
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
          tons[index].dna = entity.dna;
          this.tons = tons;
        });
        return true;
      });
    },
    tabClick(event) {
      this.currentTab = event;
      this.$router.push({ name: 'tons', params: { type: event.toLowerCase() } });
    },
    onPageChange(event) {
      this.$router.push({ name: 'tons', params: { page: event } });
    },
  },
};
</script>
