export function Contact() {
  return (
    <section id="Contact" className="h-72 w-full bg-primary-50 text-primary-950">
      <div className="mx-auto flex h-full w-5/6 flex-col justify-evenly text-center align-middle md:w-1/2">
        <h2 className="text-2xl font-bold">Get in touch!</h2>
        <p>
          I’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to
          reach out.
        </p>
        <a
          href="mailto:info@jamesmdrakemedia.com"
          target="_blank"
          className="mx-auto flex h-10 w-32 flex-col justify-center bg-accent-600 text-primary-100 transition-all hover:bg-accent-500 active:bg-accent-400">
          Contact Me
        </a>
      </div>
    </section>
  )
}
