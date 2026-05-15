import { currentlyWorkingOn } from '../data/projects';
import Section from './Section';

export default function CurrentlyWorking() {
  return (
    <Section id="current" ariaLabelledby="current-heading">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <p className="section-label mb-3">Now</p>
        <h2 id="current-heading" className="section-heading mb-8">
          Currently working on
        </h2>
        <ul className="list-minimal max-w-2xl">
          {currentlyWorkingOn.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
