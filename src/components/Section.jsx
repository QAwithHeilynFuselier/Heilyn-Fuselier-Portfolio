export default function Section({ id, children, className = '', ariaLabelledby }) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`section-block py-24 sm:py-32 ${className}`}
    >
      {children}
    </section>
  );
}
