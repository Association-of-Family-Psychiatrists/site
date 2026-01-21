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

    <!-- Special Announcements Section -->
    <div class="announcements-section" id="announcements">
      <div class="announcements-container">
        <h2 class="announcements-title">Special Announcements</h2>
        <div class="announcements-content">
          <p class="announcements-greeting">
            Dear Colleagues, Happy Holidays! On behalf of the Association of Family Psychiatrists
            (AFP), we wish you and your families a wonderful, healthy, and successful New Year. We
            are pleased to share two important announcements highlighting AFP's continued commitment
            to recognizing excellence in family-oriented psychiatry, education, and scholarship.
          </p>

          <div class="announcement-cards">
            <div class="announcement-card">
              <h3>10th Annual Resident and Fellow Recognition Award</h3>
              <p>
                We are excited to announce the 10th Annual Resident and Fellow Recognition Award for
                Excellence in Family-Oriented Care. This award highlights outstanding contributions
                to family-oriented clinical care and supports the next generation of family
                psychiatrists.
              </p>
              <ul>
                <li>Certificate of recognition</li>
                <li>Invitation to AFP Annual Meeting</li>
                <li>One year of mentoring with a senior AFP member</li>
              </ul>
              <p class="eligibility">
                <strong>Eligibility:</strong> 3rd- or 4th-year psychiatry residents or fellows who
                demonstrate commitment to family-oriented care.
              </p>
            </div>

            <div class="announcement-card">
              <h3>The Berman Award for Best Written or Media Content (2026)</h3>
              <p>
                Launching the inaugural Berman Award for the best content on any aspect of family
                work. Eligible submissions include books, articles, posters, videos, blogs,
                podcasts, or conference presentations.
              </p>
              <ul>
                <li>First-place: $200–$250</li>
                <li>Second- and third-place: Books on family psychiatry or family therapy</li>
              </ul>
              <p class="eligibility">
                <strong>Eligibility:</strong> Residents, fellows, and early-career psychiatrists
                (within first five years after training).
              </p>
            </div>
          </div>

          <div class="announcements-submission">
            <h3>Submission Information</h3>
            <p>
              Please email a brief description of the nominee's/submitter's work and CV to Dr.
              Rajesh Mehta:
            </p>
            <p class="contact-info">
              <a href="mailto:rmeht2033@gmail.com">rmeht2033@gmail.com</a> or
              <a href="mailto:Rajesh.Mehta@CHKD.org">Rajesh.Mehta@CHKD.org</a>
            </p>
            <p class="deadline"><strong>Submission Deadline: Friday, February 27, 2026</strong></p>
            <RouterLink to="/resources/award-recognition" class="announcements-link"
              >Learn More & Submit →</RouterLink
            >
          </div>
        </div>
      </div>
    </div>

    <!-- <FeaturedEvent :="featuredEventData" id="featured-event" /> -->

    <div class="conference-and-carousel">
      <h2 class="section-title">Conference Highlights</h2>
      <div class="columns-container">
        <div class="conference-column" id="conference">
          <Event v-bind="conferenceEventData" />
        </div>

        <div class="carousel-column" id="conference-carousel">
          <div class="carousel-container">
            <div
              class="carousel-track"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div v-for="(image, index) in conferenceImages" :key="index" class="carousel-slide">
                <img :src="image.src" :alt="image.alt" class="carousel-image" />
              </div>
            </div>

            <button class="carousel-button prev" @click="previousSlide" aria-label="Previous slide">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            <button class="carousel-button next" @click="nextSlide" aria-label="Next slide">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>

            <div class="carousel-indicators">
              <button
                v-for="(image, index) in conferenceImages"
                :key="index"
                class="indicator"
                :class="{ active: currentSlide === index }"
                @click="goToSlide(index)"
                :aria-label="`Go to slide ${index + 1}`"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>

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

    <CardGrid
      title="Our Leadership Team"
      :cards="coreOfficers"
      id="leadership-team"
    />
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import FeaturedEvent from '@components/FeaturedEvent.vue'
import CardGrid from '@components/CardGrid.vue'
import ArticleGrid from '@components/ArticleGrid.vue'
import Event from '@components/Event.vue'
import AffiliatedOrganizations from '@components/AffiliatedOrganizations.vue'
import { useSEO, useStructuredData } from '@/composables/useSEO.js'
import { pageSeoData } from '@/utils/seo.js'
import {
  featuredEventData,
  featuredCards,
  featuredArticles,
  conferenceEventData,
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

// Import conference images
import image1 from '@/assets/afp-conference-photos/image-1.png'
import image2 from '@/assets/afp-conference-photos/image-2.png'
import image3 from '@/assets/afp-conference-photos/image-3.png'
import image4 from '@/assets/afp-conference-photos/image-4.png'
import image5 from '@/assets/afp-conference-photos/image-5.png'
import image6 from '@/assets/afp-conference-photos/image-6.png'
import image7 from '@/assets/afp-conference-photos/image-7.png'
import image8 from '@/assets/afp-conference-photos/image-8.png'
import image9 from '@/assets/afp-conference-photos/image-9.png'
import image10 from '@/assets/afp-conference-photos/image-10.png'
import image11 from '@/assets/afp-conference-photos/image-11.png'

// Conference carousel data with imported images
const conferenceImages = ref([
  {
    src: image1,
    alt: 'AFP Conference Photo 1',
  },
  {
    src: image2,
    alt: 'AFP Conference Photo 2',
  },
  {
    src: image3,
    alt: 'AFP Conference Photo 3',
  },
  {
    src: image4,
    alt: 'AFP Conference Photo 4',
  },
  {
    src: image5,
    alt: 'AFP Conference Photo 5',
  },
  {
    src: image6,
    alt: 'AFP Conference Photo 6',
  },
  {
    src: image7,
    alt: 'AFP Conference Photo 7',
  },
  {
    src: image8,
    alt: 'AFP Conference Photo 8',
  },
  {
    src: image9,
    alt: 'AFP Conference Photo 9',
  },
  {
    src: image10,
    alt: 'AFP Conference Photo 10',
  },
  {
    src: image11,
    alt: 'AFP Conference Photo 11',
  },
])

const currentSlide = ref(0)
let autoPlayInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % conferenceImages.value.length
}

