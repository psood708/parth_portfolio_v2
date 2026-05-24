'use client'
import { useState } from 'react'
import FadeUp from '@/components/FadeUp'
import GaugeBars from '@/components/GaugeBars'
import { profile } from '@/lib/data'

const CHANNELS = [
  { icon: '@',  type: 'Email',    val: profile.email,              href: `mailto:${profile.email}` },
  { icon: 'in', type: 'LinkedIn', val: 'linkedin.com/in/parth-sood', href: profile.linkedin },
  { icon: '{}', type: 'GitHub',   val: 'github.com/psood708',       href: profile.github },
]

const SUBJECTS = [
  'Collaboration / Project',
  'Job Opportunity',
  'Research Discussion',
  'Other',
]

export default function Contact() {
  const [charCount, setCharCount] = useState(0)
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setCharCount(0)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <section id="contact" className="contact-root">
      <div className="container">
        <div className="section-label">FIG.06 — Comms Console</div>
        <h2 className="section-title">Signal</h2>

        <div className="contact-grid">
          {/* form */}
          <FadeUp>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="f-subject">// Subject</label>
                <select className="form-select" id="f-subject">
                  <option value="">Select channel</option>
                  {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="f-name">// Sender ID</label>
                <input className="form-input" id="f-name" type="text" placeholder="Your name" autoComplete="off" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="f-email">// Return Address</label>
                <input className="form-input" id="f-email" type="email" placeholder="your@email.com" autoComplete="off" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="f-msg">// Payload</label>
                <textarea
                  className="form-textarea"
                  id="f-msg"
                  placeholder="Your message..."
                  onChange={e => setCharCount(e.target.value.length)}
                />
                <div className="form-meta">
                  <span className="char-count">{charCount} chars</span>
                </div>
              </div>
              <button className={`form-submit${sent ? ' sent' : ''}`} type="submit">
                <span>{sent ? 'Transmitted' : 'Transmit'}</span>
                <span>{sent ? '✓' : '→'}</span>
              </button>
            </form>
          </FadeUp>

          {/* channels + gauge */}
          <FadeUp delay={150}>
            <div className="contact-channels">
              {CHANNELS.map(ch => (
                <a
                  key={ch.type}
                  className="channel"
                  href={ch.href}
                  target={ch.type !== 'Email' && ch.type !== 'Phone' ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <div className="channel-icon">{ch.icon}</div>
                  <div>
                    <div className="channel-type">{ch.type}</div>
                    <div className="channel-val">{ch.val}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="signal-gauge">
              <div className="gauge-label">// Signal Strength — Response SLA &lt; 24hr</div>
              <GaugeBars />
              <div className="gauge-status">
                <div className="status-dot" />
                ONLINE · Actively monitoring
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
