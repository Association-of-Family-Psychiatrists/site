<template>
  <section class="home">
    <div class="intro">
      <div class="logo-column">
        <img src="@assets/afp-logo.png" alt="AFP Logo" class="logo-img" />
      </div>

      <div class="welcome-column">
        <h1 class="welcome-title">Welcome to the Association of Family Psychiatrists</h1>
        <p class="welcome-subtitle">
          Promoting mental wellness and supporting family psychiatry through education, advocacy,
          and community.
        </p>
      </div>
    </div>

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

    <div class="conference-and-publications">
      <div class="conference-column">
        <Event v-bind="conferenceEventData" />
      </div>

      <div class="publications-column">
        <h2>Recent Publications</h2>
        <PublicationCard v-for="(pub, index) in publicationData" :key="index" v-bind="pub" />
      </div>
    </div>

    <CardGrid title="Upcoming Programs" :cards="featuredCards" />

    <StatsBanner :stats="statsData" />

    <CardGrid
      title="2024 Winners of our Annual Award for Excellence in Family Care"
      :cards="featuredAwardWinners"
    />
    <ArticleGrid title="Latest Articles" :articles="featuredArticles" />
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import FeaturedEvent from '@components/FeaturedEvent.vue'
import CardGrid from '@components/CardGrid.vue'
import StatsBanner from '@components/StatsBanner.vue'
import ArticleGrid from '@components/ArticleGrid.vue'
import Event from '@components/Event.vue'
import PublicationCard from '@components/PublicationCard.vue'
import {
  featuredEventData,
  featuredCards,
  statsData,
  featuredArticles,
  conferenceEventData,
  publicationData,
  featuredAwardWinners,
} from '@data/homeData.js'
</script>

<style scoped>
.intro {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  min-height:;
}

.logo-column {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px; /* Adjust for desired vertical spacing */
  animation: fadeInLeft 1s ease-out forwards;
  opacity: 0;
  transform: translateX(-40px);
  background-color: #ca590d;
}

.logo-img {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
  object-fit: contain;
}

.welcome-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  animation: fadeInRight 1s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
  transform: translateX(40px);
}

@media (max-width: 768px) {
  .intro {
    flex-direction: column;
  }

  .logo-column,
  .welcome-column {
    flex: unset;
    width: 100%;
  }
}

/* Animations */
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

@keyframes slideFadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.welcome-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--color-accent);
}

.welcome-subtitle {
  font-size: 2rem;
  line-height: 1.6;
  color: var(--vt-c-black-soft);
}

/* Responsive tweaks */
@media (max-width: 768px) {
  .welcome-column {
    text-align: center;
  }

  .welcome-title {
    font-size: 2rem;
  }

  .welcome-subtitle {
    font-size: 1.25rem;
  }
}

.home {
  display: flex;
  flex-direction: column;
}

.about {
  width: 100%;
  min-height: 35vh;
  margin: 0 auto;
  background-color: var(--vt-c-black-soft);
  color: var(--color-text-light);
  display: flex;
  flex-direction: column;
  justify-content: center; /* vertical centering */
  align-items: center; /* horizontal centering */
  text-align: center;
  padding: 3rem 2rem;
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

.conference-and-publications {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem 10%;
}

.conference-and-publications > * {
  flex: 1 1 400px; /* Grow equally, shrink equally, min width ~400px */
}

.publications-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.publications-column h2 {
  margin-bottom: 0.5rem;
  font-size: 2rem;
}
</style>
