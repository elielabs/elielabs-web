import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://elielabs.com',
  integrations: [
    starlight({
      title: 'Elie Labs',
      social: [
        {
          label: 'GitHub',
          link: 'https://github.com/elielabs',
          icon: 'github',
        },
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'About Us', link: '/about' },
            { label: 'Privacy Policy', link: '/privacy' },
          ],
        },
        {
          label: 'Products',
          items: [
            { label: 'Notion to PPT', link: '/products/notion-to-ppt' },
            { label: 'Gemini Clipper', link: '/products/clipper' },
          ],
        },
      ],
      credits: true,
    }),
  ],
});