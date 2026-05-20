"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { left: "8%", top: "18%", size: 2, delay: 0, dur: 14 },
  { left: "92%", top: "22%", size: 1.5, delay: 1.2, dur: 18 },
  { left: "15%", top: "72%", size: 1.5, delay: 0.6, dur: 16 },
  { left: "88%", top: "65%", size: 2, delay: 2, dur: 20 },
  { left: "4%", top: "45%", size: 1, delay: 0.3, dur: 12 },
  { left: "96%", top: "40%", size: 1, delay: 1.8, dur: 15 },
] as const;

/** Edge-weighted floating dust — keeps center clear for reading */
export function AmbientParticles() {
  return (
    <div className="ambient-particles pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="ambient-particle absolute rounded-full bg-primary/25"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
