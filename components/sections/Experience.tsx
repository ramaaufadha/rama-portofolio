"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import Card from "../ui/Card";
import SectionContainer from "../layout/SectionContainer";

export default function Experience() {
  return (
    <SectionContainer id="experience" className="bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Subtle glow */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full -z-10" />

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold">Experience</h2>
          <div className="w-20 h-1 bg-indigo-500 mt-2 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50" />

              <Card>
                <h3 className="text-lg font-medium">
                  {exp.role}{" "}
                  <span className="text-slate-500">– {exp.company}</span>
                </h3>

                <p className="text-indigo-400 text-sm mb-3">
                  {exp.period}
                </p>

                <ul className="text-slate-400 text-sm space-y-1">
                  {exp.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}