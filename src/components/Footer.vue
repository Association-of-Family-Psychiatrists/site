<template>
  <footer class="footer">
    <!-- <div class="footer-top">
      <img src="@assets/afp-logo-with-text.png" alt="AFP Logo" class="logo" />
    </div> -->

    <div class="footer-bottom">
      <nav class="footer-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/events">Events</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

      <div class="subscribe-box">
        <h3>Join our mailing list</h3>
        <form @submit.prevent="subscribe">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
            class="email-input"
          />
          <button type="submit" class="subscribe-button">Subscribe</button>
        </form>
        <p v-if="message" class="subscribe-message">{{ message }}</p>
      </div>

      <p class="footer-copy">
        &copy; {{ new Date().getFullYear() }} Association of Family Psychiatrists. All rights
        reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { db, auth } from '@/firebase'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'

const email = ref('')
const message = ref('')

const subscribe = async () => {
  try {
    const emailId = email.value.trim().toLowerCase()

    if (!emailId) {
      message.value = 'Please enter a valid email.'
      return
    }

    await setDoc(doc(db, 'mailingList', emailId), {
      email: emailId,
      subscribedAt: serverTimestamp(),
    })

    message.value = 'Thank you for subscribing!'
    email.value = ''
  } catch (error) {
    // Check if it's the Firestore permission error caused by existing doc
    if (error.code === 'permission-denied') {
      message.value = 'You’re already subscribed.'
    } else {
      console.error('Unexpected error adding email:', error)
      message.value = 'An error occurred. Please try again later.'
    }
  }
}
</script>

<style scoped>
.footer {
  color: white;
  text-align: center;
  background-color: var(--vt-c-black-soft);
  padding: 4rem;
}

.footer-top {
  margin: 4rem 0rem;
  padding-top: 2rem;
}

.logo {
  height: 250px;
  width: auto;
  display: block;
  margin: 0 auto;
}

.footer-bottom {
  max-width: 960px;
  margin: 0 auto;
  color: white;
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
  color: var(--color-text-light);
  text-decoration: none;
  transition: opacity 0.3s;
}

.footer-nav a:hover {
  opacity: 0.75;
}

.subscribe-box {
  margin: 2rem auto;
  max-width: 400px;
}

.subscribe-box h3 {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  color: var(--color-text-light);
}

.email-input {
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  width: 70%;
  margin-right: 0.5rem;
}

.subscribe-button {
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

@media (max-width: 768px) {
  .subscribe-button {
    margin-top: 1rem;
  }
}

.subscribe-button:hover {
  background-color: #c65e53;
}

.subscribe-message {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--color-text-light);
}

.footer-copy {
  font-size: 0.875rem;
  opacity: 0.8;
  color: var(--color-text-light);
}
</style>
