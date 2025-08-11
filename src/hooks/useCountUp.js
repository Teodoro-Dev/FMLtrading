// Count-up animation hook that starts when "start" flag turns true
import { useEffect, useState } from 'react'

export function useCountUp({ end, durationMs = 1500, start = false }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    const startTimestamp = performance.now()
    const animate = (now) => {
      const progress = Math.min((now - startTimestamp) / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    const raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [end, durationMs, start])

  return value
}

