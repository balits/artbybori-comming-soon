import "../styles/globals.css"
import type { AppProps } from 'next/app'
import DefaultSeo from "../src/seo/DefaultSeo"
import { motion } from "framer-motion"
import { CartProvider } from "@shopify/hydrogen-react"
import { SidebarProvider } from "../src/components/sidebar"
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      transition={{
        type: "tween",
        delay: 0.4
      }}
    >
      <DefaultSeo />
      <CartProvider>

        <SidebarProvider>
          <Component {...pageProps} />

        </SidebarProvider>
      </CartProvider>
    </motion.div>
  )
}
