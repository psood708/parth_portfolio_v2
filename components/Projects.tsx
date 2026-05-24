import FadeUp from '@/components/FadeUp'
import ProjectWave from '@/components/ProjectWave'
import { projects } from '@/lib/data'

const CARD_COLORS = ['blue', 'amber', 'fuchsia'] as const

export default function Projects() {
  return (
    <section id="projects" className="projects-root">
      <div className="container">
        <div className="section-label">FIG.04 — Exploded Views</div>
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <FadeUp key={proj.name} delay={idx * 100}>
              <div className={`proj-card proj-card-${CARD_COLORS[idx % 3]}`}>
                {/* header */}
                <div className="proj-scope">
                  <span className="proj-fig">{proj.fig}</span>
                  <ProjectWave color={proj.waveColor} freq={0.3 + idx * 0.1} />
                </div>

                {/* body */}
                <div className="proj-body">
                  <div className="proj-name">{proj.name}</div>
                  <div className="proj-sub">{proj.sub}</div>

                  {/* exploded flow */}
                  <div className="proj-flow">
                    {proj.flow.map((node, fi) => (
                      <span key={fi}>
                        <span className={`flow-node flow-${node.type}`}>{node.label}</span>
                        {fi < proj.flow.length - 1 && (
                          <span className="flow-arrow"> → </span>
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="proj-desc">{proj.desc}</div>

                  <div className="proj-kpi-row">
                    {proj.kpiBadges.map((badge) => (
                      <span className="proj-kpi-badge" key={badge}>{badge}</span>
                    ))}
                  </div>
                </div>

                {/* BOM */}
                <div className="proj-bom">
                  <div className="bom-label">BOM — Stack</div>
                  {proj.chips.map((chip) => (
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
