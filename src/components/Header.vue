<template lang="pug">
  b-navbar(toggleable="md" type="light" variant="light")
    b-navbar-brand
      router-link(to="/") Crypt-Oink-Explorer
    b-navbar-toggle(target="navbarSupportedContent")
    b-collapse#navbarSupportedContent(is-nav)
      b-navbar-nav
        b-nav-item
          router-link(to="/tons") All
        b-nav-item
          router-link(to="/shop") Shop
        b-nav-item
          router-link(to="/breed") Breed
        b-nav-item-dropdown(text="Detail")
          b-dropdown-item
            router-link(to="/ton") Detail
          b-dropdown-item
            router-link(to="/familytree") Tree
        b-nav-item-dropdown(text="Other")
          b-dropdown-item
            router-link(to="/ranking") Ranking
          b-dropdown-item
            router-link(to="/ownership") Ownership
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
</style>
