import { SiFacebook } from "react-icons/si"
import { SiInstagram } from "react-icons/si"
import { SiTiktok } from "react-icons/si"


export const Footer: React.FC = () => {
  return (
    <footer className="h-footer w-full bg-primary mt-96 flex items-center justify-center">
      <div className="h-full mt-20 w-wrapper-max text-white grid grid-cols-2 ">
        <div>
          <p className="font-bold  text-xl mb-6">Links</p>
          <ul className="grid grid-cols-1 gap-y-3 italic">
            <li>Shop</li>
            <li>About me / Contact</li>
            <li>Privary Policies (Shopify)</li>
            <li>Shipping Policies (Shopify)</li>
            <li>Terms of Service (Shopify)</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl mb-6">Art by Bori</p>
          <p className="text-base italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="italic">
          <p>Copyright?, powered by Shopify</p>
        </div>
        <div>
          <p className="font-bold text-xl mb-6">Social Media</p>
          <ul>
            <li className="grid grid-rows-1 grid-flow-col gap-x-8 w-fit">
              <SiFacebook className="h-5 w-5" />
              <SiInstagram className="h-5 w-5" />
              <SiTiktok className="h-5 w-5" />
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
export default Footer
