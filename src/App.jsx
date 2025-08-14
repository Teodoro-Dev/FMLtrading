import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Results from './components/Results'
import SocialCTAs from './components/SocialCTAs'
import Footer from './components/Footer'
import Loading from './components/Loading'
import { useEffect, useState } from 'react'
import { useImagePalette } from './hooks/useImagePalette'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { cssVars } = useImagePalette('/LogotipoFML.jpg')

  // Apply palette to document root as CSS variables
  useEffect(() => {
    try {
      const root = document.documentElement
      Object.entries(cssVars).forEach(([k, v]) => root.style.setProperty(k, v))
      root.style.setProperty('--brand-rgba', '0,0,0')
    } catch (error) {
      console.warn('Failed to apply CSS variables:', error)
    }
  }, [cssVars])

  // Simular tempo de carregamento
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div style={cssVars}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Results />
      <SocialCTAs />
      <Footer />
    </div>
  )
}

export default App
