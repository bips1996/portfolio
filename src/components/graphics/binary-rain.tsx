"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle matrix-style binary columns in the upper viewport (reference ad aesthetic).
 */
export function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    type Column = {
      x: number;
      chars: string[];
      offset: number;
      speed: number;
    };

    let columns: Column[] = [];

    const readColor = (viewportWidth: number) => {
      const root = document.documentElement;
      const ambientB = getComputedStyle(root).getPropertyValue("--ambient-b").trim() || "232 28% 56%";
      const primary = getComputedStyle(root).getPropertyValue("--primary").trim() || "164 48% 52%";
      const ambientC = getComputedStyle(root).getPropertyValue("--ambient-c").trim() || "198 34% 50%";
      const isLight = root.classList.contains("light");
      const isMobile = viewportWidth < 1024;

      const fillAlpha = isMobile ? (isLight ? 0.26 : 0.38) : isLight ? 0.26 : 0.4;
      const brightAlpha = isMobile ? (isLight ? 0.42 : 0.56) : isLight ? 0.45 : 0.62;

      return {
        fill: `hsl(${ambientB} / ${fillAlpha})`,
        bright: `hsl(${isLight ? primary : ambientC} / ${brightAlpha})`,
        isLight,
        isMobile,
        speedScale: isMobile ? 0.58 : 1,
      };
    };

    let colors = readColor(window.innerWidth);

    const initColumns = (w: number, h: number, isMobile: boolean) => {
      const gap = isMobile ? (w < 400 ? 17 : 19) : w < 480 ? 20 : 18;
      const count = Math.ceil(w / gap) + 2;
      columns = Array.from({ length: count }, (_, i) => {
        const len = isMobile ? 7 + Math.floor(Math.random() * 10) : 8 + Math.floor(Math.random() * 14);
        const chars = Array.from({ length: len }, () =>
          Math.random() > 0.5 ? "1" : "0",
        );
        return {
          x: i * gap + (Math.random() * 4 - 2),
          chars,
          offset: Math.random() * h,
          speed: isMobile ? 0.1 + Math.random() * 0.18 : 0.25 + Math.random() * 0.45,
        };
      });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      colors = readColor(rect.width);
      initColumns(rect.width, rect.height, colors.isMobile);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const observer = new MutationObserver(() => {
      colors = readColor(canvas.clientWidth);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w <= 0 || h <= 0) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      const isMobile = colors.isMobile;
      const maxH = h * (isMobile ? 0.64 : 0.55);
      const fs = isMobile ? (w < 400 ? 11 : 12) : w < 480 ? 11 : 13;
      ctx.font = `600 ${fs}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textAlign = "center";

      for (const col of columns) {
        if (!reduceMotion) {
          col.offset += col.speed * colors.speedScale;
          if (col.offset > fs * col.chars.length + 40) {
            col.offset = -fs * col.chars.length;
            if (Math.random() > 0.92) {
              col.chars = col.chars.map(() => (Math.random() > 0.5 ? "1" : "0"));
            }
          }
        }

        let y = -col.offset;
        for (let i = 0; i < col.chars.length; i++) {
          if (y > -fs && y < maxH) {
            const distFromTop = y / maxH;
            const fadeInEnd = isMobile ? 0.12 : 0.2;
            const alpha =
              distFromTop < fadeInEnd
                ? 0.28 + (distFromTop / fadeInEnd) * 0.72
                : Math.max(isMobile ? 0.14 : 0.08, 1 - distFromTop * (isMobile ? 1.05 : 1.1));
            const tone = isMobile ? 0.92 : colors.isLight ? 0.65 : 1;
            ctx.globalAlpha = alpha * tone;
            ctx.fillStyle = i === 0 ? colors.bright : colors.fill;
            if (!colors.isLight && i === 0) {
              ctx.shadowBlur = isMobile ? 5 : 6;
              ctx.shadowColor = colors.bright;
            } else {
              ctx.shadowBlur = 0;
            }
            ctx.fillText(col.chars[i], col.x, y);
            ctx.shadowBlur = 0;
          }
          y += fs * 1.12;
        }
      }

      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="binary-rain-canvas"
      aria-hidden
    />
  );
}
