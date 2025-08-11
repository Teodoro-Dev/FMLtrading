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
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3h18v4H3V3zm0 7h18v11H3V10zm2 2v7h14v-7H5z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Metodologia</h3>
              <p>Processos claros, validação estatística e execução com consistência.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="about-card">
              <div className="icon-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l4 7h-8l4-7zm0 20l-4-7h8l-4 7z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Transparência</h3>
              <p>Comunicação objetiva, métricas abertas e evolução contínua.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="about-card">
              <div className="icon-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16v2H4V4zm2 4h12v12H6V8z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Comunidade</h3>
              <p>Networking, mentorias e um ambiente para acelerar resultados.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

