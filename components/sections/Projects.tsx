"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import Card from "../ui/Card";
import SectionContainer from "../layout/SectionContainer";

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Subtle Glow */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full -z-10" />

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="w-20 h-1 bg-indigo-500 mt-2 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-indigo-400 mb-3 text-lg">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}