'use client'
import { useEffect, useRef } from 'react'

const TRACES = [
  { color: '#38bdf8', freq: 0.012, ampScale: 0.28, phase: 0,   lineWidth: 1.5, alpha: 0.7, blur: 12 },
  { color: '#fbbf24', freq: 0.016, ampScale: 0.23, phase: 1.2, lineWidth: 1,   alpha: 0.3, blur: 0  },
  { color: '#e879f9', freq: 0.020, ampScale: 0.18, phase: 2.4, lineWidth: 1,   alpha: 0.3, blur: 0  },
]

export default function Oscilloscope() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number
    let t = 0

    function resize() {
      const c = ref.current
      if (!c) return
      const dpr = window.devicePixelRatio || 1
      c.width  = c.offsetWidth  * dpr
      c.height = c.offsetHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function draw() {
      const c = ref.current
      if (!c) return
      const w = c.offsetWidth
      const h = c.offsetHeight
      ctx.clearRect(0, 0, w, h)

      TRACES.forEach(tr => {
        const amp   = h * tr.ampScale
        const yBase = h * 0.5
        ctx.beginPath()
        ctx.strokeStyle = tr.color
        ctx.lineWidth   = tr.lineWidth
        ctx.globalAlpha = tr.alpha
        ctx.shadowBlur  = tr.blur
        ctx.shadowColor = tr.color
        for (let x = 0; x <= w; x++) {
          const y = yBase
            + Math.sin(x * tr.freq + t + tr.phase) * amp
            + Math.sin(x * tr.freq * 2.3 + t * 1.4 + tr.phase) * (amp * 0.3)
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      })

      ctx.globalAlpha = 1
      ctx.shadowBlur  = 0
      t += 0.025
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="scope-canvas" />
}
