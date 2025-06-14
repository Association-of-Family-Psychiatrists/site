<!-- src/components/Event.vue -->
<template>
  <article :id="id" class="event-card animate-fade-slide" v-motion="fadeSlide">
    <!-- Optional image -->
    <img v-if="image" :src="image" :alt="title" class="event-image" />

    <div class="event-content">
      <h2 class="event-title">{{ title }}</h2>

      <!-- If time is provided, show both date + time -->
      <p class="event-datetime">
        {{ formattedDate }}<span v-if="time"> • {{ time }}</span>
      </p>

      <p v-if="location" class="event-location">{{ location }}</p>

      <p class="event-description">{{ description }}</p>

      <a
        v-if="rsvpLink || link"
        :href="rsvpLink || link"
        target="_blank"
        rel="noopener"
        class="event-button"
      >
        {{ linkLabel }}
      </a>

      <!-- Optional Schedule -->
      <div v-if="schedule && schedule.length" class="schedule">
        <h3>Event Schedule</h3>
        <ul>
          <li v-for="(item, index) in schedule" :key="index" class="schedule-item">
            <span class="schedule-time">{{ item.time }}</span>
            <span class="schedule-title">{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: String,
  title: String,
  date: String,
  time: String,
  location: String,
  description: String,
  image: String, // optional
  rsvpLink: String,
  link: String, // optional fallback for ConferenceEvent
  linkLabel: {
    type: String,
    default: 'RSVP / Access',
  },
  schedule: {
    type: Array,
    default: () => [],
  },
})

const formattedDate = computed(() => {
  const d = new Date(props.date)
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
})

const fadeSlide = {
  initial: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}
</script>

<style scoped>
.event-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.event-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center 20%;
}

.event-content {
  padding: 1.5rem;
}

.event-title {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: var(--color-accent);
}

.event-datetime,
.event-location,
.event-description {
  margin: 0.25rem 0;
  font-size: 1rem;
  color: #333;
}

.event-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-accent);
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.event-button:hover {
  background-color: #c65e53;
}

/* Optional Schedule */
.schedule h3 {
  font-size: 1.25rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: var(--color-heading);
}

.schedule-item {
  display: flex;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.schedule-time {
  font-weight: bold;
  width: 6rem;
  color: var(--color-text);
}

.schedule-title {
  color: var(--color-text);
}
</style>
