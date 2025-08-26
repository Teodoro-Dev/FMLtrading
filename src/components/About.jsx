import React, { forwardRef } from 'react'
import Reveal from './Reveal'

const About = forwardRef((props, ref) => {
  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2>Quem somos</h2>
            <p>
              Fundo de gestão de Capital Próprio e Financiado. Focados em performance utilizamos o SMART MONEY CONCEPT para potencializar resultados, com uma gestão de risco equilibrada, um operacional potente e ambiente que prepara e desenvolve traders para alcançar sua consistência lucrativa no mercado.
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
              <p>Networking exclusivo, mentorias personalizadas e um ambiente colaborativo para acelerar os seus resultados.</p>
            </div>
          </Reveal>
        </div>
        
        {/* CTA adicional na seção About */}
        <Reveal>
          <div className="about-cta">
            <h3>Pronto para Começar?</h3>
            <p>Junte-se à nós e transforme sua jornada no trading</p>
            <div className="about-cta-buttons">
              <a href="https://t.me/feelpsfx" className="btn btn-primary btn-glow">
                QUERO FAZER PARTE
              </a>
              <a href="#services" className="btn btn-secondary">
                VER SERVIÇOS
              </a>
            </div>
            <p className="cta-info">
            <svg className="info-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            VAGAS LIMITADAS E MEDIANTE APROVAÇÃO
          </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
})

About.displayName = 'About'

export default About

