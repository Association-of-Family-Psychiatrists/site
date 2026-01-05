<template>
  <div class="conference-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="conference-title">
          Bridging Minds, Systems and Relationships: Biopsychorelational Healing
        </h1>
        <p class="conference-subtitle">A Collaboration between FPI, AFP and AACAP</p>
        <div class="conference-meta">
          <p class="conference-date">Virtual Conference • April 04, 2026</p>
        </div>
      </div>
    </section>

    <!-- Partner Logos Section -->
    <section class="logos-section">
      <div class="logos-container">
        <img :src="logoFpi" alt="Family Process Institute Logo" class="partner-logo" />
        <img :src="logoAacap" alt="AACAP Logo" class="partner-logo" />
        <img :src="logoAu" alt="Alliant University Logo" class="partner-logo" />
        <img :src="logoCheo" alt="CHEO Logo" class="partner-logo" />
        <img :src="logo1c1" alt="1Call1Click Logo" class="partner-logo" />
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="mission-section">
      <h2>Mission Statement</h2>
      <p>
        To create a collaborative platform for family psychiatrists and family therapists to explore
        systemic and relational factors and the biopsychorelational determinants of behavior,
        fostering integrated approaches that improve mental health care delivery and outcomes for
        individuals and families.
      </p>
    </section>

    <!-- Conference Objectives -->
    <section class="objectives-section">
      <h2>Conference Objectives</h2>
      <p>By the end of the conference, participants will be able to:</p>
      <ol class="objectives-list">
        <li>
          Identify and integrate systemic and relational considerations into psychiatric and
          therapeutic practices.
        </li>
        <li>
          Explore interprofessional collaboration strategies to enhance patient and family outcomes.
        </li>
        <li>
          Engage in dynamic dialogue to develop action-oriented solutions to clinical and systemic
          challenges.
        </li>
      </ol>
    </section>

    <!-- Agenda -->
    <section class="agenda-section">
      <h2>Conference Agenda</h2>
      <div class="agenda-container">
        <!-- Panel I -->
        <div class="panel-card">
          <h3>Panel I: Systemic & Relational Perspectives in Psychiatry and Therapy</h3>
          <p class="panel-duration">1 Hour</p>
          <p class="panel-focus">
            <strong>Focus:</strong> Exploring how family systems theory and relational frameworks
            inform psychiatric diagnosis and treatment planning.
          </p>
          <div class="panelists">
            <h4>Panelists:</h4>
            <div class="presenter-list">
              <span
                v-for="panelist in panel1Panelists"
                :key="panelist.name"
                class="presenter-badge"
              >
                {{ panelist.name }}
              </span>
            </div>
          </div>
          <div class="panel-objectives">
            <h4>Objectives:</h4>
            <ul>
              <li>Describe systemic influences on mental health symptoms.</li>
              <li>
                Demonstrate relational interventions that can complement pharmacological approaches.
              </li>
            </ul>
          </div>
        </div>

        <!-- Panel II -->
        <div class="panel-card">
          <h3>
            Panel II: From Loss to Resilience: Biopsychorelational Approaches with Refugee Families
          </h3>
          <p class="panel-duration">1 Hour</p>
          <p class="panel-focus">
            <strong>Focus:</strong> Examining the impact of forced migration, displacement, and
            refugee experiences on family systems, with attention to resilience, relational stress,
            and systemic healing.
          </p>
          <div class="panelists">
            <h4>Panelists:</h4>
            <div class="presenter-list">
              <span
                v-for="panelist in panel2Panelists"
                :key="panelist.name"
                class="presenter-badge"
              >
                {{ panelist.name }}
              </span>
            </div>
          </div>
          <div class="panel-objectives">
            <h4>Objectives:</h4>
            <ul>
              <li>
                Identify common relational and systemic challenges faced by displaced and refugee
                families (e.g., role shifts, intergenerational strain, cultural dislocation).
              </li>
              <li>
                Explore therapeutic strategies that foster resilience, belonging, and healing within
                refugee family systems.
              </li>
              <li>
                Discuss how systemic and relational perspectives can inform policy and community
                responses to the global refugee crisis.
              </li>
            </ul>
          </div>
        </div>

        <!-- Panel III -->
        <div class="panel-card">
          <h3>Panel III: Integrated Care Models – From Theory to Practice</h3>
          <p class="panel-duration">1 Hour</p>
          <p class="panel-focus">
            <strong>Focus:</strong> Innovative programs and models where psychiatrists and
            therapists work side by side.
          </p>
          <div class="panelists">
            <h4>Panelists:</h4>
            <div class="presenter-list">
              <span
                v-for="panelist in panel3Panelists"
                :key="panelist.name"
                class="presenter-badge"
              >
                {{ panelist.name }}
              </span>
            </div>
          </div>
          <div class="panel-objectives">
            <h4>Objectives:</h4>
            <ul>
              <li>Describe integrated care models.</li>
              <li>Understanding barriers and how to overcome them in various settings</li>
            </ul>
          </div>
        </div>

        <!-- Panel IV -->
        <div class="panel-card">
          <h3>Panel IV: Ethical, Cultural, and Generational Challenges in Collaborative Care</h3>
          <p class="panel-duration">1 Hour</p>
          <p class="panel-focus">
            <strong>Focus:</strong> Navigating ethical dilemmas, cultural differences, and
            generational dynamics in family systems.
          </p>
          <div class="panelists">
            <h4>Panelists:</h4>
            <div class="presenter-list">
              <span
                v-for="panelist in panel4Panelists"
                :key="panelist.name"
                class="presenter-badge"
              >
                {{ panelist.name }}
              </span>
            </div>
          </div>
          <div class="panel-objectives">
            <h4>Objectives:</h4>
            <ul>
              <li>Apply culturally responsive and ethically sound approaches in systemic work.</li>
              <li>
                Recognize and address loyalty conflicts and intergenerational differences in
                clinical settings.
              </li>
            </ul>
          </div>
        </div>

        <!-- Breakout Sessions -->
        <div class="panel-card">
          <h3>75 Minute-Breakout Sessions & Conversations</h3>
          <p class="panel-focus">
            <strong>Format:</strong> Small groups of 10-12 participants led by a facilitator (mix of
            psychiatrists and therapists).
          </p>
          <p class="panel-focus">
            <strong>Purpose:</strong> To foster in-depth dialogue and peer-to-peer learning.
          </p>
          <div class="panel-objectives">
            <h4>Suggested Breakout Topics:</h4>
            <ol>
              <li>Strategies for effective psychiatrist-therapist collaboration.</li>
              <li>Case consultations integrating systemic and biopsychorelational perspectives.</li>
              <li>Addressing structural inequities and social determinants of health.</li>
              <li>
                Building future research and training initiatives in integrated family mental health
                care.
              </li>
            </ol>
          </div>
        </div>

        <!-- Wrap-Up -->
        <div class="panel-card">
          <h3>45 minutes-Wrap-Up & Report Back Session</h3>
          <p class="panel-focus">
            Facilitators from each breakout group will share 3–5 key insights or action steps. This
            part will synthesize ideas across groups, creating a shared vision for future
            initiatives.
          </p>
          <div class="panel-objectives">
            <h4>Objectives:</h4>
            <ul>
              <li>Synthesize key themes from the breakout sessions.</li>
              <li>
                Identify concrete next steps for collaborative action in participants' clinical or
                organizational settings.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Presenters Section -->
    <section class="presenters-section">
      <h2>Featured Presenters</h2>
      <div class="presenters-grid">
        <div v-for="presenter in presenters" :key="presenter.name" class="presenter-card">
          <div v-if="presenter.image" class="presenter-image-container">
            <img :src="presenter.image" :alt="presenter.name" class="presenter-image" />
          </div>
          <div class="presenter-info">
            <h3 class="presenter-name">{{ presenter.name }}</h3>
            <p class="presenter-title">{{ presenter.title }}</p>
            <p class="presenter-bio">{{ presenter.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Registration Section -->
    <section class="registration-section">
      <h2>Registration</h2>
      <div class="registration-info">
        <div class="pricing">
          <h3>Registration Fees</h3>
          <ul>
            <li><strong>Early-bird:</strong> $75</li>
            <li><strong>Regular:</strong> $90</li>
            <li><strong>Late registration:</strong> $95</li>
            <li><strong>Professionals:</strong> Full fee</li>
            <li><strong>Students/trainees:</strong> Free</li>
            <li><strong>Panelists:</strong> Waived Registration plus gifts</li>
          </ul>
        </div>
        <div class="payment-info">
          <h3>Payment & Policies</h3>
          <p>Accepted payment methods: credit card, check, institutional purchase orders.</p>
        </div>
        <div class="ce-info">
          <h3>Continuing Education</h3>
          <p>CME and CEUs: Alliant will pay for this and does not charge for them.</p>
        </div>
      </div>

      <!-- Registration Form -->
      <div class="registration-form-section">
        <h3>Register Now</h3>
        <form @submit.prevent="handleSubmit" class="conference-signup-form">
          <div class="form-group">
            <label for="name">Full Name *</label>
            <input
              id="name"
              v-model="name"
              type="text"
              placeholder="Full Name"
              required
              :disabled="loading"
            />
          </div>
          <div class="form-group">
            <label for="email">Email Address *</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="Email Address"
              required
              :disabled="loading"
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number *</label>
            <input
              id="phone"
              v-model="phone"
              type="tel"
              placeholder="Phone Number"
              required
              :disabled="loading"
            />
          </div>
          <div class="form-group">
            <label for="registrationType">Registration Type *</label>
            <select
              id="registrationType"
              v-model="registrationType"
              required
              :disabled="loading || !conferenceConfig"
              @change="updatePrice"
            >
              <option value="">Select registration type</option>
              <option
                v-for="option in availableRegistrationTypes"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>

          <div v-if="selectedPrice > 0" class="price-display">
            <span class="price-label">Total:</span>
            <span class="price-amount">${{ selectedPrice }}</span>
          </div>
          <div v-else-if="selectedPrice === 0 && registrationType" class="price-display free">
            <span class="price-label">Registration Fee:</span>
            <span class="price-amount">Free</span>
          </div>

          <!-- PayPal Button Container (for paid registrations) -->
          <div
            v-if="registrationType && selectedPrice > 0 && !loading"
            id="conference-paypal-button-container"
          ></div>

          <!-- Register Button (for free registrations) -->
          <button
            v-if="registrationType && selectedPrice === 0 && !loading"
            type="submit"
            class="register-button"
          >
            Register
          </button>

          <!-- Loading State for Free Registration -->
          <div v-if="registrationType && selectedPrice === 0 && loading" class="loading-state">
            <span class="spinner"></span>
            <p>Processing your registration…</p>
          </div>

          <!-- Loading State for Paid Registration (PayPal) -->
          <div v-if="registrationType && selectedPrice > 0 && loading" class="loading-state">
            <span class="spinner"></span>
            <p>Processing your payment…</p>
          </div>

          <p v-if="!registrationType" class="form-note">
            Please select a registration type to continue
          </p>

          <p class="form-note" v-if="paypalLoaded && registrationType && selectedPrice > 0">
            Complete your information above and click the PayPal button to proceed
          </p>
          <p class="form-note" v-if="registrationType && selectedPrice === 0 && !loading">
            Complete your information above and click Register to complete your free registration
          </p>
        </form>

        <!-- Result Message -->
        <div v-if="resultMessage" class="result-message" :class="resultType">
          <p v-html="resultMessage"></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useSEO } from '@/composables/useSEO.js'
import { pageSeoData } from '@/utils/seo.js'
import { getSandboxPayPalSDKUrl, PAYPAL_CONFIG } from '@/config/paypal.js'

// Import logos
import logoFpi from '@/assets/conferencewebsiteinformation/logo_fpi.jpeg'
import logoAacap from '@/assets/conferencewebsiteinformation/aacap_logo.png'
import logoAu from '@/assets/conferencewebsiteinformation/au_logo.png'
import logoCheo from '@/assets/conferencewebsiteinformation/logo_cheo.svg'
import logo1c1 from '@/assets/conferencewebsiteinformation/logo_1c1.svg'

// Import presenter headshots
import noahSpectorImg from '@/assets/conferencewebsiteinformation/Noah Spector.jpg'
import rishiKapurImg from '@/assets/conferencewebsiteinformation/Rishi Kapur.JPG'
import daneshpourImg from '@/assets/conferencewebsiteinformation/Dr. Manijeh Daneshpour.jpg'
import shaligramImg from '@/assets/conferencewebsiteinformation/Shaligram-Dee headshot.jpg'
import michelleRickerbyImg from '@/assets/conferencewebsiteinformation/Dr Michelle Rickerby.jpg'

// SEO setup
useSEO({
  title: 'Bridging Minds, Systems and Relationships: Biopsychorelational Healing | AFP',
  description:
    'Virtual Conference - April 04, 2026. A collaboration between FPI, AFP and AACAP exploring systemic and relational factors in mental health care.',
  path: '/conference',
})

// Registration form state
const router = useRouter()
const name = ref('')
const email = ref('')
const phone = ref('')
const registrationType = ref('')
const loading = ref(false)
const paypalLoaded = ref(false)
const resultMessage = ref('')
const resultType = ref('')
const conferenceConfig = ref(null)
const availableRegistrationTypes = ref([])

const selectedPrice = computed(() => {
  if (!registrationType.value) return 0
  return PAYPAL_CONFIG.conferencePrices[registrationType.value] || 0
})

const updatePrice = () => {
  // Price updates automatically via computed property
  // Re-initialize PayPal button when registration type changes
  if (paypalLoaded.value && registrationType.value) {
    nextTick(() => {
      initializePayPal()
    })
  }
}

const handleSubmit = async (e) => {
  e.preventDefault()

  // For free registrations, handle directly
  if (selectedPrice.value === 0) {
    await handleFreeRegistration()
  }
  // For paid registrations, form submission is handled by PayPal button
}

const handleFreeRegistration = async () => {
  // Validate form first
  if (!name.value || !email.value || !phone.value || !registrationType.value) {
    showResult('Please fill in all required fields', 'error')
    return
  }

  // Validate it's a free registration type
  if (
    registrationType.value !== 'student' &&
    registrationType.value !== 'trainee' &&
    registrationType.value !== 'panelist'
  ) {
    showResult('Invalid registration type for free registration', 'error')
    return
  }

  loading.value = true

  try {
    const response = await fetch(
      'https://us-central1-afp-site-c1bd9.cloudfunctions.net/registerFreeConference',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          phone: phone.value,
          registrationType: registrationType.value,
        }),
      },
    )

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || 'Failed to register')
    }

    // Redirect to confirmation page after a delay
    setTimeout(() => {
      router.push({
        path: '/confirmation',
        query: { orderId: result.orderId, type: 'conference' },
      })
    }, 2000)
  } catch (error) {
    console.error(error)
    showResult(
      `Sorry, your registration could not be processed...<br><br>${error.message}`,
      'error',
    )
  } finally {
    loading.value = false
  }
}

