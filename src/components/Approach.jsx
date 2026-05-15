import { approach } from '../data/projects';
import Section from './Section';

export default function Approach() {
  return (
    <Section id="approach" ariaLabelledby="approach-heading">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <p className="section-label mb-3">Method</p>
        <h2 id="approach-heading" className="section-heading mb-8">
          Approach
        </h2>
        <ul className="list-minimal max-w-2xl">
          {approach.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
