import { createStorefrontClient } from "@shopify/hydrogen-react";
import type { Product } from "@shopify/hydrogen-react/storefront-api-types";

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
    return result
  }
  catch (err) {
    console.warn("utils/shopify.tsx", err)
  }
}
export function extractProducts(data: any): Array<Partial<Product>> {
  let p: Partial<Product>[] = []
  for (let nodeObj of data.products.edges) {
    p.push(nodeObj.node)
  }
  return p
}
