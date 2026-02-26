"use client";

import { motion } from "framer-motion";
import SectionContainer from "../layout/SectionContainer";

export default function Contact() {
  return (
    <SectionContainer id="contact" className="bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Subtle glow */}
        <div className="absolute -top-10 right-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full -z-10" />

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <div className="w-16 h-1 bg-indigo-500 mt-2 rounded-full" />
        </div>

        {/* Description */}
        <p className="text-slate-400 mb-6 text-lg">
          Open to professional <span className="text-indigo-400">opportunities</span>, collaboration,
          and impactful engineering challenges.
        </p>

        {/* Contact Card */}
        <div className="
          bg-slate-950/60
          backdrop-blur-xl
          border border-slate-800
          rounded-xl
          p-6
          space-y-4
          text-slate-300
          max-w-xl
          shadow-lg shadow-black/20
        ">
          <p>
            <span className="text-slate-500">Email</span><br />
            <a
              href="mailto:aufadhar@gmail.com"
              className="hover:text-indigo-400 transition"
            >
              aufadhar@gmail.com
            </a>
          </p>

          <p>
            <span className="text-slate-500">Phone</span><br />
            <a
              href="tel:+6285700249949"
              className="hover:text-indigo-400 transition"
            >
              +62 857-0024-9949
            </a>
          </p>

          <p>
            <span className="text-slate-500">Location</span><br />
            Jakarta, Indonesia
          </p>
        </div>
      </motion.div>
    </SectionContainer>
  );
}