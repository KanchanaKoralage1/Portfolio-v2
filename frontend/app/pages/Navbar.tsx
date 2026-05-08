"use client";

const links = [
  "About",
  "Skills",
  "Projects",
  "Journal",
  "Career",
  "Certificates",
  "Resume",
  "Contact",
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl gradient-text">
          Kanchana.dev
        </h1>

        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-cyan-400 transition"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}