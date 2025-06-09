<template>
  <section class="membership">
    <div class="membership-content">
      <h1>Membership Benefits</h1>
      <p class="intro">
        Join the Association of Family Psychiatrists and become part of a vibrant community
        dedicated to advancing family mental health.
      </p>

      <ul class="benefits-list">
        <li>📚 Access to exclusive publications and resources</li>
        <li>🎓 Discounts on conferences, workshops, and events</li>
        <li>🤝 Networking opportunities with fellow professionals</li>
        <li>📰 Subscription to our members-only newsletter</li>
        <li>💼 Opportunities for professional development and leadership</li>
      </ul>

      <button class="join-button" @click="goToJoinPage">Become a Member</button>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { loadStripe } from '@stripe/stripe-js'

const goToJoinPage = async () => {
  const stripe = await loadStripe(
    'pk_test_51RXnmZ2LuuFdegO3Y0dk6gd65FMnwPV1DLKc1tRoC5JLs1GtodS6mCCzzsNfQgDYUxHcQOcXupKq5xTKvtmPl62V00UUfMxsSM',
  )

  const response = await fetch(
    'https://us-central1-afp-site-c1bd9.cloudfunctions.net/createCheckoutSession',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  const session = await response.json()

  const { error } = await stripe.redirectToCheckout({
    sessionId: session.id,
  })

  if (error) {
    console.error(error)
    alert('Payment failed. Please try again.')
  }
}
</script>

<style scoped>
.membership {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: var(--vt-c-white);
  padding: 4rem 2rem;
  text-align: center;
}

.membership-content {
  max-width: 800px;
}

h1 {
  font-size: 2.5rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.intro {
  font-size: 1.2rem;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin-bottom: 3rem;
  text-align: left;
}

.benefits-list li {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
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
}

.join-button:hover {
  background-color: #c65e53;
}
</style>
