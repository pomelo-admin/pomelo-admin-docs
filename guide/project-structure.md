# 项目结构

Pomelo Admin 项目采用清晰的目录结构，便于开发和维护。本章节将详细介绍项目的目录结构和各个文件的作用。

## 目录结构概览

```
my-project/
├── public/               # 静态资源
│   ├── favicon.ico       # 网站图标
│   └── logo.png          # 项目logo
├── src/                  # 源代码
│   ├── api/              # API接口
│   ├── assets/           # 项目资源
│   ├── components/       # 公共组件
│   ├── composables/      # 组合式函数
│   ├── config/           # 项目配置
│   ├── directives/       # 自定义指令
│   ├── hooks/            # 自定义hooks
│   ├── layout/           # 布局组件
│   ├── router/           # 路由配置
│   ├── store/            # 状态管理
│   ├── styles/           # 全局样式
│   ├── utils/            # 工具函数
│   ├── views/            # 页面组件
│   ├── App.vue           # 根组件
│   ├── main.ts           # 入口文件
│   └── types.ts          # 类型定义
├── .eslintrc.js          # ESLint配置
├── .prettierrc           # Prettier配置
├── tsconfig.json         # TypeScript配置
├── vite.config.ts        # Vite配置
└── package.json          # 项目依赖
```

## 目录详解

### `public/`

存放不需要通过构建工具处理的静态资源，这些文件会被直接复制到构建输出目录。

```
public/
├── favicon.ico           # 网站图标
└── logo.png              # 项目logo
```

### `src/`

项目的主要源代码目录。

#### `src/api/`

存放与后端API交互的代码。

```
src/api/
├── index.ts              # API入口文件
├── request.ts            # 请求工具封装
├── types.ts              # API类型定义
└── modules/              # API模块
    ├── user.ts           # 用户相关接口
    ├── system.ts         # 系统相关接口
    └── ...               # 其他业务模块接口
```

#### `src/assets/`

存放项目资源文件，如图片、字体等。

```
src/assets/
├── images/               # 图片资源
├── fonts/                # 字体资源
└── icons/                # 图标资源
```

#### `src/components/`

存放公共组件，可以被多个页面复用。

```
src/components/
├── common/               # 通用组件
│   ├── AppHeader.vue     # 应用头部
│   ├── AppFooter.vue     # 应用底部
│   └── ...
├── form/                 # 表单相关组件
│   ├── SearchForm.vue    # 搜索表单
│   └── ...
├── table/                # 表格相关组件
│   ├── DataTable.vue     # 数据表格
│   └── ...
└── ...
```

#### `src/composables/`

存放组合式函数（Composables），用于提取和复用组件逻辑。

```
src/composables/
├── useTable.ts           # 表格相关逻辑
├── useForm.ts            # 表单相关逻辑
├── useAuth.ts            # 认证相关逻辑
└── ...
```

#### `src/config/`

存放项目配置文件。

```
src/config/
├── index.ts              # 配置入口
├── menu.ts               # 菜单配置
├── settings.ts           # 系统设置
└── ...
```

#### `src/directives/`

存放自定义指令。

```
src/directives/
├── index.ts              # 指令入口
├── permission.ts         # 权限指令
├── clickOutside.ts       # 点击外部指令
└── ...
```

#### `src/hooks/`

存放自定义hooks。

```
src/hooks/
├── index.ts              # hooks入口
├── useRequest.ts         # 请求hook
├── usePermission.ts      # 权限hook
└── ...
```

#### `src/layout/`

存放布局组件。

```
src/layout/
├── index.vue             # 布局入口
├── components/           # 布局相关组件
│   ├── Sidebar.vue       # 侧边栏
│   ├── Navbar.vue        # 导航栏
│   └── ...
└── ...
```

#### `src/router/`

存放路由配置。

```
src/router/
├── index.ts              # 路由入口
├── routes.ts             # 路由配置
├── guard.ts              # 路由守卫
└── modules/              # 路由模块
    ├── dashboard.ts      # 仪表盘路由
    ├── system.ts         # 系统管理路由
    └── ...
```

#### `src/store/`

存放状态管理相关代码，使用Pinia。

```
src/store/
├── index.ts              # 状态管理入口
└── modules/              # 状态模块
    ├── user.ts           # 用户状态
    ├── app.ts            # 应用状态
    └── ...
```

#### `src/styles/`

存放全局样式文件。

```
src/styles/
├── index.scss            # 样式入口
├── variables.scss        # 变量定义
├── mixins.scss           # 混合定义
├── reset.scss            # 重置样式
└── ...
```

#### `src/utils/`

存放工具函数。

```
src/utils/
├── index.ts              # 工具函数入口
├── storage.ts            # 存储相关
├── date.ts               # 日期处理
├── format.ts             # 格式化函数
├── validator.ts          # 校验函数
└── ...
```

#### `src/views/`

存放页面组件。

```
src/views/
├── dashboard/            # 仪表盘
│   ├── index.vue         # 仪表盘首页
│   └── ...
├── system/               # 系统管理
│   ├── user/             # 用户管理
│   │   ├── index.vue     # 用户列表
│   │   ├── form.vue      # 用户表单
│   │   └── ...
│   ├── role/             # 角色管理
│   └── ...
└── ...
```

#### `src/App.vue`

应用的根组件。

#### `src/main.ts`

应用的入口文件，负责初始化Vue应用。

#### `src/types.ts`

全局类型定义文件。

### 配置文件

#### `.eslintrc.js`

ESLint配置文件，用于代码检查。

#### `.prettierrc`

Prettier配置文件，用于代码格式化。

#### `tsconfig.json`

TypeScript配置文件。

#### `vite.config.ts`

Vite构建工具配置文件。

#### `package.json`

项目依赖和脚本配置文件。

## 最佳实践

在开发Pomelo Admin项目时，建议遵循以下最佳实践：

1. **按功能模块组织代码**：相关的组件、API、状态等应该放在同一个模块目录下。
2. **保持组件的单一职责**：每个组件应该只负责一个功能，避免过于复杂。
3. **使用TypeScript类型**：为所有变量、函数参数和返回值定义类型，提高代码质量和开发体验。
4. **遵循命名规范**：使用一致的命名规范，如组件使用PascalCase，文件使用kebab-case等。
5. **编写测试**：为关键功能编写单元测试和集成测试，确保代码质量。
6. **文档注释**：为重要的函数、组件和类型添加文档注释，便于团队协作。

通过遵循这些最佳实践，你可以构建一个结构清晰、易于维护的Pomelo Admin项目。 