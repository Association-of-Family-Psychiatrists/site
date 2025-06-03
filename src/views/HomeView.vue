<template>
  <section class="home">
    <Hero
      title="Welcome to the Association of Family Psychiatrists"
      subtitle="Promoting mental wellness and supporting family psychiatry through education, advocacy, and community."
      image="https://images.squarespace-cdn.com/content/v1/5748cc56746fb940f105bd1c/22364a6b-02db-4f89-8840-8ad7de5d6682/family+therapy+pic.jpg"
    />

    <div class="about">
      <h2>About Us</h2>
      <p>
        The Association of Family Psychiatrists is dedicated to advancing the field of family mental
        health by fostering professional development, sharing best practices, and connecting
        practitioners across the country.
      </p>
      <RouterLink to="/about" class="cta-button">Learn More</RouterLink>
    </div>

    <FeaturedEvent :="featuredEventData" />

    <CardGrid title="Upcoming Programs" :cards="featuredCards" />

    <StatsBanner :stats="statsData" />

    <ArticleGrid title="Latest Articles" :articles="featuredArticles" />
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Hero from '@/components/Hero.vue'
import FeaturedEvent from '@components/FeaturedEvent.vue'
import CardGrid from '@components/CardGrid.vue'
import StatsBanner from '../components/StatsBanner.vue'
import ArticleGrid from '../components/ArticleGrid.vue'
import { featuredEventData, featuredCards, statsData, featuredArticles } from '@data/homeData.js'
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}

.about {
  width: 100%;
  margin: 0 auto;
  padding: 3rem 2rem; /* base padding for small screens */
  background-color: var(--vt-c-black-soft);
  color: var(--color-text-light);
  text-align: center;
  display: block;
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

/* Larger screen enhancements */
@media (min-width: 768px) {
  .about {
    padding: 3rem 6rem;
  }
}

@media (min-width: 1200px) {
  .about {
    padding: 3rem 15rem;
  }
}
</style>
