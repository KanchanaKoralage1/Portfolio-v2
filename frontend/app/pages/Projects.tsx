"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />

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
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="gradient-text">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="glass rounded-3xl overflow-hidden group border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
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
              Building{" "}
              <span className="gradient-text">
                Scalable Solutions
              </span>
            </h3>

            <p className="text-gray-300 max-w-4xl mx-auto leading-8 text-lg">
              My projects focus on cloud-native architectures, DevOps
              automation, full-stack engineering, CI/CD pipelines, and
              scalable application deployments using modern technologies and
              best engineering practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}