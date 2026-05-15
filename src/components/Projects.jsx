import { projects } from '../data/projects';
import Section from './Section';
import SystemDiagram from './SystemDiagram';

function CaseStudy({ project, index }) {
  return (
    <article className="case-study" aria-labelledby={`project-${project.id}`}>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 id={`project-${project.id}`} className="text-lg font-medium text-zinc-100">
          {project.title}
        </h3>
        <span className="font-mono text-xs text-zinc-600">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <dl className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <dt className="case-study-label">Problem</dt>
          <dd className="case-study-value">{project.problem}</dd>
        </div>
        <div>
          <dt className="case-study-label">Built</dt>
          <dd className="case-study-value">{project.built}</dd>
        </div>
        <div>
          <dt className="case-study-label">Outcome</dt>
          <dd className="case-study-value">{project.outcome}</dd>
        </div>
        <div>
          <dt className="case-study-label">Stack</dt>
          <dd className="mt-2">
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((item) => (
                <li key={item}>
                  <span className="tech-pill">{item}</span>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      <SystemDiagram type={project.diagram} />

      <div className="mt-8 flex flex-wrap gap-3 border-t border-surface-border pt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          GitHub
        </a>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Demo
          </a>
        ) : (
          <a
            href={`${project.github}#readme`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Documentation
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="work" ariaLabelledby="work-heading">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <p className="section-label mb-3">Systems</p>
        <h2 id="work-heading" className="section-heading mb-4">
          Engineering work
        </h2>
        <p className="body-muted mb-14 max-w-2xl">
          Open-source infrastructure for test execution, evaluation data, probes, and report
          routing. Each repo maps to a production-style constraint, not a UI demo.
        </p>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <CaseStudy key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
