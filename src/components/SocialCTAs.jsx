import React from 'react'
import Reveal from './Reveal'

const links = [
  {
    label: 'Telegram',
    href: 'https://t.me/',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M9.04 15.59l-.36 5.06c.52 0 .75-.21 1.02-.46l2.45-2.22 5.08 3.72c.93.51 1.59.24 1.85-.86l3.36-15.74.01-.01c.33-1.51-.55-2.1-1.45-1.74L1.27 9.44C-.2 10.03-.18 10.9 1.01 11.26l5.46 1.7 12.67-7.98c.6-.39 1.14-.17.69.22" />
      </svg>
    ),
  },
  {
    label: 'Network & Trading',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zM20.79 13c-.2 2.02-1.07 3.84-2.36 5.26L13 13V9h-4l-3.11-3.11C7.06 4.78 9.39 4 12 4c4.08 0 7.44 3.05 7.93 7h.86c.12.64.21 1.32.21 2h-.21z" />
      </svg>
    ),
  },
  {
    label: 'Canal Oficial',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12 3C7.03 3 3 6.58 3 11c0 2.39 1.2 4.54 3.09 6.03L6 22l3.17-1.79c.87.24 1.79.37 2.83.37 4.97 0 9-3.58 9-8s-4.03-8-9-8z" />
      </svg>
    ),
  },
  {
    label: 'Perfil oficial FML',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
      </svg>
    ),
  },
  {
    label: 'GMAIL',
    href: 'mailto:contato@fmltrading.com',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12 13L2 6.76V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6.76L12 13z" />
        <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4C2.9 4 2 4.9 2 6v.01L12 12l10-5.99V6z" />
      </svg>
    ),
  },
]

export default function SocialCTAs() {
  return (
    <section id="social" className="section social-ctas">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <h2>Conecte-se</h2>
            <p>Entre nos nossos canais e evolua com a comunidade.</p>
          </header>
        </Reveal>
        <div className="cta-grid">
          {links.map((link) => (
            <Reveal key={link.label}>
              <a className="cta-btn" href={link.href} target={link.href.startsWith('#') ? undefined : '_blank'} rel="noreferrer">
                <span className="icon">{link.icon}</span>
                <span className="label">{link.label}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

