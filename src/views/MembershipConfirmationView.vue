<template>
  <section class="confirmation">
    <transition name="fade-slide" appear>
      <div class="confirmation-content">
        <h1>Thank You for Becoming a Member</h1>
        <p class="message">
          Your membership with the Association of Family Psychiatrists has been successfully
          processed.
        </p>
        <p class="followup">
          You’ll receive a welcome email shortly with further details. We look forward to your
          participation in our community.
        </p>

        <RouterLink to="/" class="home-button">Return to Homepage</RouterLink>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.confirmation {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-color: var(--vt-c-white);
  padding: 4rem 2rem;
  text-align: center;
}

.confirmation-content {
  max-width: 700px;
  padding: 2rem;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

h1 {
  font-size: 2.3rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.message {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.followup {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--color-text);
}

.home-button {
  display: inline-block;
  background-color: var(--color-accent);
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #c65e53;
}

/* Fade-slide animation */
.fade-slide-enter-active {
  transition: all 0.6s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
