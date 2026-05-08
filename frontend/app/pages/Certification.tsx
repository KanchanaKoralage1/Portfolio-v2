"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section
      id="certificates"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
            Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Certifications &{" "}
            <span className="gradient-text">
              Learning
            </span>
          </h2>
        </motion.div>

        {/* Certification Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Top */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl font-bold leading-snug">
                      {cert.title}
                    </h3>

                    <p className="text-cyan-400 mt-2">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center shrink-0">
                    <Award size={26} />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-7 mb-8">
                  {cert.description}
                </p>

                {/* Button */}
                <a
                  href={cert.credential}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition"
                >
                  <ExternalLink size={18} />

                  View Credential
                </a>
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
              Lifelong{" "}
              <span className="gradient-text">
                Learning Journey
              </span>
            </h3>

            <p className="text-gray-300 max-w-4xl mx-auto leading-8 text-lg">
              I continuously pursue certifications and hands-on learning
              opportunities to strengthen my knowledge in cloud computing,
              DevOps engineering, automation, and software development while
              staying updated with modern industry technologies and best
              practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}