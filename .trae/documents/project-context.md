# 项目上下文记忆

## 项目基本信息
- **项目名称**: Wuhao Industry & Trade 官网
- **业务类型**: 仓储物流设备公司
- **设计风格**: 参考宝马美国官网（极简、工业美学、大图留白、高级感）
- **技术栈**: Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS v4

## 重要约定（必须遵守）
1. **GitHub 推送**: 只有用户明确要求时才推送到 GitHub
2. **版本记录**: 每次更新写入 CHANGELOG.md
3. **Git 代理**: 已配置为 http://127.0.0.1:7897（用户 VPN 端口）
4. **分支**: 使用 master（不是 main）

## 当前版本状态
- **最新版本**: v0.0.3
- **轮播图**: 4 秒自动切换，带进度条动画
- **Footer**: 已简化，仅保留 Wuhao 品牌列
- **多语言**: UI 框架预留，实际切换功能待实现

## 关键文件位置
- 轮播图: `src/components/HeroCarousel.tsx`
- 导航栏: `src/components/Navbar.tsx`
- 页脚: `src/components/Footer.tsx`
- 品牌故事: `src/components/BrandStory.tsx`
- 业务卡片: `src/components/BusinessCards.tsx`
- 更新日志: `CHANGELOG.md`
- 项目规则: `AGENTS.md`（Next.js 特殊版本警告）

## 设计系统
- **配色**: 黑(#000000) / 白(#FFFFFF) / 蓝(#1C69D3)
- **字体**: Hanken Grotesk（标题）+ Inter（正文）
- **圆角**: 0px（宝马风格）
- **图片**: 使用 Unsplash 占位图

## 注意事项
- 这是特殊版本的 Next.js，API 可能与标准版不同
- 图片使用原生 `<img>` 标签（非 Next.js Image），避免 Chrome 兼容性问题
- 轮播图进度条使用 requestAnimationFrame 实现平滑动画
