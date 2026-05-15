import site from '../../site.config.js';

export default function Footer() {
  const year = new Date().getFullYear();
  const { socialLinks } = site.themeConfig;

  return (
    <footer className="section-block py-16">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-5 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} {site.title}
        </p>
        <div className="flex gap-6">
          {socialLinks.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className="capitalize hover:text-zinc-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
