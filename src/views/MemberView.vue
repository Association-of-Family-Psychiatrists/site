<template>
  <section class="member-view">
    <h1 class="page-title animate-fade-slide">Our Members</h1>
    <p class="page-subtitle animate-fade-slide">
      Meet some of the dedicated professionals in our association.
    </p>

    <CardGrid title="Members" class="animate-fade-slide" :cards="memberCards" />
  </section>
</template>

<script setup>
import CardGrid from '@/components/CardGrid.vue'
import { memberCards } from '@/data/memberData.js'
</script>

<style scoped>
.member-view {
  padding: 4rem 2rem;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.page-subtitle {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: var(--color-text);
}

@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-slide {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeSlideIn 0.8s ease forwards;
}
</style>
