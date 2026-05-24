'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

const LINKS = [
  { label: 'Init',   href: '#hero',       section: 'hero' },
  { label: 'About',  href: '#about',      section: 'about' },
  { label: 'XP',     href: '#experience', section: 'experience' },
  { label: 'Build',  href: '#projects',   section: 'projects' },
  { label: 'Stack',  href: '#skills',     section: 'skills' },
  { label: 'Signal', href: '#contact',    section: 'contact' },
]

export default function Nav() {
  const navRef  = useRef<HTMLElement>(null)
  const pillRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [activeIdx, setActiveIdx] = useState(0)
  const [scrolled, setScrolled]   = useState(false)

  const movePill = useCallback((idx: number) => {
    const nav  = navRef.current
    const pill = pillRef.current
    const link = linkRefs.current[idx]
    if (!nav || !pill || !link) return
    const nr = nav.getBoundingClientRect()
    const lr = link.getBoundingClientRect()
    pill.style.left  = `${lr.left - nr.left}px`
    pill.style.width = `${lr.width}px`
  }, [])

  useEffect(() => {
    /* initial pill position after fonts load */
    const id = requestAnimationFrame(() => movePill(0))
    return () => cancelAnimationFrame(id)
  }, [movePill])

  useEffect(() => {
    movePill(activeIdx)
  }, [activeIdx, movePill])

  useEffect(() => {
    const sections = LINKS.map(l => document.querySelector<HTMLElement>(l.href))

    function onScroll() {
      setScrolled(window.scrollY > 40)
      const y = window.scrollY + 120
      let active = 0
      sections.forEach((sec, i) => { if (sec && sec.offsetTop <= y) active = i })
      setActiveIdx(active)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav ref={navRef} className={`nav-root${scrolled ? ' scrolled' : ''}`}>
      <div ref={pillRef} className="nav-pill" />
      {LINKS.map((link, i) => (
        <a
          key={link.section}
          ref={el => { linkRefs.current[i] = el }}
          href={link.href}
          className={`nav-link${activeIdx === i ? ' active' : ''}`}
          onClick={() => setActiveIdx(i)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
