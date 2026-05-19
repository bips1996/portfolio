"use client";

import { motion } from "framer-motion";

/** Decorative graphics inside the hero surface */
export function HeroAccent() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Soft mesh */}
      <motion.div
        className="hero-mesh-glow absolute -right-8 top-1/4 h-56 w-56 sm:-right-4 sm:h-72 sm:w-72"
        animate={{ opacity: [0.45, 0.7, 0.45], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbital ring behind profile area */}
      <motion.svg
        viewBox="0 0 120 120"
        className="hero-orbit absolute right-6 top-6 h-28 w-28 text-primary/25 sm:right-8 sm:top-8 sm:h-32 sm:w-32"
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeDasharray="4 8"
          opacity="0.6"
        />
        <circle
          cx="60"
          cy="60"
          r="38"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.35"
        />
      </motion.svg>

      {/* Corner prism lines */}
      <svg
        className="absolute bottom-8 left-8 h-16 w-16 text-primary/20 sm:bottom-10 sm:left-10"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden
      >
        <path d="M8 56 L8 8 L56 8" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <path d="M20 44 L44 20" stroke="currentColor" strokeWidth="0.75" opacity="0.35" />
        <circle cx="8" cy="8" r="2.5" fill="currentColor" opacity="0.5" />
      </svg>

      {/* Floating dot constellation */}
      <motion.div
        className="hero-dots absolute left-[18%] top-[42%] hidden sm:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="hero-dot hero-dot--a" />
        <span className="hero-dot hero-dot--b" />
        <span className="hero-dot hero-dot--c" />
      </motion.div>
    </div>
  );
}
