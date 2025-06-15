# Pomelo Admin 文档

这是 [Pomelo Admin](https://github.com/pomelo-admin) 的官方文档站点。

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm docs:dev
```

开发服务器将在本地启动。

## 构建

```bash
# 构建静态站点
pnpm docs:build
```

构建输出将在 `.vitepress/dist` 目录中。

## 预览构建

```bash
# 预览构建后的站点
pnpm docs:preview
```

预览服务器将在本地启动。

## 部署

该站点会在推送到 `main` 分支时自动部署到 [pomelo-admin.github.io](https://pomelo-admin.github.io)。

## 贡献指南

1. Fork 该仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

该项目采用 MIT 许可证 - 详情请参阅 LICENSE 文件。
