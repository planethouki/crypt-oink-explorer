<template lang="pug">
  div.overflow-auto
    b-table(striped hover :items="tons" :fields="fields")
      template(slot="thumb" slot-scope="data")
        img(:src="data.item.imgSrc" style="height: 45px;")
      template(slot="id" slot-scope="data")
        router-link(:to="`/ton/${data.item.tokenId}`") {{ data.item.tokenId }}
      template(slot="owner" slot-scope="data")
        router-link(:to="`/ownership/${data.item.owner}/card/1`") {{ data.item.owner }}
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
  },
};
</script>

<style scoped>
  .card {
    width: 200px;
  }
</style>
