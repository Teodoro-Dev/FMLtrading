import React from 'react'
import { useOnScreen } from '../hooks/useOnScreen'

export default function Reveal({ as: Tag = 'div', className = '', children, animation = 'fade-up' }) {
  const { targetRef, isIntersecting } = useOnScreen({ threshold: 0.15 })
  const cls = `reveal ${animation} ${isIntersecting ? 'is-visible' : ''} ${className}`.trim()
  return (
    <Tag ref={targetRef} className={cls}>
      {children}
    </Tag>
  )
}