const previousSlide = () => {
  currentSlide.value =
    currentSlide.value === 0 ? conferenceImages.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoPlay = () => {
  if (import.meta.env.SSR) return
  autoPlayInterval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

onMounted(() => {
  if (!import.meta.env.SSR) {
    startAutoPlay()
  }
})

onUnmounted(() => {
  if (!import.meta.env.SSR) {
    stopAutoPlay()
  }
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

.announcements-section {
  width: 100%;
  background: white;
  padding: 4rem 2rem;
  margin: 0 auto;
}

.announcements-container {
  max-width: 1200px;
  margin: 0 auto;
}

.announcements-title {
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-accent);
  font-weight: bold;
}

.announcements-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.announcements-greeting {
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: center;
  font-style: italic;
  color: var(--color-text, #555);
  margin-bottom: 1rem;
}

.announcement-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.announcement-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-top: 4px solid var(--color-accent);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.announcement-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.announcement-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-accent);
  font-weight: bold;
}

.announcement-card p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: var(--color-text, #555);
}

.announcement-card ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.announcement-card li {
  margin-bottom: 0.5rem;
  color: var(--color-text, #555);
}

.announcement-card .eligibility {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  font-size: 0.95rem;
}

.announcements-submission {
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 4px solid var(--color-accent);
  text-align: center;
}

.announcements-submission h3 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: var(--color-heading, #333);
}

.announcements-submission p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
  color: var(--color-text, #555);
}

.announcements-submission .contact-info {
  font-size: 1.2rem;
  margin: 1.5rem 0;
}

.announcements-submission .contact-info a {
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 600;
  margin: 0 0.5rem;
}

.announcements-submission .contact-info a:hover {
  text-decoration: underline;
}

.announcements-submission .deadline {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--color-accent);
  margin: 2rem 0 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
}

.announcements-link {
  display: inline-block;
  background-color: var(--color-accent);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 1rem;
}

.announcements-link:hover {
  background-color: #b8500c;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .announcements-section {
    padding: 3rem 1.5rem;
  }

  .announcements-title {
    font-size: 1.75rem;
  }

  .announcement-cards {
    grid-template-columns: 1fr;
  }

  .announcements-submission {
    padding: 2rem 1.5rem;
  }

  .announcements-submission .deadline {
    font-size: 1.1rem;
  }
}

.conference-and-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 10%;
}

.section-title {
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.columns-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.columns-container > * {
  flex: 1 1 400px; /* Grow equally, shrink equally, min width ~400px */
}

.carousel-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.carousel-slide {
  min-width: 100%;
  position: relative;
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  padding: 0;
}

.carousel-button:hover {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.carousel-button.prev {
  left: 10px;
}

.carousel-button.next {
  right: 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.indicator.active {
  background: white;
  transform: scale(1.2);
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.8);
}

@media (max-width: 768px) {
  .columns-container {
    flex-direction: column;
  }

  .carousel-container {
    height: 450px;
  }
}
</style>
