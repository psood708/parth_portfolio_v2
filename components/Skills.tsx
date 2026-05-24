import FadeUp from '@/components/FadeUp'
import FftBars from '@/components/FftBars'
import { skillGroups } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">FIG.05 — Stack Index</div>
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skillGroups.map((group, idx) => (
            <FadeUp key={group.name} delay={idx * 60}>
              <div className="skill-group">
                <div className={`skill-group-name sgn-${group.color}`}>
                  {group.name}
                </div>
                <div className="skill-tags">
                  {group.tags.map((tag) => (
                    <span className="skill-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <FftBars color={group.color} />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
