import React, { useState, createContext, useContext, useCallback } from "react"
import { AnimatePresence, motion, useReducedMotion, Variants } from "framer-motion"
import Nav from "./Nav"

/**
* These functions are optional, because you wouldnt need "openSidebar" from the context, if my Componenet only closes it.
* Vice versa, the icons in the header only open the sidebar.
* */
interface SidebarObject {
  isOpen: boolean,
  closeSidebar?: () => void
  openSidebar?: () => void
}

export const CartSidebarContext = createContext<SidebarObject>({
  isOpen: false,
  closeSidebar: () => { },
  openSidebar: () => { }
})


export const NavSidebarContext = createContext<SidebarObject>({
  isOpen: false,
  closeSidebar: () => { },
  openSidebar: () => { }
})

/**
* This hook creates a default DrawerObject using `useState`.
* Initialy, open is set to `false`
* */
function useSidebar(): SidebarObject {
  const [isOpen, setIsOpen] = useState(false)
  const closeSidebar = useCallback(() => setIsOpen(false), [])
  const openSidebar = useCallback(() => setIsOpen(true), [])
  //is useCallback really necessary here?
  return { isOpen, closeSidebar, openSidebar }
}

/**
* This is a basic Context Provider for a DrawerObject (I use it to create two providers).
* It creates two `DrawerObject` with `useDrawer`, and assigns it to the NavSidebarContext CartSidebarContext
* */
export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const v1 = useSidebar()
  const v2 = useSidebar()

  return (
    <NavSidebarContext.Provider value={v1}>
      <CartSidebarContext.Provider value={v2}>
        {children}
      </CartSidebarContext.Provider>
    </NavSidebarContext.Provider>
  )
}

/**
* Sidebar Componenet, which builds on top of `AnimatedSidebar`
* Currenty, I cant implement one which slides in from the right...
* EDIT: I figured out how to animate the slide from the right!!
* */
export const NavSidebar: React.FC = () => {
  const { isOpen, closeSidebar } = useContext(NavSidebarContext)

  return (
    <AnimatedSidebar
      isOpen={isOpen}
      closeSidebar={closeSidebar}
      from="left"
    >
      <div className="flex items-center justify-between w-full h-16 md:h-20 xl:h-24 mb-8">
        <p className="text-base md:text-xl lg:text-[24px] xl:text-[28px] font-cantata font-bold">ART BY BORI</p>
        <button aria-label="Close navigation panel." onClick={closeSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:h-6 md:w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <Nav flexDirection="col" />

    </AnimatedSidebar>
  )
}

export const CartSidebar: React.FC = () => {
  const { isOpen, closeSidebar } = useContext(CartSidebarContext)
  return (
    <AnimatedSidebar
      isOpen={isOpen}
      closeSidebar={closeSidebar}
      from="right"
    >
      <section className="h-full w-full p-2 grid grid-cols-1 grid-rows-12 gap-y-2">

        <div className=" flex items-center justify-between w-full h-16 md:h-20 xl:h-24 mb-8">
          <button type="button" aria-label="Close navigation panel." onClick={closeSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:h-6 md:w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <p className="text-base md:text-xl lg:text-[24px] xl:text-[28px] font-cantata font-bold">CART</p>
        </div>

        <div className="row-span-10 ">
          cart content :D
        </div>

        <button className="row-start-12 text-white bg-grey-dark rounded-md font-bold uppercase font-hind text-sm xl:text-lg tracking-wide h-fit py-4 w-[80%] mx-auto"
          type={"button"}
          aria-label="Navigate to the checkout page, where you can buy the content of your cart."
        >
          Go to checkout
        </button>
      </section>
    </AnimatedSidebar>
  )
}

type SidebarProps = SidebarObject & {
  from: "left" | "right",
  children: React.ReactNode
}

const AnimatedSidebar: React.FC<SidebarProps> = ({
  isOpen,
  closeSidebar,
  from,
  children
}) => {
  const isReducedMotion = useReducedMotion();
  const initialX = from === "left" ? -1000 : 1000

  const sidebarVariants: Variants = isReducedMotion ? {
    open: {
      opacity: 1,
      transition: { duration: 0.2 }
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  } : {
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.4
      }
    },
    closed: {
      x: initialX,
      transition: {
        type: "tween",
        duration: 0.4
      }
    }
  }


  console.log(sidebarVariants)

  return (
    <AnimatePresence>
      {isOpen &&
        <motion.div className="fixed top-0 right-0 w-screen min-h-screen z-[49] "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
          onClick={closeSidebar}
        >
          <motion.div className={`fixed  h-full w-sidebar-phone md:w-sidebar-tablet xl:w-sidebar-desktop filter backdrop-blur-md bg-gray-300/40 top-0 ${from === "right" ? "right-0" : "left-0"}  z-50 `}
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {children}
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  )
}
