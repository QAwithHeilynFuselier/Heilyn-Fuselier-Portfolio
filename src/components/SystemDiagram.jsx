const diagrams = {
  'automation-pipeline': {
    label: 'CI automation flow',
    nodes: ['CI trigger', 'Java runner', 'Playwright', 'Allure report'],
  },
  'data-bridge': {
    label: 'Evaluation data path',
    nodes: ['XML / artifacts', 'Python ETL', 'SQLite', 'Java / TS consumers'],
  },
  sidecar: {
    label: 'Probe layout',
    nodes: ['JVM test core', 'Go probes', 'TS CLI', 'Shared signals'],
  },
  observability: {
    label: 'Report routing',
    nodes: ['Test run', 'Allure ingest', 'n8n workflow', 'Alert channel'],
  },
};

export default function SystemDiagram({ type }) {
  const config = diagrams[type];
  if (!config) return null;

  return (
    <figure className="diagram-surface mt-6" aria-label={config.label}>
      <figcaption className="mb-3 text-xs text-zinc-500">{config.label}</figcaption>
      <ol className="flex list-none flex-wrap items-center gap-2 p-0 sm:flex-nowrap">
        {config.nodes.map((node, i) => (
          <li key={node} className="flex items-center gap-2">
            <span className="diagram-node">{node}</span>
            {i < config.nodes.length - 1 && (
              <span className="text-zinc-600" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
