import { createStorefrontClient } from "@shopify/hydrogen-react";

const client = createStorefrontClient({
  publicStorefrontToken: '3b580e70970c4528da70c98e097c2fa0',
  storeDomain: 'hydrogen-preview',
  storefrontApiVersion: '2022-10'
})

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPublicTokenHeaders = client.getPublicTokenHeaders;

export const storefront = async ({ query = '', variables = {}, }) => {
  try {
    const response = await fetch(getStorefrontApiUrl(), {
      method: 'POST',
      headers: getPublicTokenHeaders(),
      body: JSON.stringify({ query, variables })
    });

    const result = await response.json();
    console.log(result)
    return result
  }
  catch (err) {
    console.warn("utils/shopify.tsx", err)
  }
}
