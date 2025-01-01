
import './index.css'
import Navbar from './components/header/Navbar/Navbar.jsx'
import Presentation from './components/body/presentation/Presentation.jsx'
import About from './components/body/about/About.jsx'
import Projects from './components/body/projects/Projects.jsx'
import Skills from './components/body/skills/Skills.jsx'
import Contact from './components/body/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {

  return (
    <div >
      <Navbar />
      <Presentation />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
          </div>
  )
}

export default App
