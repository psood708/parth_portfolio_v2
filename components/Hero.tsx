import Counter from '@/components/Counter'
import Oscilloscope from '@/components/Oscilloscope'
import SystemDiagram from '@/components/SystemDiagram'
import Telemetry from '@/components/Telemetry'
import { heroKpis, profile } from '@/lib/data'

export default function Hero() {
  return (
    <section id="hero" className="hero-root">
      <Telemetry />

      <div className="hero-inner">
        <div className="hero-status">
          <div className="status-dot" />
          <span>{profile.status} · {profile.location}</span>
        </div>

        <h1 className="hero-name">
          <span className="hero-line1">Parth</span>
          <span className="hero-line2">Sood.</span>
        </h1>

        <div className="hero-tagline">
          <div className="hero-role">
            <strong>{profile.role}</strong>
            <br />
            {profile.tagline.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </div>

          <div className="hero-kpis">
            {heroKpis.map((k) => (
              <div className="kpi" key={k.label}>
                <div className="kpi-val">
                  <Counter target={k.count} suffix={k.suffix} />
                </div>
                <div className="kpi-label">{k.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Oscilloscope />
      <SystemDiagram />
    </section>
  )
}
