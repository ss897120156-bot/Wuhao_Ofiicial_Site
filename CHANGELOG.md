# Changelog

所有项目的显著变更都将记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
并且本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [Unreleased]

## [0.0.9] - 2026-05-18

### Added
- 新增 About Us 关于我们页面 (`/about`)
  - Hero 区域：全屏背景图 + "LEVEL UP TO ULTIMATE" 大标题 + Company Profile 副标题
  - 三大核心板块：
    - Core Products - 核心产品展示（金属/塑料系列 + 定制方案）
    - Global Reach - 全球贸易覆盖（15+ 全球枢纽，2007年成立）
    - The Mission - 企业使命（Innovation + Excellence）
  - 交替布局：左右图文交错排列，符合宝马风格
  - 图片悬停缩放效果（hover:scale-105）
  - 响应式设计：移动端单列布局

## [0.0.8] - 2026-05-18

### Added
- 新增工厂参观页面 (`/factory`)
  - Hero 区域：全球网络地图背景 + "Global Reach & Manufacturing Excellence" 标题
  - 四大板块展示：
    - 01 Automation - 自动化精密焊接
    - 02 Capacity - 智能生产线
    - 03 Quality Control - 严格质量管控
    - 04 Logistics - 高效物流体系
  - 交替布局：奇数板块左文右图，偶数板块左图右文
  - CTA 区域："Ready to Start Your Project?" + 两个行动按钮
- Navbar 新增 FACTORY 导航链接
  - 链接指向 `/factory`
  - 支持桌面端和移动端导航
- 添加 Vitest 测试基础设施
  - 配置 vitest.config.ts
  - 添加 Factory 页面测试（12 个测试用例）
  - 添加 Navbar Factory 链接测试（2 个测试用例）

## [0.0.7] - 2026-05-18

### Added
- 新增新闻/博客页面 (`/news`)
  - 页面头部大标题 "NEWS"
  - 视频画廊组件：横向滚动展示 6 个视频卡片，带播放按钮和悬停缩放效果
  - 新闻文章列表：3 篇新闻文章，每篇包含 21:9 宽幅图片、日期、标题、摘要和 "Read more" 按钮
  - "Load More News" 加载更多按钮（当前为静态数据，按钮禁用状态）
- 视频画廊添加左右箭头滚动控制
  - 左右箭头按钮，hover 画廊区域时显示
  - 点击滚动 85% 视口宽度，带平滑滚动动画
  - 边界检测：到达最左/最右端时自动隐藏对应箭头
  - 按钮样式：方形 40x40px，白色半透明背景 + 毛玻璃效果
- 全局 CSS 添加 `hide-scrollbar` 工具类，用于隐藏横向滚动条

### Changed
- Navbar **Request Quote** 按钮 hover 效果调整
  - 从蓝底白字 (`hover:bg-[#1c69d3]`) 改为白底黑字 (`hover:bg-white hover:text-[#000000]`)
  - 添加黑色边框保持按钮尺寸稳定

## [0.0.6] - 2026-05-15

### Changed
- 产品目录分页改为动态页数：每页最多 9 个产品，页码根据实际产品数量动态计算
- 产品目录页面标题从 "All Products" 改为 "PRODUCTS"

## [0.0.5] - 2026-05-15

### Fixed
- 修复产品目录页面部分产品图片未正确显示的问题，替换为彩色实物图

### Changed
- 优化 Navbar 垂直居中对齐，移除硬编码 `pt-[7px]`，改用 flex 自然对齐
- 在 Navbar 最右侧新增 **Request Quote** 询盘按钮，链接至联系页面
- 产品目录左侧分类栏增加实际切换筛选功能，点击分类可过滤对应产品
- 分类切换增加 `framer-motion` 动画效果，活跃指示条以弹簧动画平滑滑动

## [0.0.4] - 2026-05-15

### Added
- 新增产品目录页面 (`/products`)
- 实现页面切换横向滑动动画
- 为 Navbar 添加当前页面高亮指示器

## [0.0.3] - 2026-05-15

### Fixed
- 修复进度条走满后停止不动的问题

## [0.0.2] - 2026-05-15

### Changed
- 优化轮播图进度条交互效果
  - 添加进度条实时填充动画
  - 悬停时进度条放大效果
  - 点击时按压反馈效果
  - 修复点击切换时进度重置问题
- 重构 Footer 布局
  - 移除工厂图片条
  - 隐藏 Quick Links 和 Support 区块
  - 简化 Newsletter 区域

## [0.0.1] - 2026-05-14

### Added
- 初始化 Next.js 16 + React 19 + TypeScript 项目
- 实现响应式导航栏 (Navbar)
  - 移动端汉堡菜单
- 实现轮播图组件 (HeroCarousel)
  - 3张幻灯片自动轮播
  - 底部指示器切换
- 实现核心业务板块 (BusinessCards)
  - 4个业务卡片展示
- 实现品牌故事区 (BrandStory)
- 实现数据统计区 (StatsSection)
- 实现页脚 (Footer)
- 配置宝马风格设计系统
  - 配色：黑/白/蓝 (#1C69D3)
  - 字体：Hanken Grotesk + Inter

[Unreleased]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.9...HEAD
[0.0.9]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.8...v0.0.9
[0.0.8]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.7...v0.0.8
[0.0.7]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/releases/tag/v0.0.1
