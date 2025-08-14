import React, { useState, useEffect } from 'react'

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    'Inteligência de mercado, sinais assertivos e uma comunidade que acelera sua evolução no trading.',
    'Análise técnica avançada, gestão de risco profissional e resultados consistentes.',
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
    <section id="hero" className="hero">
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
        <p className="hero-subtitle" aria-live="polite">
          {displayedText}
          <span className="typing-caret" aria-hidden="true">|</span>
        </p>
        
        <div className="hero-cta">
          <a href="#social" className="btn btn-primary btn-glow">
            Entrar no Canal Oficial
          </a>
          <a href="#about" className="btn btn-accent">
            Conhecer Mais
          </a>
        </div>
        
        {/* CTA adicional com destaque */}
        <div className="hero-secondary-cta">
          <a href="#social" className="btn btn-accent btn-large btn-glow">
            QUERO ME INSCREVER
          </a>
          <p className="cta-info">
            <span className="info-icon">ℹ</span>
            VAGAS LIMITADAS E MEDIANTE APROVAÇÃO
          </p>
        </div>
      </div>
    </section>
  )
}

