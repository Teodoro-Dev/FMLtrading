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
import { useEffect, useState, useRef } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState('hero')
  const sectionsRef = useRef({})

  // Intersection Observer for smooth section transitions
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-10% 0px -10% 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setCurrentSection(sectionId)
          
          // Add entrance animation
          entry.target.classList.add('section-visible')
          
          // Remove animation class after animation completes
          setTimeout(() => {
            entry.target.classList.remove('section-visible')
          }, 1000)
        }
      })
    }, observerOptions)

    // Observe all sections after they're rendered
    const timer = setTimeout(() => {
      Object.values(sectionsRef.current).forEach(section => {
        if (section) observer.observe(section)
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

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
    <div className="app-container">
      <Header currentSection={currentSection} />
      <Hero ref={(el) => sectionsRef.current.hero = el} />
      <About ref={(el) => sectionsRef.current.about = el} />
      <Services ref={(el) => sectionsRef.current.services = el} />
      <Pricing ref={(el) => sectionsRef.current.pricing = el} />
      <Results ref={(el) => sectionsRef.current.results = el} />
      <SocialCTAs ref={(el) => sectionsRef.current.social = el} />
      <Footer ref={(el) => sectionsRef.current.footer = el} />
    </div>
  )
}

export default App
