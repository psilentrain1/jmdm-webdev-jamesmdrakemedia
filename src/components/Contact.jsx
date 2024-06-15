export function Contact() {
  return (
    <section id="Contact" className="h-72 w-full bg-primary-50 text-primary-950">
      <div className="mx-auto flex h-full w-1/2 flex-col justify-evenly text-center align-middle">
        <h2 className="text-2xl font-bold">Reach Out!</h2>
        <p>Let’s collaborate! Check out some of my previous work and contact me.</p>
        <a
          href="mailto:info@jamesmdrakemedia.com"
          target="_blank"
          className="mx-auto flex h-10 w-32 flex-col justify-center bg-accent-600 text-primary-100 hover:bg-accent-500 active:bg-accent-400">
          Contact Me
        </a>
      </div>
    </section>
  )
}
