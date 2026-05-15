# Changelog

所有项目的显著变更都将记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
并且本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [Unreleased]

## [0.0.3] - 2026-05-15

### Fixed
- 修复轮播图自动切换计时器问题
  - 使用 setTimeout 替代 setInterval
  - 点击切换后正确重置 6 秒倒计时
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

[Unreleased]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.3...HEAD
[0.0.3]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/ss897120156-bot/Wuhao_Ofiicial_Site/releases/tag/v0.0.1
