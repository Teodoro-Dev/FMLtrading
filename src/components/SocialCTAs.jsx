import React from 'react'
import Reveal from './Reveal'

const links = [
  {
    label: 'Telegram',
    href: 'https://t.me/',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0088cc" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.75-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.13-.02.2z"/>
      </svg>
    ),
  },
  {
    label: 'Network & Trading',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zM20.79 13c-.2 2.02-1.07 3.84-2.36 5.26L13 13V9h-4l-3.11-3.11C7.06 4.78 9.39 4 12 4c4.08 0 7.44 3.05 7.93 7h.86c.12.64.21 1.32.21 2h-.21z" />
      </svg>
    ),
  },
  {
    label: 'Canal Oficial',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12 3C7.03 3 3 6.58 3 11c0 2.39 1.2 4.54 3.09 6.03L6 22l3.17-1.79c.87.24 1.79.37 2.83.37 4.97 0 9-3.58 9-8s-4.03-8-9-8z" />
      </svg>
    ),
  },
  {
    label: 'Perfil oficial FML',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
      </svg>
    ),
  },
  {
    label: 'GMAIL',
    href: 'mailto:contato@fmltrading.com',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12 13L2 6.76V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6.76L12 13z" />
        <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4C2.9 4 2 4.9 2 6v.01L12 12l10-5.99V6z" />
      </svg>
    ),
  },
]

export default function SocialCTAs() {
  return (
    <section id="social" className="section social-ctas">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2>Conecte-se</h2>
            <p>Entre nos nossos canais e evolua com a comunidade.</p>
          </header>
        </Reveal>
        <div className="cta-grid">
          {links.map((link) => (
            <Reveal key={link.label}>
              <a className="cta-btn" href={link.href} target={link.href.startsWith('#') ? undefined : '_blank'} rel="noreferrer">
                <span className="icon">{link.icon}</span>
                <span className="label">{link.label}</span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* CTAs adicionais com botões */}
        <Reveal>
          <div className="additional-ctas">
            <div className="cta-section">
              <h3>Comece Sua Jornada Hoje</h3>
              <div className="cta-buttons">
                <a href="#social" className="btn btn-primary btn-large">
                  QUERO ME INSCREVER
                </a>
                <a href="#about" className="btn btn-secondary btn-large">
                  SABER MAIS
                </a>
              </div>
              <p className="cta-info">
                <span className="info-icon">ℹ</span>
                VAGAS LIMITADAS E MEDIANTE APROVAÇÃO
              </p>
            </div>
          </div>
        </Reveal>

        {/* Seção de ilustrações SVG */}
        <Reveal>
          <div className="svg-illustrations">
            <div className="illustration-grid">
              <div className="illustration-item">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Performance</span>
              </div>
              <div className="illustration-item">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Qualidade</span>
              </div>
              <div className="illustration-item">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Comunidade</span>
              </div>
              <div className="illustration-item">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Sucesso</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

