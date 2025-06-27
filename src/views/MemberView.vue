<template>
  <section class="member-view">
    <h1 class="page-title animate-fade-slide">Our Members</h1>
    <p class="page-subtitle animate-fade-slide">
      Meet some of the dedicated professionals in our association.
    </p>

    <!-- Member Verification Form -->
    <div v-if="!isVerified" class="verification-section animate-fade-slide">
      <div class="verification-card">
        <h2>Member Verification</h2>
        <p>Please enter your information to access the member directory.</p>
        
        <form @submit.prevent="verifyMember" class="verification-form">
          <div class="form-group">
            <label for="memberName">Full Name</label>
            <input
              id="memberName"
              v-model="memberName"
              type="text"
              placeholder="Enter your full name"
              required
              :disabled="verifying"
            />
          </div>
          
          <div class="form-group">
            <label for="memberEmail">Email Address</label>
            <input
              id="memberEmail"
              v-model="memberEmail"
              type="email"
              placeholder="Enter your email address"
              required
              :disabled="verifying"
            />
          </div>
          
          <button type="submit" class="verify-button" :disabled="verifying">
            {{ verifying ? 'Verifying...' : 'Verify Membership' }}
          </button>
        </form>

        <!-- Error Message -->
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <!-- Success Message -->
        <div v-if="successMessage" class="success-message">
          {{ successMessage }}
        </div>
      </div>
    </div>

    <!-- Member Directory (only shown after verification) -->
    <div v-else class="member-directory animate-fade-slide">
      <div class="welcome-message">
        <h2>Welcome, {{ memberName }}!</h2>
        <p>Here are our current members:</p>
      </div>
      
      <CardGrid title="Members" :cards="memberCards" />
      
      <button @click="logout" class="logout-button">
        Sign Out
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CardGrid from '@/components/CardGrid.vue'
import { memberCards } from '@/data/memberData.js'

const isVerified = ref(false)
const memberName = ref('')
const memberEmail = ref('')
const verifying = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// Check for existing session on page load
onMounted(() => {
  const savedMember = localStorage.getItem('afp_member')
  if (savedMember) {
    try {
      const memberData = JSON.parse(savedMember)
      memberName.value = memberData.name
      memberEmail.value = memberData.email
      isVerified.value = true
    } catch (error) {
      console.error('Error parsing saved member data:', error)
      localStorage.removeItem('afp_member')
    }
  }
})

const verifyMember = async () => {
  if (!memberName.value || !memberEmail.value) {
    errorMessage.value = 'Please enter both name and email.'
    return
  }

  verifying.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    // Call Firebase function to verify membership
    const response = await fetch(
      'https://us-central1-afp-site-c1bd9.cloudfunctions.net/verifyMember',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: memberName.value,
          email: memberEmail.value,
        }),
      }
    )

    const result = await response.json()

    if (response.ok && result.isMember) {
      // Save member data to localStorage
      const memberData = {
        name: memberName.value,
        email: memberEmail.value,
        verifiedAt: new Date().toISOString()
      }
      localStorage.setItem('afp_member', JSON.stringify(memberData))
      
      successMessage.value = 'Membership verified! Welcome to the member directory.'
      setTimeout(() => {
        isVerified.value = true
        successMessage.value = ''
      }, 1500)
    } else {
      errorMessage.value = result.error || 'Membership not found. Please check your information or contact us if you believe this is an error.'
    }
  } catch (error) {
    console.error('Verification error:', error)
    errorMessage.value = 'An error occurred during verification. Please try again later.'
  } finally {
    verifying.value = false
  }
}

const logout = () => {
  // Clear localStorage
  localStorage.removeItem('afp_member')
  
  // Reset form state
  isVerified.value = false
  memberName.value = ''
  memberEmail.value = ''
  errorMessage.value = ''
  successMessage.value = ''
}
</script>

<style scoped>
.member-view {
  padding: 4rem 2rem;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.page-subtitle {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: var(--color-text);
}

/* Verification Section */
.verification-section {
  max-width: 500px;
  margin: 0 auto 3rem;
}

.verification-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e5e9;
}

.verification-card h2 {
  font-size: 1.5rem;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  font-family: 'Georgia', serif;
}

.verification-card > p {
  color: #666;
  margin-bottom: 1.5rem;
}

.verification-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--color-text);
  font-family: 'Georgia', serif;
}

.form-group input {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  font-family: 'Georgia', serif;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: var(--color-accent);
}

.verify-button {
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Georgia', serif;
  margin-top: 1rem;
}

.verify-button:hover:enabled {
  background-color: #c65e53;
}

.verify-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Messages */
.error-message {
  background-color: #f8d7da;
  color: #721c24;
  padding: 0.75rem;
  border-radius: 6px;
  margin-top: 1rem;
  border: 1px solid #f5c6cb;
}

.success-message {
  background-color: #d4edda;
  color: #155724;
  padding: 0.75rem;
  border-radius: 6px;
  margin-top: 1rem;
  border: 1px solid #c3e6cb;
}

/* Member Directory */
.member-directory {
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-message {
  margin-bottom: 2rem;
}

.welcome-message h2 {
  font-size: 1.8rem;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  font-family: 'Georgia', serif;
}

.welcome-message p {
  color: #666;
  font-size: 1.1rem;
}

.logout-button {
  background-color: transparent;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Georgia', serif;
  margin-top: 2rem;
}

.logout-button:hover {
  background-color: var(--color-accent);
  color: white;
}

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