const showResult = (message, type = 'info') => {
  resultMessage.value = message
  resultType.value = type
  setTimeout(() => {
    resultMessage.value = ''
    resultType.value = ''
  }, 10000) // Clear after 10 seconds
}

// Fetch conference config from backend
const fetchConferenceConfig = async () => {
  try {
    const response = await fetch(
      'https://us-central1-afp-site-c1bd9.cloudfunctions.net/getConferenceConfig',
    )

    if (!response.ok) {
      throw new Error('Failed to fetch conference configuration')
    }

    const config = await response.json()
    conferenceConfig.value = config

    // Determine available registration types based on currentRegistrationWindow
    const currentWindow = config.currentRegistrationWindow.current || 'regular'
    const paidOptions = []

    console.log('currentWindow', currentWindow)
    // Add all paid options up to and including the current window
    if (currentWindow === 'early-bird') {
      paidOptions.push({ value: 'early-bird', label: 'Early-bird - $75' })
    } else if (currentWindow === 'regular') {
      paidOptions.push({ value: 'regular', label: 'Regular - $90' })
    } else if (currentWindow === 'late') {
      paidOptions.push({ value: 'late', label: 'Late Registration - $95' })
    }

    console.log('Paid options', paidOptions)

    // Always include free options
    const freeOptions = [
      { value: 'student', label: 'Student - Free' },
      { value: 'trainee', label: 'Trainee - Free' },
      { value: 'panelist', label: 'Panelist - Free' },
    ]

    availableRegistrationTypes.value = [...paidOptions, ...freeOptions]
  } catch (error) {
    console.error('Error fetching conference config:', error)
    showResult('Failed to load registration options. Please refresh the page.', 'error')
    // Fallback to default options
    availableRegistrationTypes.value = [
      { value: 'regular', label: 'Regular - $90' },
      { value: 'late', label: 'Late Registration - $95' },
      { value: 'student', label: 'Student - Free' },
      { value: 'trainee', label: 'Trainee - Free' },
      { value: 'panelist', label: 'Panelist - Free' },
    ]
  }
}

