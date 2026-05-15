import Section from './Section';

export default function About() {
  return (
    <Section id="about" ariaLabelledby="about-heading">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <p className="section-label mb-3">About</p>
        <h2 id="about-heading" className="section-heading mb-10 max-w-lg">
          Technical background
        </h2>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_240px]">
          <div className="body-muted max-w-2xl space-y-6">
            <p>
              I&apos;m from Costa Rica and studied at the University of Costa Rica (UCR). I started
              in software development and QA—shipping features, reviewing releases, and learning how
              teams decide when something is ready for production.
            </p>
            <p>
              From there I moved into test automation and data validation: Playwright for browser
              flows, SQL against staging and warehouse data, and CI pipelines that had to stay useful
              when the UI changed. The work was less about tools and more about whether a failure
              pointed to a real regression.
            </p>
            <p>
              That foundation carried into AI systems work—especially LLM evaluation. The questions
              are familiar: what is the ground truth, can we reproduce the result, and does the
              score reflect something a user could verify? I&apos;m deepening that through UT
              Austin&apos;s AI program while building the same kinds of systems in practice.
            </p>
            <p>
              I&apos;m based in Atlanta now. Day to day I work on automation frameworks, evaluation
              middleware, and backend workflows (Java, Python, Playwright, SQLite, n8n) with a
              reliability-first mindset—clear contracts between services, honest reporting, and
              pipelines that fail for explainable reasons.
            </p>
            <p>
              Open to full-time or contract roles in AI quality, platform testing, and reliability
              engineering. English and Spanish.
            </p>
          </div>
          <aside className="card-surface h-fit p-5 text-sm">
            <dl className="space-y-5">
              <div>
                <dt className="text-zinc-500">Location</dt>
                <dd className="mt-1 text-zinc-300">Atlanta, GA</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Education</dt>
                <dd className="mt-1 text-zinc-300">UCR · UT Austin AI (in progress)</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Core stack</dt>
                <dd className="mt-1 font-mono text-xs leading-relaxed text-zinc-400">
                  Java · Python · Playwright · SQLite · n8n
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </Section>
  );
}
