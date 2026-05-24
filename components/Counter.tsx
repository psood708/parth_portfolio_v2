'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  target: number
  suffix: string
}

export default function Counter({ target, suffix }: Props) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        let current = 0
        const step = Math.ceil(target / 40)
        const timer = setInterval(() => {
          current = Math.min(current + step, target)
          setValue(current)
          if (current >= target) clearInterval(timer)
        }, 30)
      },
      { threshold: 0.5 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