// Ensure page scrolls to top on mount
onMounted(async () => {
  window.scrollTo({ top: 0, behavior: 'instant' })

  // Fetch conference config first
  await fetchConferenceConfig()

  // Load PayPal SDK via CDN (using sandbox credentials)
  const script = document.createElement('script')
  script.src = getSandboxPayPalSDKUrl()
  script.onload = async () => {
    paypalLoaded.value = true
    // Wait for Vue to finish rendering
    await nextTick()
    // Only initialize if registration type is already selected
    if (registrationType.value) {
      initializePayPal()
    }
  }
  document.head.appendChild(script)
})

const initializePayPal = () => {
  if (window.paypal) {
    // Clear any existing button
    const container = document.getElementById('conference-paypal-button-container')
    if (container) {
      container.innerHTML = ''
    }

    window.paypal
      .Buttons({
        style: {
          shape: 'rect',
          layout: 'vertical',
          color: 'gold',
          label: 'paypal',
        },
        message: {
          amount: selectedPrice.value || PAYPAL_CONFIG.conferencePrices.regular,
        },

        async createOrder() {
          // Validate form first
          if (!name.value || !email.value || !phone.value || !registrationType.value) {
            showResult('Please fill in all required fields', 'error')
            return
          }

          try {
            const response = await fetch(
              'https://us-central1-afp-site-c1bd9.cloudfunctions.net/createConferencePayPalOrder',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: name.value,
                  email: email.value,
                  phone: phone.value,
                  registrationType: registrationType.value,
                }),
              },
            )

            const orderData = await response.json()

            if (!response.ok) {
              const errorMessage = orderData.error || 'Failed to create order'
              throw new Error(errorMessage)
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
            showResult(`Could not initiate PayPal Checkout...<br><br>${error.message}`, 'error')
          }
        },

        async onApprove(data, actions) {
          loading.value = true
          console.log('Passing approved conference order ID to backend', data.orderID)
          try {
            const response = await fetch(
              `https://us-central1-afp-site-c1bd9.cloudfunctions.net/captureConferencePayPalOrder`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ orderID: data.orderID }),
              },
            )

            const orderData = await response.json()
            console.log('Conference order data', JSON.stringify(orderData))

            if (!response.ok) {
              throw new Error(orderData.error || 'Failed to capture order')
            }

            // Redirect to confirmation page after a delay
            setTimeout(() => {
              router.push({
                path: '/confirmation',
                query: { orderId: orderData.id, type: 'conference' },
              })
            }, 3000)
          } catch (error) {
            console.error(error)
            showResult(
              `Sorry, your registration could not be processed...<br><br>${error.message}`,
              'error',
            )
          } finally {
            loading.value = false
          }
        },
      })
      .render('#conference-paypal-button-container')
  }
}

