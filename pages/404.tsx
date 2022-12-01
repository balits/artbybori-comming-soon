import { NextPage } from "next"
import Logo from "../src/components/Logo"
import Seo from "../src/Seo"

const NotFound: NextPage = () => {
  //TODO add <Head /> to 404 page. (eg.: title= "Not Found - Art by Bori")
  return (
    <div className="relative w-screen bg-offwhite h-screen ">
      <Seo title="Not found" />

      <header className="z-10 flex items-center justify-center  fixed top-0 h-header-base md:h-header-md xl:h-header-xl  w-full shadow-sm">
        <Logo />
      </header>

      <main className="pt-60 flex-col justify-center items-center">
        <h1 className="text-4xl text-stone-900 font-kameron font-semibold w-full text-center xl:text-5xl">
          404
        </h1>
        <p className="font-kameron text-3xl text-darkGray text-center xl:text-4xl">
          Page does not exist
        </p>
        <p className="mt-8 text-lg text-center font-hind mx-auto text-darkGray w-4/5 xl:text-xl xl:w-2/3">
          Check if you searched for the intended URL, or try visiting a bit later. Additionaliy, check your Internet connection just to be sure.
        </p>
      </main>
    </div>
  )
}

export default NotFound
