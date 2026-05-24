/* Static SVG — no client JS needed; SMIL handles packet animation */
const W = 1120
const CY = 40
const NS = 80

const NODES = [
  { label: 'INGEST',    x: 60,   color: '#38bdf8' },
  { label: 'STORE',     x: 260,  color: '#a78bfa' },
  { label: 'COMPUTE',   x: 560,  color: '#fbbf24' },
  { label: 'SERVE',     x: 840,  color: '#e879f9' },
  { label: 'CONSUMERS', x: 1060, color: '#38bdf8' },
]

const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4],
] as const

function Packet({ x1, x2, color, delay }: { x1: number; x2: number; color: string; delay: number }) {
  return (
    <circle r={3} fill={color} cy={CY} cx={x1}>
      <animate
        attributeName="cx"
        from={x1}
        to={x2}
        dur="2.4s"
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0;0.9;0.9;0"
        keyTimes="0;0.1;0.9;1"
        dur="2.4s"
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
    </circle>
  )
}

export default function SystemDiagram() {
  return (
    <div className="hero-diagram">
      <div className="container">
        <div className="diagram-label">FIG.01 — System Architecture · ML Data Pipeline</div>
        <svg
          viewBox={`0 0 ${W} 80`}
          preserveAspectRatio="xMidYMid meet"
          style={{ width: '100%', height: 80, display: 'block' }}
        >
          {/* wires */}
          {EDGES.map(([ai, bi]) => {
            const a = NODES[ai], b = NODES[bi]
            return (
              <line
                key={`wire-${ai}-${bi}`}
                x1={a.x + NS / 2}
                y1={CY}
                x2={b.x - NS / 2}
                y2={CY}
                stroke="rgba(56,189,248,0.15)"
                strokeWidth={1}
                strokeDasharray="4 4"
              />
            )
          })}

          {/* nodes */}
          {NODES.map((n) => (
            <g key={n.label}>
              <rect
                x={n.x - NS / 2}
                y={CY - 14}
                width={NS}
                height={28}
                rx={2}
                fill="none"
                stroke={n.color}
                strokeWidth={1}
                opacity={0.5}
              />
              <text
                x={n.x}
                y={CY + 5}
                textAnchor="middle"
                fill={n.color}
                fontFamily="'Space Mono', monospace"
                fontSize={9}
                letterSpacing={1.5}
              >
                {n.label}
              </text>
            </g>
          ))}

          {/* packets */}
          {EDGES.map(([ai, bi]) => {
            const a = NODES[ai], b = NODES[bi]
            const x1 = a.x + NS / 2 + 2
            const x2 = b.x - NS / 2 - 2
            return [0, 1, 2].map(j => (
              <Packet
                key={`pkt-${ai}-${bi}-${j}`}
                x1={x1}
                x2={x2}
                color={a.color}
                delay={ai * 0.5 + j * 1.1}
              />
            ))
          })}
        </svg>
      </div>
    </div>
  )
}
