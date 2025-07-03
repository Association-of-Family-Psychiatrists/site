<template>
  <div class="sister-organizations" id="sister-organizations" ref="containerRef">
    <h2>Sister Organizations</h2>
    <div class="organizations-container">
      <div class="center-logo" :class="{ 'animate': isInView }">
        <img src="/afp-logo.png" alt="AFP Logo" class="center-logo-img" />
      </div>
      <div class="organization-circles">
        <div class="org-circle" v-for="i in 6" :key="i" :style="{ '--delay': `${i * 0.2}s` }" :class="{ 'animate': isInView }">
          <div class="circle-placeholder">ORG {{ i }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const containerRef = ref(null)
const isInView = ref(false)

let observer = null
const isMobile = ref(false)

function getThreshold() {
  if (window.innerWidth <= 768) {
    return 0.3
  }
  return 0.1
}

onMounted(() => {
  isMobile.value = window.innerWidth <= 768
  if (isMobile.value) {
    // Instantly show circles on mobile
    isInView.value = true
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          void containerRef.value.offsetWidth
          isInView.value = false
          setTimeout(() => {
            isInView.value = true
          }, 10)
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: getThreshold(),
    }
  )

  if (containerRef.value) {
    observer.observe(containerRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.sister-organizations {
  width: 100%;
  min-height: 50vh;
  margin: 0 auto;
  background-color: var(--vt-c-black-soft);
  color: var(--color-text-light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;
}

.sister-organizations h2 {
  font-size: 1.75rem;
  margin-bottom: 2rem;
  color: var(--color-text-light);
  z-index: 10;
}

.organizations-container {
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center-logo {
  position: absolute;
  z-index: 20;
}

.center-logo.animate {
  animation: pulse 2s ease-in-out infinite;
}

.center-logo-img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 50%;
}

.organization-circles {
  position: relative;
  width: 100%;
  height: 100%;
}

.org-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 10;
}

.org-circle.animate {
  animation: flyOut 1.5s ease-out forwards;
  animation-delay: var(--delay);
}

.circle-placeholder {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: var(--vt-c-black-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.circle-placeholder:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* Position circles in a circle around the center */
.org-circle:nth-child(1).animate { 
  animation: flyOut1 1.5s ease-out forwards;
  animation-delay: var(--delay);
}
.org-circle:nth-child(2).animate { 
  animation: flyOut2 1.5s ease-out forwards;
  animation-delay: var(--delay);
}
.org-circle:nth-child(3).animate { 
  animation: flyOut3 1.5s ease-out forwards;
  animation-delay: var(--delay);
}
.org-circle:nth-child(4).animate { 
  animation: flyOut4 1.5s ease-out forwards;
  animation-delay: var(--delay);
}
.org-circle:nth-child(5).animate { 
  animation: flyOut5 1.5s ease-out forwards;
  animation-delay: var(--delay);
}
.org-circle:nth-child(6).animate { 
  animation: flyOut6 1.5s ease-out forwards;
  animation-delay: var(--delay);
}

@keyframes flyOut1 {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) translate(0, -200px) scale(1);
  }
}

@keyframes flyOut2 {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) translate(173px, -100px) scale(1);
  }
}

@keyframes flyOut3 {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) translate(173px, 100px) scale(1);
  }
}

@keyframes flyOut4 {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) translate(0, 200px) scale(1);
  }
}

@keyframes flyOut5 {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) translate(-173px, 100px) scale(1);
  }
}

@keyframes flyOut6 {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) translate(-173px, -100px) scale(1);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .organizations-container {
    height: 400px;
  }
  
  .center-logo-img {
    width: 80px;
    height: 80px;
  }
  
  .circle-placeholder {
    width: 70px;
    height: 70px;
    font-size: 0.9rem;
  }
  
  /* Adjust circle positions for mobile */
  .org-circle:nth-child(1).animate { 
    animation: none !important;
    opacity: 1 !important;
  }
  .org-circle:nth-child(2).animate { 
    animation: none !important;
    opacity: 1 !important;
  }
  .org-circle:nth-child(3).animate { 
    animation: none !important;
    opacity: 1 !important;
  }
  .org-circle:nth-child(4).animate { 
    animation: none !important;
    opacity: 1 !important;
  }
  .org-circle:nth-child(5).animate { 
    animation: none !important;
    opacity: 1 !important;
  }
  .org-circle:nth-child(6).animate { 
    animation: none !important;
    opacity: 1 !important;
  }
  .org-circle:nth-child(1) {
    transform: translate(-50%, -50%) translate(0, -160px) scale(1) !important;
  }
  .org-circle:nth-child(2) {
    transform: translate(-50%, -50%) translate(139px, -80px) scale(1) !important;
  }
  .org-circle:nth-child(3) {
    transform: translate(-50%, -50%) translate(139px, 80px) scale(1) !important;
  }
  .org-circle:nth-child(4) {
    transform: translate(-50%, -50%) translate(0, 160px) scale(1) !important;
  }
  .org-circle:nth-child(5) {
    transform: translate(-50%, -50%) translate(-139px, 80px) scale(1) !important;
  }
  .org-circle:nth-child(6) {
    transform: translate(-50%, -50%) translate(-139px, -80px) scale(1) !important;
  }
}
</style> 