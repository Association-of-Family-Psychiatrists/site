<template>
  <section class="donate">
    <div class="donate-content">
      <transition name="fade-slide" appear>
        <h1 class="animated-item">Support Our Mission</h1>
      </transition>

      <transition name="fade-slide" appear>
        <p class="intro animated-item">
          Your donation helps the Association of Family Psychiatrists advance family mental health
          through education, advocacy, and community programs.
        </p>
      </transition>

      <transition name="fade-slide" appear>
        <ul class="impact-list animated-item">
          <li>• Expand educational resources for families and clinicians</li>
          <li>• Support training and mentorship for early-career psychiatrists</li>
          <li>• Fund community-based initiatives that promote family mental wellness</li>
          <li>• Strengthen advocacy efforts for evidence-based family psychiatric care</li>
        </ul>
      </transition>

      <transition name="fade-slide" appear>
        <div class="donate-panel animated-item">
          <h2 class="donate-heading">Make a Donation</h2>
          <p class="donate-text">
            Click the PayPal Donate button below to make a secure one-time or recurring gift.
          </p>

          <div id="paypal-donate-button-container" class="donate-button-container"></div>

          <p class="donate-note">
            You will complete your donation in a secure PayPal window while remaining on our site.
          </p>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSEO, useStructuredData } from '@/composables/useSEO.js'
import { pageSeoData } from '@/utils/seo.js'
import { DONATE_CONFIG } from '@/config/paypal.js'

useSEO({
  ...pageSeoData.donate,
  path: '/donate',
})

useStructuredData('WebPage', {
  '@type': 'WebPage',
  name: 'Donate to the Association of Family Psychiatrists',
  description:
    'Support the Association of Family Psychiatrists with a secure online donation to advance family mental health.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Association of Family Psychiatrists',
  },
})

onMounted(() => {
  if (import.meta.env.SSR) return

  const existingScript = document.querySelector('script[data-paypal-donate-sdk]')
  if (existingScript) {
    initializeDonateButton()
    return
  }

  const script = document.createElement('script')
  script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js'
  script.charset = 'UTF-8'
  script.setAttribute('data-paypal-donate-sdk', 'true')
  script.onload = () => {
    initializeDonateButton()
  }
  document.head.appendChild(script)
})

const initializeDonateButton = () => {
  if (!window.PayPal || !window.PayPal.Donation) return

  window.PayPal.Donation.Button({
    env: DONATE_CONFIG.env,
    hosted_button_id: DONATE_CONFIG.hostedButtonId,
    image: {
      src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
      title: 'Donate with PayPal button',
      alt: 'Donate with PayPal button',
    },
    onComplete: function () {
      // Optionally handle completion (e.g., analytics) without interrupting PayPal flow
    },
  }).render('#paypal-donate-button-container')
}
</script>

<style scoped>
.donate {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--vt-c-white);
  padding: 4rem 2rem;
  text-align: center;
}

.donate-content {
  max-width: 800px;
  width: 100%;
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

.impact-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  text-align: left;
}

.impact-list li {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
}

.donate-panel {
  margin-top: 2rem;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--color-accent);
  background-color: #fff7f5;
}

.donate-heading {
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
  color: var(--color-accent);
}

.donate-text {
  font-size: 1rem;
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.donate-button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.donate-note {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
  font-style: italic;
}

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

