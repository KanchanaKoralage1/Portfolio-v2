"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";

import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />

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
            Professional Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Work{" "}
            <span className="gradient-text">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-5 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-500 to-purple-500" />

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
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
                  <BriefcaseBusiness size={20} />
                </div>

                {/* Card */}
                <div className="glass rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  {/* Top */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {exp.role}
                      </h3>

                      <p className="text-cyan-400 text-lg mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400">
                      <CalendarDays size={18} />

                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-8 mb-8">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4">
                      Responsibilities
                    </h4>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-gray-400"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-cyan-400" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="glass rounded-3xl p-10 text-center">
            <h3 className="text-3xl font-bold mb-6">
              Growing Through{" "}
              <span className="gradient-text">
                Real-World Experience
              </span>
            </h3>

            <p className="text-gray-300 max-w-4xl mx-auto leading-8 text-lg">
              My internship experience strengthened my skills in full-stack
              development, collaboration, software engineering workflows,
              testing, DevOps practices, and scalable application development
              using modern technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}