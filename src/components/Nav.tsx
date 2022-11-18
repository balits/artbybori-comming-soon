import Link from "next/link"
import clsx from "clsx"

interface NavProps {
  flexDirection: "row" | "col"
}
const Nav: React.FC<NavProps> = ({ flexDirection }) => {

  const style = clsx(
    "font-kameron w-fit h-fit flex",
    flexDirection === "row" && "items-center lg:text-xl xl:text-2xl lg:gap-x-14 xl:gap-x-11",
    flexDirection === "col" && "flex-col items-start justify-center gap-y-12 text-xl gap-y-10 md:text-2xl"
  )
  const hideNavbar = clsx(flexDirection === "row" && "hidden lg:block")
  //in Header.tsx, if we're past the lg(1024px) breakpoint, we want to show our navbar
  //but if the viewport is smaller than that, e.g.: mobiles or tablets, we want to hide it, and our NavDrawer will play the navbar role

  return (
    <nav className={hideNavbar}>
      <ul className={style}>
        <li className=""><Link href="/portfolio">portfolio</Link></li>
        <li><Link href="/categories">categories</Link></li>
        <li><Link href="/products">products</Link></li>
        <li><Link href="/about">about</Link></li>
      </ul>
    </nav>
  )
}
export default Nav
