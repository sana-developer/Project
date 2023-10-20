import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/main'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </>
  )
}

export default App
