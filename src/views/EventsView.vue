<template>
  <section class="events-view">
    <h1 class="animate-fade-slide">Upcoming Events</h1>
    <div class="events-container">
      <Event v-for="event in eventData" :key="event.id" v-bind="event" />
    </div>
  </section>
</template>

<script setup>
import Event from '@/components/Event.vue'
import { useSEO, useStructuredData } from '@/composables/useSEO.js'
import { pageSeoData } from '@/utils/seo.js'
import { eventData } from '@/data/eventData.js'

// SEO setup
useSEO({
  ...pageSeoData.events,
  path: '/events',
})

// Structured data for events page
useStructuredData('Event', {
  '@type': 'Event',
  name: 'Family Psychiatry Events and Conferences',
  description:
    'Stay updated with upcoming conferences, workshops, and events for family psychiatrists and mental health professionals.',
  organizer: {
    '@type': 'Organization',
    name: 'Association of Family Psychiatrists',
  },
  eventStatus: 'EventScheduled',
  eventAttendanceMode: 'MixedEventAttendanceMode',
})
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

.events-container > * {
  margin-bottom: 2rem;
}

.events-container > *:last-child {
  margin-bottom: 0;
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
