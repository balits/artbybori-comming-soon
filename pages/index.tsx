import { NextPage } from "next"
import Image from "next/image"
import { motion } from "framer-motion"
import Head from "next/head"
import { NextSeo } from "next-seo"

export async function getStaticProps() {
  return {
    props: {}
  }
}

const ComingSoonSeo = () => {
  const t = "Art by Bori"
  const desc = "The Art by Bori website is under construction, and will be live in a couple of months"
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf8" />
      <meta name="description" content={desc} />
      <title>{t}</title>

      {/*Open Graph*/}
      <meta property="og:title" content={t} key="ogtitle" />
      <meta property="og:description" content={desc} key="ogdesc" />
      <meta property="og:url" content="www.artbybori.com" key="ogtitle" />

      {/*Twitter*/}
    </Head>
  )
}

const Home: NextPage = ({ }) => {
  return (
    <>
      <NextSeo
        title="Coming Soon"
        defaultTitle="Art by Bori"
        titleTemplate="%s | Art by Bori"
        description="The Offical website for Art by Bori is under construction, and will be live in a couple of months"
        themeColor="#fe670c"
        canonical="https://artbybori.com"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.artbybori.com',
          title: 'Art by Bori',
          description: 'The Offical website for Art by Bori is under construction, and will be live in a couple of months',
          article: {
            tags: [
              "coming soon",
              "under construction",
              "website",
              "webshop",
              "ceramics",
              "handmade",
              "mugs",
              "mug",
              "vase",
              "vases"
            ],
            section: "Handmade Ceramics"
          },
          images: [
            {
              url: 'https://artbybori.com/coming-soon-bg.jpg',
              width: 637,
              height: 956,
              alt: "The bottom of a Mug from Art by Bori",
              type: 'image/jpeg',
            },
          ],
          siteName: 'Art by Bori',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        facebook={{
          appId: "" // visit next-seo
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
        additionalMetaTags={[{
          property: 'applicatoin-name',
          content: "Art by Bori"
        }, {
          property: "dc:creator",
          content: "Borbély Bori"
        }
        ]}
        additionalLinkTags={[
          /*ű
          {
            rel: 'icon',
            href: 'url for icon'
          },
          {
            rel: 'apple-touch-icon',
            href: 'https://www.test.ie/touch-icon-ipad.jpg',
            sizes: '76x76'
          },
          {
            rel: 'manifest',
            href: '/manifest.json'
          },
          {
            rel: 'preload',
            href: 'https://www.test.ie/font/sample-font.woof2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous'
          }
          */
        ]}
      />
      <main className="w-screen h-screen grid grid-cols-2">
        <section className="w-full h-full bg-offwhite text-myOrange ">
          <div className="h-fit pl-20 pt-60">
            <motion.h1 className="text-7xl mb-40 w-max font-cantata"
            >
              Hi there!
            </motion.h1>
            <p className="flex flex-col text-2xl text-myOrange font-kameron leadin-4 w-[355px]">
              We are currently working on our new webshop! <br />
              In the meantime you can visit our social media platforms for more information and behind the scenes content.
            </p>
          </div>
        </section>
        <section className="w-full h-full relative">
          <Image
            src="/coming-soon-bg.jpg"
            alt="A mug from Art by Bori"
            priority
          />
        </section>
      </main>
    </>
  )
}
export default Home
