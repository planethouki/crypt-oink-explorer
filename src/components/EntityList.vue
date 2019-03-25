<template lang="pug">
  div
    b-table(striped hover :items="tons" :fields="fields")
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
