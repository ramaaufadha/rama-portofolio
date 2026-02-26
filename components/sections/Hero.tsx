"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import SectionContainer from "../layout/SectionContainer";

export default function Hero() {
  return (
    <SectionContainer
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* 🌈 Animated Background Glow */}
      <div className="absolute inset-0 -z-20">
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
        <motion.div
          className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full"
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 14 }}
        />
      </div>

      {/* ✨ Noise Texture */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[url('/noise.png')]" />

      <div className="grid md:grid-cols-2 gap-16 items-center w-full">
        
        {/* 🧠 TEXT */}
        <div>
          <motion.h1
            className="
              text-5xl md:text-6xl font-bold tracking-tight mb-4
              bg-gradient-to-r from-white via-indigo-200 to-indigo-500
              bg-clip-text text-transparent
            "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Rama Aufadha Risqullah
          </motion.h1>

          <motion.p
            className="text-indigo-400 text-lg mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Software Developer & Application Support Engineer <br />
            Designing reliable systems, strengthening application stability, and delivering resilient production solutions.
          </motion.p>

          <motion.p
            className="text-slate-400 mb-8 leading-relaxed text-lg max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            4+ years of experience in banking and manufacturing industries.
            Specialized in <span className="text-slate-200">Java, Node Js, Python development</span>, 
            automation testing, troubleshooting, and system integration.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button href="#contact">Contact Me</Button>
            <Button href="/cv.pdf">Download CV</Button>
          </motion.div>
        </div>

        {/* 🚀 IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotateX: 6, rotateY: -6 }}
            className="relative group perspective"
          >
            {/* 🌈 Gradient Aura */}
            <div className="
              absolute inset-0 rounded-3xl
              bg-gradient-to-tr from-indigo-500 via-blue-500 to-purple-500
              blur-2xl opacity-30 group-hover:opacity-60
              transition
            " />

            {/* 💎 Glass Frame */}
            <div className="
              relative bg-slate-900/40 backdrop-blur-xl
              border border-slate-800
              rounded-3xl p-2
            ">
              <Image
                src="/profilev3.jpg"
                alt="Profile"
                width={300}
                height={300}
                className="rounded-2xl object-cover"
              />
            </div>

            {/* ✨ Breathing Glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-indigo-500/20 blur-xl -z-10"
              animate={{ opacity: [0.2, 0.55, 0.2] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
          </motion.div>
        </motion.div>

      </div>
    </SectionContainer>
  );
}