import React, { forwardRef } from 'react'

const Footer = forwardRef((props, ref) => {
  return (
    <footer id="footer" className="site-footer" ref={ref}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <img 
                src="/LogotipoFML.jpg" 
                alt="FML Trading" 
                className="footer-logo"
                onError={(e) => {
                  console.warn('Failed to load footer logo:', e)
                  e.target.style.display = 'none'
                }}
              />
              <h3>FML Trading</h3>
              <p>Transformando traders iniciantes em profissionais</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#hero">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#pricing">Preços</a></li>
              <li><a href="#results">Resultados</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contato</h4>
            <ul className="footer-links">
              <li>
                <a href="https://t.me/feelpsfx" target="_blank" rel="noopener noreferrer">
                  <svg className="footer-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Telegram
                </a>
              </li>
              <li>
                <a href="mailto:contato@fmltrading.com">
                  <svg className="footer-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  contato@fmltrading.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} FML Trading. Todos os direitos reservados.</p>
            <div className="footer-social">
              <a href="https://t.me/feelpsfx" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://instagram.com/fml.trading" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCe41vLch_t6jE1oEoBWYn6g" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Disclaimer */}
        <div className="footer-disclaimer">
          <div className="disclaimer-content">
            <h4>⚠️ Aviso Legal</h4>
            <p>
              Todas as informações fornecidas nesta página web destinam-se exclusivamente para fins de estudo relacionados à negociação em mercados financeiros e não servem de forma alguma como recomendação específica de investimento, recomendação de negócios, análise de oportunidade de investimento ou recomendação geral semelhante sobre a negociação de instrumentos de investimentos. A negociação nos mercados financeiros é uma atividade de alto risco e é aconselhável não arriscar mais do que se pode perder.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer

