import { Product } from "@shopify/hydrogen-react/storefront-api-types"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import ProductModal from "./ProductModal"

interface ProductGridProps {
  products: {
    node: Partial<Product>[]
  }
}


export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Partial<Product> | null>(null)

  const closeModal = () => setIsOpen(false)
  const selectAndOpen = (v: any) => {
    setSelectedProduct(v)
    setIsOpen(true)
  }
  return (
    <motion.article className="grid grid-cols-3 grid-flow-cols gap-4">
    </motion.article>
  )
}
