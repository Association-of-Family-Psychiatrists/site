// PayPal Configuration
// Membership uses production credentials
// Conference uses sandbox credentials for testing
export const PAYPAL_CONFIG = {
  // Production client ID for membership
  clientId: 'AVJgDbjOvAhwIw12Sabk3fx0JpmWL1sCxNf5A_8ezho0zW5gwfvQEsKQwwHXF2lJy_JzRu9jQxJOIA0J',
  // Sandbox client ID for testing (used by conference registration)
  // To get your sandbox client ID:
  // 1. Go to https://developer.paypal.com/
  // 2. Navigate to Dashboard > My Apps & Credentials
  // 3. Create a new app in the Sandbox environment
  // 4. Copy the Client ID and paste it here
  sandboxClientId: 'ATudL1zTvsJmaJ-kS6hmdf7L6FLM3mfdFMnkle5EGbA2Jfq12VfNagnkk_W8kDXr7J_jekw_dTEBx3RS', // Add your sandbox client ID here
  currency: 'USD',
  components: 'buttons',
  membershipPrice: 50, // Membership price in USD
  conferencePrices: {
    'early-bird': 75,
    'regular': 90,
    'late': 95,
    'student': 0,
    'trainee': 0,
    'panelist': 0
  }
}

// PayPal SDK URL builder for membership (production)
export const getPayPalSDKUrl = () => {
  const params = new URLSearchParams({
    'client-id': PAYPAL_CONFIG.clientId,
    currency: PAYPAL_CONFIG.currency,
    components: PAYPAL_CONFIG.components,
  })

  return `https://www.paypal.com/sdk/js?${params.toString()}`
}

// PayPal SDK URL builder for sandbox/testing (used by conference registration)
export const getSandboxPayPalSDKUrl = () => {
  const clientId = PAYPAL_CONFIG.sandboxClientId || PAYPAL_CONFIG.clientId
  const params = new URLSearchParams({
    'client-id': clientId,
    currency: PAYPAL_CONFIG.currency,
    components: PAYPAL_CONFIG.components,
  })

  return `https://www.paypal.com/sdk/js?${params.toString()}`
}
