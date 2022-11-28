import { motion, AnimatePresence } from "framer-motion"
import Icon from "../icons"
import { Item } from "./ProductGrid"

interface ProductModalProps {
  isOpen: boolean,
  closeModal: () => void,
  selectedProducts: null | Item
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  closeModal,
  selectedProducts
}) => {
  return (
    <AnimatePresence>
      {isOpen &&
        <>
          <motion.div className="flex items-center justify-center h-full w-full left-0 top-0 absolute z-[49] bg-black/40 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.3
            }}
            onClick={closeModal}
          >
            <motion.div
              className="z-50 w-[500px] h-[700px] grid grid-rows-4 grid-cols-1 bg-offwhite rounded-md overflow-hidden"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{
                duration: 0.3,
                delay: 0.3,
              }}
            >
              <div className="relative w-full row-span-3 bg-grey-dark">
                <button type="button" role={"button"} className="absolute top-0 right-0 p-3" onClick={closeModal}>
                  <Icon type="x" className="text-offwhite" />
                </button>
              </div>

              <div className="w-full m-2 flex flex-col items-start justify-between">
                <div>
                  <h1 className="font-hind text-xl">{selectedProducts!.title}</h1>
                </div>
                <button className="font-kameron text-lg underline ">Learn More</button>
              </div>
            </motion.div>
          </motion.div>
        </>
      }
    </AnimatePresence >
  )
}
export default ProductModal
