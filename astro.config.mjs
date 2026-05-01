import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://elielabs.com',
  integrations: [
    starlight({
      title: 'Elie Labs',
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-B5LZKL2CL0',
            async: true,
          },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B5LZKL2CL0');
          `,
        },
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'About Us', link: '/about' },
            { label: 'Privacy & Refund Policy', link: '/privacy' },
          ],
        },
        {
          label: 'Products',
          items: [
            { label: 'All Products', link: '/products' },
            {
              label: 'Notion to PPT Generator',
              items: [
                { label: 'Overview & Download', link: '/products/notion-to-ppt' },
                { label: 'Version History', link: '/products/notion-to-ppt/changelog' },
              ],
            },
            {
              label: 'Notion AI Bridge: Export & Prompt',
              items: [
                { label: 'Overview & Download', link: '/products/notion-ai-bridge' },
                { label: 'Version History', link: '/products/notion-ai-bridge/changelog' },
              ],
            },
            {
              label: 'ChatGPT & Gemini Floating Messenger',
              items: [
                { label: 'Overview & Download', link: '/products/ai-floating-messenger' },
                { label: 'Version History', link: '/products/ai-floating-messenger/changelog' },
              ],
            },
          ],
        },
        {
          label: 'Developer Log',
          autogenerate: { directory: 'dev-log' },
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