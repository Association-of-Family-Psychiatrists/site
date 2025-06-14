<template>
  <section class="hero" :style="{ backgroundImage: `url(${image})` }">
    <div class="overlay animate-fade-slide">
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  image: String,
})
</script>

<style scoped>
.hero {
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-position: center 25%;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
}

/* Animate overlay */
.animate-fade-slide {
  opacity: 0;
  transform: translateY(40px);
  animation: fadeSlideIn 1.2s ease-out forwards;
}

@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.overlay {
  background-color: rgba(198, 94, 83, 0.8); /* matches your CTA hover */
  color: #fff;
  padding: 2rem;
  border-radius: 8px;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  font-weight: 300;
}

/* Mobile responsive tweaks */
@media (max-width: 768px) {
  .overlay {
    padding: 1.25rem 1rem;
    margin-bottom: 6rem;
  }

  .title {
    font-size: 1.75rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>
