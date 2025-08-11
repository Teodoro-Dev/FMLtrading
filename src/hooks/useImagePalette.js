// Extracts a small color palette from an image using Canvas.
// No external libraries.
import { useEffect, useMemo, useState } from 'react'

function getDominantColorsFromImage(img, sampleStep = 10) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  const width = (canvas.width = img.naturalWidth)
  const height = (canvas.height = img.naturalHeight)
  ctx.drawImage(img, 0, 0)

  const colorCounts = new Map()
  const data = ctx.getImageData(0, 0, width, height).data
  // Sample pixels in a grid for performance
  for (let y = 0; y < height; y += sampleStep) {
    for (let x = 0; x < width; x += sampleStep) {
      const idx = (y * width + x) * 4
      const r = data[idx]
      const g = data[idx + 1]
      const b = data[idx + 2]
      const a = data[idx + 3]
      if (a < 128) continue // skip transparent
      // quantize to reduce unique colors
      const qr = Math.round(r / 16) * 16
      const qg = Math.round(g / 16) * 16
      const qb = Math.round(b / 16) * 16
      const key = `${qr},${qg},${qb}`
      colorCounts.set(key, (colorCounts.get(key) || 0) + 1)
    }
  }
  const sorted = [...colorCounts.entries()].sort((a, b) => b[1] - a[1])
  const toHex = (c) => `#${c.toString(16).padStart(2, '0')}`
  const toHexColor = (key) => {
    const [r, g, b] = key.split(',').map((n) => parseInt(n, 10))
    return `${toHex(r)}${toHex(g)}${toHex(b)}`
  }
  const top = sorted.slice(0, 6).map(([k]) => toHexColor(k))
  return top
}

function ensureContrast(hex, on = '#0b0b0b', off = '#ffffff') {
  // YIQ contrast
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 140 ? on : off
}

export function useImagePalette(src) {
  const [palette, setPalette] = useState({
    brand: '#0d1b2a',
    brandAlt: '#1b263b',
    accent: '#e0a80d',
    textOnBrand: '#ffffff',
  })

  useEffect(() => {
    if (!src) return
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src
    img.decoding = 'async'
    img.onload = () => {
      try {
        const colors = getDominantColorsFromImage(img, 12)
        if (colors.length) {
          const [primary, secondary = '#1b263b', accent = '#e0a80d'] = colors
          const textOnBrand = ensureContrast(primary)
          setPalette({ brand: primary, brandAlt: secondary, accent, textOnBrand })
        }
      } catch (e) {
        // silent fallback to defaults
      }
    }
  }, [src])

  // also expose CSS variables string for inline style usage
  const cssVars = useMemo(
    () => ({
      '--brand': palette.brand,
      '--brand-2': palette.brandAlt,
      '--accent': palette.accent,
      '--text-on-brand': palette.textOnBrand,
    }),
    [palette]
  )

  return { palette, cssVars }
}

