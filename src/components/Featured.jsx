import { Link } from "react-router-dom"

export function Featured() {
  return (
    <section id="Featured" className="h-80 w-full bg-accent-700 text-primary-50">
      <div className="mx-auto h-full w-3/4 py-10 text-center">
        <h2 className="mx-auto mb-4 text-2xl font-bold">Featured Projects</h2>
        <div id="feat-container" className="flex w-full flex-row gap-4">
          <article className="flex aspect-video w-72 flex-col justify-center bg-[url(TSL-480x270.jpeg)] bg-cover text-primary-50 text-opacity-0 transition-all hover:text-opacity-100 hover:shadow-xl"></article>
          <article className="flex aspect-video w-72 flex-col justify-center bg-[url(TGAR-480x270.jpeg)] bg-cover text-primary-50 text-opacity-0 transition-all hover:text-opacity-100 hover:shadow-xl"></article>
          <article className="flex aspect-video w-72 flex-col justify-center bg-[url(LAL-480x270.jpeg)] bg-cover text-primary-50 text-opacity-0 transition-all hover:text-opacity-100 hover:shadow-xl"></article>
          <article className="flex aspect-video w-72 flex-col justify-center bg-[url(BOI-480x270.jpeg)] bg-cover text-primary-50 text-opacity-0 transition-all hover:text-opacity-100 hover:shadow-xl"></article>
        </div>
        <p className="pt-6">
          <Link to="/credits" className="transition-all hover:underline">
            View more of my credits&rarr;
          </Link>
        </p>
      </div>
    </section>
  )
}
