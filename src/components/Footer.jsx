export function Footer() {
  /* eslint-disable-next-line no-undef */
  const version = APP_VERSION

  return (
    <>
      <section className="h-72 w-full bg-accent-700 text-primary-50">
        <div className="mx-auto flex h-full w-3/4 flex-row">
          <div className="w-1/3 p-10">
            <h3>Navigation</h3>
            <ul>
              <li>Top</li>
              <li>About</li>
              <li>Credits</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w-1/3 p-10">
            <h3>Connect with me</h3>
          </div>
          <div className="w-1/3 p-10">
            <h3>Posts</h3>
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
