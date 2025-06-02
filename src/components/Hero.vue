<template>
  <section class="hero" :style="{ backgroundImage: `url(${image})` }">
    <div class="overlay">
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  image: String
})
</script>

<style scoped>
.hero {
  width: 100%;
  height: 30vh;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  border-radius: 8px;
  color: white;
  max-width: 90%;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  font-weight: 300;
}
</style>
