<template>
  <header class="header">
    <RouterLink to="/" class="logo">Association of Family Psychiatrists</RouterLink>

    <!-- Hamburger for small screens -->
    <button class="hamburger" @click="drawerOpen = !drawerOpen" aria-label="Toggle Menu">☰</button>

    <!-- Main nav (visible on desktop) -->
    <nav class="nav desktop-nav">
      <RouterLink to="/" exact-active-class="active" class="nav-link">Home</RouterLink>
      <RouterLink to="/about" exact-active-class="active" class="nav-link">About</RouterLink>
      <RouterLink to="/resources" exact-active-class="active" class="nav-link"
        >Resources</RouterLink
      >
      <RouterLink to="/events" exact-active-class="active" class="nav-link">Events</RouterLink>
      <RouterLink to="/members" exact-active-class="active" class="nav-link">Members</RouterLink>
      <RouterLink to="/membership" class="member-button">Become a Member</RouterLink>
    </nav>

    <!-- Mobile drawer -->
    <transition name="slide">
      <nav class="nav mobile-drawer" v-if="drawerOpen">
        <RouterLink to="/" exact-active-class="active" @click="drawerOpen = false">Home</RouterLink>
        <RouterLink to="/about" exact-active-class="active" @click="drawerOpen = false"
          >About</RouterLink
        >
        <RouterLink to="/resources" exact-active-class="active" @click="drawerOpen = false"
          >Resources</RouterLink
        >
        <RouterLink to="/members" exact-active-class="active" @click="drawerOpen = false"
          >Members</RouterLink
        >
        <RouterLink
          to="/membership"
          @click="drawerOpen = false"
          class="member-button mobile-member-button"
        >
          Become a Member
        </RouterLink>
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
.member-button {
  background-color: var(--color-accent);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.member-button:hover {
  background-color: #c65e53;
}

/* Mobile button spacing */
.mobile-member-button {
  margin-top: 1rem;
  text-align: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  position: relative;
  z-index: 20; /* Ensure it's above rest of layout */
  border-bottom: 1px solid var(--color-accent);
}

.mobile-drawer {
  flex-direction: column;
  position: absolute;
  top: 100%;
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
  margin-top: 5px;
}

.hamburger {
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  display: none;
  color: var(--color-accent);
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
