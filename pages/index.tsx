import { NextPage } from "next"
import Image from "next/legacy/image"
//import { DefaultLayout } from '../src/layouts'

const Home: NextPage = () => {
  return (
    <h1>Coming soon :D</h1>
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
        alt="s"
      />
    </div>
  )
}
