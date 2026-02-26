"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import SectionContainer from "../layout/SectionContainer";

export default function Skills() {
  return (
    <SectionContainer id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Subtle Glow */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full -z-10" />

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold">Core Skills</h2>
          <div className="w-20 h-1 bg-indigo-500 mt-2 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-indigo-400 mb-4 text-lg">
                  {category.replace("_", " & ")}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Badge label={skill} />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}