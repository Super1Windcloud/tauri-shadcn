# Tauri UI Template

一个基于 Tauri + React + TypeScript + Vite + Shadcn/UI 的现代化桌面应用模板，集成了丰富的 UI 组件和现代前端工具链。

![Dashboard Preview](./preview.png)

## 特性

- 🚀 基于 [Tauri](https://tauri.app/) 构建跨平台桌面应用（Windows, macOS, Linux）
- ⚛️ 使用 [React 18](https://reactjs.org/) 和 [TypeScript](https://www.typescriptlang.org/)
- ⚡ 由 [Vite](https://vitejs.dev/) 提供快速热重载开发体验
- 🎨 集成 [Shadcn/UI](https://ui.shadcn.com/) 组件库，使用 [Tailwind CSS](https://tailwindcss.com/) 样式
- 📦 包含完整的仪表板页面示例
- 🎯 支持深色模式和浅色模式切换
- 🔧 预配置 ESLint、Prettier、Husky 等开发工具
- 🔄 自动化更新依赖脚本

## 快速开始

### 克隆项目

```bash
git clone https://github.com/your-username/tauri-ui-template.git
cd tauri-ui-template
```

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动前端开发服务器
pnpm dev

# 启动 Tauri 开发模式（需要先运行 pnpm dev）
pnpm td
```

### 构建应用

```bash
# 构建前端资源
pnpm build

# 构建 Tauri 桌面应用
pnpm tb
```

## 脚本命令

| 命令           | 描述                                |
| -------------- | ----------------------------------- |
| `pnpm dev`     | 启动 Vite 开发服务器                |
| `pnpm build`   | 构建前端资源                        |
| `pnpm preview` | 预览构建后的应用                    |
| `pnpm td`      | 启动 Tauri 开发模式                 |
| `pnpm tb`      | 构建 Tauri 桌面应用                 |
| `pnpm taze`    | 更新前端依赖到最新主版本            |
| `pnpm shadcn`  | 添加新的 Shadcn/UI 组件             |
| `pnpm lint`    | 运行 ESLint 检查并修复              |
| `pnpm format`  | 格式化代码                          |
| `pnpm icon`    | 根据源图标生成多尺寸应用图标        |
| `pnpm bump`    | 批量更新所有依赖（前端+Rust+Cargo） |

## 技术栈

- **框架**: [Tauri](https://tauri.app/) + [Vite](https://vitejs.dev/)
- **语言**: [TypeScript](https://www.typescriptlang.org/) + [Rust](https://www.rust-lang.org/)
- **UI 库**: [Shadcn/UI](https://ui.shadcn.com/) (基于 [Radix UI](https://www.radix-ui.com/) 和 [Tailwind CSS](https://tailwindcss.com/))
- **状态管理**: React Hooks
- **路由**: 无（单页应用）
- **构建工具**: [Vite](https://vitejs.dev/)
- **包管理器**: [pnpm](https://pnpm.io/)
- **代码规范**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) + [Husky](https://typicode.github.io/husky/)

## 项目结构

```
tauri-ui-template/
├── src/                  # 前端源码
│   ├── components/       # 公共组件
│   ├── dashboard/        # 仪表板页面
│   ├── lib/              # 工具函数
│   └── styles/           # 全局样式
├── src-tauri/            # Tauri Rust 代码
│   ├── Cargo.toml        # Rust 依赖配置
│   └── src/              # Rust 源码
├── public/               # 静态资源
└── scripts/              # 自定义脚本
```

## 开发指南

### 添加新页面

1. 在 `src/` 目录下创建新的页面组件
2. 如果需要路由，可以修改 `App.tsx` 文件进行添加

### 添加 UI 组件

使用内置的 Shadcn/UI 脚手架：

```bash
pnpm shadcn add button
```

或者手动从 [Shadcn/UI 组件库](https://ui.shadcn.com/components) 复制组件代码。

### 自定义主题

主题配置在 `src/components/theme-provider.tsx` 中，支持系统主题自动检测和手动切换。

### 更新依赖

```bash
# 更新前端依赖
pnpm taze

# 更新 Rust 依赖
cd src-tauri && cargo upgrade

# 更新 Shadcn/UI 组件
pnpm shadcn

# 一键更新所有依赖
pnpm bump
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT © [Your Name]