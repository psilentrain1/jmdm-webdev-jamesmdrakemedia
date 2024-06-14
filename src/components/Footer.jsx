import { IconContext } from "react-icons"
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6"
import { Link } from "react-router-dom"

export function Footer() {
  /* eslint-disable-next-line no-undef */
  const version = APP_VERSION

  return (
    <>
      <section className="h-60 w-full bg-accent-700 text-primary-50">
        <div className="mx-auto flex h-full w-3/4 flex-row">
          <div className="w-1/3 p-10">
            <h3 className="mb-2 text-xl font-bold">Links</h3>
            <ul>
              <li>Home</li>
              <li>About Me</li>
              <li>
                <Link to="/credits">Credits</Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w-1/3 p-10">
            <h3 className="mb-2 text-xl font-bold">Connect with me</h3>

            <IconContext.Provider value={{ size: "2rem" }}>
              <div className="flex w-full flex-row gap-3">
                <a href="https://www.instagram.com/jamesdrakedp">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaFacebookF />
                </a>
                <a href="">
                  <FaXTwitter />
                </a>
              </div>
            </IconContext.Provider>
          </div>
          <div className="w-1/3 p-10">
            <h3 className="mb-2 text-xl font-bold">Posts</h3>
            <p>Coming soon!</p>
          </div>
        </div>
      </section>
      <section className="flex h-10 w-full flex-col justify-center bg-primary-950 text-center text-xs text-primary-200">
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
