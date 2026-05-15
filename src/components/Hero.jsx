export default function Hero({ onContactClick }) {
  return (
    <section className="border-b border-surface-border" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-content px-5 pb-28 pt-24 sm:px-8 sm:pb-36 sm:pt-32">
        <p className="section-label mb-5">Heilyn Fuselier · Atlanta</p>

        <h1
          id="hero-heading"
          className="max-w-2xl text-[1.75rem] font-medium leading-snug tracking-tight text-zinc-100 sm:text-4xl sm:leading-[1.2]"
        >
          AI Engineer focused on LLM evaluation and AI reliability.
        </h1>

        <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-zinc-400 sm:text-base">
          Building tooling, validation systems, and scalable backend workflows.
        </p>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500">
          Java and Python for automation cores and data bridges · Playwright for UI evidence · SQL
          for ground truth · n8n for operational routing.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#work" className="btn-primary text-center">
            View systems work
          </a>
          <button type="button" className="btn-secondary" onClick={onContactClick}>
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}
