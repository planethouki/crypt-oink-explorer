<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';

export default {
  name: 'home',
  components: {
    Header,
  },
  created() {
    const totalSupply = this.$contracts.EntityCore.methods.totalSupply().call();
    this.$store.dispatch('doUpdateTotalSpply', totalSupply);
  },
};
</script>

<style lang="scss">
</style>
