<template>
  <section class="featured-event">
    <img :src="image" alt="Event image" class="event-image animate-left" />

    <div class="event-details animate-right">
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
  align-items: stretch;
  background-color: var(--color-background-soft);
  flex-wrap: wrap;
}

.event-image {
  flex: 1;
  height: 100%;
  max-height: 450px;
  object-fit: cover;
}

.event-details {
  flex: 1;
  min-width: 250px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid var(--color-accent);
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

/* Animations */
.animate-left {
  opacity: 0;
  transform: translateX(-40px);
  animation: fadeInLeft 1s ease-out forwards;
}

.animate-right {
  opacity: 0;
  transform: translateX(40px);
  animation: fadeInRight 1s ease-out forwards;
  animation-delay: 0.2s;
}

@keyframes fadeInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Mobile */
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
