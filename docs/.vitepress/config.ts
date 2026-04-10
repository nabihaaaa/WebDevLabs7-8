//Nabiha Shah - 100874544
//Labs 7-8
import { defineConfig } from 'vitepress'

//main site configuration for paperbeam
export default defineConfig({
  title: "PaperBeam",
  description: "Elevate Your Content Flow",
  themeConfig: {
    logo: '/logo.png',

    //top nav bar links
    nav: [
      { text: 'Products', link: '/products' },
      { text: 'API', link: '/api' },
      {
        text: 'Learning',
        items: [
          { text: 'Documentations', link: '/learning/docs' },
          { text: 'Cheatsheets', link: '/learning/cheatsheets' },
          { text: 'Blog', link: '/learning/blog' },
          { text: 'Videos', link: '/learning/video' }
        ]
      },
      { text: 'Contact', link: '/contact' }
    ],

    //sidebar navigation structure for docs pages
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Products', link: '/products' },
          { text: 'API', link: '/api' },
        ]
      },
      {
        text: 'Learning',
        items: [
          { text: 'Documentations', link: '/learning/docs' },
          { text: 'Cheatsheets', link: '/learning/cheatsheets' },
          { text: 'Blog', link: '/learning/blog' },
          { text: 'Videos', link: '/learning/video' }
        ]
      }
    ],

    //git link
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nabihaaaa/WebDevLabs7-8.git' }
    ]
  }
})
