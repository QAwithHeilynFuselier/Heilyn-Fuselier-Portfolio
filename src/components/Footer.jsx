export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-block py-16">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-5 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {year} Heilyn Fuselier</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/QAwithHeilynFuselier"
            className="hover:text-zinc-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/heilynfuselier-ia/"
            className="hover:text-zinc-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
