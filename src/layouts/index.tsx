import { NavSidebar, CartSidebar, NavSidebarContext, CartSidebarContext } from "../components/sidebar"
import Header from "../components/Header"
import { useContext, useEffect } from "react"
import Footer from "../components/Footer"

type LayoutChildren = { children: React.ReactNode }

export const DefaultLayout: React.FC<LayoutChildren> = ({ children }) => {
  const { isOpen: navIsOpen } = useContext(NavSidebarContext)
  const { isOpen: cartIsOpen } = useContext(CartSidebarContext)

  //this prevents scroll on the background-content, when modal+overlay is present
  useEffect(() => {
    if (navIsOpen || cartIsOpen) {
      document.body.classList.add("overflow-y-hidden");
    }
    else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [navIsOpen, cartIsOpen])

  return (
    <div className="max-w-screen overflow-hidden bg-offwhite flex flex-col items-center justify-start">
      <Header />
      <NavSidebar />
      <CartSidebar />

      <main className={`w-full max-w-[1400px] px-4  xl:p-0  mt-header-base md:mt-header-md xl:mt-header-xl`}>
        {/* tailwind doesnt allow a custom spacing utility for max-w-<utility>, but does for max-h-<utility> ?? */}
        {children}
      </main>
      <Footer />

    </div>
  )
}

