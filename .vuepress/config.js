const sidebar = require('./sidebar')

module.exports = {
  title: '개발자 한선우',
  description: 'Today I leanred',
  themeConfig: {
    logo: '',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Repository', link: 'https://github.com/yadon079/TIL/' },
    ],
    sidebar,
    lastUpdated: 'Last Updated',
    smoothScroll: true
  },
  base: '/TIL/',
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-underline'))
      md.use(require('markdown-it-task-lists'))
    }
  },
  plugins: [
    ['@vuepress/pwa', { serviceWorker: true, updatePopup: true }],
    ['feed', { canonical_base: 'https://yadon079.github.io/TIL/' }],
    //[
    //  '@vuepress/google-analytics',
    //  {
    //    'ga': 'UA-175495538-1'
    //  }
    //],
    ['sitemap', { hostname: 'https://yadon079.github.io/TIL' }]
  ]
}
