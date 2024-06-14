import { Header } from "../components/Header.jsx"
import { Hero } from "../components/Hero.jsx"
import { About } from "../components/About.jsx"
import { Featured } from "../components/Featured.jsx"
import { Contact } from "../components/Contact.jsx"
import { Footer } from "../components/Footer.jsx"

export function Home() {
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
