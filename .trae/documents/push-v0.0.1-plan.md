# 推送 v0.0.1 到仓库计划

## 目标
将当前 Wuhao 工业贸易官网主页（v0.0.1）推送到 GitHub 仓库 `https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site`。

## 当前状态分析

### 项目结构
```
d:\Wuhao_Ofiicial_Site
├── .next/              # Next.js 构建输出（应忽略）
├── node_modules/       # 依赖（应忽略）
├── src/
│   ├── app/
│   │   ├── globals.css     # 全局样式（Tailwind CSS v4）
│   │   ├── layout.tsx      # 根布局（Hanken Grotesk + Inter 字体）
│   │   └── page.tsx        # 主页（组装所有组件）
│   └── components/
│       ├── Navbar.tsx       # 导航栏（固定顶部，语言切换，移动端菜单）
│       ├── HeroCarousel.tsx # Hero 轮播（3张工业场景图，6秒自动切换）
│       ├── BusinessCards.tsx # 核心业务板块（4卡片：重型机械/精密工具/工业零件/可持续科技）
│       ├── BrandStory.tsx   # 品牌故事区（深色背景，左文右图）
│       ├── StatsSection.tsx # 全球影响力统计（4个动画计数器）
│       └── Footer.tsx       # 页脚（多栏布局，邮件订阅，社交链接）
├── package.json        # 依赖：Next.js 16 + React 19 + Tailwind CSS v4
├── next.config.ts      # 图片域名配置（Unsplash + trae-api）
├── tsconfig.json       # TypeScript 配置
└── README.md           # 项目说明
```

### 技术栈
- **Next.js 16.2.6** + React 19.2.4 + TypeScript 5
- **Tailwind CSS v4**（@tailwindcss/postcss）
- **字体**：Hanken Grotesk（标题）+ Inter（正文）
- **设计风格**：宝马式极简工业美学，黑/白/蓝配色，0px圆角

### 版本号
当前 `package.json` 中版本为 `0.1.0`，需要更新为 `0.0.1`。

## 实施步骤

### Step 1: 初始化 Git 仓库
- 在项目根目录执行 `git init`
- 如果已有 `.git` 目录，跳过此步骤

### Step 2: 创建 .gitignore
- 忽略 `node_modules/`、`.next/`、`out/`、`*.log`
- 忽略 `.env*.local`、`.vercel`
- 忽略 IDE 配置文件（`.idea/`、`.vscode/`）

### Step 3: 更新版本号
- 将 `package.json` 中的 `version` 从 `0.1.0` 改为 `0.0.1`

### Step 4: 添加并提交代码
- `git add .`
- `git commit -m "v0.0.1: Initial homepage with BMW-style industrial design"`

### Step 5: 配置远程仓库
- `git remote add origin https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site.git`
- 如果远程已存在，先移除再添加

### Step 6: 推送到 GitHub
- `git push -u origin main`（或 master，取决于默认分支名）
- 如果需要身份验证，使用 GitHub CLI (`gh auth login`) 或 HTTPS 凭据

### Step 7: 创建 Git Tag
- `git tag -a v0.0.1 -m "Release v0.0.1 - Homepage MVP"`
- `git push origin v0.0.1`

## 验证步骤
1. 访问 `https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site` 确认代码已推送
2. 检查 `package.json` 版本号显示为 `0.0.1`
3. 确认所有组件文件已上传
4. 确认 tag `v0.0.1` 已创建

## 假设与决策
- 使用 `main` 作为默认分支名（如果本地是 `master`，则推送 `master`）
- 使用 HTTPS 协议推送（用户提供的 URL 是 HTTPS）
- 需要用户已配置 GitHub 凭据（token 或用户名密码）
- 不推送 `node_modules` 和 `.next` 等构建产物
