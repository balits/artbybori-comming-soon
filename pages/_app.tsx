import "../styles/globals.css"
import type { AppProps } from 'next/app'
import { DefaultLayout } from "../src/layouts"

type MyLayout = React.FC | "nolayout"

export default function App({ Component, pageProps }: AppProps) {
  if ((Component as any).Layout === "nolayout") {
    return <Component {...pageProps}></Component>
  }
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
