import Link from "next/link"
import { NoHeaderLayout } from "../src/layouts"

const NotFound = () => {
  //TODO add head-title to not found page ("404 -404 -  Art by Bori")
  return (
    <NoHeaderLayout>
      <section className="pt-28">
        <h1 className="text-7xl text-stone-900 font-kameron font-semibold w-full text-center mb-8">
          404
        </h1>
        <p className="font-hind text-4xl  text-darkGray text-center ">
          Sadly the page you tried to visit simply doesn&apos;t exist.
        </p>
      </section>
      <p className="text-xl text-center font-hind mx-auto w-[65vw] text-darkGray ">
        Check if you searched for the intended URL, or try visiting a bit later. Additionaliy, check your Internet connection just to be sure.
      </p>
    </NoHeaderLayout>
  )
}

NotFound.Layout = "nolayout"
export default NotFound
