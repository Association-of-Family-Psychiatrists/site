<template>
  <section class="card-grid-section">
    <h2 class="grid-title">{{ title }}</h2>

    <div class="card-grid">
      <Card v-for="(card, index) in cards" :key="index" v-bind="card" />
    </div>
  </section>
</template>

<script setup>
import Card from './Card.vue'

defineProps({
  title: {
    type: String,
    default: 'Featured Events',
  },
  cards: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.card-grid-section {
  padding: 3rem 1rem;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
}

.grid-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-heading);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
</style>
