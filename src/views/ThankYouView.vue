<template>
  <section class="thank-you-view">
    <div class="thank-you-content animate-fade-slide">
      <div class="success-icon">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      
      <h1 class="page-title">Thank You!</h1>
      <p class="page-subtitle animate-fade-slide" style="animation-delay: 0.2s">
        Your message has been successfully sent. We appreciate you reaching out to us.
      </p>
      
      <div class="thank-you-details animate-fade-slide" style="animation-delay: 0.4s">
        <p>
          We'll review your message and get back to you as soon as possible. 
          Typically, we respond within 1-2 business days.
        </p>
        
        <div class="next-steps">
          <h3>What's Next?</h3>
          <ul>
            <li>Check your email for a confirmation message</li>
            <li>Our team will review your inquiry</li>
            <li>We'll respond within 1-2 business days</li>
          </ul>
        </div>
      </div>
      
      <div class="action-buttons animate-fade-slide" style="animation-delay: 0.6s">
        <router-link to="/" class="cta-button primary">Return Home</router-link>
        <router-link to="/resources" class="cta-button secondary">Explore Resources</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSEO, useStructuredData } from '@/composables/useSEO.js'
import { pageSeoData } from '@/utils/seo.js'

// SEO setup
useSEO({
  ...pageSeoData.thankYou,
  path: '/thank-you',
})

// Structured data for thank you page
useStructuredData('WebPage', {
  '@type': 'WebPage',
  name: 'Thank You - Association of Family Psychiatrists',
  description: 'Thank you for contacting the Association of Family Psychiatrists. Your message has been received.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Association of Family Psychiatrists',
  },
})
</script>

<style scoped>
.thank-you-view {
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.thank-you-content {
  width: 100%;
}

.success-icon {
  color: var(--color-accent);
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.success-icon svg {
  animation: checkmark 0.6s ease-in-out 0.3s both;
}

@keyframes checkmark {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.page-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--color-accent);
  font-weight: 700;
}

.page-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: var(--color-text);
  line-height: 1.6;
}

.thank-you-details {
  margin-bottom: 3rem;
  text-align: left;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.thank-you-details p {
  font-size: 1.1rem;
  color: var(--color-text);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.next-steps h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
  text-align: center;
}

.next-steps ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.next-steps li {
  padding: 0.75rem 0;
  color: var(--color-text);
  position: relative;
  padding-left: 2rem;
  font-size: 1rem;
  line-height: 1.6;
}

.next-steps li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0.75rem;
  color: var(--color-accent);
  font-weight: bold;
  font-size: 1.2rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  padding: 0.75rem 2rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Georgia', serif;
  font-size: 1rem;
  border: 2px solid transparent;
  display: inline-block;
  min-width: 160px;
  text-align: center;
}

.cta-button.primary {
  background-color: var(--color-accent);
  color: #fff;
  border-color: var(--color-accent);
}

.cta-button.primary:hover {
  background-color: #c65e53;
  border-color: #c65e53;
  transform: translateY(-2px);
}

.cta-button.secondary {
  background-color: transparent;
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.cta-button.secondary:hover {
  background-color: var(--color-accent);
  color: #fff;
  transform: translateY(-2px);
}

/* Animation */
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-slide {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeSlideIn 0.8s ease forwards;
}

/* Responsive design */
@media (max-width: 768px) {
  .thank-you-view {
    padding: 2rem 1rem;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .page-subtitle {
    font-size: 1.1rem;
  }
  
  .thank-you-details {
    padding: 1.5rem;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}
</style>
