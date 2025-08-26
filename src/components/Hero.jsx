import React, { useState, useEffect, forwardRef } from 'react'

const Hero = forwardRef((props, ref) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    'Análises assertivas.',
    'Junte-se à comunidade que transforma traders iniciantes em profissionais do mercado.'
  ]

  // Add initial delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedText('')
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const currentText = texts[currentTextIndex]
    let timeoutId

    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        }, 50)
      } else {
        // Wait before starting to delete
        timeoutId = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 30)
      } else {
        // Move to next text
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayedText, currentTextIndex, isDeleting, texts])

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero-overlay" />
      <div className="hero-inner">
        <img 
          className="hero-logo" 
          src="/LogotipoFML.jpg" 
          alt="Logotipo FML Trading"
          onError={(e) => {
            console.warn('Failed to load hero logo:', e)
            e.target.style.display = 'none'
          }}
        />
        <h1 className="hero-title">FML Trading</h1>
        <h2 className="hero-subtitle" aria-live="polite">
          {displayedText}
          <span className="typing-caret" aria-hidden="true">|</span>
        </h2>
        
        <div className="hero-cta">
          <a href="#services" className="btn btn-primary btn-glow">
            Conheça nossos serviços
          </a>
          <a href="#about" className="btn btn-secondary">
            Saiba mais sobre a FML
          </a>
        </div>
        
        {/* CTA adicional com destaque */}
        <div className="hero-secondary-cta">
          <a href="https://t.me/feelpsfx" className="btn btn-accent btn-large btn-glow">
            QUERO FAZER PARTE
          </a>
          <p className="cta-info">
            <svg className="info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            VAGAS LIMITADAS E MEDIANTE APROVAÇÃO
          </p>
        </div>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero

