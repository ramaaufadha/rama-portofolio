"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed w-60 h-60 rounded-full bg-indigo-500/40 blur-3xl pointer-events-none z-[9999]"
      animate={{
        x: position.x - 120,
        y: position.y - 120,
      }}
      transition={{ type: "tween", ease: "linear", duration: 0.1 }}
    />
  );
}