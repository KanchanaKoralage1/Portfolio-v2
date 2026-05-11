"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, ServerCog, BrainCircuit } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building scalable web and mobile applications using React, Next.js, Spring Boot, .NET, and Node.js.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Experienced with Docker, Kubernetes, GitHub Actions, Jenkins, ArgoCD, Terraform, and cloud platforms.",
  },
  {
    icon: ServerCog,
    title: "System Engineering",
    description:
      "Passionate about automation, Linux environments, networking, CI/CD pipelines, and scalable deployments.",
  },
  {
    icon: BrainCircuit,
    title: "Continuous Learning",
    description:
      "Always learning modern technologies, DevOps workflows, cloud-native architectures, and software engineering practices.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
            Introduction
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="gradient-text">
              Me
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8 md:p-10">
              <p className="text-gray-300 leading-8 text-lg">
                I am{" "}
                <span className="text-cyan-400 font-semibold">
                  Kanchana Koralage
                </span>
                , a final-year Information Technology undergraduate at SLIIT
                with a strong passion for{" "}
                <span className="text-white font-medium">
                  DevOps Engineering
                </span>
                ,{" "}
                <span className="text-white font-medium">
                  Cloud Computing
                </span>
                , and{" "}
                <span className="text-white font-medium">
                  Full-Stack Development
                </span>
                .
              </p>

              <p className="text-gray-300 leading-8 text-lg mt-6">
                I enjoy building modern applications and deploying them using
                cloud-native technologies such as Docker, Kubernetes, Jenkins,
                GitHub Actions, and ArgoCD. I am also experienced in developing
                scalable frontend and backend systems using React, Spring Boot,
                .NET, Node.js, and MongoDB.
              </p>

              <p className="text-gray-300 leading-8 text-lg mt-6">
                My goal is to become a highly skilled DevOps and Cloud Engineer
                capable of designing reliable infrastructure, automating
                deployments, and building impactful software solutions that
                solve real-world problems.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="glass rounded-2xl p-5 text-center">
                  <h3 className="text-3xl font-bold gradient-text">
                    10+
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">
                    Projects
                  </p>
                </div>

                <div className="glass rounded-2xl p-5 text-center">
                  <h3 className="text-3xl font-bold gradient-text">
                    15+
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">
                    Technologies
                  </p>
                </div>

                <div className="glass rounded-2xl p-5 text-center">
                  <h3 className="text-3xl font-bold gradient-text">
                    5+
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">
                    Certifications
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="glass rounded-3xl p-6 hover:-translate-y-2 transition duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-6">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    {card.title}
                  </h3>

                  <p className="text-gray-400 leading-7">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}