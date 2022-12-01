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
* */
interface SeoProps {
  title?: string | "default"
}

const Seo: React.FC<SeoProps> = ({
  title
}) => {
  const finalTitle = title ? title + "- Art by Bori" : "Art by Bori"
  return (
    <Head>
      {/* light theme => dark icon*/}
      <link rel="icon" href="/logo-black.png" key="favicon" />
      <title>{finalTitle}</title>
      <meta property="og:title" content={finalTitle} key="og-title" />

      <meta name="robots" content="all" key="robots" />
      <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
      <meta name="google" content="notranslate" key="notranslate" />

      {/* only if something exists on multiple URLS
      <link rel="canonical" href="https://example.com/products" key="canonical" />
      */}
    </Head>
  )
}
export default Seo
