<script setup>
import Header from '@components/Header.vue'
import Footer from '@components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="layout">
    <Header />
    <main class="page-content">
      <RouterView />
    </main>
  </div>
  <Footer />
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
}

.page-content {
  width: 100%
}
</style>

