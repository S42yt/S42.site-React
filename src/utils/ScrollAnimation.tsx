"use client";

import { ReactNode, useEffect, useState } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  threshold?: number;
  className?: string;
}

export default function ScrollAnimation({
  children,
  threshold = 50,
  className = "",
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (typeof window !== 'undefined' && window.scrollY > threshold) {
        setIsVisible(true);
      }
    };
    
    onScroll();
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <div 
      className={`${className} transform transition-all duration-1000 ease-out opacity-0 translate-x-full ${
        isVisible ? 'opacity-100 translate-x-0' : ''
      }`}
    >
      {children}
    </div>
  );
}