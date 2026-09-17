"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let ringX = 0;
    let ringY = 0;
    let frameId = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {/* core dot */}
      <div
        ref={dotRef}
        className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999] dark:bg-yellow-400"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* outer glow ring */}
      <div
        ref={ringRef}
        className="custom-cursor fixed top-0 left-0 w-10 h-10 border border-black/20 rounded-full pointer-events-none z-[9998] backdrop-blur-md dark:border-white/70"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}