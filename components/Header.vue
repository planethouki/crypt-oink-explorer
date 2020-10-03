<template lang="pug">
  b-navbar(toggleable="md" type="light" variant="light")
    b-navbar-brand
      nuxt-link(to="/") Crypt-Oink-Explorer
    b-navbar-toggle(target="navbarSupportedContent")
    b-collapse#navbarSupportedContent(is-nav)
      b-navbar-nav
        b-nav-item
          nuxt-link(:to="toTons") Tons
        b-nav-item
          nuxt-link(:to="toShop") Shop
        b-nav-item
          nuxt-link(:to="toBreed") Breed
        b-nav-item
          nuxt-link(to="/ton") Detail
        b-nav-item
          nuxt-link(to="/familytree") Tree

</template>

<script>
export default {
  name: 'Header',
  computed: {
    toTons() {
      return `/tons/1/${this.$store.state.type}`
    },
    toShop() {
      return `/shop/1/${this.$store.state.type}`
    },
    toBreed() {
      return `/breed/1/${this.$store.state.type}`
    }
  }
}
</script>

<style scoped></style>
