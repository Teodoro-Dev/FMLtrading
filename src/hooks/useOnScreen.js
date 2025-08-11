// Lightweight IntersectionObserver hook to detect when an element is on screen
// Returns a ref to attach and a boolean indicating visibility
import { useEffect, useRef, useState } from 'react'

export function useOnScreen(options = { root: null, rootMargin: '0px', threshold: 0.15 }) {
  const targetRef = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = targetRef.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
        // Once visible, we can unobserve to avoid repeated triggers for simple reveal
        observer.unobserve(element)
      }
    }, options)

    observer.observe(element)
    return () => observer.disconnect()
  }, [options])

  return { targetRef, isIntersecting }
}

