import { DefaultLayout } from "../../src/layouts"
import { extractProducts, storefront } from "../../src/utils/shopify"
import { ProductsPageProps, PRODUCTS_QUERY } from "./index"
import { useRouter } from "next/router"
import Link from "next/link"
import { NextPage } from "next"
import { Product } from "@shopify/hydrogen-react/storefront-api-types"
import SingleProductPageSeo from "../../src/seo/SingleProductPageSeo"


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
  // fallback: true  => paths that doenst get generated during build time,
  //  will run GetStaticProps on request. While it runs, you will see a loading state, then after its generated, every other request to that url will be already generated 
  // fallback: 'blocking' => paths that doenst get generated during build time,
  //  will use SSR. There is no loading state, only a waiting period between request, and page load (:().
  //  But if SSR is done, the path will be added to the pre-rendered paths
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
  //breadcrumbs (mayeb useRouter)
  const router = useRouter()
  console.log(router)

  //while we only use a single [handle] dynamic page
  //I think query.handle will only be of type string, sooo....
  //@ts-ignore
  const currentProduct = getCurrentProduct(router.query.handle, products)

  return (
    <DefaultLayout>
      <SingleProductPageSeo productTitle={currentProduct.title!} />
      <article>
        <Link href="/products">Back to products</Link>
        <br />
        {JSON.stringify(currentProduct)}
        <br />
        <h1>{currentProduct.title}</h1>
        <img src={currentProduct.featuredImage?.transformedSrc} />
        {/* Maybe breadcrumbs? */}
        {/* Image grid  */}
        {/* Product title+description+paybutton  */}
        {/* Related Products */}
      </article>
    </DefaultLayout>
  )
}
export default SingleProductPage

