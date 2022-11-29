import { DefaultLayout } from "../../src/layouts"
import Link from "next/link"
import { extractProducts, storefront } from "../../src/utils/shopify"
import ProductsPageSeo from "../../src/seo/ProductsPageSeo"
import type { Product } from "@shopify/hydrogen-react/storefront-api-types"
import type { GetStaticProps, NextPage } from "next"

export type ProductsPageProps = {
  products: Partial<Product>[]
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await storefront({ query: PRODUCTS_QUERY })
  const products = extractProducts(data)
  return {
    props: {
      products: products
    } as ProductsPageProps
  }
}

const ProductsPage: NextPage<ProductsPageProps> = ({ products }) => {
  return (
    <DefaultLayout>
      <ProductsPageSeo />
      <article className="grid gap-2 grid-flow-row ">
        <Link href="/products/asd">Invalid Link</Link>
        {
          products.map(p => (
            <div key={p.id} className="w-40 h-40 bg-sky-300">
              <Link href={`/products/${p.handle}`}>
                {p.handle}
              </Link>
            </div>
          ))
        }
      </article>
    </DefaultLayout>
  )
}
export default ProductsPage

export const PRODUCTS_QUERY = `
{
  products(first: 20) {
    edges {
      node {
        title,
        id,
        handle,
        featuredImage {
          transformedSrc,
          altText
        }
      }
    }
  }
}
`
