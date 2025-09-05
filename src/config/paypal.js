// PayPal Configuration
// Update this with your live PayPal client ID
export const PAYPAL_CONFIG = {
  clientId: 'AVJgDbjOvAhwIw12Sabk3fx0JpmWL1sCxNf5A_8ezho0zW5gwfvQEsKQwwHXF2lJy_JzRu9jQxJOIA0J', // Replace with your live PayPal client ID
  currency: 'USD',
  components: 'buttons',
  membershipPrice: 50, // Membership price in USD
}

// PayPal SDK URL builder
export const getPayPalSDKUrl = () => {
  const params = new URLSearchParams({
    'client-id': PAYPAL_CONFIG.clientId,
    currency: PAYPAL_CONFIG.currency,
    components: PAYPAL_CONFIG.components,
  })

  return `https://www.paypal.com/sdk/js?${params.toString()}`
}
