import React from 'react'
import Reveal from './Reveal'

export default function Pricing() {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2>Planos de Investimento</h2>
            <p>Escolha o plano ideal para o seu perfil de trader e comece sua jornada rumo ao sucesso</p>
          </header>
        </Reveal>
        
        <div className="pricing-grid">
          {/* FUNDED FOREX Panel */}
          <Reveal delay={100}>
            <div className="pricing-panel">
              <div className="panel-header">
                <h3>FUNDED FOREX</h3>
                <div className="panel-badge">Mais Popular</div>
              </div>
              <div className="panel-content">
                <div className="pricing-tier">
                  <span className="tier-amount">50K USD</span>
                  <span className="tier-arrows">→→→</span>
                  <span className="tier-price">R$ 800,00</span>
                </div>
                <div className="pricing-tier">
                  <span className="tier-amount">100K USD</span>
                  <span className="tier-arrows">→→→</span>
                  <span className="tier-price">R$ 1.200,00</span>
                </div>
                <div className="pricing-tier">
                  <span className="tier-amount">200K USD</span>
                  <span className="tier-arrows">→→→</span>
                  <span className="tier-price">R$ 1.800,00</span>
                </div>
              </div>
              <div className="panel-footer">
                <div className="fml-logo">
                  <span>FML</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* FUNDED FUTUROS Panel */}
          <Reveal delay={200}>
            <div className="pricing-panel">
              <div className="panel-header">
                <h3>FUNDED FUTUROS</h3>
                <div className="panel-badge">Alto Potencial</div>
              </div>
              <div className="panel-content">
                <div className="pricing-tier">
                  <span className="tier-amount">50K USD</span>
                  <span className="tier-arrows">→→→</span>
                  <span className="tier-price">R$ 700,00</span>
                </div>
                <div className="pricing-tier">
                  <span className="tier-amount">100K USD</span>
                  <span className="tier-arrows">→→→</span>
                  <span className="tier-price">R$ 1.000,00</span>
                </div>
                <div className="pricing-tier">
                  <span className="tier-amount">150K USD</span>
                  <span className="tier-arrows">→→→</span>
                  <span className="tier-price">R$ 1.200,00</span>
                </div>
                <div className="pricing-tier">
                  <span className="tier-amount">200K USD</span>
                  <span className="tier-arrows">→→→</span>
                  <span className="tier-price">R$ 1.500,00</span>
                </div>
              </div>
              <div className="panel-footer">
                <div className="fml-logo">
                  <span>FML</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Comparison Table */}
        <Reveal delay={300}>
          <div className="pricing-comparison">
            <h3>Comparação Detalhada dos Planos</h3>
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Recursos & Benefícios</th>
                    <th>FUNDED FOREX</th>
                    <th>FUNDED FUTUROS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Capital Inicial</td>
                    <td>50K - 200K USD</td>
                    <td>50K - 200K USD</td>
                  </tr>
                  <tr>
                    <td>Taxa de Aprovação</td>
                    <td>85%</td>
                    <td>90%</td>
                  </tr>
                  <tr>
                    <td>Prazo de Aprovação</td>
                    <td>7-14 dias</td>
                    <td>5-10 dias</td>
                  </tr>
                  <tr>
                    <td>Potencial de Ganho Mensal</td>
                    <td>8-15% do capital</td>
                    <td>10-20% do capital</td>
                  </tr>
                  <tr>
                    <td>Saques Disponíveis</td>
                    <td>Mensal após aprovação</td>
                    <td>Quinzenal após aprovação</td>
                  </tr>
                  <tr>
                    <td>Suporte Premium</td>
                    <td>24/7 via Telegram</td>
                    <td>24/7 + Mentoria Individual</td>
                  </tr>
                  <tr>
                    <td>Análises Exclusivas</td>
                    <td>Diárias</td>
                    <td>Diárias + Alertas VIP</td>
                  </tr>
                  <tr>
                    <td>Comunidade</td>
                    <td>Acesso Completo</td>
                    <td>Acesso + Grupo VIP</td>
                  </tr>
                  <tr>
                    <td>ROI Estimado (6 meses)</td>
                    <td>150-300%</td>
                    <td>200-400%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Benefits Section */}
        <Reveal delay={400}>
          <div className="pricing-benefits">
            <h3>Por que escolher a FML Trading?</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🚀</div>
                <h4>Metodologia Comprovada</h4>
                <p>5+ anos de resultados consistentes com mais de 500 traders aprovados</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💎</div>
                <h4>Taxa de Sucesso Alta</h4>
                <p>85-90% de aprovação em mesas de até 200K USD</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <h4>Resultados Rápidos</h4>
                <p>Aprovação em 5-14 dias com saques disponíveis imediatamente</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🎯</div>
                <h4>Potencial de Ganho</h4>
                <p>ROI de 150-400% em 6 meses com gestão de risco profissional</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="pricing-cta">
            <h3>Pronto para Transformar sua Jornada?</h3>
            <p>Junte-se aos traders que já estão lucrando com nossa metodologia</p>
            <div className="pricing-cta-buttons">
              <a href="#social" className="btn btn-primary btn-glow btn-large">
                QUERO ME INSCREVER AGORA
              </a>
              <a href="#about" className="btn btn-accent btn-large">
                SABER MAIS
              </a>
            </div>
            <p className="pricing-note">
              <span className="info-icon">ℹ</span>
              VAGAS LIMITADAS E MEDIANTE APROVAÇÃO - APROVEITE A OPORTUNIDADE
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
