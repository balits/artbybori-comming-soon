import { DefaultLayout } from "../../src/layouts"
import Link from "next/link"
import { extractProducts, storefront } from "../../src/utils/shopify"
import type { CartLineInput, Product } from "@shopify/hydrogen-react/storefront-api-types"
import type { GetStaticProps, NextPage } from "next"
import PRODUCTS_QUERY from "../../src/gql/productsQuery"
import { useCart } from "@shopify/hydrogen-react"
import Seo from "../../src/Seo"

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
  const cart = useCart()

  const addSingleToCart = (cli: CartLineInput) => {
    cart.linesAdd([cli])
    console.log("cart lines:", cart.lines)
  }

  return (
    <DefaultLayout>
      <Seo title="Products" />
      <article className="grid gap-2 grid-flow-row ">
        <Link href="/products/asd">Invalid Link</Link>
        {
          products.map(p => (
            <div key={p.id} className="w-40 h-40 bg-sky-300 cursor-pointer"
            >
              <Link href={`/products/${p.handle}`}>
                Add {p.title} to the cart
              </Link>
            </div>
          ))
        }
      </article>
    </DefaultLayout>
  )
}
export default ProductsPage
