import { NextPage } from "next"
import Image from "next/legacy/image"
import { DefaultLayout } from '../src/layouts'
import Seo from "../src/Seo"

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Seo title="Home" />

    </DefaultLayout>
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

/*
const SHOP_QUERY = `
  query ShopInfo {
    shop {
      name
      description
  }
}
* */

