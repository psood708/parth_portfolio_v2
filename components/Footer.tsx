import { marqueeItems } from '@/lib/data'

export default function Footer() {
  const doubled = [...marqueeItems, ...marqueeItems]
  return (
    <footer className="footer-root">
      <div className="footer-mark">P.SOOD · AI/ML ENGINEER · 2025</div>

      <div className="footer-marquee">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span className="marquee-item" key={i}>
              <span>·</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="footer-mark">PDEU · 2025</div>
    </footer>
  )
}
