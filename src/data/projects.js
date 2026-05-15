export const projects = [
  {
    id: 'uaf',
    title: 'Unified Automation Framework',
    problem:
      'Browser suites broke when selectors changed; teams fixed locators instead of shipping features.',
    built:
      'JVM execution layer with Playwright for Java, shared fixtures, and recovery paths for unstable UI.',
    outcome:
      'One CI entry point for end-to-end runs; failures surface with enough context to debug quickly.',
    stack: ['Java', 'Maven', 'Playwright', 'Docker'],
    diagram: 'automation-pipeline',
    github: 'https://github.com/QAwithHeilynFuselier/Unified-Automation-Framework',
    live: null,
  },
  {
    id: 'bridge',
    title: 'AI Data Bridge',
    problem:
      'Evaluation scores and ETL outputs lived in different formats across Python, Java, and TypeScript repos.',
    built:
      'Middleware that lands XML into SQLite, exposes typed contracts, and publishes versioned eval results.',
    outcome:
      'Downstream automation reads a single store instead of re-implementing scoring in each service.',
    stack: ['Python', 'Java', 'TypeScript', 'SQLite'],
    diagram: 'data-bridge',
    github: 'https://github.com/QAwithHeilynFuselier/AI-Data-Bridge',
    live: null,
  },
  {
    id: 'go',
    title: 'Go-Project',
    problem:
      'Health checks and synthetic probes needed to run outside the main Java test runtime.',
    built:
      'Small Go binaries and TypeScript CLIs for edge probes that run parallel to the core framework.',
    outcome:
      'Lightweight checks without expanding the JVM footprint of the primary automation stack.',
    stack: ['Go', 'TypeScript'],
    diagram: 'sidecar',
    github: 'https://github.com/QAwithHeilynFuselier',
    live: null,
  },
  {
    id: 'n8n',
    title: 'Orchestration & Observability',
    problem:
      'Allure reports accumulated; failures were easy to miss unless someone opened the dashboard.',
    built:
      'n8n workflows that ingest Allure artifacts and route notifications to the right owners.',
    outcome:
      'Fewer silent reds—pipeline failures trigger follow-up instead of sitting in a report UI.',
    stack: ['n8n', 'Allure'],
    diagram: 'observability',
    github: 'https://github.com/QAwithHeilynFuselier/automation-orchestration-n8n',
    live: null,
  },
];

export const labStudies = [
  {
    title: 'Resilience & red teaming',
    description:
      'Prompt-injection scenarios through Playwright flows; measure where rubrics and refusals hold.',
  },
  {
    title: 'Hallucination detection',
    description:
      'Compare live page facts with model output to flag claims that are not verifiable on the web.',
  },
  {
    title: 'Multimodal visual evaluation',
    description:
      'Screenshot captures audited with vision models when DOM assertions are not enough.',
  },
];

export const currentlyWorkingOn = [
  'LLM evaluation workflows (instruction-following, scoring rubrics)',
  'AI reliability tooling (ground-truth checks, regression suites)',
  'Agent orchestration patterns for test and eval pipelines',
];

export const approach = [
  'Systems-oriented engineering — clear boundaries between runtimes and data stores',
  'Reliability-first workflows — evidence over anecdotes in eval and automation',
  'Practical AI evaluation — benchmarks tied to UI, SQL, or API truth',
  'Scalable backend tooling — polyglot only where integration requires it',
];
