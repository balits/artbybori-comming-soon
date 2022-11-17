import Header from "../components/Header"
import Seo from "../components/seo"

type LayoutChildren = { children: React.ReactNode }

export const DefaultLayout: React.FC<LayoutChildren> = ({ children }) => {
  return (
    <div className="relative w-screen bg-offwhite h-screen flex flex-col items-center justify-start ">
      <Seo />
      <Header />
      <main className="h-fit w-full max-w-[1400px]">
        {children}
      </main>
    </div>
  )
}

export const NoHeaderLayout: React.FC<LayoutChildren> = ({ children }) => {
  return (
    <div className="relative w-screen bg-offwhite h-screen flex flex-col items-center justify-start ">
      <main className="h-fit w-full max-w-[1400px]">
        {children}
      </main>
    </div>
  )
}
