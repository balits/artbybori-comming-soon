import { NextPage } from "next"
import { DefaultLayout } from "../../src/layouts"
import Seo from "../../src/Seo"

const ComingSoon: NextPage = () => {
  return (
    <DefaultLayout>
      <Seo title="Coming soon" />
      <article>
        <h1>Coming soon</h1>
      </article>
    </DefaultLayout>
  )
}

export default ComingSoon
