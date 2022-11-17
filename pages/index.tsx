import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Image from "next/legacy/image"

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
    <section className="w-full h-screen flex justify-center ">
      <div className="grid grid-cols-2 grid-rows-1">
        <div className="h-fit mt-[250px]">
          <h1 className="w-fit text-7xl font-bold mb-6">Handmade ceramics.</h1>
          <p className="text-2xl max-w-[500px] font-kameron">
            All of our products are carefully had-crafted by ceramic artist, Bori Borbely. They fire at high temperatures so they are microwave and dishwasher safe.
          </p>
        </div>
      </div>
    </section>
  )
}
export default Home

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

