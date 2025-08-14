import React from 'react'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2>Quem somos</h2>
            <p>
              Somos uma mesa de análise e comunidade focada em performance. Combinamos dados, 
              disciplina e gestão de risco para entregar decisões mais inteligentes no mercado.
            </p>
          </header>
        </Reveal>
        
        <div className="about-grid">
          <Reveal>
            <div className="about-card">
              <div className="icon-circle">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Metodologia</h3>
              <p>Processos claros, validação estatística e execução com consistência para resultados previsíveis.</p>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="about-card">
              <div className="icon-circle">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Transparência</h3>
              <p>Comunicação objetiva, métricas abertas e evolução contínua baseada em dados reais.</p>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="about-card">
              <div className="icon-circle">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Comunidade</h3>
              <p>Networking exclusivo, mentorias personalizadas e um ambiente colaborativo para acelerar resultados.</p>
            </div>
          </Reveal>
        </div>
        
        {/* CTA adicional na seção About */}
        <Reveal>
          <div className="about-cta">
            <h3>Pronto para Começar?</h3>
            <p>Junte-se à nossa comunidade e transforme sua jornada no trading</p>
            <div className="about-cta-buttons">
              <a href="#social" className="btn btn-primary btn-glow">
                QUERO ME INSCREVER
              </a>
              <a href="#services" className="btn btn-accent">
                VER SERVIÇOS
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

