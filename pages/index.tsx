import { NextPage } from "next"
import { NextSeo } from "next-seo"
import Image from "next/legacy/image"

export async function getStaticProps() {
  return {
    props: {}
  }
}

const Home: NextPage = ({ }) => {
  return (
    <>
      <NextSeo
        title="Coming Soon"
        defaultTitle="Art by Bori"
        titleTemplate="%s | Art by Bori"
        description="The Offical website for Art by Bori is under construction, and will be live in a couple of months"
        themeColor="#828770"
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
              url: 'https://artbybori.com/images/coming-soon-bg.jpg',
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
      <main className="overflow-hidden w-screen max-h-screen bg-offwhite text-decorative-darkGreen grid grid-rows-2 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1">
        <section className="relative w-full h-full  flex items-center justify-center ">
          <div className="absolute -top-8 lg:-top-6 text-5xl md:text-6xl lg:text-8xl xl:text-[108px] flex items-center justify-center  w-full h-20 font-cantata ">
            <h1 className="uppercase">
              coming&nbsp;soon
            </h1>
          </div>

          <p className="text-center font-kameron mb-16 lg:mb-0 leading-5 w-5/6 text-[16px] md:text-lg xl:text-xl  lg:w-4/6 mx-auto flex flex-col  gap-y-6 lg:gap-y-8">
            <span>
              We are currently working on our new webshop!
            </span>
            <span>
              In the meantime you can visit our social media platforms for more information and behind the scenes content.
            </span>
          </p>

          <div className="absolute bottom-0 mb-14 lg:mb-24 w-full flex justify-center items-center gap-x-10 lg:gap-x-10">
            <a href="https://www.facebook.com/artbybori" target={"_blank"} rel="noreferrer" className="relative w-4 h-4 lg:w-6 lg:h-6 inline-flex py-1 px-2 transition-transform delay-100 duration-200 hover:-translate-y-1 cursor-pointer" >
              <Image src="/icons/facebook-f.svg" alt="Link to the Art by Bori Facebook page" objectFit="fill" layout="fill" />
            </a>
            <a href="https://www.instagram.com/artbybori" target={"_blank"} rel="noreferrer" className="relative w-5 h-5 lg:w-6 lg:h-6 inline-flex p-2 transition-transform delay-100 duration-200 hover:-translate-y-1 cursor-pointer">
              <Image src="/icons/instagram.svg" alt="Link to the Art by Bori Instagram page" objectFit="fill" layout="fill" />
            </a>
            <a href="mailto:artbybori@gmail.com" target={"_blank"} rel="noreferrer" className="relative  w-5 h-5 lg:w-6 lg:h-6 inline-flex p-2 transition-transform delay-100 duration-200 hover:-translate-y-1 cursor-pointer">
              <Image src="/icons/email.svg" alt="Link to the Art by Bori Instagram page" objectFit="fill" layout="fill" />
            </a>
          </div>
        </section>

        <section className="relative overflow-hidden mx-8 rounded-t-full lg:w-full lg:h-full  lg:rounded-none">
          <Image
            src="/images/coming-soon-bg.jpg"
            alt="A mug from Art by Bori"
            objectFit="cover"
            layout="fill"
            priority
          />
        </section>
      </main>
    </>
  )
}
export default Home
