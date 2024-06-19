import { useEffect } from "react"
import { Header } from "../components/Header.jsx"
import { Hero } from "../components/Hero.jsx"
import { About } from "../components/About.jsx"
import { Featured } from "../components/Featured.jsx"
import { Contact } from "../components/Contact.jsx"
import { Footer } from "../components/Footer.jsx"

export function Home() {
  useEffect(() => {
    const handleContextMenu = e => {
      e.preventDefault()
    }
    document.addEventListener("contextmenu", handleContextMenu)
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Featured />
      <Contact />
      <Footer />
    </>
  )
}
