"use client";

import { motion } from "framer-motion";
import { AmbientParticles } from "@/components/graphics/ambient-particles";
import { BinaryRain } from "@/components/graphics/binary-rain";

/** Site backdrop — atmosphere, rain texture, cinematic depth */
export function BackdropGraphics() {
  return (
    <motion.div
      className="backdrop-graphics absolute inset-0 overflow-hidden"
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="backdrop-depth-fog" />
      <div className="backdrop-hero-glow" />
      <div className="backdrop-hero-spotlight" />
      <BinaryRain />
      <AmbientParticles />
      <div className="backdrop-grain" />
      <div className="backdrop-vignette" />
    </motion.div>
  );
}
