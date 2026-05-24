'use client'
import { useEffect, useRef } from 'react'

interface Props {
  color: string
  freq?: number
}

export default function ProjectWave({ color, freq = 0.4 }: Props) {
  const ref = useRef<SVGPolylineElement>(null)

  useEffect(() => {
    let t = 0
    let animId: number

    function tick() {
      const el = ref.current
      if (!el) return
      const pts: string[] = []
      for (let x = 0; x <= 80; x += 4) {
        const y =
          12 +
          Math.sin(x * freq + t) * 8 +
          Math.sin(x * freq * 2 + t * 1.3) * 3
        pts.push(`${x},${y}`)
      }
      el.setAttribute('points', pts.join(' '))
      t += 0.06
      animId = requestAnimationFrame(tick)
    }

    tick()
    return () => cancelAnimationFrame(animId)
  }, [freq])

  return (
    <svg className="proj-wave" viewBox="0 0 80 24" fill="none">
      <polyline ref={ref} stroke={color} strokeWidth={1.5} fill="none" />
    </svg>
  )
}
