import sendRequest from './send-request';
const BASE_URL = '/api/stripe'

export function handleCheckoutButton(lineItems) { 
    return sendRequest(`${BASE_URL}/create-checkout-session`, 'POST', { lineItems })
} 

