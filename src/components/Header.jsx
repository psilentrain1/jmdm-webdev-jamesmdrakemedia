import { HashLink as Link } from "react-router-hash-link"

export function Header() {
  return (
    <section className="fixed top-0 flex h-14 w-full flex-col justify-center bg-primary-950 text-primary-50">
      <div className="mx-auto flex w-5/6 flex-row justify-between">
        <div>
          <Link to="/#Hero">
            <div>
              <div className="mb-0 text-2xl font-bold leading-none">James M. Drake, Jr.</div>
              <div className="mt-0 text-xs leading-none">Cinematographer & Camera Operator</div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <ul className="l flex list-none flex-row justify-evenly gap-6 align-middle">
            <li className="transition-all hover:underline">
              <Link to="/#About">About</Link>
            </li>
            <li className="transition-all hover:underline">
              <Link to="/#Contact">Contact</Link>
            </li>
            <li className="transition-all hover:underline">
              <Link to="/Credits">Credits</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
