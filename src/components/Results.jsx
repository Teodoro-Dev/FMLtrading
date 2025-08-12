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
                            <path d="M12 2l4 7h-8l4-7zm0 20l-4-7h8l-4 7z" fill="currentColor"/>
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
                    <path d="M12 2l4 7h-8l4-7zm0 20l-4-7h8l-4 7z" fill="currentColor"/>
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
                    <path d="M12 2l4 7h-8l4-7zm0 20l-4-7h8l-4 7z" fill="currentColor"/>
                  </svg>
                  <span>Imagem em breve</span>
                </div>
                <div className="result-overlay">
                  <span className="result-badge">Aprovado</span>
                </div>
              </div>
              <div className="result-content">
                <h3>Mesa Aprovada</h3>
                <p className="result-amount">R$ 95.000+</p>
                <p className="result-description">Performance excepcional na análise de mercado</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="result-card">
              <div className="result-image placeholder">
                <div className="placeholder-content">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l4 7h-8l4-7zm0 20l-4-7h8l-4 7z" fill="currentColor"/>
                  </svg>
                  <span>Imagem em breve</span>
                </div>
                <div className="result-overlay">
                  <span className="result-badge">Aprovado</span>
                </div>
              </div>
              <div className="result-content">
                <h3>Mesa Aprovada</h3>
                <p className="result-amount">R$ 150.000+</p>
                <p className="result-description">Maior saque da comunidade até o momento</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="results-stats">
          <Reveal>
            <div className="stats-grid">
              <Stat label="Traders Ativos" end={500} />
              <Stat label="Taxa de Aprovação" end={95} />
              <Stat label="Total Aprovado" end={2000000} />
              <div className="stat">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Suporte</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Novo CTA principal */}
        <Reveal>
          <div className="results-cta">
            <div className="cta-content">
              <h3>Quer Fazer Parte Desta Comunidade?</h3>
              <p>Junte-se aos traders que já estão lucrando com nossa metodologia</p>
              <a href="#social" className="btn btn-primary btn-large">
                QUERO ME INSCREVER
              </a>
              <p className="cta-info">
                <span className="info-icon">ℹ</span>
                VAGAS LIMITADAS E MEDIANTE APROVAÇÃO
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

