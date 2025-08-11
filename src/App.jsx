import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Results from './components/Results'
import SocialCTAs from './components/SocialCTAs'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { useImagePalette } from './hooks/useImagePalette'

function App() {
  const { cssVars } = useImagePalette('/LogotipoFML.jpg')

  // Apply palette to document root as CSS variables
  useEffect(() => {
    const root = document.documentElement
    Object.entries(cssVars).forEach(([k, v]) => root.style.setProperty(k, v))
    root.style.setProperty('--brand-rgba', '0,0,0')
  }, [cssVars])

  return (
    <div style={cssVars}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Results />
      <SocialCTAs />
      <Footer />
    </div>
  )
}

export default App
