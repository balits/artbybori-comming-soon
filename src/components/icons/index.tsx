/**
* Props for the `Icon` component.
* `classname` - A string for custom styling
* `type` - Types of icons, like "x", "right-arrow", "left-arrow"
* */
interface IconProps {
  className?: string,
  type: "x" | "right-arrow" | "left-arrow",
}

/**
* Icon component which uses svgs copied from `Heroicons`.
* For currently supported icons, see `IconProps`'s `type` attribute.
* Other than basic styling, you can overwrite this and use custom styling with the `className` attribute.
* */
const Icon: React.FC<IconProps> = ({ className, type }) => {
  const baseStyle = "w-5 h-5 md:h-6 md:w-6"
  const style = baseStyle + " " + className
  switch (type) {
    case "x": return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={style}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
    case "right-arrow": return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={style}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
    case "left-arrow": return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={style}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
  }
}

export default Icon
