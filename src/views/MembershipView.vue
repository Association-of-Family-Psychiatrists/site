<template>
  <section class="membership">
    <div class="membership-content">
      <transition name="fade-slide" appear>
        <h1 class="animated-item">Membership Benefits</h1>
      </transition>

      <transition name="fade-slide" appear>
        <p class="intro animated-item">
          Join the Association of Family Psychiatrists and become part of a vibrant community
          dedicated to advancing family mental health.
        </p>
      </transition>

      <transition name="fade-slide" appear>
        <ul class="benefits-list animated-item">
          <li>• Access to exclusive publications and resources</li>
          <li>• Discounts on conferences, workshops, and events</li>
          <li>• Networking opportunities with fellow professionals</li>
          <li>• Subscription to our members-only newsletter</li>
          <li>• Opportunities for professional development and leadership</li>
        </ul>
      </transition>

      <transition name="fade-slide" appear>
        <h2 class="signup-heading animated-item">Join Now</h2>
      </transition>

      <transition name="fade-slide" appear>
        <form @submit.prevent="handleCheckout" class="signup-form animated-item" v-if="!loading">
          <input v-model="name" type="text" placeholder="Full Name" required :disabled="loading" />
          <input
            v-model="email"
            type="email"
            placeholder="Email Address"
            required
            :disabled="loading"
          />
          <input
            v-model="phone"
            type="tel"
            placeholder="Phone Number"
            required
            :disabled="loading"
          />
          <button class="join-button" type="submit" :disabled="loading">
            {{ loading ? 'Processing…' : 'Become a Member' }}
          </button>
        </form>
      </transition>

      <div v-if="loading" class="loading-spinner">
        <p>Redirecting to secure checkout…</p>
        <span class="spinner" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { loadStripe } from '@stripe/stripe-js'

const name = ref('')
const email = ref('')
const phone = ref('')
const loading = ref(false)

const handleCheckout = async () => {
  console.log('Sending', {
    name: name.value,
    email: email.value,
    phone: phone.value,
  })
  loading.value = true

  try {
    const stripe = await loadStripe(
      'pk_test_51RXnmZ2LuuFdegO3Y0dk6gd65FMnwPV1DLKc1tRoC5JLs1GtodS6mCCzzsNfQgDYUxHcQOcXupKq5xTKvtmPl62V00UUfMxsSM',
    )

    const response = await fetch(
      'https://us-central1-afp-site-c1bd9.cloudfunctions.net/createCheckoutSession',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          phone: phone.value,
        }),
      },
    )

    const session = await response.json()

    const { error } = await stripe.redirectToCheckout({ sessionId: session.id })
    if (error) throw error
  } catch (err) {
    console.error(err)
    alert('Something went wrong. Please try again.')
    loading.value = false
  }
}
</script>

<style scoped>
.membership {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--vt-c-white);
  padding: 4rem 2rem;
  text-align: center;
}

.membership-content {
  max-width: 800px;
  width: 100%;
}

/* Headings & layout */
h1 {
  font-size: 2.5rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.signup-heading {
  font-size: 1.8rem;
  margin: 3rem 0 1rem;
  color: var(--color-accent);
}

.intro {
  font-size: 1.2rem;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  text-align: left;
}

.benefits-list li {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
}

/* Form layout */
.signup-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.signup-form input {
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--color-accent);
  border-radius: 6px;
  font-family: 'Georgia', serif;
}

.join-button {
  font-size: 1.25rem;
  padding: 1rem 2rem;
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Georgia', serif;
}

.join-button:disabled {
  background-color: var(--color-accent);
  opacity: 0.6;
  cursor: not-allowed;
}

.join-button:hover:enabled {
  background-color: #c65e53;
}

/* Stripe loading spinner */
.loading-spinner {
  margin-top: 2rem;
  font-size: 1rem;
  color: var(--color-text);
}

.spinner {
  display: inline-block;
  margin-top: 0.5rem;
  width: 24px;
  height: 24px;
  border: 3px solid rgba(0, 0, 0, 0.2);
  border-top: 3px solid var(--color-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Fade-slide animation */
.fade-slide-enter-active {
  transition: all 0.6s ease;
}
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
