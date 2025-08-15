import React, { forwardRef } from 'react'
import Reveal from './Reveal'

const Community = forwardRef((props, ref) => {
  return (
    <section id="community" className="section community" ref={ref}>
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2>Comunidade de Trading & Network</h2>
            <p>
              Junte-se à nossa comunidade exclusiva onde você aprende, cresce e conecta-se 
              com traders experientes e iniciantes.
            </p>
          </header>
        </Reveal>

        <div className="community-grid">
          <Reveal>
            <div className="community-card">
              <div className="community-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Aprendizado Contínuo</h3>
              <p>
                Acesso a cursos exclusivos, webinars semanais e material educacional 
                atualizado constantemente para manter você à frente do mercado.
              </p>
              <ul className="community-features">
                <li>Estratégias comprovadas</li>
                <li>Análises técnicas avançadas</li>
                <li>Psicologia de trading</li>
                <li>Gestão de risco</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="community-card featured">
              <div className="community-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="featured-badge">Destaque</div>
              <h3>Mentorias Individuais</h3>
              <p>
                Sessões personalizadas 1-on-1 com traders experientes da FML. 
                Análise do seu perfil, estratégias personalizadas e acompanhamento 
                direto do seu progresso.
              </p>
              <ul className="community-features">
                <li>Sessões semanais individuais</li>
                <li>Análise personalizada do seu trading</li>
                <li>Estratégias adaptadas ao seu perfil</li>
                <li>Acompanhamento de progresso</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="community-card">
              <div className="community-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Network Exclusivo</h3>
              <p>
                Conecte-se com traders de sucesso, participe de grupos VIP e 
                construa relacionamentos valiosos na indústria financeira.
              </p>
              <ul className="community-features">
                <li>Grupos VIP no Telegram</li>
                <li>Eventos exclusivos</li>
                <li>Networking com profissionais</li>
                <li>Compartilhamento de oportunidades</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="community-cta">
            <h3>Pronto para se juntar à nossa comunidade?</h3>
            <p>Comece sua jornada de sucesso no trading hoje mesmo</p>
            <div className="community-cta-buttons">
              <a href="https://t.me/feelpsfx" className="btn btn-primary btn-glow">
                ENTRAR NA COMUNIDADE FML
              </a>
              <a href="#pricing" className="btn btn-secondary">
                VER PLANOS
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
})

Community.displayName = 'Community'

export default Community