// Panelists data
const panel1Panelists = [{ name: 'Dr. Noah Spector' }, { name: 'Dr. Rishi Kapur' }]

const panel2Panelists = [{ name: 'Dr. J Guzder' }, { name: 'Kronick' }]

const panel3Panelists = [{ name: 'Dr. Dee Shaligram' }, { name: 'Dr. Michelle Rickerby' }]

const panel4Panelists = [{ name: 'Dr. Daneshpour' }, { name: 'Dr. Rama Rao Gogineni' }]

// Presenters data with bios and images
const presenters = [
  {
    name: 'Michelle Rickerby, MD',
    title: 'Clinical Professor of Psychiatry and Human Behavior, Brown University',
    bio: "Michelle Rickerby, MD has had her academic home at Brown University since 1996. Following her residency training, she spent 20 years working with a team on the development of the Partial Hospital Program at Hasbro Children's Hospital, a nationally recognized program known for creating a model of family-based integrated care for children and teens with complex combinations of medical and psychiatric illness. She transitioned to community-based practice in Providence, RI, in 2018, where she focuses on outpatient family-based integrated care, program development consultation, and cross-disciplinary family therapy training. Her primary teaching role throughout her tenure at Brown, where she is a Clinical Professor of Psychiatry and Human Behavior, has been as the previous co-director and current Director of family therapy training for the child psychiatry and triple board residents. She is currently a Co-Chair of AACAP's Family Committee.",
    image: michelleRickerbyImg,
  },
  {
    name: 'Manijeh Daneshpour, PhD',
    title: 'Systemwide Couple and Family Therapy Director, Alliant International University',
    bio: 'Manijeh Daneshpour, PhD, is the Systemwide Couple and Family Therapy Director and Distinguished Marriage and Family Therapy Professor at Alliant International University in California. She is a licensed marriage and family therapist with nearly three decades of academic, research, and clinical experience. Originally from Iran, she identifies as a third-wave feminist. Her research, publications, and presentations focus on gender, multiculturalism, social justice, postmodernism, third-wave feminism, and premarital and marital relationships, with contextual therapy serving as the foundation of her scholarly and clinical work.',
    image: daneshpourImg,
  },
  {
    name: 'Dr. Noah Spector',
    title: 'Care Coordinator, CHEO Kids Come First / 1Call1Click.ca',
    bio: "Dr. Noah Spector is a registered social worker with over twenty years of experience in children's mental health care. He is currently the Care Coordinator for the Children's Hospital of Eastern Ontario (CHEO)'s Kids Come First / 1Call1Click.ca Substance Use and Concurrent Disorders Program. Dr. Spector is also a lecturer in family therapy within the University of Ottawa's Faculty of Medicine, Department of Child and Adolescent Psychiatry. He is the founding Program Director of the CHEO Research Institute (RI)'s Mind Matters team, which includes all CHEO-based researchers studying brain, mind, and the contexts, families, communities, and healthcare settings, in which children and youth can thrive. Dr. Spector holds a PhD in Education from the University of Ottawa and an MSW from McGill University. His research interests include interprofessional collaboration and the development of family interventions within acute pediatric mental health contexts. He is also a proud father of two children under the age of ten, who teach him daily how difficult and rewarding parenting can be.",
    image: noahSpectorImg,
  },
  {
    name: 'Rishi Kapur, MD',
    title: 'Child and Adolescent Psychiatrist, CHEO',
    bio: 'Rishi Kapur, MD. identifies as a cisgender second-generation Canadian South Asian male. He trained and works as a child and adolescent psychiatrist at CHEO. He is passionate about medical education, staff and learner wellness, and health equity. He has taken an interest in exploring clinical work with rural and urban Indigenous communities, gender-diverse populations, and racialized children and families. He has co-led the family therapy teaching program for core psychiatry residents and Child and Adolescent Psychiatry fellows at the University of Ottawa for five years. He is fascinated by organizational health and improving systems and processes within institutions. In his spare time, he enjoys yoga, cycling, the cello, and spending time with his family and Samoyed.',
    image: rishiKapurImg,
  },
  {
    name: 'Jaswant Guzder, MD',
    title: 'Clinical Professor of Psychiatry, University of British Columbia',
    bio: "Jaswant Guzder, MD. is a Clinical Professor of Psychiatry at the University of British Columbia and Co-Director of the UBC Social and Cultural Psychiatry Program, with a career deeply grounded in refugee mental health and culturally informed care. Since 2020, her clinical work in Victoria, BC, has centered on supporting refugee and immigrant communities through the Vancouver Island Centre for Refugee and Immigrant Mental Health (VICCIR), alongside work with Indigenous Child and Youth Mental Health services across southern Vancouver Island. A retired Professor of Psychiatry at McGill University, where she continues to collaborate with the Divisions of Child Psychiatry and Social and Transcultural Psychiatry, she has held major leadership roles, including Head of Child Psychiatry and founding Co-Director of the Cultural Consultation Service at the Jewish General Hospital. Her global research and training initiatives focus on high-risk children and cultural psychiatry, with longstanding partnerships in Jamaica, India, Nepal, and Sri Lanka. Dr. Guzder has authored numerous articles, co-edited Cultural Consultation: Encountering the Other in Mental Health Care, and collaborated with Rome's Museo Laboratorio della Mente on an art-based project in 2017. Her advocacy and clinical leadership have been recognized with the Queen Elizabeth II Diamond Jubilee Medal.",
    image: null,
  },
  {
    name: 'Deepika Shaligram, MD',
    title: `Child, Adolescent, and Adult Psychiatrist, Boston Children's Hospital`,
    bio: `Deepika Shaligram, MD is a child, adolescent, and adult psychiatrist with Boston Children's Hospital. She is an attending psychiatrist in the Outpatient Psychiatry Services and affiliate faculty in Global Health. She is co-director of the Boston Children's Hospital Massachusetts Child Psychiatry Access Program and the International Psychiatry Observership Program. Her areas of interest include access to care, education, and social justice. She is a member of AACAP's Climate Change Committee and co-chair of the Diversity & Culture Committee and the Taskforce on Children, Families, and Immigration. Dr. Shaligram serves on the boards of the New England Council on Child & Adolescent Psychiatry and the Family Process Institute. She is a Fellow of the American Psychiatric Association and a Distinguished Fellow of AACAP. She is a contributing editor for the Journal of the American Academy of Child and Adolescent Psychiatry. She enjoys teaching psychopharmacology, family psychiatry, and collaborative care.`,
    image: shaligramImg,
  },
  {
    name: 'Rama Rao Gogineni, MD, MFT',
    title: 'Professor of Psychiatry, Cooper Medical School of Rowan University',
    bio: 'Rama Rao Gogineni, MD, MFT is a graduate of Kakatiya Medical College, Osmania University, and completed psychiatry residency at the University of Pennsylvania and Child and Adolescent Psychiatry fellowship at the Medical College of Pennsylvania. He was trained in family therapy and psychoanalysis. He is currently a Professor of Psychiatry and Senior Educator in Developmental Psychiatry at Cooper Medical School of Rowan University. He is an active, contributing member of U.S. and international psychiatric organizations. He has several publications, presentations, and serves as editor of five books.',
    image: null,
  },
]
</script>

