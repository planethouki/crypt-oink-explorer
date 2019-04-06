<template lang="pug">
  div.overflow-auto
    b-table(striped hover :items="tons" :fields="fields")
      template(slot="thumb" slot-scope="data")
        img(:src="data.item.imgSrc" style="height: 45px;")
      template(slot="id" slot-scope="data")
        router-link(
        v-if="data.value"
        :to="{ name: 'ton', params: { tokenId: data.value } }") {{ data.value }}
      template(slot="seederId" slot-scope="data")
        router-link(
        v-if="data.value && data.value.toString() !== '0'"
        :to="{ name: 'ton', params: { tokenId: data.value } }") {{ data.value }}
        span(v-else) {{ data.value }}
      template(slot="breederId" slot-scope="data")
        router-link(
        v-if="data.value && data.value.toString() !== '0'"
        :to="{ name: 'ton', params: { tokenId: data.value } }") {{ data.value }}
        span(v-else) {{ data.value }}
      template(slot="generation" slot-scope="data")
        router-link(
        v-if="data.value && data.value.toString() !== '0'"
        :to="{ name: 'tree', params: { tokenId: data.item.tokenId } }") {{ data.value }}
        span(v-else) {{ data.value }}
      template(slot="owner" slot-scope="data")
        router-link(
        v-if="data.value"
        :to="{ name: 'ownership', params: { address: data.value } }") {{ data.value }}
        span(v-else) {{ data.value }}
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
    fields: {
      type: Object,
      default() {
        return {
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
        };
      },
    },
  },
  data() {
    return {
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
</style>
