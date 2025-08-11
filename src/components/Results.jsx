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
            <h2>Resultados e Provas</h2>
            <p>Indicadores que refletem a evolução da nossa comunidade.</p>
          </header>
        </Reveal>
        <div className="stats-grid">
          <Stat label="Membros na comunidade" end={12500} />
          <Stat label="Taxa de acerto média (%)" end={78} />
          <Stat label="Mentorias concluídas" end={430} />
          <Stat label="Operações acompanhadas" end={19600} />
        </div>
      </div>
    </section>
  )
}

