import clsx from "clsx"

type ButtonProps = {
  children: React.ReactNode
  bg: "primary" | "darkGreen" | "darkGray" | "transparent"
  rounded: "sm" | "md" | "xl" | "full"
}

const createStyle = (p: ButtonProps) => {
  let base = "px-4 py-3 border-2 uppercase font-semibold tracking-wider"
  switch (p.rounded) {
    case "sm": base += " rounded-sm"; break;
    case "md": base += " rounded-md"; break;
    case "xl": base += " rounded-xl"; break;
    case "full": base += " rounded-full"; break;
  }
  switch (p.bg) {
    case "transparent": base += " bg-transparent"; break;
    case "primary": base += " bg-primary text-primary"; break;
    case "darkGray": base += " bg-darkGray text-darkGray"; break;
    case "darkGreen": base += " bg-darkGreen text-darkGreen"; break;
  }
  return base;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={`${props.bg === "darkGreen" ? "bg-darkGreen text-offwhite" : ""}`}>{props.children}</button>
  )
}

export default Button

const Template = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center flex-col gap-y-9 bg-offwhite">
      <div className='flex justify-center items-center'>
        <button className="ml-4 px-4 py-3 rounded-md bg-primary uppercase text-offwhite font-semibold tracking-wider">Go to checkout</button>
        <button className="ml-4 px-4 py-3 rounded-md bg-darkGreen uppercase text-offwhite font-semibold tracking-wider">Go to checkout</button>
        <button className="ml-4 px-4 py-3 rounded-md bg-stone-800 uppercase text-offwhite font-semibold tracking-wider">Go to checkout</button>
      </div>

      <div className='flex justify-center items-center'>
        <button className="ml-4 px-4 py-3 rounded-md border-2 border-primary text-primary uppercase  font-semibold tracking-wider">Go to checkout</button>
        <button className="ml-4 px-4 py-3 rounded-md border-2 border-darkGreen text-darkGreen uppercase  font-semibold tracking-wider">Go to checkout</button>
        <button className="ml-4 px-4 py-3 rounded-md border-2 border-stone-800 text-stone-800 uppercase  font-semibold tracking-wider">Go to checkout</button>
      </div>

      <div className='flex justify-center items-center'>
        <button className="ml-4 px-4 py-3 rounded-full border-2 border-primary text-primary uppercase  font-semibold tracking-wider">Go to checkout</button>
        <button className="ml-4 px-4 py-3 rounded-full border-2 border-darkGreen text-darkGreen uppercase  font-semibold tracking-wider">Go to checkout</button>
        <button className="ml-4 px-4 py-3 rounded-full border-2 border-stone-800 text-stone-800 uppercase  font-semibold tracking-wider">Go to checkout</button>
      </div>
    </section>
  )
}
