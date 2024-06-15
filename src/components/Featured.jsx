export function Featured() {
  return (
    <section id="Featured" className="h-80 w-full bg-accent-700 text-primary-50">
      <div className="mx-auto h-full w-3/4 py-10 text-center">
        <h2 className="mx-auto mb-4 text-2xl font-bold">Featured Projects</h2>
        <div id="feat-container" className="flex w-full flex-row gap-8">
          <article className="flex aspect-video w-72 flex-col justify-center bg-primary-950 text-primary-50 text-opacity-0 transition-all hover:text-opacity-100">
            <h3>90 Day Fiance</h3>
            <p>Camera Operator</p>
          </article>
          <article className="flex aspect-video w-72 flex-col justify-center bg-primary-950 text-primary-50 text-opacity-0 transition-all hover:text-opacity-100">
            <h3>90 Day Fiance</h3>
            <p>Camera Operator</p>
          </article>
          <article className="flex aspect-video w-72 flex-col justify-center bg-primary-950 text-primary-50 text-opacity-0 transition-all hover:text-opacity-100">
            <h3>90 Day Fiance</h3>
            <p>Camera Operator</p>
          </article>
        </div>
      </div>
    </section>
  )
}
