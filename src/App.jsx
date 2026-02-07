import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
      <footer className="footer">
        © {new Date().getFullYear()} Aditya Shukla. All rights reserved.
      </footer>
    </div>
  )
}

export default App
