import React from 'react'
import Reveal from './Reveal'

const services = [
  {
    title: 'Análise de Mercado',
    desc: 'Leituras técnicas, macro e fluxo para antecipar cenários de alta probabilidade com precisão.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3h18v2H3V3zm2 5h2v13H5V8zm5 4h2v9h-2v-9zm5-6h2v15h-2V6zm5 8h2v7h-2v-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Sinais Exclusivos',
    desc: 'Alertas operacionais com filtros de risco e planos claros de execução para máxima eficiência.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l7 7-9 9H3v-7l9-9zm-6 9v3h3l8-8-3-3-8 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Mentoria em Trading',
    desc: 'Estrutura de aprendizado, gestão emocional e leitura de mercado aplicada para resultados consistentes.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4a4 4 0 110 8 4 4 0 010-8zm0 9c-4 0-8 2-8 5v2h16v-2c0-3-4-5-8-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Comunidade de Networking',
    desc: 'Ambiente colaborativo e eventos exclusivos para trocar estratégias e expandir contatos profissionais.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2>O que oferecemos</h2>
            <p>Serviços pensados para gerar clareza, consistência e resultado consistente no mercado.</p>
          </header>
        </Reveal>
        
        <div className="services-grid">
          {services.map((s) => (
            <Reveal key={s.title}>
              <article className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
        
        {/* CTA adicional na seção Services */}
        <Reveal>
          <div className="services-cta">
            <h3>Interessado em Nossos Serviços?</h3>
            <p>Entre em contato e descubra como podemos ajudar você a alcançar seus objetivos</p>
            <div className="services-cta-buttons">
              <a href="#social" className="btn btn-primary btn-large btn-glow">
                QUERO ME INSCREVER
              </a>
              <a href="mailto:contato@fmltrading.com" className="btn btn-accent">
                FALAR CONOSCO
              </a>
            </div>
            <p className="cta-info">
              <span className="info-icon">ℹ</span>
              VAGAS LIMITADAS E MEDIANTE APROVAÇÃO
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

