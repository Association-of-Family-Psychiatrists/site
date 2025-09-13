<template>
  <section class="contact-view">
    <h1 class="page-title animate-fade-slide">Contact Us</h1>
    <p class="page-subtitle animate-fade-slide" style="animation-delay: 0.2s">
      We'd love to hear from you! Reach out with any questions, suggestions, or inquiries.
    </p>
<!-- 
    <div class="contact-info animate-fade-slide" style="animation-delay: 0.4s">
      <p>Email: <a href="mailto:dev@tanuj.xyz">dev@tanuj.xyz</a></p>
    </div> -->

    <div class="contact-form animate-fade-slide" style="animation-delay: 0.6s">
      <h2>Send Us a Message</h2>
      <form
      action="https://forms.tanuj.xyz/afp/submit"
      accept-charset="UTF-8"
        enctype="multipart/form-data"
        class="contact-form-form"
        method="POST"
        target="_self"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <input type="hidden" name="_next" value="https://yoursite.com/thank-you" />
        <button type="submit" class="cta-button">Send Message</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { useSEO, useStructuredData } from '@/composables/useSEO.js'
import { pageSeoData } from '@/utils/seo.js'

// SEO setup
useSEO({
  ...pageSeoData.contact,
  path: '/contact',
})

// Structured data for contact page
useStructuredData('ContactPage', {
  '@type': 'ContactPage',
  name: 'Contact the Association of Family Psychiatrists',
  description:
    'Get in touch with the Association of Family Psychiatrists. Contact information and ways to reach our team.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Association of Family Psychiatrists',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@familypsychiatrists.org', // Update with actual email
    },
  },
})
</script>

<style scoped>
.contact-view {
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-accent);
}

.page-subtitle {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: var(--color-text);
}

.contact-info {
  margin-bottom: 3rem;
  font-size: 1.1rem;
  color: var(--color-text);
  line-height: 1.8;
}

.contact-info a {
  color: var(--color-accent);
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.contact-form h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: 'Georgia', serif;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--color-accent);
  outline: none;
}

.cta-button {
  background-color: var(--color-accent);
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Georgia', serif;
}

.cta-button:hover {
  background-color: #c65e53;
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
</style>
