"use client";

import { motion } from "framer-motion";
import { BinaryRain } from "@/components/graphics/binary-rain";

/** Site backdrop — binary rain only. */
export function BackdropGraphics() {
  return (
    <motion.div
      className="backdrop-graphics absolute inset-0 overflow-hidden"
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="backdrop-hero-glow" />
      <BinaryRain />
      <div className="backdrop-grain" />
    </motion.div>
  );
}
