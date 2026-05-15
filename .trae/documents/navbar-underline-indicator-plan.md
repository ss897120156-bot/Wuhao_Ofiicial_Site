# Navbar 下划线指示器实现计划

## 目标
在 Navbar 的导航链接下方添加黑色横条，用于指示当前激活的页面。

## 实现步骤

### 1. 修改 Navbar.tsx 组件

**需要修改的部分：**
- 使用 Next.js 的 `usePathname` hook 获取当前路径
- 比较当前路径与导航链接的 href，判断是否激活
- 为激活的链接添加底部黑色横条样式

**具体修改内容：**

1. **导入 usePathname**
   ```tsx
   import { usePathname } from "next/navigation";
   ```

2. **在组件内部获取当前路径**
   ```tsx
   const pathname = usePathname();
   ```

3. **修改导航链接样式**
   - 为每个 Link 添加条件类名
   - 激活状态：添加 `border-b-2 border-black pb-1` 或类似的底部边框样式
   - 非激活状态：保持原有样式

4. **激活状态判断逻辑**
   - 精确匹配：`pathname === link.href`
   - 或者包含匹配（用于子页面）：`pathname.startsWith(link.href)`

### 2. 样式细节

**激活状态样式：**
- 底部边框：2px 实线黑色
- 可选：添加 padding-bottom 确保文字与横条有适当间距
- 保持文字颜色为黑色（或品牌蓝色 #1c69d3）

**过渡动画：**
- 添加 `transition-all duration-200` 实现平滑过渡效果

### 3. 移动端适配

- 在移动端菜单中同样应用激活状态样式
- 确保横条在移动端也能正确显示

## 文件变更

| 文件 | 变更类型 | 说明 |
|------|----------|------|
| `src/components/Navbar.tsx` | 修改 | 添加 usePathname 和激活状态样式 |

## 验收标准

- [ ] 当前页面导航链接下方显示黑色横条
- [ ] 切换页面时横条跟随变化
- [ ] 首页、产品页、新闻页等各页面均能正确显示
- [ ] 移动端菜单同样显示激活状态
- [ ] 样式与整体设计系统一致
