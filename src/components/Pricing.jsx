import React, { forwardRef } from 'react'
import Reveal from './Reveal'

const Arrow = () => (
  <svg className="funded-arrow" width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 8h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Pricing = forwardRef((props, ref) => {
  return (
    <section id="pricing" className="section pricing" ref={ref}>
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2>Planos de Aprovação de Mesa</h2>
            <p>
              Opções alinhadas ao design atual, para entrada em contas financiadas (funded).
            </p>
          </header>
        </Reveal>

        {/* Cards de Funded */}
        <div className="funded-grid">
          <Reveal>
            <div className="funded-card featured">
              <div className="funded-header">
                <span className="icon-circle" aria-hidden>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1v22M7 5h10a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="funded-title">Funded Forex</span>
              </div>
              <div className="featured-badge">Mais Popular</div>
              <ul className="funded-list">
                <li className="funded-item">
                  <span className="funded-label">50K USD</span>
                  <span className="funded-mid"><Arrow /></span>
                  <span className="funded-price">R$ 800,00</span>
                </li>
                <li className="funded-item">
                  <span className="funded-label">100K USD</span>
                  <span className="funded-mid"><Arrow /></span>
                  <span className="funded-price">R$ 1.200,00</span>
                </li>
                <li className="funded-item">
                  <span className="funded-label">200K USD</span>
                  <span className="funded-mid"><Arrow /></span>
                  <span className="funded-price">R$ 1.800,00</span>
                </li>
              </ul>
              <div className="funded-cta">
                <a href="#social" className="btn btn-primary btn-full">Escolher este</a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="funded-card">
              <div className="funded-header">
                <span className="icon-circle" aria-hidden>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3h18v6H3zM3 15h18v6H3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="funded-title">Funded Futuros</span>
              </div>
              <ul className="funded-list">
                <li className="funded-item">
                  <span className="funded-label">50K USD</span>
                  <span className="funded-mid"><Arrow /></span>
                  <span className="funded-price">R$ 700,00</span>
                </li>
                <li className="funded-item">
                  <span className="funded-label">100K USD</span>
                  <span className="funded-mid"><Arrow /></span>
                  <span className="funded-price">R$ 1.000,00</span>
                </li>
                <li className="funded-item">
                  <span className="funded-label">150K USD</span>
                  <span className="funded-mid"><Arrow /></span>
                  <span className="funded-price">R$ 1.200,00</span>
                </li>
                <li className="funded-item">
                  <span className="funded-label">200K USD</span>
                  <span className="funded-mid"><Arrow /></span>
                  <span className="funded-price">R$ 1.500,00</span>
                </li>
              </ul>
              <div className="funded-cta">
                <a href="#social" className="btn btn-secondary btn-full">Escolher este</a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Tabela comparativa */}
        <Reveal>
          <header className="section-head" style={{marginTop: '1rem'}}>
            <h2>Comparação Detalhada dos Planos</h2>
          </header>
        </Reveal>

        <Reveal>
          <div style={{overflowX: 'auto'}}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Recursos & Benefícios</th>
                  <th>Funded Forex</th>
                  <th>Funded Futuros</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Capital Inicial</th>
                  <td>50K - 200K USD</td>
                  <td>50K - 200K USD</td>
                </tr>
                <tr>
                  <th>Taxa de Aprovação</th>
                  <td>85%</td>
                  <td>90%</td>
                </tr>
                <tr>
                  <th>Prazo de Aprovação</th>
                  <td>7-14 dias</td>
                  <td>5-10 dias</td>
                </tr>
                <tr>
                  <th>Potencial de Ganho Mensal</th>
                  <td>8–15% do capital</td>
                  <td>10–20% do capital</td>
                </tr>
                <tr>
                  <th>Saques Disponíveis</th>
                  <td>Mensal após aprovação</td>
                  <td>Quinzenal após aprovação</td>
                </tr>
                <tr>
                  <th>Suporte Premium</th>
                  <td>24/7 via Telegram</td>
                  <td>24/7 + Mentoria Individual</td>
                </tr>
                <tr>
                  <th>Análises Exclusivas</th>
                  <td>Diárias</td>
                  <td>Diárias + Alertas VIP</td>
                </tr>
                <tr>
                  <th>Comunidade</th>
                  <td>Acesso Completo</td>
                  <td>Acesso + Grupo VIP</td>
                </tr>
                <tr>
                  <th>ROI Estimado (6 meses)</th>
                  <td><span className="badge-pill">150–300%</span></td>
                  <td><span className="badge-pill">200–400%</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
})

Pricing.displayName = 'Pricing'

export default Pricing
