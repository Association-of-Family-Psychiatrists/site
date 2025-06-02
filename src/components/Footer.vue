<template>
  <footer class="footer">
    <div class="footer-top">
      <img src="@assets/logo.svg" alt="AFP Logo" class="logo" />
    </div>

    <div class="footer-bottom">
      <nav class="footer-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/events">Events</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/privacy">Privacy Policy</RouterLink>
      </nav>
      <p class="footer-copy">&copy; {{ new Date().getFullYear() }} Association of Family Psychiatrists. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.footer {
  color: white;
  text-align: center;
}

.footer-top {
  background-color: var(--color-accent);
  padding: 3rem;
  margin: 4rem 0rem;
  height: 140px;
}

.logo {
  height: 50px;
  width: auto;
  display: block;
  margin: 0 auto;
  filter: brightness(0) invert(1); /* makes dark logos appear white if needed */
}

.footer-bottom {
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 2rem;
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.footer-nav a {
  color: var(--color-text-dark);
  text-decoration: none;
  transition: opacity 0.3s;
}

.footer-nav a:hover {
  opacity: 0.75;
}

.footer-copy {
  font-size: 0.875rem;
  opacity: 0.8;
}
</style>
