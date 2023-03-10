<template>
  <div>
    <Header />
    <main class="container-fluid">
      <nuxt />
    </main>
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
