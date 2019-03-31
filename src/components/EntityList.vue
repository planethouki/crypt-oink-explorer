<template lang="pug">
  div.overflow-auto
    b-table(striped hover :items="tons" :fields="fields" @row-clicked="showModal")
      template(slot="thumb" slot-scope="data")
        img(:src="data.item.imgSrc" style="height: 45px;")
    EntityModal(:ton="ton" @emitHiddenModal="hiddenModal")
</template>

<script>
import EntityModal from '@/components/EntityModal.vue';

export default {
  name: 'EntityList',
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
        owner: {
          label: 'owner',
        },
      },
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
  }
</style>
