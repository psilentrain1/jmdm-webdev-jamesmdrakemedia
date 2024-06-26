import { IconContext } from "react-icons"
import { FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6"
import { HashLink as Link } from "react-router-hash-link"

export function Footer() {
  /* eslint-disable-next-line no-undef */
  const version = APP_VERSION

  return (
    <>
      <section className="w-full bg-accent-700 text-primary-50 md:h-60">
        <div className="mx-auto flex h-full w-5/6 flex-col text-center md:w-3/4 md:flex-row md:text-left">
          <div className="p-5 md:w-1/3 md:p-10">
            <h3 className="mb-2 text-xl font-bold">Links</h3>
            <ul>
              <li>
                <Link to="/#Hero" className="transition-all hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#About" className="transition-all hover:underline">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/#Contact" className="transition-all hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/credits" className="transition-all hover:underline">
                  Credits
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-5 md:w-1/3 md:p-10">
            <h3 className="mb-2 text-xl font-bold">Connect with me</h3>

            <IconContext.Provider value={{ size: "2rem" }}>
              <div className="mx-auto flex w-7/12 flex-row gap-3 md:mx-0 md:w-full">
                <a href="https://www.instagram.com/jamesdrakedp" target="_blank">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/jamesdrakedp" target="_blank">
                  <FaFacebookF />
                </a>
                <a href="https://x.com/jamesdrakemedia" target="_blank">
                  <FaXTwitter />
                </a>
                <a href="https://www.linkedin.com/in/jamesdrakedp/" target="_blank">
                  <FaLinkedinIn />
                </a>
              </div>
            </IconContext.Provider>
          </div>
          <div className="p-5 md:w-1/3 md:p-10">
            <h3 className="mb-2 text-xl font-bold">Posts</h3>
            <p>Coming soon!</p>
          </div>
        </div>
      </section>
      <section className="mt-2 flex h-10 w-full flex-col justify-center bg-primary-950 text-center text-xs text-primary-200">
        <p>
          &copy;2024 James M. Drake, Jr. All rights reserved. All media copyright their respective owners.{" "}
          <a
            className="underline"
            href="https://github.com/psilentrain1/jmdm-webdev-jamesmdrakemedia/issues/new"
            target="_blank">
            Report an issue with this website.
          </a>{" "}
          Site version <strong>{version}</strong>.
        </p>
      </section>
    </>
  )
}