<style scoped>
.conference-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--color-background);
  color: var(--color-text-dark, #333);
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, var(--color-accent) 0%, #c65e53 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 3rem;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}

/* Partner Logos Section */
.logos-section {
  background-color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logos-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.partner-logo {
  max-height: 80px;
  max-width: 180px;
  object-fit: contain;
  height: auto;
  width: auto;
}

/* Single row on larger screens - all 5 logos in one row */
@media (min-width: 1200px) {
  .logos-container {
    gap: 2.5rem;
    flex-wrap: nowrap;
  }

  .partner-logo {
    max-height: 90px;
    max-width: 200px;
  }
}

/* Stack 2 and 3 on medium screens */
@media (min-width: 768px) and (max-width: 1199px) {
  .logos-container {
    gap: 2rem;
    max-width: 700px;
    margin: 0 auto;
  }

  .partner-logo {
    max-height: 75px;
    max-width: 160px;
  }

  /* First 2 logos take 50% each */
  .partner-logo:nth-child(-n + 2) {
    flex: 0 1 calc(50% - 1rem);
  }

  /* Last 3 logos take 33.33% each */
  .partner-logo:nth-child(n + 3) {
    flex: 0 1 calc(33.333% - 1.33rem);
  }
}

/* Smaller screens - 2 per row */
@media (max-width: 767px) {
  .logos-container {
    gap: 1.5rem;
  }

  .partner-logo {
    max-height: 60px;
    max-width: 140px;
    flex: 0 1 calc(50% - 0.75rem);
  }
}

.conference-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.conference-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.95;
}

.conference-meta {
  margin-top: 1.5rem;
}

.conference-date {
  font-size: 1.25rem;
  font-weight: 600;
}

/* Mission Section */
.mission-section {
  background-color: var(--vt-c-black-soft);
  color: var(--color-text-light);
  padding: 3rem 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  text-align: center;
}

.mission-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-light);
}

