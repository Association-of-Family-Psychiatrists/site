<template>
  <section class="home">
    <div class="intro">
      <div class="logo-column">
        <img src="@assets/afp-logo.png" alt="AFP Logo" class="logo-img" />
      </div>

      <div class="welcome-column" id="welcome">
        <h1 class="welcome-title">Welcome to the Association of Family Psychiatrists</h1>
        <p class="welcome-subtitle">
          Promoting mental wellness and supporting family psychiatry through education, advocacy,
          and community.
        </p>
      </div>
    </div>

    <div class="about" id="about">
      <h2>About Us</h2>
      <p>
        The Association of Family Psychiatrists is dedicated to advancing the field of family mental
        health by fostering professional development, sharing best practices, and connecting
        practitioners across the country.
      </p>
      <RouterLink to="/about" class="cta-button">Learn More</RouterLink>
    </div>

    <FeaturedEvent
      title="Bridging Minds, Systems and Relationships: Biopsychorelational Healing"
      date="April 04, 2026"
      location="Virtual Conference"
      description="A collaboration between FPI, AFP and AACAP exploring systemic and relational factors in mental health care. Join us for this 6-hour virtual conference featuring expert panels, breakout sessions, and networking opportunities."
      link="/conference"
      link-label="Learn More"
      id="featured-event"
    />

    <ConferenceHighlights />

    <!-- <AffiliatedOrganizations id="affiliated-organizations" /> -->

    <CardGrid
      title="Affiliated Organizations"
      :cards="featuredCards"
      id="affiliated-organizations"
    />

    <!-- <StatsBanner :stats="statsData" /> -->

    <ArticleGrid
      title="Featured Books / Publications"
      :articles="featuredArticles"
      id="featured-books"
    />

    <CardGrid
      title="2025 Winners of our Annual Award for Excellence in Family Care"
      :cards="featuredAwardWinners"
      id="award-winners"
    />

    <CardGrid title="Our Leadership Team" :cards="coreOfficers" id="leadership-team" />
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import FeaturedEvent from '@components/FeaturedEvent.vue'
import CardGrid from '@components/CardGrid.vue'
import ArticleGrid from '@components/ArticleGrid.vue'
import ConferenceHighlights from '@components/ConferenceHighlights.vue'
import AffiliatedOrganizations from '@components/AffiliatedOrganizations.vue'
import { useSEO, useStructuredData } from '@/composables/useSEO.js'
import { pageSeoData } from '@/utils/seo.js'
import {
  featuredEventData,
  featuredCards,
  featuredArticles,
  featuredAwardWinners,
} from '@data/homeData.js'
import { officerCards } from '@data/officerData.js'

// Filter to show only core executive officers (first 6)
const coreOfficers = officerCards.slice(0, 4)

// SEO setup
useSEO({
  ...pageSeoData.home,
  path: '/',
})

// Structured data for organization
useStructuredData('Organization', {
  '@type': 'Organization',
  name: 'Association of Family Psychiatrists',
  description:
    'Promoting mental wellness and supporting family psychiatry through education, advocacy, and community.',
  url: 'https://familypsychiatrists.org',
  logo: 'https://familypsychiatrists.org/afp-logo.png',
  sameAs: [
    'https://twitter.com/FamilyPsych', // Update with actual social media URLs
    'https://linkedin.com/company/association-of-family-psychiatrists',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'info@familypsychiatrists.org', // Update with actual email
  },
})
</script>

<style scoped>
.intro {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
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
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--color-accent);
}

.welcome-subtitle {
  font-size: 1rem;
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
</style>
