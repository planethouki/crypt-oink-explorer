<template lang="pug">
  div
    b-table(striped hover :items="tons" :fields="fields")
      template(slot="thumb" slot-scope="data")
        img(:src="data.item.imgSrc" style="height: 45px;")
</template>

<script>
export default {
  name: 'EntityList',
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
        breederId: {
          label: 'breeder',
        },
        seederId: {
          label: 'seeder',
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
  },
};
</script>

<style scoped>
  .card {
    width: 200px;
  }
</style>
