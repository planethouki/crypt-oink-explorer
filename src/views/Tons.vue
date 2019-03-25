<template lang="pug">
  main.container#main
    h1.display-3.mb-4
      router-link.text-decoration-none(to="/tons") Tons
    .form-inline.float-sm-right
      .form-group.mr-sm-3.mb-2
        input.form-control(name="tokenId" type="number" placeholder="ex.) 1000")
      button.btn.btn-primary.mb-2#getEntity search
    #topPagination.mb-2
    .row.no-gutters#cardEntity.mb-2
    #dataEntity.mb-2
    #bottomPagination.mb-2
    b-pagination(v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="tonCard" @input="input")
    EntityData(:tokensId="tokensId")
</template>

<script>
// @ is an alias to /src
import EntityData from '@/components/EntityData.vue';

function initialTokensId(perPage) {
  const array = [];
  for (let i = 1; i <= perPage; i += 1) {
    array.push(i);
  }
  return array;
}

export default {
  name: 'tons',
  components: {
    EntityData,
  },
  data() {
    return {
      currentPage: 1,
      rows: 50000,
      perPage: 50,
      tokensId: initialTokensId(50),
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
    input(event) {
      console.log(event);
      const currentPage = event;
      const fromId = this.perPage * (currentPage - 1) + 1;
      const toId = this.perPage * currentPage;
      this.tokensId = [];
      const tons = [];
      for (let i = fromId; i <= toId; i += 1) {
        tons.push(i);
      }
      this.tokensId = tons;
    },
  },
};
</script>
