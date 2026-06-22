import { metrics } from '../data/metrics';

export function ImpactMetrics() {
  return (
    <section className="metrics-section" aria-labelledby="metrics-title">
      <div className="section-intro">
        <p className="eyebrow">Impact Metrics</p>
        <h2 id="metrics-title">Problems translated into measurable outcomes.</h2>
        <p>문제를 기능으로 끝내지 않고, 변화로 확인했습니다.</p>
      </div>
      <div className="metrics-grid">
        {metrics.map((metric) => (
          <article className="metric-item" key={metric.value}>
            <strong>{metric.value}</strong>
            <p>{metric.label}</p>
            <span>{metric.context}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
