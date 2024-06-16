export function Hero() {
  return (
    <section id="#Hero" className="mt-14 aspect-video w-screen bg-primary-950">
      {/* <img className="w-full" src="Hero.gif" alt="Samples of my work" /> */}
      <video autoPlay muted loop className="w-full">
        <source src="/media/Hero.mp4" />
      </video>
    </section>
  )
}
