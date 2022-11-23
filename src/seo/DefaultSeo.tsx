/* TYPES OF SEO PROPS 
* learn more: "https://shopify.dev/api/hydrogen/components/primitive/seo"
* {
*   title: string;
*   description: string;
*   titleTemplate?: string; --like "%s - ${data.title}"
*   lang?: string;
* }
* */

import Head from "next/head"


/**
* `SEO` component for every page. It is rendered by `DefaultLayout`
* It contains basic meta tags and a default title tag for seo purposes.
* Additional SEO should be used for every page though, for page-specific tags.
* 
* Usage:
*   <DefaultLayout>
*     <DefaultSeo />
*     { App renders here! }
*   </DefaultLayout>
*
* NOTE: You should use page-specific SEO components for each page, for example:
*
*  <DefaultLayout>
*     `<DefaultSeo />`
*       <ProductsPage>
*         `<ProductsSeo />`
*         { Insert content here! }
*       </ProductsPage>
*   </DefaultLayout>
* */
export default function DefaultSeo() {
  return (
    <Head>
      <title>Art by Bori</title>
      <meta name="robots" content="all" key="robots" />
      <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
      <meta name="google" content="notranslate" key="notranslate" />
      <link rel="icon" href="/favicon.ico" key="favicon" />
      {/* only if something exists on multiple URLS
      <link rel="canonical" href="https://example.com/products" key="canonical" />
      */}
    </Head>
  )
}
