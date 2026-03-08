"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionContainer from "../layout/SectionContainer";
import {
  SiOpenjdk,
  SiDotnet,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCsswizardry,
  SiPhp,
  SiPostgresql,
  SiSelenium,
  SiAndroid,
  SiGit,
  SiGithub,
  SiJira,
} from "react-icons/si";
import { Cloud, Database } from "lucide-react";

const skillIcons = {
  Java: { icon: SiOpenjdk, color: "#f89820" },
  "C#": { icon: SiDotnet, color: "#512BD4" },
  Python: { icon: SiPython, color: "#3776AB" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCsswizardry, color: "#1572B6" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  Oracle: { icon: Database, color: "#F80000" },
  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  "SQL Server": { icon: Database, color: "#CC2927" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#181717" },
  Azure: { icon: Cloud, color: "#0078D4" },
  Kubernetes: { icon: Cloud, color: "#326CE5" },
  Jira: { icon: SiJira, color: "#0052CC" },
  Selenium: { icon: SiSelenium, color: "#43B02A" },
  Appium: { icon: SiAndroid, color: "#3DDC84" },
  "Performance Testing": { icon: SiSelenium, color: "#FF6B35" },
  SIT: { icon: SiSelenium, color: "#FF6B35" },
};

export default function Skills() {
  const allSkills = Object.values(skills).flat();

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

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allSkills.map((skill, index) => {
            const skillData = skillIcons[skill as keyof typeof skillIcons];
            if (!skillData) return null;
            const Icon = skillData.icon;
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-5 text-center hover:border-indigo-400 transition-all duration-300 flex flex-col items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={30} color={skillData.color} style={{ filter: "brightness(1.1)" }} />
                  </motion.div>
                  <div className="text-slate-300 group-hover:text-indigo-300 transition text-sm font-medium">
                    {skill}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionContainer>
  );
}