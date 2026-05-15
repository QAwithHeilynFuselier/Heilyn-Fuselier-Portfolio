/** Portfolio config (VitePress-style theme + home frontmatter). */
export default {
  title: 'Heilyn Fuselier',
  description: 'AI Engineer Portfolio',
  home: {
    hero: {
      name: 'Heilyn Fuselier',
      text: 'AI Engineer',
      tagline: 'LLM evaluation, Playwright automation, and AI reliability engineering.',
      image: {
        src: '/logo-hf.png',
        alt: 'HF Logo',
      },
      actions: [
        { theme: 'brand', text: 'View projects', link: '/projects' },
        { theme: 'alt', text: 'About me', link: '/about' },
      ],
    },
    features: [
      {
        title: 'AI Automation',
        details:
          'Frameworks with self-healing flows and SQL validation backed by AI-assisted checks.',
      },
      {
        title: 'Playwright Expert',
        details: 'High-throughput browser testing in TypeScript and Java.',
      },
      {
        title: 'Data Integrity',
        details: 'Database validation and data orchestration pipelines for LLM workflows.',
      },
    ],
  },
  themeConfig: {
    logo: '/logo-hf.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'About', link: '/about' },
    ],
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/heilynfuselier-ia/' },
      { icon: 'github', link: 'https://github.com/QAwithHeilynFuselier/Heilyn-Fuselier-Portfolio' },
    ],
  },
};
