'use client'
import { useEffect, useRef } from 'react'

export default function GaugeBars() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container || container.children.length > 0) return
    for (let i = 0; i < 16; i++) {
      const bar = document.createElement('div')
      bar.className = 'gauge-bar'
      const lo  = (30 + Math.random() * 30).toFixed(1) + '%'
      const hi  = (65 + Math.random() * 35).toFixed(1) + '%'
      const dur = (0.6 + Math.random() * 0.8).toFixed(2) + 's'
      bar.style.cssText = `--lo:${lo};--hi:${hi};--d:${dur};height:${lo}`
      container.appendChild(bar)
    }
  }, [])

  return <div ref={ref} className="gauge-bars" />
}
