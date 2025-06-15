---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Pomelo Admin"
  text: "现代化的管理系统"
  tagline: 一款开源免费且开箱即用的中后台管理系统模板
  image:
    src: /images/pomelo-logo.svg
    alt: Pomelo Admin Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 在线预览
      link: https://pomelo-admin.github.io/vue-pomelo-admin/#/login

features:
  - icon: 🧰
    title: 采用现代的技术栈
    details: Vue3 + TypeScript + Vite + Pinia + Element Plus + Tailwind CSS，享受最新前端技术栈
  - icon: 🛠️
    title: 丰富的功能型组件
    details: 提供滑块验证码、数字验证码、JSON编辑器等功能型组件，快速构建企业级应用
  - icon: 🔐
    title: RBAC权限管理
    details: 采用目前业内最常用的RBAC（用户->角色->权限）权限模型，支持配置各种粒度的权限
  - icon: 🎨
    title: 支持主题切换
    details: 支持进行日间、夜间主题模式切换
  - icon: 🌍
    title: 支持国际化
    details: 支持中文、英文语言国际化
  - icon: 📊
    title: 配套的监控平台
    details: 提供配套的Pomelo Trace前端监控平台，快速搭建监控平台
---