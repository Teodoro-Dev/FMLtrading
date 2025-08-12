import React from 'react'
import Reveal from './Reveal'

const services = [
  {
    title: 'Análise de Mercado',
    desc: 'Leituras técnicas, macro e fluxo para antecipar cenários de alta probabilidade.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3h18v2H3V3zm2 5h2v13H5V8zm5 4h2v9h-2v-9zm5-6h2v15h-2V6zm5 8h2v7h-2v-7z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Sinais Exclusivos',
    desc: 'Alertas operacionais com filtros de risco e planos claros de execução.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l7 7-9 9H3v-7l9-9zm-6 9v3h3l8-8-3-3-8 8z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Mentoria em Trading',
    desc: 'Estrutura de aprendizado, gestão emocional e leitura de mercado aplicada.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4a4 4 0 110 8 4 4 0 010-8zm0 9c-4 0-8 2-8 5v2h16v-2c0-3-4-5-8-5z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Comunidade de Networking',
    desc: 'Ambiente colaborativo e eventos para trocar estratégias e expandir contatos.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h7v-2.5C24 14.17 19.33 13 16 13z" fill="currentColor"/>
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
            <p>Serviços pensados para gerar clareza, consistência e resultado.</p>
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
            <p>Entre em contato e descubra como podemos ajudar você</p>
            <div className="services-cta-buttons">
              <a href="#social" className="btn btn-primary btn-large">
                QUERO ME INSCREVER
              </a>
              <a href="mailto:contato@fmltrading.com" className="btn btn-secondary">
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

