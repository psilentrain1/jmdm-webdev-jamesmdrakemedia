import { IconContext } from "react-icons"
import { IoIosArrowDropup } from "react-icons/io"

export function ToTop() {
  return (
    <div className="fixed bottom-6 right-6 flex h-16 w-12 flex-col justify-center bg-accent-700 text-primary-50 shadow-lg hover:bg-accent-500">
      <IconContext.Provider value={{ size: "2rem", className: "mx-auto" }}>
        <IoIosArrowDropup />
      </IconContext.Provider>
    </div>
  )
}
