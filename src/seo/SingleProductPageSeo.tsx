import Head from "next/head"

interface Props {
  productTitle: string
}

export default function SingleProductPageSeo({ productTitle }: Props) {
  return (
    <Head>
      <title>{productTitle} - Art by Bori </title>
    </Head>
  )
}
