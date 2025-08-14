import React from 'react'
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

export default function Results() {
  return (
    <section id="results" className="section results">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2>Resultados que Falam por Si</h2>
            <p>
              Nossa metodologia comprovada já gerou resultados expressivos para centenas de traders.
              Veja alguns exemplos reais de aprovação de mesas e saques.
            </p>
          </header>
        </Reveal>
        
        <div className="results-grid">
          <Reveal>
            <div className="result-card">
              <div className="result-image">
                <img 
                  src="/photo_2025-08-11_18-10-52.jpg" 
                  alt="Saque de mais de 120 mil reais - Aprovação de mesa FML Trading"
                  onError={(e) => {
                    console.warn('Failed to load result image:', e)
                    e.target.style.display = 'none'
                    // Add fallback content when image fails to load
                    const parent = e.target.parentElement
                    if (parent) {
                      parent.classList.add('placeholder')
                      parent.innerHTML = `
                        <div class="placeholder-content">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Imagem não carregou</span>
                        </div>
                        <div class="result-overlay">
                          <span class="result-badge">Aprovado</span>
                        </div>
                      `
                    }
                  }}
                />
                <div className="result-overlay">
                  <span className="result-badge">Aprovado</span>
                </div>
              </div>
              <div className="result-content">
                <h3>Mesa Aprovada</h3>
                <p className="result-amount">R$ 120.000+</p>
                <p className="result-description">Saque realizado com sucesso após aprovação da mesa de análise</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="result-card">
              <div className="result-image placeholder">
                <div className="placeholder-content">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Imagem em breve</span>
                </div>
                <div className="result-overlay">
                  <span className="result-badge">Aprovado</span>
                </div>
              </div>
              <div className="result-content">
                <h3>Mesa Aprovada</h3>
                <p className="result-amount">R$ 85.000+</p>
                <p className="result-description">Aprovação de mesa com resultados consistentes</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="result-card">
              <div className="result-image placeholder">
                <div className="placeholder-content">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Imagem em breve</span>
                </div>
                <div className="result-overlay">
                  <span className="result-badge">Aprovado</span>
                </div>
              </div>
              <div className="result-content">
                <h3>Mesa Aprovada</h3>
                <p className="result-amount">R$ 65.000+</p>
                <p className="result-description">Aprovação de mesa com resultados consistentes</p>
              </div>
            </div>
          </Reveal>
        </div>
        
        {/* Stats Section */}
        <Reveal>
          <div className="results-stats">
            <div className="stats-grid">
              <Stat label="Traders Atendidos" end={500} />
              <Stat label="Mesas Aprovadas" end={150} />
              <Stat label="Taxa de Sucesso" end={85} />
              <Stat label="Anos de Experiência" end={5} />
            </div>
          </div>
        </Reveal>
        
        {/* CTA adicional na seção Results */}
        <Reveal>
          <div className="results-cta">
            <h3>Quer Fazer Parte Dessa História?</h3>
            <p>Junte-se aos traders que já transformaram suas vidas com a FML Trading</p>
            <div className="results-cta-buttons">
              <a href="#social" className="btn btn-primary btn-large btn-glow">
                QUERO ME INSCREVER
              </a>
              <a href="#pricing" className="btn btn-accent">
                VER PLANOS
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

