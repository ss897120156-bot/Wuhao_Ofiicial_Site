"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef } from "react";

// 阻止页面立即更新，先让退场动画走完，再显示新的页面内容
function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

// 定义页面顺序，用于判断滑动方向
const pageOrder = ["/", "/products", "/news", "/about", "/factory", "/certifications", "/contact"];

export default function PageAnimatePresence({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // 判断滑动方向：
  // direction = 1: 向右导航（如 Home → Products），新页面从右向左滑入，旧页面从左向右滑出
  // direction = -1: 向左导航（如 Products → Home），新页面从左向右滑入，旧页面从右向左滑出
  const currentIndex = pageOrder.indexOf(pathname);
  const prevIndexRef = useRef<number>(0);
  const directionRef = useRef<number>(1);
  
  // 在渲染前计算方向，确保 exit 和 enter 使用相同的方向值
  // 使用 useEffect 在渲染完成后更新 prevIndexRef
  useEffect(() => {
    prevIndexRef.current = currentIndex;
  }, [currentIndex]);
  
  // 计算当前方向：基于上一次的位置和当前位置
  const direction = currentIndex > prevIndexRef.current ? 1 : -1;
  
  // 将方向保存到 ref 中，这样 exit 动画可以读取到正确的方向
  // 注意：这里要在渲染时立即更新，确保 AnimatePresence 的子元素能获取正确的 custom 值
  directionRef.current = direction;

  // 动画变体
  const variants = {
    enter: (direction: number) => ({
      // direction=1 (向右导航，如 Home → Products): 新页面从右侧进入
      // direction=-1 (向左导航，如 Products → Home): 新页面从左侧进入
      x: direction > 0 ? "100%" : "-100%",
    }),
    center: {
      x: 0,
    },
    exit: (direction: number) => ({
      // direction=1: 旧页面向左侧退出
      // direction=-1: 旧页面向右侧退出
      x: direction > 0 ? "-100%" : "100%",
    }),
  };

  return (
    // 使用 mode="sync" 让新旧页面同时存在于 DOM 中
    // 使用 position: absolute 让两个页面叠加在一起
    <AnimatePresence mode="sync" custom={directionRef.current} initial={false}>
      <motion.div
        key={pathname}
        custom={directionRef.current}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="absolute top-0 left-0 w-full min-h-screen bg-[#f9f9f9]"
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
