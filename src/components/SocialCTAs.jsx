import React, { forwardRef } from 'react'
import Reveal from './Reveal'

const SocialCTAs = forwardRef((props, ref) => {
  return (
    <section id="social" className="section social-ctas" ref={ref}>
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2>Contactos</h2>
            <p>
              Ligue-se às nossas plataformas oficiais.
            </p>
          </header>
        </Reveal>
        
        <div className="social-grid">
          <Reveal>
            <div className="social-card">
              <div className="social-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5 5.5l-5.8 15.4c-.2.6-.9.7-1.3.3l-4-3.3-2 1.9c-.4.4-1.1.2-1.2-.4l.4-4.6L20.9 4.3c.6-.4 1.3.2 1 1.2zM9.1 15.7l-.3 2.8 1.5-1.4 8-7.7-9.2 6.3z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Entre em contacto (telegram)</h3>
              <p>Meio de comunicação FML oficial</p>
              <a href="https://t.me/feelpsfx" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Envie-nos uma mensagem
              </a>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="social-card">
              <div className="social-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5 12.3c0-3.6-2.9-6.5-6.5-6.5-1.5 0-2.9.5-4 1.3-.5-.1-1-.2-1.6-.2C6 6.9 3.8 9 3.8 11.7c0 1.8 1 3.4 2.5 4.3v1.7c0 .6.6 1 1.2.7l2.1-1.1c.4.1.9.1 1.3.1 3.6 0 6.6-2.9 6.6-6.4z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>FML - Trading & Network</h3>
              <p>Servidor da comunidade (Discord)</p>
              <a href="#" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Entrar na Comunidade
              </a>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="social-card">
              <div className="social-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
                </svg>
              </div>
              <h3>Instagram</h3>
              <p>Conteúdo e novidades</p>
              <a href="https://instagram.com/fml.trading" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Abrir Instagram
              </a>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="social-card">
              <div className="social-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 7a3 3 0 0 0-2.1-2.1C18.9 4.2 12 4.2 12 4.2s-6.9 0-8.9.7A3 3 0 0 0 1 7c-.7 2-.7 6-.7 6s0 4 .7 6A3 3 0 0 0 3.1 21c2 .7 8.9.7 8.9.7s6.9 0 8.9-.7A3 3 0 0 0 23 19c.7-2 .7-6 .7-6s0-4-.7-6z" stroke="currentColor" strokeWidth="2"/>
                  <polygon points="10,15.5 10,8.5 16,12" fill="currentColor"/>
                </svg>
              </div>
              <h3>Canal - YouTube</h3>
              <p>Vídeos e análises</p>
              <a href="https://www.youtube.com/channel/UCe41vLch_t6jE1oEoBWYn6g" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Abrir YouTube
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className="social-card">
              <div className="social-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="3,7 12,13 21,7" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p>Escreva-nos por e-mail</p>
              <a href="mailto:contato@fmltrading.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Enviar Email
              </a>
            </div>
          </Reveal>
        </div>
        
        <Reveal>
          <div className="contact-cta">
            <h3>Quer transformar a sua vida?</h3>
            <p>A metodologia FML já transformou centenas de traders em profissionais lucrativos. Sua hora de brilhar chegou, não deixe essa oportunidade passar.</p>
            <div className="contact-cta-buttons">
              <a href="https://t.me/feelpsfx" className="btn btn-primary btn-glow" target="_blank" rel="noopener noreferrer">
                SEJA MEMBRO FML AGORA
              </a>
              <a href="mailto:contato@fmltrading.com" className="btn btn-secondary">
                FALAR COM ESPECIALISTA
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
})

SocialCTAs.displayName = 'SocialCTAs'

export default SocialCTAs

