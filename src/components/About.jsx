export function About() {
  return (
    <section id="About" className="w-full bg-primary-50 text-primary-950 md:h-96">
      <div className="mx-auto flex h-full w-3/4 flex-col text-center md:flex-row">
        <div className="p-5 md:w-1/2 md:p-10">
          <div className="mx-auto aspect-[7/5] w-full bg-[url(/media/About-720x540.jpeg)] bg-cover md:w-96"></div>
        </div>
        <div className="p-5 text-center md:w-1/2 md:p-10 md:text-left">
          <h2 className="mb-4 text-2xl font-bold">A little about me</h2>
          <p>
            I&rsquo;m a cinematographer and camera operator based in Los Angeles, California. I work on a variety of
            content including scripted and unscripted film and television, commercials, and sports and live events. I
            specialize in camera movement using dollies, cranes, and remote heads. I love traveling the world and
            capturing interesting stories that entertain and intrigue!
          </p>
          {/* <p className="mt-4">Find out more about me &rarr;</p> */}
        </div>
      </div>
    </section>
  )
}
