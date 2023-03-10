<template>
  <b-navbar toggleable="md" type="light" variant="light">
    <b-navbar-brand>
      <nuxt-link to="/">Crypt-Oink-Explorer</nuxt-link>
    </b-navbar-brand>
    <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>
    <b-collapse id="navbarSupportedContent" is-nav="is-nav">
      <b-navbar-nav>
        <b-nav-item>
          <nuxt-link :to="toTons">Tons</nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <nuxt-link :to="toShop">Shop</nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <nuxt-link :to="toBreed">Breed</nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <nuxt-link to="/ton">Detail</nuxt-link>
        </b-nav-item>
        <b-nav-item>
          <nuxt-link to="/familytree">Tree</nuxt-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
