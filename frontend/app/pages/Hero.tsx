"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Hi, I'm{" "}
          <span className="gradient-text">
            Kanchana Koralage
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          Final-year IT undergraduate passionate about
          DevOps, Cloud Engineering, Full-Stack Development,
          Kubernetes, CI/CD and scalable applications.
        </motion.p>

        <div className="mt-10 flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold"
          >
            View Projects
          </a>

          <a
            href="/cv.pdf"
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}