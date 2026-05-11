"use client";

import { motion } from "framer-motion";
import { Rocket, Target, Trophy } from "lucide-react";

import { careerPlans } from "../data/portfolio";

const icons = [Rocket, Target, Trophy];

export default function CareerPlan() {
  return (
    <section
      id="career"
      className="section-padding relative overflow-hidden"
    >
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
          className="mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
            Future Vision
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Career{" "}
            <span className="gradient-text">
              Development Plan
            </span>
          </h2>
        </motion.div>

        {/* Career Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {careerPlans.map((plan, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={plan.phase}
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
                className="glass rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-6 relative z-10">
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 relative z-10">
                  {plan.phase}
                </h3>

                {/* Period */}
                <p className="text-cyan-400 mb-6 relative z-10">
                  {plan.period}
                </p>

                {/* Description */}
                <p className="text-gray-300 leading-7 mb-8 relative z-10">
                  {plan.description}
                </p>

                {/* Goals */}
                <div className="space-y-4 relative z-10">
                  {plan.goals.map((goal) => (
                    <div
                      key={goal}
                      className="flex items-start gap-3 text-gray-400"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-cyan-400" />

                      <span>{goal}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
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
              Building a Future in{" "}
              <span className="gradient-text">
                DevOps & Cloud Engineering
              </span>
            </h3>

            <p className="text-gray-300 max-w-4xl mx-auto leading-8 text-lg">
              My career plan focuses on continuous learning, cloud-native
              technologies, automation, scalable infrastructure, and modern
              software engineering practices. I am committed to becoming a
              highly skilled engineer capable of delivering impactful and
              innovative technology solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}