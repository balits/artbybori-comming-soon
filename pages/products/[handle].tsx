import { DefaultLayout } from "../../src/layouts"
import { extractProducts, storefront } from "../../src/utils/shopify"
import { ProductsPageProps } from "./index"
import { useRouter } from "next/router"
import Link from "next/link"
import { NextPage } from "next"
import { Product } from "@shopify/hydrogen-react/storefront-api-types"
import PRODUCTS_QUERY from "../../src/gql/productsQuery"
import Seo from "../../src/Seo"
import { useMoney } from "@shopify/hydrogen-react"


export async function getStaticProps() {
  const { data } = await storefront({ query: PRODUCTS_QUERY })
  const products = extractProducts(data)
  return {
    props: {
      products: products
    } as ProductsPageProps
  }
}

export async function getStaticPaths() {
  const { data } = await storefront({ query: PRODUCTS_QUERY })
  const products = extractProducts(data)
  const validPaths = products.map(p => ({
    params: {
      handle: p.handle
    },
  }))

  return {
    paths: validPaths,
    fallback: false,
  }
  // fallback: false => every non valid urls redirect to 404
  //
  // fallback: true  => paths that doenst get generated during build time,
  // will run GetStaticProps on request. While it runs, you will see a loading state,
  // then after its generated, every other request to that url will be already pre-rendered 
  //  
  // fallback: 'blocking' => paths that doenst get generated during build time,
  // will use SSR. There is no loading state, only a waiting period between request, and page load 
  // But if SSR is done, the path will be added to the pre-rendered paths 
}

function getCurrentProduct(handle: string, p: Partial<Product>[]): Partial<Product> {
  for (let prod of p) {
    if (prod.handle === handle) {
      return prod
    }
  }
  //this just makes ts happy,
  //we will allways fing the target product,
  //bcs of  getStaticPaths (only valid products redirect to this page)
  return p[0]
}

const SingleProductPage: NextPage<ProductsPageProps> = ({
  products
}) => {
  //generate related products array
  const { query } = useRouter()

  //while we only use a single [handle] dynamic page
  //I think query.handle will only be of type string, sooo....
  //@ts-ignore
  const currentProduct = getCurrentProduct(query.handle, products)

  return (
    <DefaultLayout>
      {/* Maybe breadcrumbs? */}

      <Seo title={currentProduct.title!} />
      <article className="">
        <Link href="/products">Back to products</Link>
        <h1 className="mt-12 mb-2 font-bold font-hind text-2xl">{currentProduct.title}</h1>
        <p className="mb-12 font-kameron text-lg">{currentProduct.description}</p>
        <button className="divide-x-2 divide-offwhite px-6 py-2 bg-grey-dark text-offwhite rounded-md text-xl font-semibold tracking-wider"
        >
          <span className="pr-2">Purchase</span>
          <span className="pl-2">{currentProduct.priceRange?.minVariantPrice.amount}</span>
        </button>
      </article>
    </DefaultLayout>
  )
}
export default SingleProductPage

