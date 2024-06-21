import { Link } from "react-router-dom"

export function Featured() {
  return (
    <section id="Featured" className="w-full bg-accent-700 text-primary-50">
      <div className="mx-auto h-full py-10 text-center md:w-3/4">
        <h2 className="mx-auto mb-4 text-2xl font-bold">Featured Projects</h2>
        <div id="feat-container" className="flex flex-row gap-4 overflow-scroll lg:w-full xl:overflow-visible">
          <article className="flex aspect-video h-44 flex-col justify-center bg-[url(/media/TSL-480x270.jpeg)] bg-cover text-primary-50 text-opacity-0 transition-all hover:text-opacity-100 hover:shadow-xl md:w-72"></article>
          <article className="flex aspect-video h-44 flex-col justify-center bg-[url(/media/TGAR-480x270.jpeg)] bg-cover text-primary-50 text-opacity-0 transition-all hover:text-opacity-100 hover:shadow-xl md:w-72"></article>
          <article className="flex aspect-video h-44 flex-col justify-center bg-[url(/media/LAL-480x270.jpeg)] bg-cover text-primary-50 text-opacity-0 transition-all hover:text-opacity-100 hover:shadow-xl md:w-72"></article>
          <article className="flex aspect-video h-44 flex-col justify-center bg-[url(/media/BOI-480x270.jpeg)] bg-cover text-primary-50 text-opacity-0 transition-all hover:text-opacity-100 hover:shadow-xl md:w-72"></article>
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
