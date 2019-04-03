<template lang="pug">
  b-navbar(toggleable="md" type="light" variant="light")
    b-navbar-brand
      router-link(to="/") Crypt-Oink-Explorer
    b-navbar-toggle(target="navbarSupportedContent")
    b-collapse#navbarSupportedContent(is-nav)
      b-navbar-nav
        b-nav-item
          router-link(:to="toTons") All
        b-nav-item
          router-link(to="/ton") Detail
        b-nav-item
          router-link(:to="toOwner") Ownership
        b-nav-item-dropdown(text="Other")
          b-dropdown-item
            router-link(to="/ranking") Ranking
          b-dropdown-item
            router-link(to="/familytree") Tree
          b-dropdown-item
            router-link(:to="toShop") Shop
          b-dropdown-item
            router-link(:to="toBreed") Breed
</template>

<script>
export default {
  name: 'Header',
  computed: {
    toTons() {
      return `/tons/${this.$store.state.type}/1`;
    },
    toShop() {
      return `/shop/${this.$store.state.type}/1`;
    },
    toBreed() {
      return `/breed/${this.$store.state.type}/1`;
    },
    toOwner() {
      return `/ownership/0xa2156f24711a631e92e65dc114cf172065ddd49b/${this.$store.state.type}/1`;
    },
  },
};
</script>

<style scoped>
</style>
