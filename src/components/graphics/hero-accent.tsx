"use client";

import { motion } from "framer-motion";

/** Orbital ring beside profile area */
export function HeroAccent() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.svg
        viewBox="0 0 120 120"
        className="hero-orbit absolute right-6 top-6 h-28 w-28 text-primary/30 sm:right-8 sm:top-8 sm:h-32 sm:w-32"
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
          opacity="0.65"
        />
        <circle
          cx="60"
          cy="60"
          r="38"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </motion.svg>
    </div>
  );
}
