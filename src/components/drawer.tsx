import React, { useState, createContext, useContext } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Nav from "./Nav"

interface DrawerObject {
  open: boolean,
  onClose: () => void
  onOpen: () => void
}

export const NavDrawerContext = createContext<DrawerObject>({
  open: false,
  onClose: () => { },
  onOpen: () => { }
})

/**
* This hook creates a default DrawerObject using `useState`.
* Initialy, open is set to `false`
* */
export const useDrawer = () => {
  const [open, setOpen] = useState(false)
  const onClose = () => { setOpen(false); console.log("close") }
  const onOpen = () => { setOpen(true); console.log("open") }

  return {
    open,
    onClose,
    onOpen
  } as DrawerObject
}

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const defaultValue = useDrawer()
  return (
    <NavDrawerContext.Provider value={defaultValue}>
      {children}
    </NavDrawerContext.Provider>
  )
}

/*
* TODO
* add directions, and children
* implement reduced motion
* */
export const NavDrawer: React.FC = () => {
  const { open, onClose } = useContext(NavDrawerContext)

  return (
    <AnimatePresence>
      {open &&
        <>
          <motion.div className="w-full h-full absolute z-[49] bg-black/30 top-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div className="z-50 bg-offwhite absolute inset-0 h-full w-[65vw] md:w-[40vw] pr-4 pl-6  md:pl-8 mt:pt-8 flex items-start justify-start flex-col gap-y-20"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            exit={{ x: -1000 }}
            transition={{
              type: "tween",
              duration: 0.4,
              delay: 0.2
            }}
          >
            <section className="flex items-center justify-between w-full h-16 md:h-20 xl:h-24">
              <p className=" text-[20px] md:text-xl lg:text-[24px] xl:text-[28px] font-cantata font-bold">ART BY BORI</p>
              <button aria-label="Close navigation panel." onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:h-6 md:w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </section>
            <Nav flexDirection="col" />
          </motion.div>
        </>
      }
    </AnimatePresence >
  )
}
