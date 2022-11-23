import React, { useState, createContext, useContext } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Nav from "./Nav"

interface SidebarObject {
  isOpen: boolean,
  onClose: () => void
  onOpen: () => void
}

export const NavSidebarContext = createContext<SidebarObject>({
  isOpen: false,
  onClose: () => { },
  onOpen: () => { }
})

/**
* This hook creates a default DrawerObject using `useState`.
* Initialy, open is set to `false`
* */
const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)

  return {
    isOpen,
    onClose,
    onOpen
  } as SidebarObject
}

/**
* This is a basic Context Provider for a DrawerObject.
* It creates a default `DrawerObject` with `useDrawer`.
* */
export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const defaultValue = useSidebar()

  return (
    <NavSidebarContext.Provider value={defaultValue}>
      {children}
    </NavSidebarContext.Provider>
  )
}

/**
* Sidebar Componenet, which slides in from the left.
* Currenty, I cant implement one which slides in from the right...
* */
export const NavSidebar: React.FC = () => {
  const { isOpen, onClose } = useContext(NavSidebarContext)

  return (
    <AnimatePresence>
      {isOpen &&
        <>
          <motion.div className="w-full h-full absolute z-[49] bg-black/40 top-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div className="z-50 bg-offwhite absolute inset-0 h-full w-72 pr-4 pl-6  md:pl-8 mt:pt-8 flex items-start justify-start flex-col gap-y-20"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            exit={{ x: -1000 }}
            transition={{
              type: "tween",
              duration: 0.4,
              delay: 0.2
            }}
          >
            <div className="flex items-center justify-between w-full h-16 md:h-20 xl:h-24">
              <p className="text-base md:text-xl lg:text-[24px] xl:text-[28px] font-cantata font-bold">ART BY BORI</p>
              <button aria-label="Close navigation panel." onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:h-6 md:w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <Nav flexDirection="col" />
          </motion.div>
        </>
      }
    </AnimatePresence >
  )
}
