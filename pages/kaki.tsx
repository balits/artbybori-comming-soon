import Link from "next/link"

const NotFound = () => {
  return (
    <main className="-z-10 relative min-w-screen h-screen   flex justify-center items-center  font-kameron ">
      <div className="mb-20 w-fit h-fit">
        <h1 className="text-5xl text-stone-900 font-hind font-semibold w-full text-center mb-8">
          404 - Page Not Found
        </h1>
        <p className="text-2xl  text-stone-600 text-center">
          Sadly the page You tried to visit simply doesn&apos;t exist.
        </p>
        <p className="text-2xl  text-stone-600 text-center">
          Navigate back to the&nbsp;
          <Link href="/">
            <span className="underline">
              Hompage
            </span>
          </Link>
          , or check out our&nbsp;
          <Link href="/products">
            <span className="underline">Products!</span>
          </Link>
        </p>
      </div>
    </main>
  )
}

export default NotFound
