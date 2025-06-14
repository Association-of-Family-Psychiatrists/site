<template>
  <section class="events-view">
    <h1 class="animate-fade-slide">Upcoming Events</h1>
    <Event v-for="event in eventData" :key="event.id" v-bind="event" />
  </section>
</template>

<script setup>
import Event from '@/components/Event.vue'
import { eventData } from '@/data/eventData.js'
</script>

<style scoped>
.events-view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.events-view h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-accent);
  text-align: center;
}

/* Animation */
.animate-fade-slide {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeSlideIn 0.8s ease forwards;
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
</style>
