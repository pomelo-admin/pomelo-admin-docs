# 快速开始

本章节将帮助你从零开始搭建一个 Pomelo Admin 项目。

## 环境准备

在开始之前，请确保你的开发环境满足以下要求：

- Node.js >= 16.0.0
- npm >= 7.0.0 或 pnpm >= 6.0.0 或 yarn >= 1.22.0
- 现代浏览器（Chrome、Firefox、Edge、Safari 等）

## 安装

### 方式一：使用脚手架创建项目（推荐）

我们提供了一个脚手架工具，可以帮助你快速创建一个基于 Pomelo Admin 的项目：

```bash
# 使用 npm
npm create pomelo-admin@latest my-project

# 使用 pnpm
pnpm create pomelo-admin@latest my-project

# 使用 yarn
yarn create pomelo-admin my-project
```

按照提示完成项目的创建，你可以选择不同的模板和配置选项。

### 方式二：克隆模板项目

你也可以直接克隆我们的模板项目：

```bash
# 克隆项目
git clone https://github.com/yourusername/pomelo-admin-template.git my-project

# 进入项目目录
cd my-project

# 安装依赖
pnpm install
```

## 启动开发服务器

安装完成后，你可以启动开发服务器：

```bash
# 进入项目目录
cd my-project

# 启动开发服务器
pnpm dev
```

现在，你可以在浏览器中访问本地开发服务器查看你的项目。

## 项目结构

一个典型的 Pomelo Admin 项目结构如下：

```
my-project/
├── public/               # 静态资源
├── src/
│   ├── api/             # API接口
│   ├── assets/          # 项目资源
│   ├── components/      # 公共组件
│   ├── composables/     # 组合式函数
│   ├── config/          # 项目配置
│   ├── directives/      # 自定义指令
│   ├── hooks/           # 自定义hooks
│   ├── layout/          # 布局组件
│   ├── router/          # 路由配置
│   ├── store/           # 状态管理
│   ├── styles/          # 全局样式
│   ├── utils/           # 工具函数
│   ├── views/           # 页面组件
│   ├── App.vue          # 根组件
│   ├── main.ts          # 入口文件
│   └── types.ts         # 类型定义
├── .eslintrc.js         # ESLint配置
├── .prettierrc          # Prettier配置
├── tsconfig.json        # TypeScript配置
├── vite.config.ts       # Vite配置
└── package.json         # 项目依赖
```

## 构建生产版本

当你的项目开发完成后，可以构建生产版本：

```bash
pnpm build
```

构建完成后，生成的文件将位于 `dist` 目录中，你可以将这些文件部署到任何静态文件服务器上。

## 下一步

恭喜你已经成功搭建了一个 Pomelo Admin 项目！接下来，你可以：

- 了解[项目结构](./project-structure)的详细说明
- 学习[开发规范](./code-style)，确保代码质量
- 探索[组件库](/components/)，加速开发过程

如果你在使用过程中遇到任何问题，可以在[GitHub Issues](https://github.com/yourusername/pomelo-admin/issues)中提问。
