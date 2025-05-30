<template>
  <div class="home-container">
    <div class="hero">
      <h1 class="title">Welcome to PreGram</h1>
      <p class="subtitle">
        A simple, elegant way to share and preview your images before posting to social media.
      </p>
      <RouterLink to="/upload" class="cta-button">Upload Your Gallery →</RouterLink>
    </div>

    <div class="features">
      <h2>What You Can Do</h2>
      <ul>
        <li>🖼 Upload a gallery of images with a single click</li>
        <li>❤️ Let friends react to photos they love</li>
        <li>💬 Add and read comments on each image</li>
        <li>🧠 Keep track of recent galleries you’ve viewed</li>
        <li>📱 Works beautifully on mobile and desktop</li>
      </ul>
    </div>

    <div class="footer-note">Built with Vue 3, Firebase, and pure style ✨</div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home-container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: #6da4f5; /* gray-800 */
}

.hero {
  margin-bottom: 3rem;
}

.title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #2563eb; /* blue-600 */
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.25rem;
  color: #45679a; /* gray-600 */
  margin-bottom: 1.5rem;
}

.cta-button {
  display: inline-block;
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.cta-button:hover {
  background-color: #1e40af; /* darker blue */
}

.features h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.features ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  text-align: left;
  display: inline-block;
}

.features li {
  margin: 0.75rem 0;
  font-size: 1rem;
  line-height: 1.6;
}

.footer-note {
  margin-top: 3rem;
  font-size: 0.9rem;
  color: #9ca3af; /* gray-400 */
}
</style>
