import React from 'react'

export default function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="loading-logo">
          <img 
            src="/LogotipoFML.jpg" 
            alt="FML Trading"
            className="spinning-logo"
            onError={(e) => {
              console.warn('Failed to load loading logo:', e)
              e.target.style.display = 'none'
              // Fallback para quando a imagem não carrega
              const parent = e.target.parentElement
              if (parent) {
                parent.innerHTML = `
                  <div class="fallback-logo">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                      <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                `
              }
            }}
          />
        </div>
        <p className="loading-text">Carregando...</p>
      </div>
    </div>
  )
}
