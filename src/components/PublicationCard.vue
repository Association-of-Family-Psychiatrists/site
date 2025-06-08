<template>
  <div class="publication-card">
    <h3 class="title">{{ title }}</h3>
    <p class="authors"><strong>Authors:</strong> {{ authors.join(', ') }}</p>
    <p class="summary">{{ summary }}</p>

    <a :href="url" target="_blank" rel="noopener" class="view-button"> View Publication </a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  authors: String,
  summary: String,
  url: String,
})
</script>

<style scoped>
.publication-card {
  background: var(--color-background-soft);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}

.authors {
  font-size: 0.95rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.summary {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: var(--color-text);
}

.view-button {
  align-self: flex-start;
  background-color: var(--color-accent);
  color: white;
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.view-button:hover {
  background-color: #c65e53;
}
</style>
