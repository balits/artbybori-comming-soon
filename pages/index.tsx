import { NextPage } from "next"
import Image from "next/legacy/image"
import { motion } from "framer-motion"
import Head from "next/head"

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
    <main>
      <ComingSoonSeo />
      <article className="w-screen h-screen grid grid-cols-2">
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
            layout="fill"
            objectFit="cover"
            priority={true}
            alt="A mug from Art by Bori"
          />
        </section>
      </article>
    </main>
  )
}
export default Home
