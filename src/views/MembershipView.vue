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
        <form @submit.prevent="handleSubmit" class="signup-form animated-item" v-if="!loading">
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
          
          <!-- PayPal Button Container -->
          <div id="paypal-button-container"></div>
          
          <p class="form-note" v-if="paypalLoaded">Complete your information above and click the PayPal button to proceed</p>
        </form>
      </transition>

      <div v-if="loading" class="loading-spinner">
        <p>Processing your payment…</p>
        <span class="spinner" />
      </div>

      <!-- Result Message -->
      <div v-if="resultMessage" class="result-message" :class="resultType">
        <p v-html="resultMessage"></p>
      </div>
    </div>

    <!-- Existing Member Popup -->
    <transition name="modal" appear>
      <div v-if="showExistingMemberModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div class="modal-header">
            <h3>Welcome Back!</h3>
            <button class="close-button" @click="closeModal" aria-label="Close modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="icon-container">
              <div class="welcome-icon">👋</div>
            </div>
            <p class="modal-message">
              It looks like you're already a member of the Association of Family Psychiatrists!
            </p>
            <p class="modal-submessage">
              If you need to update your membership or have any questions, please contact us
              directly.
            </p>
            <div class="modal-actions">
              <button class="modal-button primary" @click="closeModal">Got it, thanks!</button>
              <button class="modal-button secondary" @click="contactUs">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const email = ref('')
const phone = ref('')
const loading = ref(false)
const showExistingMemberModal = ref(false)
const paypalLoaded = ref(false)
const resultMessage = ref('')
const resultType = ref('')

const closeModal = () => {
  showExistingMemberModal.value = false
}

const contactUs = () => {
  // Navigate to contact page using Vue Router
  router.push('/contact')
}

const handleSubmit = (e) => {
  e.preventDefault()
  // Form submission is handled by PayPal button
}

const showResult = (message, type = 'info') => {
  resultMessage.value = message
  resultType.value = type
  setTimeout(() => {
    resultMessage.value = ''
    resultType.value = ''
  }, 10000) // Clear after 10 seconds
}

onMounted(() => {
  // Load PayPal SDK via CDN
  const script = document.createElement('script')
  script.src = 'https://www.paypal.com/sdk/js?client-id=AaaPWSEs6Fn13kOO5p9Kx7n9IQ8JmEoBWTATas189YUjlY9fspQT6WdQO7ew0vy9mtdfV2wcX-LnW0ib&currency=USD&components=buttons'
  script.onload = async () => {
    paypalLoaded.value = true
    // Wait for Vue to finish rendering
    await nextTick()
    initializePayPal()
  }
  document.head.appendChild(script)
})

const initializePayPal = () => {
  if (window.paypal) {
    window.paypal.Buttons({
      style: {
        shape: "rect",
        layout: "vertical",
        color: "gold",
        label: "paypal",
      },
      message: {
        amount: 50,
      },

      async createOrder() {
        // Validate form first
        if (!name.value || !email.value || !phone.value) {
          showResult('Please fill in all required fields', 'error')
          return
        }

        try {
          const response = await fetch(
            'https://us-central1-afp-site-c1bd9.cloudfunctions.net/createPayPalOrder',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: name.value,
                email: email.value,
                phone: phone.value,
              }),
            },
          )

          const orderData = await response.json()

          if (response.status === 409) {
            showExistingMemberModal.value = true
            return
          }

          if (orderData.id) {
            return orderData.id
          }
          
          const errorDetail = orderData?.details?.[0]
          const errorMessage = errorDetail
            ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
            : JSON.stringify(orderData)

          throw new Error(errorMessage)
        } catch (error) {
          console.error(error)
          showResult(`Could not initiate PayPal Checkout...<br><br>${error}`, 'error')
        }
      },

      async onApprove(data, actions) {
        loading.value = true
        console.log("Passing approved order ID to backend", data.orderID)
        try {
          const response = await fetch(
            `https://us-central1-afp-site-c1bd9.cloudfunctions.net/capturePayPalOrder`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ orderID: data.orderID }),
            },
          )

          const orderData = await response.json()
          console.log("Order data", JSON.stringify(orderData))

          // Redirect to confirmation page after a delay
          setTimeout(() => {
            router.push({
              path: '/confirmation',
              query: { orderId: orderData.id }
            })
          }, 3000)
          
        } catch (error) {
          console.error(error)
          showResult(
            `Sorry, your transaction could not be processed...<br><br>${error}`,
            'error'
          )
        } finally {
          loading.value = false
        }
      },
    }).render('#paypal-button-container')
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

/* PayPal button container */
#paypal-button-container {
  width: 100%;
  max-width: 400px;
  margin: 1rem 0;
}

.form-note {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
  font-style: italic;
}

/* Result message */
.result-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.95rem;
}

.result-message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.result-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.result-message.info {
  background-color: #d1ecf1;
  color: #0c5460;
  border: 1px solid #bee5eb;
}

/* Loading spinner */
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

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 0;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--color-accent);
  font-family: 'Georgia', serif;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.close-button:hover {
  background-color: #f3f4f6;
}

.modal-body {
  padding: 1rem 1.5rem 1.5rem;
  text-align: center;
}

.icon-container {
  margin-bottom: 1rem;
}

.welcome-icon {
  font-size: 3rem;
  margin: 0 auto;
}

.modal-message {
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.modal-submessage {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.modal-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.modal-button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Georgia', serif;
  min-width: 120px;
}

.modal-button.primary {
  background-color: var(--color-accent);
  color: white;
}

.modal-button.primary:hover {
  background-color: #c65e53;
}

.modal-button.secondary {
  background-color: transparent;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
}

.modal-button.secondary:hover {
  background-color: var(--color-accent);
  color: white;
}

/* Modal animations */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.modal-enter-to {
  opacity: 1;
  transform: scale(1);
}

.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}

.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
