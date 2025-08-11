// Simple typing effect hook for text messages
import { useEffect, useMemo, useRef, useState } from 'react'

/**
 * useTypedText progressively types the provided fullText.
 * Supports optional loop and typing speed customization.
 */
export function useTypedText({ fullText, speedMs = 40, startDelayMs = 300, loop = false }) {
  const [displayed, setDisplayed] = useState('')
  const indexRef = useRef(0)
  const looping = useRef(loop)

  const safeText = useMemo(() => fullText ?? '', [fullText])

  useEffect(() => {
    setDisplayed('')
    indexRef.current = 0
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        const i = indexRef.current
        if (i < safeText.length) {
          setDisplayed((prev) => prev + safeText.charAt(i))
          indexRef.current = i + 1
        } else {
          if (looping.current) {
            // brief pause then restart
            clearInterval(intervalId)
            setTimeout(() => {
              setDisplayed('')
              indexRef.current = 0
              looping.current = loop
            }, 1000)
          } else {
            clearInterval(intervalId)
          }
        }
      }, speedMs)
      // cleanup
      return () => clearInterval(intervalId)
    }, startDelayMs)

    return () => clearTimeout(timeoutId)
  }, [safeText, speedMs, startDelayMs, loop])

  return displayed
}

