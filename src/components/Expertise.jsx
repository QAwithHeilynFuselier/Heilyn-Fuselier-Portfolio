import { labStudies } from '../data/projects';
import Section from './Section';

export default function Expertise() {
  return (
    <Section id="labs" ariaLabelledby="labs-heading">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <p className="section-label mb-3">Research</p>
        <h2 id="labs-heading" className="section-heading mb-4">
          Evaluation &amp; reliability labs
        </h2>
        <p className="body-muted mb-12 max-w-2xl">
          Experiments run against real UI and web constraints—not slide-deck benchmarks.
        </p>
        <ul className="grid gap-px overflow-hidden rounded-lg border border-surface-border bg-surface-border sm:grid-cols-3">
          {labStudies.map((study) => (
            <li key={study.title} className="bg-surface-raised p-6">
              <h3 className="text-sm font-medium text-zinc-200">{study.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">{study.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
