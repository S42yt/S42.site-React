import React, { useState, useEffect, ReactNode } from "react";
import "../styles/ScrollAnimation.css";

interface ScrollAnimationProps {
  children: ReactNode;
  threshold?: number;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  threshold = 50,
  className = "slide-in",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <div className={`${className} ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
