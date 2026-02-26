"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
        fixed top-0 left-0 right-0
        h-[3px]
        bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500
        origin-left
        z-[999]
      "
      style={{ scaleX: scrollYProgress }}
    />
  );
}