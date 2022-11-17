/* TYPES OF SEO PROPS 
* to learn more: "https://shopify.dev/api/hydrogen/components/primitive/seo"
* {
*   title: string;
*   description: string;
*   titleTemplate?: string; --like "%s - ${data.title}"
*   lang?: string;
* }
* */

import Head from "next/head"


const Seo = () => {
  return (
    <Head>
      <title>Art by Bori </title>
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

export default Seo
