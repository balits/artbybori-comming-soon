import { DrawerProvider, NavDrawer, CartDrawer } from "../components/drawer"
import Header from "../components/Header"
import DefaultSeo from "../seo/DefaultSeo"
import Link from "next/link"

type LayoutChildren = { children: React.ReactNode }

export const DefaultLayout: React.FC<LayoutChildren> = ({ children }) => {
  return (
    <div className="relative max-w-screen bg-offwhite h-screen flex flex-col items-center justify-start ">
      <DrawerProvider>
        <Header />
        <NavDrawer />
      </DrawerProvider>
      <main className="h-fit w-full px-3 xl:px-0 xl:max-w-[1400px] mt-header-base md:mt-header-md xl:mt-header-xl">
        {children}
      </main>
    </div>
  )
}

export const NoHeaderLayout: React.FC<LayoutChildren> = ({ children }) => {
  return (
    <div className="relative w-screen bg-offwhite h-screen">
      <header className="z-10 flex items-center justify-center  fixed top-0 h-header-base md:h-header-md xl:h-header-xl  w-full shadow-sm">
        <Link href="/">
          <p className="text-[16px] md:text-xl lg:text-[24px] xl:text-[28px] lg:pl-4 font-cantata font-bold">ART BY BORI</p>
        </Link>
      </header>
      <main className="h-fit w-full px-3 xl:px-0 xl:max-w-[1400px] pt-header-base md:pt-header-md xl:pt-header-xl">
        {children}
      </main>
    </div>
  )
}