.mission-section p {
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

/* Objectives Section */
.objectives-section {
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  background-color: var(--color-background);
}

.objectives-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-accent);
  text-align: center;
}

.objectives-section > p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--color-text-dark, #333);
}

.objectives-list {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
  padding-left: 2rem;
  color: var(--color-text-dark, #333);
}

.objectives-list li {
  margin-bottom: 1rem;
}

/* Agenda Section */
.agenda-section {
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  background-color: var(--color-background);
}

.agenda-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-accent);
  text-align: center;
}

.agenda-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.panel-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: var(--color-text-dark, #333);
}

.panel-card h3 {
  font-size: 1.5rem;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
}

.panel-duration {
  font-weight: 600;
  color: var(--color-text-dark, #666);
  margin-bottom: 1rem;
}

.panel-focus {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--color-text-dark, #333);
}

.panelists {
  margin: 1.5rem 0;
}

.panelists h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-dark, #333);
}

.presenter-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.presenter-badge {
  background-color: var(--color-accent);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
}

.panel-objectives {
  margin-top: 1.5rem;
}

.panel-objectives h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-dark, #333);
}

.panel-objectives ul,
.panel-objectives ol {
  margin-left: 1.5rem;
  line-height: 1.8;
  color: var(--color-text-dark, #333);
}

.panel-objectives li {
  margin-bottom: 0.5rem;
}

/* Presenters Section */
.presenters-section {
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  background-color: var(--color-background);
}

.presenters-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-accent);
  text-align: center;
}

