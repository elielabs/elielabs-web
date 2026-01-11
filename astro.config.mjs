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
          label: 'Products',
          items: [
            { label: 'Notion to PPT Generator', link: '/products/notion-to-ppt' },
            { label: 'ChatGPT & Gemini to Notion Clipper', link: '/products/ai-to-notion' },
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