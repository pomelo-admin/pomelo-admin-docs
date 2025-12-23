import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
const base = process.env.DOCS_BASE ?? '/'

export default defineConfig({
  title: 'Pomelo Admin 在线文档',
  description: 'Pomelo Admin 在线文档',
  lang: 'zh-CN',
  lastUpdated: true,
  base,

  head: [['link', { rel: 'icon', href: '/images/pomelo-logo.svg', type: 'image/svg+xml' }]],

  vite: {
    server: {
      port: 3000,
      strictPort: false,
    },
  },

  themeConfig: {
    logo: '/images/pomelo-logo.svg',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: 'API参考', link: '/api/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '项目总览', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '项目结构', link: '/guide/project-structure' },
            { text: '开发规范', link: '/guide/code-style' },
          ],
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '组件总览', link: '/components/' },
            { text: '基础组件', link: '/components/basic/' },
            { text: '业务组件', link: '/components/business/' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API参考',
          items: [
            { text: 'API概述', link: '/api/' },
            { text: '接口文档', link: '/api/interfaces' },
            { text: '工具函数', link: '/api/utils' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/pomelo-admin' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Pomelo Admin',
    },

    search: {
      provider: 'local',
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/yourusername/pomelo-admin-docs/edit/main/:path',
      text: '在 GitHub 上编辑此页',
    },
  },
})
