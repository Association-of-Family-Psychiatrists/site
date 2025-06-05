<!-- src/components/InformationSection.vue -->
<template>
  <section class="info-section">
    <h2 class="heading">{{ heading }}</h2>
    <h3 class="subheading" v-if="subheading">{{ subheading }}</h3>
    <p class="description">{{ description }}</p>
    <RouterLink :to="link" class="read-more">Read More</RouterLink>
  </section>
</template>

<script setup>
defineProps({
  heading: String,
  subheading: String,
  description: String,
  link: String,
})
</script>

<style scoped>
.info-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--vt-c-white);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.heading {
  font-size: 1.75rem;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
}

.subheading {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.description {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.read-more {
  color: var(--color-accent);
  font-weight: bold;
  text-decoration: underline;
}
</style>
