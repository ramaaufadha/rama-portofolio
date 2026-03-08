"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import Badge from "../ui/Badge";
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.desc}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}