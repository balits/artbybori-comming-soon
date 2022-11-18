import Link from "next/link"
import { useContext } from "react"
import { CartDrawerContext, NavDrawerContext } from "./drawer"
import Nav from "./Nav"

const Header: React.FC = () => {
  const { onOpen: navOnOpen, open: navOpen } = useContext(NavDrawerContext)
  //const { onOpen: cartOnOpen } = useContext(CartDrawerContext)


  return (
    <header className="fixed top-0 flex items-center justify-between filter backdrop-blur-lg bg-offwhite/70 w-full max-w-[1500px] z-30 h-header-base md:h-header-md xl:h-header-xl">
      <button className="lg:hidden p-2 md:p-3 lg:p-4" aria-label="Open navigation panel from the left side." onClick={navOnOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:h-6 md:w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <Link href="/">
        <p className="text-[16px] md:text-xl lg:text-[24px] xl:text-[28px] lg:pl-4 font-cantata font-bold">ART BY BORI</p>
      </Link>
      <Nav flexDirection="row" />
      <button className="p-2 md:p-3 lg:p-4" aria-label="Open cart panel from the right side.">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:h-6 md:w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      </button>
    </header>
  )
}
export default Header

