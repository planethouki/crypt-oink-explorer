<template>
  <div>
    <Header />
    <nuxt />
    <div class="bg-light">
      <b-nav>
        <b-nav-item href="https://github.com/planethouki/crypt-oink-explorer"
          >GitHub</b-nav-item
        >
        <b-nav-item to="/privacy">プライバシーポリシー</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style></style>
