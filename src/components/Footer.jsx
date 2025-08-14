import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img 
            src="/LogotipoFML.jpg" 
            alt="FML Trading"
            onError={(e) => {
              console.warn('Failed to load footer logo:', e)
              e.target.style.display = 'none'
            }}
          />
          <div className="footer-brand-text">
            <h4>FML Trading</h4>
            <p>Disciplina, dados e comunidade para resultados consistentes.</p>
          </div>
        </div>
        
        <nav className="footer-links">
          <div className="footer-links-group">
            <h5>Navegação</h5>
            <a href="#hero">Início</a>
            <a href="#about">Sobre</a>
            <a href="#services">Serviços</a>
            <a href="#pricing">Preços</a>
            <a href="#results">Resultados</a>
            <a href="#social">Canais</a>
          </div>
          
          <div className="footer-links-group">
            <h5>Contato</h5>
            <a href="mailto:contato@fmltrading.com">contato@fmltrading.com</a>
            <a href="https://t.me/feelpsfx" target="_blank" rel="noreferrer">Telegram Feelps</a>
            <a href="https://discord.gg/3xcQey64RQ" target="_blank" rel="noreferrer">Comunidade FML</a>
            <a href="https://www.youtube.com/channel/UCe41vLch_t6jE1oEoBWYn6g" target="_blank" rel="noreferrer">YouTube FML</a>
            <a href="https://www.instagram.com/fml.trading/" target="_blank" rel="noreferrer">Instagram FML</a>
          </div>
          
          <div className="footer-links-group">
            <h5>Recursos</h5>
            <a href="#about">Metodologia</a>
            <a href="#services">Análise de Mercado</a>
            <a href="#pricing">Planos de Investimento</a>
            <a href="#results">Casos de Sucesso</a>
            <a href="#social">Comunidade</a>
          </div>
        </nav>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FML Trading. Todos os direitos reservados.</p>
        <div className="footer-disclaimer">
          <p>
            Todas as informações fornecidas nesta página web destinam-se exclusivamente para fins de estudo relacionados à negociação em mercados financeiros e não servem de forma alguma como recomendação específica de investimento, recomendação de negócios, análise de oportunidade de investimento ou recomendação geral semelhante sobre a negociação de instrumentos de investimentos. A negociação nos mercados financeiros é uma atividade de alto risco e é aconselhável não arriscar mais do que se pode perder.
          </p>
        </div>
      </div>
    </footer>
  )
}

