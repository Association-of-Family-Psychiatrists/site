<template>
  <section class="placeholder">
    <div class="content">
      <h1>🚧 Page Under Construction</h1>
      <p>We're working hard to bring this page to life. Please check back soon!</p>
      <p class="path">
        Attempted path: <code>{{ route.path }}</code>
      </p>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  text-align: center;
  background-color: var(--vt-c-white);
  padding: 2rem;
}

.content {
  max-width: 600px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-accent);
}

p {
  font-size: 1.25rem;
  color: var(--vt-c-black-soft);
}

.path {
  margin-top: 1.5rem;
  font-size: 1rem;
  color: gray;
}
</style>
