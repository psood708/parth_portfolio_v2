'use client'
import { useEffect, useRef } from 'react'
import FadeUp from '@/components/FadeUp'
import { aboutBio, aboutStats, capabilities, profile } from '@/lib/data'

export default function About() {
  const barsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = barsRef.current
    if (!container) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        container.querySelectorAll<HTMLElement>('.cap-fill').forEach(el => {
          el.style.width = `${el.dataset.w}%`
        })
        obs.disconnect()
      },
      { threshold: 0.2 },
    )
    obs.observe(container)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="about-root">
      <div className="container">
        <div className="section-label">FIG.02 — Profile</div>
        <h2 className="section-title">About</h2>

        <div className="about-grid">
          {/* left column */}
          <div>
            <FadeUp>
              <div className="about-bio">
                {aboutBio.map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
              <div className="about-links">
                <a className="about-link" href={`mailto:${profile.email}`}>→ Email</a>
                <a className="about-link" href={profile.linkedin} target="_blank" rel="noreferrer">→ LinkedIn</a>
                <a className="about-link" href={profile.github}   target="_blank" rel="noreferrer">→ GitHub</a>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="about-stats">
                {aboutStats.map((s) => (
                  <div className="stat-box" key={s.desc}>
                    <div className="stat-val">{s.val}<span>{s.suffix}</span></div>
                    <div className="stat-desc">{s.desc}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* right column — capability bars */}
          <FadeUp delay={150}>
            <div className="cap-title">// capability · 0–100</div>
            <div ref={barsRef}>
              {capabilities.map((cap) => (
                <div className="cap-item" key={cap.name}>
                  <div className="cap-row">
                    <span className="cap-name">{cap.name}</span>
                    <span className="cap-pct">{cap.pct}</span>
                  </div>
                  <div className="cap-track">
                    <div
                      className={`cap-fill cap-fill-${cap.color}`}
                      data-w={cap.pct}
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
