<template lang="pug">
  div
    b-nav(tabs)
      template(v-for="tab in tabs")
        b-nav-item(@click="currentTab = tab" :active="currentTab === tab") {{ tab }}
    component(v-bind:is="currentTabComponent" :tons="tons")
</template>

<script>
import EntityList from '@/components/EntityList.vue';
import EntityCard from '@/components/EntityCard.vue';

export default {
  name: 'EntityData',
  components: {
    EntityList, EntityCard,
  },
  props: {
    tokensId: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentTab: 'Card',
      tabs: ['Card', 'List'],
      partTons: [],
      resolveTons: [],
      tons: [],
    };
  },
  computed: {
    currentTabComponent() {
      return `Entity${this.currentTab}`;
    },
  },
  mounted() {
    this.updatePartTons();
  },
  watch: {
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
    resolveTons: {
      handler(newVal) {
        this.tons = newVal;
      },
    },
  },
  methods: {
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
      this.resolveTons = this.partTons.map(ton => ({
        id: ton.id,
        tokenId: ton.tokenId,
        imgSrc: ton.imgSrc,
      }));
      this.partTons.map((ton, index) => {
        ton.ownerOf.then((owner) => {
          const tons = this.resolveTons.slice();
          tons[index].owner = owner;
          this.resolveTons = tons;
        });
        ton.getEntity.then((entity) => {
          const tons = this.resolveTons.slice();
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
          this.resolveTons = tons;
        });
        return true;
      });
    },
  },
};
</script>

<style scoped>
  .card {
    width: 200px;
  }
</style>
