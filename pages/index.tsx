import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Image from "next/legacy/image"
import { DefaultLayout } from '../src/layouts'
import HomepageSeo from '../src/seo/HomepageSeo'

/*
const SHOP_QUERY = `
  query ShopInfo {
    shop {
      name
      description
  }
}
`
export const getServerSideProps = async () => {
  const { data } = await storefront({ query: SHOP_QUERY })
  return {
    props: {
      data: data
    }
  }
}

* */
const Home = () => {
  return (
    <DefaultLayout>
      <article>
        <h1>Home</h1>
      </article>
      <HomepageSlider />
    </DefaultLayout>
  )
}
export default Home

const HomepageSlider: React.FC = () => {
  return (
    <article className='bg-blue-100 overflow-hidden'>
      <div>
        <h1 className='text-4xl font-hind font-bold tracking-wide text-primary'>In Need of Vases or Mugs?</h1>
        <h2 className='text-5xl font-hind font-bold tracking-wide text-darkGray'>We've got you covered.</h2>
      </div>
      <section className='absolute bg-red-100 h-[800px] w-screen'>
      </section>

    </article>
  )
}

const ImageWrapper = () => {
  return (
    <div className="relative w-[550px] h-[750px] shadow-sm">
      <Image src="/banner-img.JPG"
        layout="fill"
        objectFit="cover"
        className="rounded-b-sm rounded-t-full "
        priority={true}
      />
    </div>
  )
}

