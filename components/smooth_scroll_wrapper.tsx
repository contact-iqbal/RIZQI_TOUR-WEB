"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollWrapperProps {
  children: ReactNode;
}

export default function SmoothScrollWrapper({
  children,
}: SmoothScrollWrapperProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentScroll = 0;
    let targetScroll = 0;
    let ease = 0.075;

    const smoothScroll = () => {
      targetScroll = window.scrollY;
      currentScroll += (targetScroll - currentScroll) * ease;

      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(-${currentScroll}px)`;
      }

      requestAnimationFrame(smoothScroll);
    };

    const updateHeight = () => {
      if (contentRef.current) {
        document.body.style.height = `${contentRef.current.offsetHeight}px`;
      }
    };

    smoothScroll();
    updateHeight();

    window.addEventListener("resize", updateHeight);
    const resizeObserver = new ResizeObserver(updateHeight);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
      resizeObserver.disconnect();
      document.body.style.height = "";
    };
  }, []);

  return (
    <div
      ref={contentRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
