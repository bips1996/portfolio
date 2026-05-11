"use client";

import { useEffect, useRef } from "react";

const LERP_GLOW = 0.085;
const LERP_RING = 0.18;

/**
 * Subtle cursor-follow glow + ring for fine pointers only.
 * Uses rAF + direct DOM updates (no React state per frame).
 */
export function CursorAmbient() {
  const enabledRef = useRef(false);
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const glowPosRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const movedRef = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncEnabled = () => {
      enabledRef.current = fine.matches && !reduce.matches;
      if (glowRef.current) {
        glowRef.current.style.opacity = enabledRef.current ? "1" : "0";
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = enabledRef.current ? "1" : "0";
      }
    };

    syncEnabled();
    fine.addEventListener("change", syncEnabled);
    reduce.addEventListener("change", syncEnabled);

    const onMove = (e: MouseEvent) => {
      if (!movedRef.current) {
        movedRef.current = true;
        const x = e.clientX;
        const y = e.clientY;
        targetRef.current.x = x;
        targetRef.current.y = y;
        glowPosRef.current.x = x;
        glowPosRef.current.y = y;
        ringPosRef.current.x = x;
        ringPosRef.current.y = y;
        return;
      }
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const tick = () => {
      if (enabledRef.current) {
        const t = targetRef.current;
        const g = glowPosRef.current;
        const r = ringPosRef.current;
        g.x += (t.x - g.x) * LERP_GLOW;
        g.y += (t.y - g.y) * LERP_GLOW;
        r.x += (t.x - r.x) * LERP_RING;
        r.y += (t.y - r.y) * LERP_RING;

        const glowEl = glowRef.current;
        if (glowEl) {
          glowEl.style.transform = `translate(${g.x}px, ${g.y}px) translate(-50%, -50%)`;
        }
        const ringEl = ringRef.current;
        if (ringEl) {
          ringEl.style.transform = `translate(${r.x}px, ${r.y}px) translate(-50%, -50%)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      fine.removeEventListener("change", syncEnabled);
      reduce.removeEventListener("change", syncEnabled);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[1] h-[min(85vw,720px)] w-[min(85vw,720px)] rounded-full opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at center, hsl(var(--primary) / 0.11) 0%, hsl(var(--ambient-b) / 0.05) 38%, transparent 68%)",
          willChange: "transform",
        }}
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[1] h-9 w-9 rounded-full border border-primary/25 opacity-0 shadow-[0_0_24px_hsl(var(--primary)/0.12)]"
        style={{ willChange: "transform" }}
        aria-hidden
      />
    </>
  );
}
