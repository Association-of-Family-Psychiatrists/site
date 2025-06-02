<template>
  <section class="featured-event">
    <img :src="image" alt="Event image" class="event-image" />

    <div class="event-details">
      <h2 class="event-title">{{ title }}</h2>
      <p class="event-meta">{{ date }} &bullet; {{ location }}</p>
      <p class="event-description">{{ description }}</p>
      <RouterLink :to="link" class="cta-button">Sign Up</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title: String,
  date: String,
  location: String,
  description: String,
  image: String,
  link: String,
})
</script>

<style scoped>
.featured-event {
  display: flex;
  gap: 2rem;
  align-items: stretch; /* ensures equal height if needed */
  background-color: var(--color-background-soft);
  border-radius: 12px;
  flex-wrap: wrap;
}

.event-image {
  flex: 1;
  height: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

.event-details {
  flex: 1;
  min-width: 250px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.event-title {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.event-meta {
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.event-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.cta-button {
  background-color: var(--color-accent);
  color: white;
  padding: 0.65rem 1.25rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #c65e53;
}

@media (max-width: 768px) {
  .featured-event {
    flex-direction: column;
    text-align: center;
  }

  .event-image {
    max-width: 100%;
  }

  .event-details {
    text-align: left;
  }
}
</style>
