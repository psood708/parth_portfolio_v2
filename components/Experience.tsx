import FadeUp from '@/components/FadeUp'
import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label">FIG.03 — Career Circuit</div>
        <h2 className="section-title">Experience</h2>

        <div className="exp-timeline">
          {experience.map((item, idx) => (
            <FadeUp key={item.role} delay={idx * 150}>
              <div className="exp-item">
                <div className={`exp-dot exp-dot-${item.accentColor}`} />

                <div className="exp-meta">
                  <span className={`exp-period exp-period-${item.accentColor}`}>{item.period}</span>
                  <span className="exp-company">{item.company}</span>
                </div>

                <div className="exp-role">{item.role}</div>

                <ul className="exp-bullets">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className={`exp-bullet-${item.accentColor}`}>
                      <span className="exp-bullet-marker">▹</span>
                      <span dangerouslySetInnerHTML={{ __html: bullet }} />
                    </li>
                  ))}
                </ul>

                <div className="exp-kpis">
                  {item.kpis.map((k) => (
                    <div className="exp-kpi" key={k.label}>
                      <span>{k.val}</span> {k.label}
                    </div>
                  ))}
                </div>

                <div className="exp-chips">
                  {item.chips.map((chip) => (
                    <span
                      key={chip.label}
                      className={`chip${chip.color ? ` chip-${chip.color}` : ''}`}
                    >
                      {chip.label}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
