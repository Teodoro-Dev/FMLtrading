import React, { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#hero" className="brand">
          <img 
            src="/LogotipoFML.jpg" 
            alt="FML Trading" 
            className="brand-logo"
            onError={(e) => {
              console.warn('Failed to load brand logo:', e)
              e.target.style.display = 'none'
            }}
          />
          <span className="brand-name">FML Trading</span>
        </a>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Início</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Sobre</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Preços</a>
          <a href="#results" onClick={() => setIsMobileMenuOpen(false)}>Resultados</a>
          <a href="#social" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

