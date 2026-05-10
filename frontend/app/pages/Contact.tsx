"use client";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

import { contactInfo } from "../data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
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
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact{" "}
            <span className="gradient-text">
              Me
            </span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-3xl font-bold mb-6">
              Let&apos;s Build Something Amazing
            </h3>

            <p className="text-gray-300 leading-8 mb-10">
              I am always open to discussing internship opportunities,
              software engineering projects, DevOps collaborations, and
              cloud-native technologies. Feel free to connect with me through
              the platforms below.
            </p>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>

                  <a
                    href={`mailto:${contactInfo.Email}`}
                    className="text-lg hover:text-cyan-400 transition"
                  >
                    {contactInfo.Email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Phone
                  </p>

                  <a
                    href={`tel:${contactInfo.Phone}`}
                    className="text-lg hover:text-cyan-400 transition"
                  >
                    {contactInfo.Phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Location
                  </p>

                  <p className="text-lg">
                    {contactInfo.Location}
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5 mt-10">
              <a
                href={contactInfo.GitHub}
                target="_blank"
                className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:border-cyan-400/40 hover:-translate-y-1 transition"
              >
                <FaGithub size={24} />
              </a>

              <a
                href={contactInfo.LinkedIn}
                target="_blank"
                className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:border-cyan-400/40 hover:-translate-y-1 transition"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href={contactInfo.Facebook}
                target="_blank"
                className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:border-cyan-400/40 hover:-translate-y-1 transition"
              >
                <FaFacebook size={24} />
              </a>

              <a
                href={contactInfo.Instagram}
                target="_blank"
                className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:border-cyan-400/40 hover:-translate-y-1 transition"
              >
                <FaInstagram size={24} />
              </a>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-3xl font-bold mb-8">
              Send a Message
            </h3>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block mb-3 text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-3 text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-3 text-gray-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold flex items-center justify-center gap-3 hover:opacity-90 transition"
              >
                <Send size={20} />

                Send Message
              </button>
            </form>
          </motion.div>
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
              Open to{" "}
              <span className="gradient-text">
                Opportunities
              </span>
            </h3>

            <p className="text-gray-300 max-w-4xl mx-auto leading-8 text-lg">
              I am currently seeking opportunities related to DevOps
              Engineering, Cloud Computing, Full-Stack Development, and
              Software Engineering internships where I can contribute,
              collaborate, and continue growing professionally.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}