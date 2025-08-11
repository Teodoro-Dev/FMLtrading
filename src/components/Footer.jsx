import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/LogotipoFML.jpg" alt="FML Trading" />
          <p>Disciplina, dados e comunidade.</p>
        </div>
        <nav className="footer-links">
          <a href="#hero">Início</a>
          <a href="#about">Quem somos</a>
          <a href="#services">Serviços</a>
          <a href="#results">Resultados</a>
          <a href="#social">Canais</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FML Trading. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

