<script setup>
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="layout">
    <Header />
    <main class="page-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-content {
  flex-grow: 1;
  padding: 2rem;
}
</style>
