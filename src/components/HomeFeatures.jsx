import site from '../../site.config.js';

export default function HomeFeatures() {
  const { features } = site.home;

  return (
    <section className="border-b border-surface-border" aria-labelledby="features-heading">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24">
        <h2 id="features-heading" className="sr-only">
          Highlights
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.title} className="card-surface p-6">
              <h3 className="text-base font-medium text-zinc-100">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{feature.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
