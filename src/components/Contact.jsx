import Section from './Section';

export default function Contact({ onContactClick }) {
  return (
    <Section id="contact" ariaLabelledby="contact-heading">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <p className="section-label mb-3">Contact</p>
        <h2 id="contact-heading" className="section-heading mb-4">
          Get in touch
        </h2>
        <p className="body-muted mb-8 max-w-md">
          For roles in AI evaluation, test infrastructure, or reliability engineering. I typically
          respond within a few days.
        </p>
        <button type="button" className="btn-primary" onClick={onContactClick}>
          Email or LinkedIn
        </button>
      </div>
    </Section>
  );
}
