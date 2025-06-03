<template>
  <section class="stats-banner">
    <div
      v-for="(stat, index) in stats"
      :key="index"
      class="stat-block"
      :style="{ animationDelay: `${index * 0.2}s` }"
    >
      <div class="stat-value">{{ stat.value }}</div>
      <div class="stat-label">{{ stat.label }}</div>
      <div class="stat-desc">{{ stat.description }}</div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  stats: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.stats-banner {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  background-color: var(--vt-c-black-soft);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.stat-block {
  flex: 1 1 200px;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-value {
  font-size: 4.5rem;
  font-weight: bold;
}

.stat-label {
  font-size: 1.5rem;
  font-weight: bold;
}

.stat-desc {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-top: 0.5rem;
  padding: 0 5rem;
}

/* Responsive spacing */
@media (max-width: 768px) {
  .stat-desc {
    padding: 0 1.5rem;
  }
}
</style>
