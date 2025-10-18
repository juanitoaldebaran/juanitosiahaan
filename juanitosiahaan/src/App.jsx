import Navbar from "./components/Navbar"
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Experiences from "./components/Experiences"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div>
      <Navbar/>
      <div id="content">
        <Home />
        <AboutMe />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

