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
              Opções alinhadas ao design atual, para entrada em contas financiadas.
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
                <a href="https://t.me/feelpsfx" className="btn btn-primary btn-full">Escolher este</a>
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
                <a href="https://t.me/feelpsfx" className="btn btn-secondary btn-full">Escolher este</a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Informações adicionais dos planos */}
        <Reveal>
          <div className="pricing-benefits">
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="benefit-content">
                  <h4>Taxa de Aprovação 80%</h4>
                  <p>Alta probabilidade de sucesso com nossa metodologia comprovada</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="benefit-content">
                  <h4>Suporte 24/7 via Telegram</h4>
                  <p>Assistência completa a qualquer momento do dia</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1v22M7 5h10a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="benefit-content">
                  <h4>Potencial de +1.000 USD</h4>
                  <p>Possibilidade de ganhos superiores a mil dólares em todas as contas após aprovação</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="benefit-content">
                  <h4>Aprovação em menos de um trimestre</h4>
                  <p>Processo acelerado para começar a lucrar rapidamente</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
})

Pricing.displayName = 'Pricing'

export default Pricing
