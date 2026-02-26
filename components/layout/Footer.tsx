"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-950">
      
      {/* Subtle glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-24 bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20 py-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Left */}
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Rama Aufadha Risqullah
          </div>

          {/* Center */}
          <div className="text-slate-600 text-sm">
            Built with Next.js & Tailwind CSS
          </div>

          {/* Right */}
          <div className="flex gap-4 text-sm">
            <a
              href="https://id.linkedin.com/in/rama-aufadha-b42592195"
              className="text-slate-500 hover:text-indigo-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ramaaufadha"
              className="text-slate-500 hover:text-indigo-400 transition"
            >
              GitHub
            </a>
            <a
              href="mailto:aufadhar@gmail.com"
              className="text-slate-500 hover:text-indigo-400 transition"
            >
              Email
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}