import { telemetryLogs } from '@/lib/data'

export default function Telemetry() {
  const doubled = [...telemetryLogs, ...telemetryLogs]
  return (
    <div className="telemetry">
      <div className="telemetry-inner">
        {doubled.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  )
}
