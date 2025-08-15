import React from 'react'

export default function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="fml-logo">
            <span className="fml-letter">F</span>
            <span className="fml-letter">M</span>
            <span className="fml-letter">L</span>
          </div>
          <div className="loading-ring"></div>
        </div>
        <p className="loading-text">Carregando...</p>
        <div className="loading-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  )
}
