"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

// 定义页面顺序，用于判断滑动方向
const pageOrder = ["/", "/products", "/news", "/about", "/certifications", "/contact"];

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [exitChildren, setExitChildren] = useState<React.ReactNode>(null);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (pathname === prevPathnameRef.current) {
      setDisplayedChildren(children);
      return;
    }

    const currentIndex = pageOrder.indexOf(pathname);
    const prevIndex = pageOrder.indexOf(prevPathnameRef.current);
    
    const newDirection = currentIndex > prevIndex ? 1 : -1;
    setDirection(newDirection);
    
    // 保存当前页面作为退出页面
    setExitChildren(displayedChildren);
    setIsAnimating(true);
    
    // 延迟更新新页面内容，确保退出动画能看到旧页面
    const timer = setTimeout(() => {
      setDisplayedChildren(children);
    }, 50);

    prevPathnameRef.current = pathname;

    return () => clearTimeout(timer);
  }, [pathname, children]);

  const handleAnimationComplete = () => {
    setExitChildren(null);
    setIsAnimating(false);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
    }),
    center: {
      x: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
    }),
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 退出页面 */}
      <AnimatePresence mode="popLayout" onExitComplete={handleAnimationComplete}>
        {exitChildren && isAnimating && (
          <motion.div
            key="exit"
            custom={direction}
            variants={variants}
            initial="center"
            animate="exit"
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="absolute top-0 left-0 w-full min-h-screen bg-[#f9f9f9] z-10"
          >
            {exitChildren}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 进入页面 */}
      <motion.div
        key={pathname}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="relative w-full min-h-screen bg-[#f9f9f9]"
      >
        {displayedChildren}
      </motion.div>
    </div>
  );
}
