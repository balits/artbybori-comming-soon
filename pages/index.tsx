import { NextPage } from "next"
import Image from "next/legacy/image"
import { motion } from "framer-motion"

export async function getStaticProps() {
  return {
    props: {}
  }
}

const Home: NextPage = ({ }) => {
  return (
    <main className="w-screen h-screen grid grid-cols-2">
      <article className="w-full h-full bg-offwhite text-myOrange ">
        <section className="h-fit pl-20 pt-60">
          <motion.h1 className="text-7xl mb-40 w-max font-cantata"
          >
            Hi there!
          </motion.h1>
          <p className="flex flex-col text-2xl text-myOrange font-kameron leadin-5 w-[355px]">
            We are currently working on our new webshop! <br />
            In the meantime you can visit our social media platforms for more information and behind the scenes content.
          </p>
        </section>
      </article>
      <section className="w-full h-full relative">
        <Image
          src="/coming-soon-bg.jpg"
          layout="fill"
          objectFit="cover"
          priority={true}
          alt="A mug from Art by Bori"
        />
      </section>
    </main>
  )
}
export default Home
