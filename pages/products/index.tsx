import { DefaultLayout } from "../../src/layouts"
import { ProductGrid } from "../../src/components/products"
import { storefront } from "../../src/utils/shopify"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import type { Product } from "@shopify/hydrogen-react/storefront-api-types"

export const getServerSideProps = async () => {
  const { data } = await storefront({ query: PRODUCTS_QUERY })
  return {
    props: {
      data: data
    }
  }
}


const Products: React.FC = ({ data }: InferGetServerSidePropsType<GetServerSideProps>) => {
  const products = data.products
  console.log(products)
  return (
    <DefaultLayout>
      <article>
        <ProductGrid products={products.edges} />
      </article>
    </DefaultLayout>
  )
}
export default Products

const PRODUCTS_QUERY = `
{
  products(first: 20) {
    edges {
      node {
        title,
        id,
        featuredImage {
          originalSrc,
          altText
        }
      }
    }
  }
}
`
