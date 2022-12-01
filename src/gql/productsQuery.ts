const PRODUCTS_QUERY = `
{
  products(first: 20) {
    edges {
      node {
        id
        title
        handle
        description
        priceRange {
          minVariantPrice {
            amount
          }
        }
      }
    }
  }
}
`
export default PRODUCTS_QUERY
