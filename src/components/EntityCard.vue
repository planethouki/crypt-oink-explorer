<template lang="pug">
  .d-flex.flex-wrap
    template(v-for="ton in tons")
      .card(:key="ton.id" @click="showModal(ton)")
        .p-3.position-absolute {{ ton.tokenId }}
        img.w-100(:src="ton.imgSrc")
    EntityModal(:ton="ton" @emitHiddenModal="hiddenModal")
</template>

<script>
import EntityModal from '@/components/EntityModal.vue';

export default {
  name: 'EntityCard',
  components: {
    EntityModal,
  },
  props: {
    tons: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      ton: {},
    };
  },
  mounted() {
  },
  watch: {
  },
  methods: {
    showModal(ton) {
      this.ton = ton;
    },
    hiddenModal() {
      this.ton = {};
    },
  },
};
</script>

<style scoped>
  .card {
    width: 200px;
    height: 230px;
  }
</style>
