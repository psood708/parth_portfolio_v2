'use client'
import { useEffect, useRef } from 'react'

const COLORS: Record<string, string> = {
  blue:    '#38bdf8',
  amber:   '#fbbf24',
  fuchsia: '#e879f9',
  violet:  '#a78bfa',
}

interface Props {
  color: string
}

export default function FftBars({ color }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container || container.children.length > 0) return
    const hex = COLORS[color] ?? COLORS.blue
    for (let i = 0; i < 12; i++) {
      const bar = document.createElement('div')
      bar.className = 'fft-bar'
      const lo  = (20 + Math.random() * 30).toFixed(1) + '%'
      const hi  = (50 + Math.random() * 45).toFixed(1) + '%'
      const dur = (0.8 + Math.random() * 1.2).toFixed(2) + 's'
      bar.style.cssText = `--lo:${lo};--hi:${hi};--dur:${dur};background:${hex};height:${lo}`
      container.appendChild(bar)
    }
  }, [color])

  return <div ref={ref} className="fft-bars" />
}
