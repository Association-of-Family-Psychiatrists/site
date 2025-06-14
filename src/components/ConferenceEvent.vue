<!-- src/components/ConferenceEvent.vue -->
<template>
  <section :id="id" class="conference-event animate-fade-slide">
    <h2 class="conference-title">{{ title }}</h2>
    <p class="conference-datetime">{{ date }} &bullet; {{ time }}</p>
    <p class="conference-description">{{ description }}</p>

    <a :href="link" target="_blank" rel="noopener" class="cta-button">
      {{ linkLabel }}
    </a>

    <div class="schedule">
      <h3>Event Schedule</h3>
      <ul>
        <li v-for="(item, index) in schedule" :key="index" class="schedule-item">
          <span class="schedule-time">{{ item.time }}</span>
          <span class="schedule-title">{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: String,
  title: String,
  date: String,
  time: String,
  description: String,
  link: String,
  linkLabel: {
    type: String,
    default: 'Join / View Recording',
  },
  schedule: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped>
.conference-event {
  background-color: var(--color-background-soft);
  padding: 2rem;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  max-width: 900px;
}

.conference-title {
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.conference-datetime {
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.conference-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.cta-button {
  display: inline-block;
  background-color: var(--color-accent);
  color: white;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #c65e53;
}

.schedule h3 {
  font-size: 1.25rem;
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
