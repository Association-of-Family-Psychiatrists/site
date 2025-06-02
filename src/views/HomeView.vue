<template>
  <section class="home">
    <Hero
      title="Welcome to the Association of Family Psychiatrists"
      subtitle="Promoting mental wellness and supporting family psychiatry through education, advocacy, and community."
      image="https://thewellspringfoundation.org/wp-content/uploads/hero-placeholder.jpg"
    />

    <div class="about">
      <h2>About Us</h2>
      <p>
        The Association of Family Psychiatrists is dedicated to advancing the field of family mental health by
        fostering professional development, sharing best practices, and connecting practitioners across the country.
      </p>
      <RouterLink to="/about" class="cta-button">Learn More</RouterLink>
    </div>

    <FeaturedEvent
      title="2025 Mental Health Symposium"
      date="October 12, 2025"
      location="San Francisco, CA"
      description="Join leading family psychiatrists for a day of workshops, panels, and community networking."
      image="https://images.squarespace-cdn.com/content/v1/6267042fe703aa417b69ec37/71184991-ea5f-47ec-8d69-9fee0aabba2d/Fellows.png?format=2500w"
      link="/events/symposium-2025"
    />
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Hero from '@/components/Hero.vue'
import FeaturedEvent from '@components/FeaturedEvent.vue'
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}

.about {
  width: 100%;
  margin: 0 auto;
  padding: 3rem 30rem;
  background-color: var(--vt-c-black-soft);
  color: var(--color-text-light);
  text-align: center;
  display: block;
  min-height: unset;
}


.about h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: var(--color-text-light);
}

.about p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: var(--color-accent);
  color: var(--color-text-light);
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #c65e53;
}
</style>
