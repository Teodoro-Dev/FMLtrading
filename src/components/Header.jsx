import React, { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#hero" className="brand" onClick={closeMobileMenu}>
          <img src="/LogotipoFML.jpg" alt="FML Trading" className="brand-logo" />
          <span className="brand-name">FML Trading</span>
        </a>
        
        <nav className="nav">
          <a href="#about">Quem somos</a>
          <a href="#services">Serviços</a>
          <a href="#results">Resultados</a>
          <a href="#social" className="btn btn-accent">Entrar no Canal</a>
        </nav>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-close-btn" onClick={closeMobileMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <a href="#about" onClick={closeMobileMenu}>Quem somos</a>
        <a href="#services" onClick={closeMobileMenu}>Serviços</a>
        <a href="#results" onClick={closeMobileMenu}>Resultados</a>
        <a href="#social" onClick={closeMobileMenu} className="btn btn-accent">Entrar no Canal</a>
      </nav>
    </header>
  )
}

