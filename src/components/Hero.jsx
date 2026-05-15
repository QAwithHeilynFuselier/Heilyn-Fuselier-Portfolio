import site from '../../site.config.js';

const routeMap = {
  '/': '#',
  '/projects': '#work',
  '/about': '#about',
};

export default function Hero() {
  const { hero } = site.home;
  const logoSrc = import.meta.env.BASE_URL + hero.image.src.replace(/^\//, '');

  return (
    <section className="border-b border-surface-border" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-content gap-12 px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-28 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-medium text-zinc-400">{hero.name}</p>
          <h1
            id="hero-heading"
            className="mt-2 text-3xl font-medium tracking-tight text-zinc-100 sm:text-5xl sm:leading-tight"
          >
            {hero.text}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">{hero.tagline}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            {hero.actions.map((action) => (
              <a
                key={action.text}
                href={routeMap[action.link] ?? action.link}
                className={
                  action.theme === 'brand' ? 'btn-primary text-center' : 'btn-secondary text-center'
                }
              >
                {action.text}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto lg:mx-0">
          <img
            src={logoSrc}
            alt={hero.image.alt}
            width={160}
            height={160}
            className="h-32 w-32 rounded-xl sm:h-40 sm:w-40"
          />
        </div>
      </div>
    </section>
  );
}
