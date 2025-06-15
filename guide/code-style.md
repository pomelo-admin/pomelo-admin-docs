# 开发规范

为了保证代码质量和团队协作效率，Pomelo Admin 项目制定了一套完整的开发规范。本章节将详细介绍这些规范，包括代码风格、命名规范、提交规范等。

## 代码风格

### TypeScript 规范

1. **使用类型注解**：为所有变量、函数参数和返回值添加类型注解。

```typescript
// 不推荐
function add(a, b) {
  return a + b;
}

// 推荐
function add(a: number, b: number): number {
  return a + b;
}
```

2. **使用接口定义对象结构**：使用 `interface` 或 `type` 定义对象结构。

```typescript
// 定义接口
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// 使用接口
const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  isActive: true
};
```

3. **避免使用 `any` 类型**：尽量避免使用 `any` 类型，如果不确定类型，可以使用 `unknown`。

```typescript
// 不推荐
function processData(data: any): any {
  return data.value;
}

// 推荐
function processData<T extends { value: unknown }>(data: T): unknown {
  return data.value;
}
```

4. **使用类型保护**：使用类型保护确保类型安全。

```typescript
function processValue(value: string | number): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else {
    return value.toString();
  }
}
```

### Vue 组件规范

1. **使用 `<script setup>` 语法**：推荐使用 Vue 3 的 `<script setup>` 语法。

```vue
<template>
  <div>{{ message }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Hello, World!');
</script>
```

2. **组件命名**：组件文件名使用 PascalCase，组件名也使用 PascalCase。

```
components/
├── UserList.vue
├── UserForm.vue
└── UserDetail.vue
```

3. **组件结构**：组件结构按照 `<template>`, `<script>`, `<style>` 的顺序排列。

```vue
<template>
  <!-- 模板内容 -->
</template>

<script setup lang="ts">
// 脚本内容
</script>

<style scoped lang="scss">
/* 样式内容 */
</style>
```

4. **Props 定义**：使用 `defineProps` 定义组件的 props，并添加类型注解。

```vue
<script setup lang="ts">
const props = defineProps<{
  title: string;
  items: string[];
  isLoading?: boolean;
}>();
</script>
```

5. **Emits 定义**：使用 `defineEmits` 定义组件的 emits。

```vue
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update', value: string): void;
  (e: 'delete', id: number): void;
}>();
</script>
```

### CSS/SCSS 规范

1. **使用 SCSS**：推荐使用 SCSS 预处理器。

2. **使用 `scoped` 属性**：组件样式使用 `scoped` 属性，避免样式污染。

```vue
<style scoped lang="scss">
.container {
  padding: 20px;
  
  .title {
    font-size: 18px;
    color: #333;
  }
}
</style>
```

3. **使用变量**：使用 SCSS 变量管理颜色、字体等样式属性。

```scss
// variables.scss
$primary-color: #1890ff;
$success-color: #52c41a;
$warning-color: #faad14;
$error-color: #f5222d;

// 使用变量
.btn-primary {
  background-color: $primary-color;
}
```

4. **使用 BEM 命名规范**：推荐使用 BEM（Block, Element, Modifier）命名规范。

```scss
.card {
  // 块（Block）
  &__header {
    // 元素（Element）
  }
  
  &__body {
    // 元素（Element）
  }
  
  &--active {
    // 修饰符（Modifier）
  }
}
```

## 命名规范

### 文件命名

1. **组件文件**：使用 PascalCase，如 `UserList.vue`。
2. **工具函数文件**：使用 camelCase，如 `formatDate.ts`。
3. **类型定义文件**：使用 camelCase，如 `userTypes.ts`。
4. **样式文件**：使用 kebab-case，如 `button-styles.scss`。

### 变量命名

1. **普通变量**：使用 camelCase，如 `userName`。
2. **常量**：使用 UPPER_SNAKE_CASE，如 `MAX_COUNT`。
3. **私有变量**：使用下划线前缀，如 `_privateVar`。
4. **布尔变量**：使用 `is`、`has` 等前缀，如 `isLoading`、`hasError`。

### 函数命名

1. **普通函数**：使用 camelCase，如 `getUserInfo`。
2. **事件处理函数**：使用 `handle` 前缀，如 `handleClick`。
3. **异步函数**：可以使用 `async` 前缀，如 `asyncFetchData`。
4. **Hooks**：使用 `use` 前缀，如 `useUserData`。

### 组件命名

1. **基础组件**：使用 `Base` 前缀，如 `BaseButton`。
2. **业务组件**：使用功能描述，如 `UserList`。
3. **布局组件**：使用 `Layout` 前缀，如 `LayoutHeader`。
4. **页面组件**：使用功能描述，如 `UserManagement`。

## Git 提交规范

Pomelo Admin 项目使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范来管理 Git 提交信息。

### 提交格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 类型（Type）

- **feat**: 新功能
- **fix**: 修复 Bug
- **docs**: 文档更新
- **style**: 代码风格调整（不影响代码运行）
- **refactor**: 代码重构
- **perf**: 性能优化
- **test**: 测试相关
- **build**: 构建系统或外部依赖更新
- **ci**: CI 配置更新
- **chore**: 其他不修改源代码或测试的更改
- **revert**: 回滚之前的提交

### 范围（Scope）

范围是可选的，用于说明本次提交影响的范围，如 `auth`、`user`、`api` 等。

### 主题（Subject）

简短描述本次提交的内容，不超过 50 个字符。

### 示例

```
feat(user): add user registration functionality

Implement user registration form and API integration.
Add form validation and error handling.

Closes #123
```

## 代码审查

在提交代码前，请确保代码通过以下检查：

1. **ESLint 检查**：确保代码符合 ESLint 规则。
2. **TypeScript 类型检查**：确保没有类型错误。
3. **单元测试**：确保所有测试通过。
4. **代码格式化**：使用 Prettier 格式化代码。

## 文档规范

### 代码注释

1. **函数注释**：使用 JSDoc 格式为函数添加注释。

```typescript
/**
 * 格式化日期
 * @param date - 要格式化的日期
 * @param format - 格式化模板，默认为 'YYYY-MM-DD'
 * @returns 格式化后的日期字符串
 */
function formatDate(date: Date, format: string = 'YYYY-MM-DD'): string {
  // 实现代码
}
```

2. **组件注释**：为组件添加说明注释。

```vue
<script setup lang="ts">
/**
 * 用户表单组件
 * 
 * 用于创建或编辑用户信息。
 * 
 * @example
 * <UserForm :user="user" @submit="handleSubmit" />
 */
</script>
```

3. **复杂逻辑注释**：为复杂的代码逻辑添加注释。

```typescript
// 使用二分查找算法查找目标值
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid; // 找到目标值
    } else if (arr[mid] < target) {
      left = mid + 1; // 在右半部分查找
    } else {
      right = mid - 1; // 在左半部分查找
    }
  }
  
  return -1; // 未找到目标值
}
```

### README 文档

每个项目或模块应该有一个 README.md 文件，包含以下内容：

1. **项目介绍**：简要介绍项目的功能和目的。
2. **安装说明**：如何安装和配置项目。
3. **使用说明**：如何使用项目的主要功能。
4. **API 文档**：项目提供的 API 接口说明。
5. **贡献指南**：如何参与项目开发。
6. **许可证**：项目的许可证信息。

## 总结

遵循这些开发规范，可以帮助我们构建一个高质量、易于维护的 Pomelo Admin 项目。规范不是限制，而是为了提高团队协作效率和代码质量。在实际开发中，我们应该根据项目的具体情况灵活应用这些规范。 