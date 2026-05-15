import site from '../site.config.js';

/** VitePress only — enable if you migrate the site (`npm i -D vitepress`). */
export default {
  title: site.title,
  description: site.description,
  themeConfig: site.themeConfig,
};
