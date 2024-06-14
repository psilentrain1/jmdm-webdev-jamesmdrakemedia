import "./App.css"

import { Header } from "./components/Header.jsx"
import { Hero } from "./components/Hero.jsx"
import { About } from "./components/About.jsx"
import { Featured } from "./components/Featured.jsx"
import { AsSeenOn } from "./components/AsSeenOn.jsx"
import { Contact } from "./components/Contact.jsx"
import { Footer } from "./components/Footer.jsx"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Featured />
      <AsSeenOn />
      <Contact />
      <Footer />
    </>
  )
}

export default App
