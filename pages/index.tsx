import { NextPage } from "next"
import { DefaultLayout } from '../src/layouts'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="h-screen w-full bg-gray-300" />
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <p className="text-[#fe670c] text-5xl md:text-6xl lg:text-8xl font-serif mb-8">
          Ceramics for your home
        </p>
        <section className="w-fit grid place-items-center h-fit gap-2 lg:gap-4 grid-cols-2 grid-flow-row lg:grid-flow-col lg:cols-4 lg:grid-rows-2">
          <div className="h-[320px] md:h-[400px] w-full bg-gray-500 col-span-2 row-span-2 lg:w-[60vw] lg:max-w-[640px] lg:h-full">1</div>
          <div className="h-[160px] md:h-[200px] w-[160px] md:w-[200px] lg:w-[30vw] lg:h-[30vw] lg:max-w-[320px] lg:max-h-[320px] bg-gray-200 ">2</div>
          <div className="h-[160px] md:h-[200px] w-[160px] md:w-[200px] lg:w-[30vw] lg:h-[30vw] lg:max-w-[320px] lg:max-h-[320px] bg-gray-200 ">2</div>
          <div className="h-[160px] md:h-[200px] w-[160px] md:w-[200px] lg:w-[30vw] lg:h-[30vw] lg:max-w-[320px] lg:max-h-[320px] bg-gray-200 ">2</div>
          <div className="h-[160px] md:h-[200px] w-[160px] md:w-[200px] lg:w-[30vw] lg:h-[30vw] lg:max-w-[320px] lg:max-h-[320px] bg-gray-200 ">2</div>
        </section>
      </div>

      <section className="h-fit py-28 md:p-0 md:h-[60vh] lg:h-[80vh] w-full flex flex-col items-center justify-center ">
        <p className="text-darkGreen text-4xl font-bold tracking-wide mb-12 lg:mb-20">Handmade Ceramics.</p>
        <p className="text-grey-dark text-base break-words lg:text-center lg:mx-16">All of our products are carefully had-crafted by ceramic artist, Bori Borbely. They fire at high temperatures so they are microwave and dishwasher safe. All of our products are arefully had-crafted by ceramic artist, Bori Borbely. They fire at high temperatures so they are microwave and dishwasher safe. All of our products are arefully had-crafted by ceramic artist, Bori Borbely. They fire at high temperatures so they are microwave and dishwasher safe.</p>
      </section>

      <ul className="snap-x pt-16 max-h-fit flex item-center justify-center overflow-x-auto gap-x-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </DefaultLayout>
  )
}
export default Home

const Card: React.FC = () => {
  return (
    <li className="snap-center bg-gray-300 text-grey-dark w-[250px] h-[400px] md:w-[350px] md:h-[500px] lg:w-[550px] lg:h-[700px] flex-shrink-0 flex items-center justify-center">
      <div className="h-full mx-8 relative flex flex-col items-center justify-center">
        <p className="text-xl md:text-2xl lg:text-4xl mb-8 md:mb-16  lg:mb-20 font-bold tracking-wide text-center">Tips for decorating your home</p>
        <p className="text-sm text-center">Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, wich are fired at high temperatures to give them a hard, durable form.</p>
        <div className="absolute bottom-0 mb-4 lg:mb-12 flex items-center justify-center">
          <button className="text-sm lg:text-base">Learn more</button>
        </div>
      </div>
    </li>
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

