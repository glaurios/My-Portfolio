"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate(
          ${clientX * 0.03}px,
          ${clientY * 0.03}px
        )`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">

      {/* =========================
          GRID SYSTEM (BLACK + CLEAR)
      ========================== */}

      {/* big structure grid */}
      <div className="absolute inset-0 opacity-[0.22]">
        <div className="w-full h-full bg-[linear-gradient(to_right,rgba(0,0,0,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.25)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* fine detail grid */}
      <div className="absolute inset-0 opacity-[0.10]">
        <div className="w-full h-full bg-[linear-gradient(to_right,rgba(0,0,0,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.18)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* =========================
          DEPTH LIGHT (CENTER FADE)
      ========================== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_60%)]" />

      {/* =========================
          MOVING GRADIENT BLOBS
      ========================== */}

      <div className="absolute top-[-140px] left-[-120px] w-[450px] h-[450px] bg-blue-500/45 rounded-full blur-[130px] animate-blob" />

      <div className="absolute top-[10%] right-[-160px] w-[500px] h-[500px] bg-purple-500/45 rounded-full blur-[150px] animate-blob animation-delay-2000" />

      <div className="absolute bottom-[-160px] left-[30%] w-[550px] h-[550px] bg-pink-500/45 rounded-full blur-[170px] animate-blob animation-delay-4000" />

      {/* =========================
          CURSOR REACTIVE GLOW
      ========================== */}

      <div
        ref={blobRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
      >
        <div className="absolute top-1/2 left-1/2 w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 bg-cyan-400/25 blur-[160px] rounded-full" />
      </div>

      {/* =========================
          MICRO GLASS LAYER
      ========================== */}
      <div className="absolute inset-0 backdrop-blur-[0.6px]" />
    </div>
  );
}