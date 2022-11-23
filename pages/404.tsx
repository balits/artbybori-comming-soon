import Link from "next/link"
import { NoHeaderLayout } from "../src/layouts"

const NotFound = () => {
  //TODO add <Head /> to 404 page. (eg.: title= "Not Found - Art by Bori")
  return (
    <NoHeaderLayout>
      <section className="pt-28 flex flex-col justify-center items-center">
        <h1 className="text-7xl text-stone-900 font-kameron font-semibold w-full text-center mb-8">
          404
        </h1>
        <p className="font-hind text-4xl  text-darkGray text-center ">
          Sadly the page you tried to visit simply doesn&apos;t exist.
        </p>
        <p className="text-xl text-center font-hind mx-auto w-[65vw] text-darkGray ">
          Check if you searched for the intended URL, or try visiting a bit later. Additionaliy, check your Internet connection just to be sure.
        </p>
      </section>
    </NoHeaderLayout>
  )
}

NotFound.Layout = "nolayout"
export default NotFound
