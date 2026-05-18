# Changelog

所有项目的显著变更都将记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
并且本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [Unreleased]

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

[Unreleased]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.6...HEAD
[0.0.6]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/releases/tag/v0.0.1
