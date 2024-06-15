import { HashLink } from "react-router-hash-link"
import { IconContext } from "react-icons"
import { IoIosArrowDropup } from "react-icons/io"

/* let scrollPos = 0
const Top = document.getElementById("Top")

function checkPosition() {
  const windowY = window.scrollY
  if (windowY < scrollPos) {
    // scrolling up
    Top.classList.add("opacity-100")
    Top.classList.remove("opacity-0")
  } else {
    // scrolling down
    Top.classList.add("opacity-0")
    Top.classList.add("opacity-100")
  }
  scrollPos = windowY
}

window.addEventListener("scroll", checkPosition)

// reference: https://dev.to/changoman/showhide-element-on-scroll-w-vanilla-js-3odm */

export function ToTop() {
  return (
    <HashLink to="#top">
      <div
        id="ToTop"
        className="fixed bottom-6 right-6 flex h-16 w-12 flex-col justify-center bg-accent-700 text-primary-50 shadow-lg hover:bg-accent-500">
        <IconContext.Provider value={{ size: "2rem", className: "mx-auto" }}>
          <IoIosArrowDropup />
        </IconContext.Provider>
      </div>
    </HashLink>
  )
}
