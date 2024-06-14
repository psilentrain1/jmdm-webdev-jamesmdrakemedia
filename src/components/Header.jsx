import { Link } from "react-router-dom"

export function Header() {
  return (
    <section className="fixed top-0 flex h-14 w-full flex-col justify-center bg-primary-950 text-primary-50">
      <div className="mx-auto flex w-5/6 flex-row justify-between">
        <div>
          <Link to="/">
            <div>
              <div className="mb-0 text-2xl font-bold leading-none">James M. Drake, Jr.</div>
              <div className="mt-0 text-xs leading-none">Cinematographer & Camera Operator</div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <ul className="l flex list-none flex-row justify-evenly gap-6 align-middle">
            <li>About</li>
            <li>Credits</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
