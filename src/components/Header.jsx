import React, { useState, useEffect } from 'react'

export default function Header({ currentSection }) {
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    // Não fechar o menu mobile automaticamente para facilitar navegação
    // closeMobileMenu()
  }

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#hero" className="brand" onClick={closeMobileMenu}>
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
          <a 
            href="#hero" 
            className={currentSection === 'hero' ? 'active' : ''}
            onClick={() => scrollToSection('hero')}
          >
            Início
          </a>
          <a 
            href="#about" 
            className={currentSection === 'about' ? 'active' : ''}
            onClick={() => scrollToSection('about')}
          >
            Sobre
          </a>
          <a 
            href="#services" 
            className={currentSection === 'services' ? 'active' : ''}
            onClick={() => scrollToSection('services')}
          >
            Serviços
          </a>
          <a 
            href="#pricing" 
            className={currentSection === 'pricing' ? 'active' : ''}
            onClick={() => scrollToSection('pricing')}
          >
            Preços
          </a>
          <a 
            href="#results" 
            className={currentSection === 'results' ? 'active' : ''}
            onClick={() => scrollToSection('results')}
          >
            Resultados
          </a>
          <a 
            href="#community" 
            className={currentSection === 'community' ? 'active' : ''}
            onClick={() => scrollToSection('community')}
          >
            Comunidade
          </a>
          <a 
            href="#social" 
            className={currentSection === 'social' ? 'active' : ''}
            onClick={() => scrollToSection('social')}
          >
            Contato
          </a>
        </nav>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <span className="mobile-menu-title">Menu</span>
            <button className="mobile-menu-close" onClick={closeMobileMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <nav className="mobile-nav">
            <a 
              href="#hero" 
              className={currentSection === 'hero' ? 'active' : ''}
              onClick={() => scrollToSection('hero')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Início
            </a>
            <a 
              href="#about" 
              className={currentSection === 'about' ? 'active' : ''}
              onClick={() => scrollToSection('about')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Sobre
            </a>
            <a 
              href="#services" 
              className={currentSection === 'services' ? 'active' : ''}
              onClick={() => scrollToSection('services')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Serviços
            </a>
            <a 
              href="#pricing" 
              className={currentSection === 'pricing' ? 'active' : ''}
              onClick={() => scrollToSection('pricing')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Preços
            </a>
            <a 
              href="#results" 
              className={currentSection === 'results' ? 'active' : ''}
              onClick={() => scrollToSection('results')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Resultados
            </a>
            <a 
              href="#community" 
              className={currentSection === 'community' ? 'active' : ''}
              onClick={() => scrollToSection('community')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Comunidade
            </a>
            <a 
              href="#social" 
              className={currentSection === 'social' ? 'active' : ''}
              onClick={() => scrollToSection('social')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

