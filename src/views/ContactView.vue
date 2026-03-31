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
        :action="FORM_ACTION"
        accept-charset="UTF-8"
        enctype="application/x-www-form-urlencoded"
        class="contact-form-form"
        method="POST"
        target="_self"
        @submit.prevent="handleSubmit"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

        <div v-if="siteKey" class="form-group">
          <div id="turnstile-container" class="turnstile-container" />
        </div>

        <p v-if="submitError" class="err">{{ submitError }}</p>

        <button type="submit" class="cta-button" :disabled="submitting || !canSubmit">
          {{ submitting ? 'Sending…' : 'Send Message' }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSEO, useStructuredData } from '@/composables/useSEO.js'
import { pageSeoData } from '@/utils/seo.js'

const FORM_ACTION =
  'https://development-form-relay.tanujsiripurapu.workers.dev/afp/submit'

const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY
const turnstileToken = ref('')
let widgetId: string | undefined
const turnstileReady = ref(false)
const turnstileLoadFailed = ref(false)
const submitError = ref('')
const submitting = ref(false)

const router = useRouter()

const canSubmit = computed(() => {
  if (!siteKey) return true
  return turnstileReady.value && !turnstileLoadFailed.value
})

function loadTurnstileScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve()
  return new Promise<void>((resolve, reject) => {
    const prev = window.onTurnstileLoad
    window.onTurnstileLoad = () => {
      prev?.()
      resolve()
    }
    const s = document.createElement('script')
    s.src =
      'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad'
    s.async = true
    s.defer = true
    s.onerror = () => reject(new Error('Turnstile script failed to load'))
    document.head.appendChild(s)
  })
}

onMounted(async () => {
  if (!siteKey) {
    turnstileReady.value = true
    return
  }
  try {
    await loadTurnstileScript()
    const container = document.getElementById('turnstile-container')
    if (container && window.turnstile) {
      widgetId = window.turnstile.render(container, {
        sitekey: siteKey,
        appearance: 'always',
        size: 'flexible',
        callback: (token: string) => {
          turnstileToken.value = token
        },
        'expired-callback': () => {
          turnstileToken.value = ''
        },
        'error-callback': () => {
          turnstileToken.value = ''
          submitError.value = 'Verification failed. Please refresh or try again.'
        },
      })
    }
    turnstileReady.value = true
  } catch (e) {
    console.error(e)
    turnstileLoadFailed.value = true
    submitError.value = 'Verification widget could not load. Please refresh or call us.'
  }
})

onBeforeUnmount(() => {
  if (window.turnstile && widgetId !== undefined) {
    window.turnstile.remove(widgetId)
  }
})

async function handleSubmit(e: Event) {
  const form = e.target as HTMLFormElement
  submitError.value = ''

  if (siteKey && !turnstileToken.value) {
    submitError.value = 'Please complete the verification challenge.'
    return
  }

  const params = new URLSearchParams()
  const fd = new FormData(form)
  for (const [key, val] of fd.entries()) {
    if (typeof val === 'string') params.append(key, val)
  }
  if (turnstileToken.value) params.append('cf-turnstile-response', turnstileToken.value)

  submitting.value = true
  try {
    const res = await fetch(FORM_ACTION, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
      redirect: 'manual',
    })
    if (res.status >= 400) throw new Error(`HTTP ${res.status}`)
    const success =
      res.type === 'opaqueredirect' ||
      res.ok ||
      res.status === 301 ||
      res.status === 302 ||
      res.status === 303 ||
      res.status === 307 ||
      res.status === 308
    if (!success) throw new Error(`HTTP ${res.status}`)

    form.reset()
    turnstileToken.value = ''
    if (window.turnstile && widgetId !== undefined) window.turnstile.reset(widgetId)
    await router.push('/thank-you')
  } catch (err) {
    console.error(err)
    submitError.value = 'We could not send your message. Please try again.'
  } finally {
    submitting.value = false
  }
}

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

.form-group {
  text-align: left;
}

.turnstile-container {
  display: flex;
  justify-content: center;
  min-height: 4rem;
}

.err {
  color: #c0392b;
  font-size: 0.95rem;
  margin: 0;
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

.cta-button:hover:not(:disabled) {
  background-color: #c65e53;
}

.cta-button:disabled {
  opacity: 0.65;
  cursor: not-allowed;
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
