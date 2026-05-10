"use client";

import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
            Technical Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="space-y-14">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.15,
              }}
              viewport={{ once: true }}
            >
              {/* Category Title */}
              <h3 className="text-2xl font-semibold mb-8 text-white">
                {category.title}
              </h3>

              {/* Skill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon ?? null;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -8,
                        scale: 1.04,
                      }}
                      className="glass rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:border-cyan-400/30 transition-all duration-300 group"
                    >
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                        {Icon ? (
                          <Icon className="text-4xl text-cyan-400" />
                        ) : (
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-10 h-10 object-contain"
                          />
                        )}
                      </div>

                      {/* Skill Name */}
                      <h4 className="font-semibold text-lg">{skill.name}</h4>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">
              Passionate About{" "}
              <span className="gradient-text">Cloud-Native Engineering</span>
            </h3>

            <p className="text-gray-300 max-w-4xl mx-auto leading-8 text-lg">
              I continuously explore modern technologies related to DevOps,
              cloud infrastructure, automation, scalable backend systems,
              container orchestration, and high-performance frontend
              development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