.presenters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.presenter-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.presenter-image-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-color: #f5f5f5;
}

.presenter-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.presenter-info {
  padding: 1.5rem;
}

.presenter-card .presenter-name {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
}

.presenter-title {
  font-size: 1rem;
  color: var(--color-text-dark, #666);
  font-weight: 600;
  margin-bottom: 1rem;
}

.presenter-bio {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-dark, #333);
}

/* Registration Section */
.registration-section {
  background-color: var(--vt-c-black-soft);
  color: var(--color-text-light);
  padding: 3rem 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
}

.registration-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-text-light);
  text-align: center;
}

.registration-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.pricing h3,
.payment-info h3,
.ce-info h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--color-text-light);
}

.pricing ul {
  list-style: none;
  padding: 0;
}

.pricing li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.pricing li:last-child {
  border-bottom: none;
}

.payment-info p,
.ce-info p {
  line-height: 1.6;
}

/* Registration Form Section */
.registration-form-section {
  margin-top: 3rem;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.registration-form-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-accent);
  text-align: center;
}

.conference-signup-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: var(--color-text-dark, #333);
  font-size: 0.95rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: 'Georgia', serif;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--color-accent);
}

.form-group input:disabled,
.form-group select:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.price-display {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 6px;
}

.price-display.free {
  background-color: #e8f5e9;
  border-left: 4px solid #4caf50;
}

