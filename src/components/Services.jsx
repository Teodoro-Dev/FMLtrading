import React, { forwardRef } from 'react'
import Reveal from './Reveal'

const Services = forwardRef((props, ref) => {
  return (
    <section id="services" className="section services" ref={ref}>
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2>Nossos Serviços</h2>
            <p>
              Oferecemos uma gama completa de soluções para traders que buscam excelência 
              e resultados consistentes no mercado financeiro.
            </p>
          </header>
        </Reveal>
        
        <div className="services-grid">
          <Reveal>
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Análise Técnica</h3>
              <p>Análises detalhadas com indicadores avançados e padrões de mercado reconhecidos.</p>
              <a href="#pricing" className="btn btn-primary">Saiba Mais</a>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Gestão de Risco</h3>
              <p>Estratégias comprovadas para proteger seu capital e maximizar retornos.</p>
              <a href="#pricing" className="btn btn-secondary">Saiba Mais</a>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Comunidade Exclusiva</h3>
              <p>Acesso a uma rede de traders experientes e mentorias personalizadas.</p>
              <a href="#pricing" className="btn btn-primary">Saiba Mais</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
})

Services.displayName = 'Services'

export default Services

