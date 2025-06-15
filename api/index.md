# API 参考

Pomelo Admin 提供了一套完整的 API 系统，用于与后端服务进行交互。本章节将介绍 API 的使用方式、接口规范以及常用工具函数。

## API 设计原则

Pomelo Admin 的 API 设计遵循以下原则：

1. **统一规范**：所有 API 接口遵循 RESTful 规范，保持一致的命名和调用方式。
2. **类型安全**：所有 API 接口都有完整的 TypeScript 类型定义，提供良好的类型提示和检查。
3. **错误处理**：统一的错误处理机制，便于调试和问题排查。
4. **请求拦截**：支持请求拦截器，可以在请求前进行统一处理，如添加 token、签名等。
5. **响应拦截**：支持响应拦截器，可以在响应后进行统一处理，如错误提示、数据转换等。
6. **取消请求**：支持取消请求，避免重复请求或页面切换后继续执行请求。

## API 目录结构

在 Pomelo Admin 项目中，API 相关文件通常位于 `src/api` 目录下，结构如下：

```
src/api/
├── index.ts                # API 入口文件
├── request.ts              # 请求工具封装
├── types.ts                # API 类型定义
├── modules/                # API 模块
│   ├── user.ts             # 用户相关接口
│   ├── system.ts           # 系统相关接口
│   ├── dashboard.ts        # 仪表盘相关接口
│   └── ...                 # 其他业务模块接口
└── mock/                   # Mock 数据
    ├── index.ts            # Mock 入口文件
    ├── user.ts             # 用户相关 Mock 数据
    └── ...                 # 其他模块 Mock 数据
```

## 基本用法

### 定义 API 接口

```typescript
// src/api/modules/user.ts
import { request } from '../request'
import type { User, LoginParams, LoginResult } from '../types'

// 用户登录
export function login(data: LoginParams) {
  return request<LoginResult>({
    url: '/user/login',
    method: 'post',
    data,
  })
}

// 获取用户信息
export function getUserInfo() {
  return request<User>({
    url: '/user/info',
    method: 'get',
  })
}

// 更新用户信息
export function updateUserInfo(data: Partial<User>) {
  return request<User>({
    url: '/user/info',
    method: 'put',
    data,
  })
}

// 获取用户列表
export function getUserList(params: any) {
  return request<{ list: User[]; total: number }>({
    url: '/user/list',
    method: 'get',
    params,
  })
}
```

### 定义 API 类型

```typescript
// src/api/types.ts
export interface User {
  id: number
  username: string
  nickname: string
  avatar: string
  email: string
  phone: string
  roles: string[]
  permissions: string[]
}

export interface LoginParams {
  username: string
  password: string
  captcha?: string
}

export interface LoginResult {
  token: string
  expires: number
}
```

### 在组件中使用 API

```vue
<template>
  <div>
    <el-form :model="loginForm" @submit.prevent="handleLogin">
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginForm.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { ElMessage } from 'element-plus'
  import { login } from '@/api/modules/user'
  import type { LoginParams } from '@/api/types'

  const router = useRouter()
  const loading = ref(false)
  const loginForm = reactive<LoginParams>({
    username: '',
    password: '',
  })

  const handleLogin = async () => {
    try {
      loading.value = true
      const { token } = await login(loginForm)
      // 存储 token
      localStorage.setItem('token', token)
      ElMessage.success('登录成功')
      // 跳转到首页
      router.push('/')
    } catch (error: any) {
      ElMessage.error(error.message || '登录失败')
    } finally {
      loading.value = false
    }
  }
</script>
```

## 请求工具封装

Pomelo Admin 使用 Axios 作为 HTTP 请求工具，并进行了封装以提供更好的开发体验。

```typescript
// src/api/request.ts
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

// 创建 axios 实例
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 从 localStorage 获取 token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    const res = response.data

    // 根据后端接口规范处理响应
    if (res.code === 0) {
      return res.data
    }

    // 处理业务错误
    ElMessage.error(res.message || '请求失败')
    return Promise.reject(new Error(res.message || '请求失败'))
  },
  error => {
    // 处理 HTTP 错误
    if (error.response) {
      const { status } = error.response

      if (status === 401) {
        ElMessage.error('登录已过期，请重新登录')
        // 清除 token 并跳转到登录页
        localStorage.removeItem('token')
        window.location.href = '/login'
      } else if (status === 403) {
        ElMessage.error('没有权限访问该资源')
      } else if (status === 404) {
        ElMessage.error('请求的资源不存在')
      } else if (status === 500) {
        ElMessage.error('服务器错误')
      } else {
        ElMessage.error(`请求失败: ${error.message}`)
      }
    } else {
      ElMessage.error(`网络错误: ${error.message}`)
    }

    return Promise.reject(error)
  }
)

// 封装请求方法
export function request<T = any>(config: AxiosRequestConfig): Promise<T> {
  return instance(config) as unknown as Promise<T>
}
```

## 接口文档

在接下来的章节中，我们将详细介绍 Pomelo Admin 提供的所有 API 接口，包括请求参数、响应数据格式和使用示例。

## 工具函数

我们还将介绍 Pomelo Admin 提供的一些常用工具函数，如数据转换、格式化、校验等，这些函数可以帮助你更高效地处理 API 相关的数据。
