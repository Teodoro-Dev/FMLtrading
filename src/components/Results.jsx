import React, { forwardRef } from 'react'
import Reveal from './Reveal'
import { useOnScreen } from '../hooks/useOnScreen'
import { useCountUp } from '../hooks/useCountUp'

function Stat({ label, end }) {
  const { targetRef, isIntersecting } = useOnScreen({ threshold: 0.35 })
  const val = useCountUp({ end, durationMs: 1600, start: isIntersecting })
  return (
    <div ref={targetRef} className="stat">
      <div className="stat-value">{val.toLocaleString('pt-BR')}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

const Results = forwardRef((props, ref) => {
  return (
    <section id="results" className="section results" ref={ref}>
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2>Nossos Resultados</h2>
            <p>
              Resultados comprovados que demonstram a eficácia da nossa metodologia 
              e o sucesso dos nossos membros.
            </p>
          </header>
        </Reveal>
        
        <div className="results-grid">
          <Reveal>
            <div className="result-card">
              <div className="result-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>500+</h3>
              <p>Traders aprovados em mesas funded</p>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="result-card">
              <div className="result-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>85%</h3>
              <p>Taxa de aprovação média</p>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="result-card">
              <div className="result-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>5+</h3>
              <p>Anos de experiência no mercado</p>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="result-card">
              <div className="result-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>200K</h3>
              <p>Maior mesa aprovada</p>
            </div>
          </Reveal>
        </div>
        
        <Reveal>
          <div className="results-cta">
            <h3>Quer fazer parte desses resultados?</h3>
            <p>Junte-se à nossa comunidade e comece sua jornada para o sucesso</p>
            <div className="results-cta-buttons">
              <a href="#social" className="btn btn-primary btn-glow">
                QUERO ME INSCREVER
              </a>
              <a href="#about" className="btn btn-secondary">
                CONHECER MAIS
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
})

Results.displayName = 'Results'

export default Results

