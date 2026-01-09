import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://elielabs.com',
  integrations: [
    starlight({
      title: 'Elie Labs', // 顯示在左上角的品牌名
      // 這裡不需要特別設 locale，Starlight 預設 root 就是英文
      social: {
        github: 'https://github.com/elielabs',
      },
      // 側邊欄改為全英文
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'About Us', link: '/about' },
            { label: 'Privacy Policy', link: '/privacy' }, // 上架 Chrome Store 必備
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
      // 這是頁尾的預設文字
      credits: true, 
    }),
  ],
});
