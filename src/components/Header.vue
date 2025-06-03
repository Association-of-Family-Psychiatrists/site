<template>
  <header class="header">
    <h1 class="logo">Association of Family Psychiatrists</h1>

    <!-- Hamburger for small screens -->
    <button class="hamburger" @click="drawerOpen = !drawerOpen" aria-label="Toggle Menu">☰</button>

    <!-- Main nav (visible on desktop) -->
    <nav class="nav desktop-nav">
      <RouterLink to="/" exact-active-class="active" class="nav-link">Home</RouterLink>
      <RouterLink to="/about" exact-active-class="active" class="nav-link">About</RouterLink>
    </nav>

    <!-- Mobile drawer -->
    <transition name="slide">
      <nav class="nav mobile-drawer" v-if="drawerOpen">
        <RouterLink to="/" exact-active-class="active" @click="drawerOpen = false">Home</RouterLink>
        <RouterLink to="/about" exact-active-class="active" @click="drawerOpen = false"
          >About</RouterLink
        >
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

const drawerOpen = ref(false)

function handleClickOutside(event) {
  const drawer = document.querySelector('.mobile-drawer')
  const hamburger = document.querySelector('.hamburger')

  if (
    drawerOpen.value &&
    drawer &&
    !drawer.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    drawerOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  position: relative; /* ADD THIS */
  z-index: 20; /* Ensure it's above rest of layout */
}

.mobile-drawer {
  flex-direction: column;
  position: absolute;
  top: 100%; /* Place right below the header */
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem 1.5rem;
  z-index: 15;
  border-top: 1px solid #eee;
}

.mobile-drawer a {
  padding: 0.75rem 0;
  border-bottom: 1px solid #e5e7eb;
  color: var(--color-accent);
  text-decoration: none;
  font-size: 1.1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-accent);
}

.nav {
  display: flex;
  gap: 1.25rem;
  font-weight: 500;
}

.nav-link {
  color: var(--color-accent);
  font-size: 1.25rem;
}

.hamburger {
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  display: none;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
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
