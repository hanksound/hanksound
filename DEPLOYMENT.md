# GitHub Pages 部署说明

## 概述

此项目配置了GitHub Action，用于自动将构建后的静态文件推送到 `hanksound.github.io` 仓库，实现GitHub Pages部署。

## 设置步骤

### 1. 创建目标仓库

确保您已经创建了 `hanksound.github.io` 仓库，并且该仓库是公开的（GitHub Pages要求）。

### 2. 配置仓库权限

在您的HankSound项目仓库中：

1. 进入 **Settings** > **Actions** > **General**
2. 在 **Workflow permissions** 部分，选择 **Read and write permissions**
3. 勾选 **Allow GitHub Actions to create and approve pull requests**

### 3. 配置GitHub Pages

在 `hanksound.github.io` 仓库中：

1. 进入 **Settings** > **Pages**
2. 在 **Source** 部分，选择 **Deploy from a branch**
3. 选择 **main** 分支作为源分支
4. 选择 **/ (root)** 作为文件夹

## 工作流程

当您向 `main` 分支推送代码时，GitHub Action会自动：

1. 检出代码
2. 安装Node.js和依赖
3. 构建CSS文件
4. 构建Next.js应用（静态导出）
5. 将构建后的文件推送到 `hanksound.github.io` 仓库的 `main` 分支

## 手动触发

您也可以手动触发部署：

1. 进入 **Actions** 标签页
2. 选择 **Deploy to GitHub Pages** 工作流
3. 点击 **Run workflow**

## 注意事项

- 确保 `hanksound.github.io` 仓库存在且为公开仓库
- 确保有足够的权限推送到目标仓库
- 静态导出不支持某些Next.js功能（如API路由、服务器端功能等）
- 图片优化已禁用，因为静态导出不支持

## 故障排除

如果部署失败，请检查：

1. 目标仓库是否存在且为公开
2. 权限设置是否正确
3. 构建过程中是否有错误
4. GitHub Action日志中的具体错误信息
