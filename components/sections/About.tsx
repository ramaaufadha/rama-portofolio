"use client";

import { motion } from "framer-motion";
import SectionContainer from "../layout/SectionContainer";

const competencies = [
  "Application Development",
  "Automation & Test Engineering",
  "Production Support & Stability",
  "System Troubleshooting",
  "Performance Testing & Optimization",
  "System Integration",
  "Incident & Problem Resolution",
];

export default function About() {
  return (
    <SectionContainer id="about" className="bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Glow */}
        <div className="absolute -top-10 left-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full -z-10" />

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <div className="w-16 h-1 bg-indigo-500 mt-2 rounded-full" />
        </div>

        {/* About Text */}
        <p className="text-slate-400 max-w-3xl leading-relaxed text-lg mb-10">
          Application Support & Software Developer with 4+ years of experience delivering stable, reliable, and high-performing systems across banking and manufacturing industries.
          Strong background in Java, Python, Node.js development, automation testing 
          (Selenium & Appium), system troubleshooting, performance testing, and 
          production support.

          Skilled at diagnosing complex application issues, improving system stability,
          and delivering reliable technical solutions.
        </p>

        {/* 🔥 Competencies */}
        <div>
          <h3 className="text-indigo-400 mb-5 text-lg font-medium">
            Core Competencies
          </h3>

          <div className="flex flex-wrap gap-3">
            {competencies.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <span
                  className="
                    px-4 py-2
                    rounded-xl
                    text-sm
                    bg-slate-950/60
                    backdrop-blur-xl
                    border border-slate-800
                    text-slate-300
                    shadow-lg shadow-black/20
                    hover:border-indigo-500/40
                    hover:shadow-indigo-500/10
                    hover:text-indigo-300
                    transition
                  "
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}