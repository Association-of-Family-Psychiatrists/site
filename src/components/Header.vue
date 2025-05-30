<template>
  <header class="header">
    <h1 class="logo">PreGram</h1>

    <!-- Hamburger for small screens -->
    <button class="hamburger" @click="drawerOpen = !drawerOpen" aria-label="Toggle Menu">☰</button>

    <!-- Main nav (visible on desktop) -->
    <nav class="nav desktop-nav">
      <RouterLink to="/" exact-active-class="active" class="nav-link">Home</RouterLink>
      <!-- <RouterLink to="/about" exact-active-class="active">About</RouterLink> -->
      <RouterLink to="/profile" exact-active-class="active" title="Profile" class="nav-link"
        >👤</RouterLink
      >
    </nav>

    <!-- Mobile drawer -->
    <transition name="slide">
      <nav class="nav mobile-drawer" v-if="drawerOpen">
        <RouterLink to="/" exact-active-class="active" @click="drawerOpen = false">Home</RouterLink>
        <!-- <RouterLink to="/about" exact-active-class="active" @click="drawerOpen = false">About</RouterLink> -->
        <RouterLink to="/upload" exact-active-class="active" @click="drawerOpen = false"
          >Upload</RouterLink
        >
        <RouterLink to="/images" exact-active-class="active" @click="drawerOpen = false"
          >Images</RouterLink
        >
        <RouterLink to="/profile" exact-active-class="active" @click="drawerOpen = false"
          >👤</RouterLink
        >
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const drawerOpen = ref(false)
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2563eb;
}

.nav {
  display: flex;
  gap: 1.25rem;
  font-weight: 500;
}

.nav-link {
  color: #2563eb;
}

.hamburger {
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  display: none;
}

/* Mobile drawer (hidden on desktop) */
.mobile-drawer {
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem 1.5rem;
  z-index: 10;
}

.mobile-drawer a {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Responsive behavior */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .hamburger {
    display: block;
  }

  .mobile-drawer {
    display: flex;
  }
}
</style>
