import { HashLink as Link } from "react-router-hash-link"
import { slide as Menu } from "react-burger-menu"
import { FiMenu } from "react-icons/fi"

function NavMenuDesktop() {
  return (
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
  )
}

function NavMenuMobile() {
  return (
    <Menu right customBurgerIcon={<FiMenu />}>
      <Link to="/#About">About</Link>
      <Link to="/#Contact">Contact</Link>
      <Link to="/Credits">Credits</Link>
    </Menu>
  )
}

export function Header() {
  const screenSizeSmall = 640
  return (
    <section className="fixed top-0 flex h-14 w-full flex-col justify-center bg-primary-950 text-primary-50">
      <div className="mx-auto flex w-5/6 flex-row justify-between">
        <div className="w-3/4 md:w-1/2">
          <Link to="/#Hero">
            <div>
              <div className="mb-0 text-lg font-bold leading-none md:text-2xl">James M. Drake, Jr.</div>
              <div className="mt-0 text-xs leading-none">Cinematographer & Camera Operator</div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          {screen.width <= screenSizeSmall ? <NavMenuMobile /> : <NavMenuDesktop />}
        </div>
      </div>
    </section>
  )
}
