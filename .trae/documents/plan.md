# 实施计划：Wuhao 工业贸易官网主页

## 项目概述

基于用户提供的设计稿（参考宝马美国官网风格），构建一个纯前端可运行的主页。采用极简工业美学，黑/白/蓝主色调，大图留白，高级感。

## 当前状态分析

- 工作区：`d:\Wuhao_Ofiicial_Site`
- 现有文件：仅 `README.md` 和空的 `PRD.md`
- 技术栈：React + TypeScript + Tailwind CSS + Vite
- 无现有前端代码，从零搭建

## 设计方案（已确认）

### 视觉风格
- **主色调**：黑(#000000) / 白(#FFFFFF) / 蓝(#1C69D3)
- **字体**：Hanken Grotesk（标题）+ Inter（正文）
- **形状语言**：0px圆角（锐利工业感）
- **间距**：大留白，8px基准单位，120px+区块间距

### 页面结构
1. **导航栏**：固定顶部，左logo + 中导航链接 + 右语言切换/搜索
2. **Hero轮播区**：3-4张AI生成工业场景大图，自动轮播，含标题/副标题/CTA按钮
3. **核心业务板块**：4张卡片（重型机械/精密工具/工业零件/可持续科技），点击跳转产品列表页
4. **品牌故事区**：左文右图，展示"Two Decades of Industrial Excellence"
5. **全球影响力**：4个数据指标（50+国家/500+客户/2.4k年出口/100%合规）
6. **Footer**：多栏布局，快速链接/支持/订阅邮件

### 图片素材
- 所有图片使用AI生成API生成占位图
- 轮播图：3-4张工业场景
- 卡片图：4张产品分类图
- 品牌故事区：1张工厂/设备图

## 技术架构

```
Frontend (React + TypeScript + Vite + Tailwind CSS)
├── src/
│   ├── components/          # 可复用组件
│   │   ├── Navbar.tsx       # 导航栏
│   │   ├── HeroCarousel.tsx # 轮播图
│   │   ├── BusinessCard.tsx # 业务卡片
│   │   ├── StatsSection.tsx # 数据统计区
│   │   └── Footer.tsx       # 页脚
│   ├── pages/
│   │   └── Home.tsx         # 主页
│   ├── App.tsx              # 根组件
│   └── main.tsx             # 入口
├── public/                  # 静态资源
└── index.html
```

## 实施步骤

### Phase 1: 项目初始化
1. 使用 `vite-init` 模板创建 React + TypeScript 项目
2. 安装 Tailwind CSS 及相关依赖
3. 配置字体（Hanken Grotesk + Inter via Google Fonts）
4. 配置全局样式（颜色变量、间距系统）

### Phase 2: 组件开发
1. **Navbar组件**：固定导航，语言切换，搜索图标
2. **HeroCarousel组件**：自动轮播，指示器，渐变遮罩
3. **BusinessCards组件**：4卡片网格，hover效果
4. **BrandStory组件**：左文右图布局
5. **StatsSection组件**：4个数据指标动画
6. **Footer组件**：多栏布局，订阅表单

### Phase 3: 页面组装
1. 在 `Home.tsx` 中组合所有区块
2. 实现平滑滚动和交互动画
3. 响应式适配（桌面/平板/移动端）

### Phase 4: 图片生成
1. 使用AI图片生成API生成所有占位图
2. 替换所有图片占位符

### Phase 5: 测试与优化
1. 运行开发服务器验证
2. 检查响应式布局
3. 优化动画性能

## 关键决策

- **不使用动态导入**：遵循项目规范，所有组件直接导入
- **使用CSS变量管理颜色**：便于主题切换
- **轮播图使用CSS transition**：性能优先
- **数据指标使用Intersection Observer触发**：滚动进入视口时动画

## 验证步骤

1. `npm run dev` 启动开发服务器
2. 检查所有区块是否正常渲染
3. 验证轮播图自动播放和手动切换
4. 验证响应式布局（缩小浏览器窗口）
5. 验证所有按钮和链接可点击