.price-label {
  font-size: 1.1rem;
  color: var(--color-text-dark, #333);
}

.price-amount {
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-accent);
  font-family: 'Georgia', serif;
}

#conference-paypal-button-container {
  width: 100%;
  max-width: 400px;
  margin: 1rem auto;
}

.register-button {
  width: 100%;
  max-width: 400px;
  margin: 1rem auto;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background-color: var(--color-accent);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Georgia', serif;
  display: block;
}

.register-button:hover:not(:disabled) {
  background-color: #c65e53;
}

.register-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  opacity: 0.7;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  margin: 1rem auto;
  max-width: 400px;
}

.loading-state .spinner {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid var(--color-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.loading-state p {
  margin: 0;
  font-size: 1rem;
  color: var(--color-text-dark, #333);
  font-weight: 500;
}

.form-note {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
  font-style: italic;
  text-align: center;
}

.loading-spinner {
  margin-top: 2rem;
  font-size: 1rem;
  color: var(--color-text-light);
  text-align: center;
}

.spinner {
  display: inline-block;
  margin-top: 0.5rem;
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top: 3px solid var(--color-text-light);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.result-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.95rem;
  text-align: center;
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

/* Responsive Design */
@media (max-width: 768px) {
  .conference-title {
    font-size: 1.75rem;
  }

  .conference-subtitle {
    font-size: 1.25rem;
  }

  .logos-container {
    gap: 1rem;
  }

  .partner-logo {
    max-height: 60px;
  }

  .presenters-grid {
    grid-template-columns: 1fr;
  }

  .registration-info {
    grid-template-columns: 1fr;
  }
}
</style>
