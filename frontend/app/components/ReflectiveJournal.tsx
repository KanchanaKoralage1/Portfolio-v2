"use client";

import { motion } from "framer-motion";
import { BookOpenCheck } from "lucide-react";

import { reflectiveJournal } from "../data/portfolio";

export default function ReflectiveJournal() {
  return (
    <section
      id="journal"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
            Personal Reflection
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Reflective{" "}
            <span className="gradient-text">
              Journal
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-5 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-500 to-purple-500" />

          {/* Journal Cards */}
          <div className="space-y-16">
            {reflectiveJournal.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-3 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <BookOpenCheck size={20} />
                </div>

                {/* Card */}
                <div className="glass rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  {/* Top */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="text-cyan-400 text-lg mt-1">
                        {item.period}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-8 mb-8">
                    {item.description}
                  </p>

                  {/* Reflection Points */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">
                      Key Learnings
                    </h4>

                    <ul className="space-y-3">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-gray-400"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-cyan-400" />

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="glass rounded-3xl p-10 text-center">
            <h3 className="text-3xl font-bold mb-6">
              Continuous{" "}
              <span className="gradient-text">
                Self Improvement
              </span>
            </h3>

            <p className="text-gray-300 max-w-4xl mx-auto leading-8 text-lg">
              My academic journey, internship experience, personal projects,
              and certifications continuously helped me grow both technically
              and professionally. I believe learning is a lifelong process,
              especially in the rapidly evolving technology industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}