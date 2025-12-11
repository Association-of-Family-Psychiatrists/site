<template>
  <div class="conference-and-carousel">
    <h2 class="section-title">Conference Highlights</h2>
    <div class="columns-container">
      <div class="conference-column" id="conference">
        <Event v-bind="conferenceEventData" />
      </div>

      <div class="carousel-column" id="conference-carousel">
        <div class="carousel-container">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Event from '@components/Event.vue'
import { conferenceEventData } from '@data/homeData.js'

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
