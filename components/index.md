# 组件总览

Pomelo Admin 提供了丰富的组件库，帮助你快速构建企业级管理系统。这些组件分为两大类：

## 基础组件

基础组件是对常用UI组件的封装和扩展，主要基于 Element Plus 或 Ant Design Vue，但增加了更多的功能和更好的类型支持。

- [按钮 (Button)](/components/basic/button)
- [表单 (Form)](/components/basic/form)
- [表格 (Table)](/components/basic/table)
- [对话框 (Dialog)](/components/basic/dialog)
- [抽屉 (Drawer)](/components/basic/drawer)
- [标签页 (Tabs)](/components/basic/tabs)
- [菜单 (Menu)](/components/basic/menu)
- [分页 (Pagination)](/components/basic/pagination)
- [上传 (Upload)](/components/basic/upload)
- [图表 (Charts)](/components/basic/charts)

## 业务组件

业务组件是针对特定业务场景开发的高级组件，可以直接用于实际业务中，大大提高开发效率。

- [高级表格 (ProTable)](/components/business/pro-table)
- [高级表单 (ProForm)](/components/business/pro-form)
- [高级搜索 (ProSearch)](/components/business/pro-search)
- [高级详情 (ProDetail)](/components/business/pro-detail)
- [权限控制 (Auth)](/components/business/auth)
- [Excel导入导出 (Excel)](/components/business/excel)
- [富文本编辑器 (Editor)](/components/business/editor)
- [代码编辑器 (CodeEditor)](/components/business/code-editor)
- [图片裁剪 (ImageCropper)](/components/business/image-cropper)
- [拖拽排序 (DragSort)](/components/business/drag-sort)

## 组件使用指南

所有组件都遵循以下使用原则：

1. **类型安全**：所有组件都提供完整的 TypeScript 类型定义，提供良好的类型提示和检查。
2. **统一风格**：组件风格统一，遵循设计规范，提供一致的用户体验。
3. **灵活配置**：组件支持丰富的配置项，可以根据实际需求进行定制。
4. **响应式设计**：组件支持响应式布局，适配不同尺寸的屏幕。
5. **主题定制**：组件支持主题定制，可以根据项目需求调整颜色、字体等样式。

## 示例

以下是一个使用 ProTable 组件的简单示例：

```vue
<template>
  <ProTable
    :columns="columns"
    :request="fetchData"
    :pagination="pagination"
    :searchConfig="searchConfig"
    @selection-change="handleSelectionChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ProTable } from '@pomelo-admin/components'
import type { TableColumn, Pagination, SearchConfig } from '@pomelo-admin/components'

// 定义列配置
const columns = ref<TableColumn[]>([
  { prop: 'id', label: 'ID', width: 80 },
  { prop: 'name', label: '名称', search: true },
  { prop: 'status', label: '状态', dict: 'status' },
  { prop: 'createTime', label: '创建时间', formatter: 'datetime' },
  { 
    prop: 'action', 
    label: '操作', 
    width: 200,
    fixed: 'right',
    buttons: [
      { text: '编辑', type: 'primary', click: (row) => handleEdit(row) },
      { text: '删除', type: 'danger', click: (row) => handleDelete(row) }
    ]
  }
])

// 分页配置
const pagination = ref<Pagination>({
  currentPage: 1,
  pageSize: 10,
  total: 0
})

// 搜索配置
const searchConfig = ref<SearchConfig>({
  labelWidth: '80px',
  showReset: true,
  showExpand: true,
  formProps: {
    inline: true
  }
})

// 获取数据的方法
const fetchData = async (params: any) => {
  // 实际项目中这里会调用API接口
  console.log('查询参数:', params)
  
  // 模拟返回数据
  return {
    list: [
      { id: 1, name: '测试数据1', status: 1, createTime: '2023-01-01 12:00:00' },
      { id: 2, name: '测试数据2', status: 0, createTime: '2023-01-02 13:00:00' }
    ],
    total: 2
  }
}

// 选择行变化事件
const handleSelectionChange = (selection: any[]) => {
  console.log('选中的行:', selection)
}

// 编辑方法
const handleEdit = (row: any) => {
  console.log('编辑行:', row)
}

// 删除方法
const handleDelete = (row: any) => {
  console.log('删除行:', row)
}
</script>
```

在接下来的章节中，我们将详细介绍每个组件的使用方法、API参考和最佳实践。 