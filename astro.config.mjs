import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://elielabs.com',
  integrations: [
    starlight({
      title: 'Elie Labs',
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'About Us', link: '/about' },
            { label: 'Privacy Policy', link: '/privacy' },
          ],
        },
        {
          label: 'Notion to PPT Generator',
          items: [
            { label: 'Overview & Download', link: '/products/notion-to-ppt' },
            { label: 'Version History', link: '/products/notion-to-ppt/changelog' },
          ],
        },
        {
          label: 'Community',
          items: [
            { 
              label: 'Roadmap & Feedback', 
              link: 'https://elielabs.canny.io/', 
              attrs: { target: '_blank' } 
            },
          ],
        },
      ],
      credits: true,
    }),
  ],
});