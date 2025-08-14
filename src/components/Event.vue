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

      <p class="event-description" v-html="parsedDescription"></p>

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
          <li v-for="(item, index) in parsedSchedule" :key="index" class="schedule-item">
            <span class="schedule-time">{{ item.time }}</span>
            <span class="schedule-title" v-html="item.parsedTitle"></span>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { marked } from 'marked'

const props = defineProps({
  id: String,
  title: String,
  date: String,
  time: String,
  location: String,
  description: String,
  image: String,
  rsvpLink: String,
  link: String,
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
  const raw = props.date?.trim()
  if (!raw) return ''

  // Check if input includes a day (e.g., 2026-05-01 or May 1, 2026)
  const hasDay = /\b\d{1,2}\b/.test(raw)

  const d = new Date(raw)
  if (isNaN(d.getTime())) return raw // fallback to raw if invalid

  const options = hasDay
    ? { year: 'numeric', month: 'long', day: 'numeric' }
    : { year: 'numeric', month: 'long' }

  return d.toLocaleDateString(undefined, options)
})

const parsedDescription = computed(() => {
  return props.description ? marked.parseInline(props.description) : ''
})

const parsedSchedule = computed(() => {
  return props.schedule.map((item) => ({
    ...item,
    parsedTitle: marked.parseInline(item.title || ''),
  }))
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

.event-description a,
.schedule-title a {
  color: var(--color-accent);
  text-decoration: underline;
  font-weight: 500;
}

.event-description a:hover,
.schedule-title a:hover {
  color: var(--vt-c-indigo);
  text-decoration: none;
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
  align-items: flex-start;
  margin-bottom: 0.75rem;
  gap: 1rem;
}

.schedule-time {
  font-weight: bold;
  min-width: 6rem;
  flex-shrink: 0;
  color: var(--color-text);
  line-height: 1.4;
}

.schedule-title {
  color: var(--color-text);
  flex: 1;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>
