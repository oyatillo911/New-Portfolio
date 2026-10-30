import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  FileCode, 
  Palette, 
  Globe, 
  GitBranch, 
  Sparkles, 
  Zap, 
  Layers, 
  Terminal,
  Cpu,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { TECH_STACK, SKILL_MARQUEE } from "../data/portfolioData";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("Barchasi");

  const categories = ["Barchasi", "Framework", "Styling", "Til", "Backend/Integratsiya", "Workflow & Deploy"];

  const filteredStack = activeCategory === "Barchasi" 
    ? TECH_STACK 
    : TECH_STACK.filter(tech => tech.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const getTechIcon = (iconName, color) => {
    const props = { className: "w-6 h-6", style: { color } };
    switch (iconName) {
      case "Atom":
        return (
          <svg className="w-6 h-6" viewBox="0 0 115.3 100" fill="none" style={{ color }}>
            <ellipse cx="57.65" cy="50" rx="16" ry="46" transform="rotate(30 57.65 50)" stroke="currentColor" strokeWidth="6" />
            <ellipse cx="57.65" cy="50" rx="16" ry="46" transform="rotate(90 57.65 50)" stroke="currentColor" strokeWidth="6" />
            <ellipse cx="57.65" cy="50" rx="16" ry="46" transform="rotate(150 57.65 50)" stroke="currentColor" strokeWidth="6" />
            <circle cx="57.65" cy="50" r="7.5" fill="currentColor" />
          </svg>
        );
      case "FileCode":
        return <FileCode {...props} />;
      case "Palette":
        return <Palette {...props} />;
      case "Code2":
        return <Code2 {...props} />;
      case "Globe":
        return <Globe {...props} />;
      case "GitBranch":
        return <GitBranch {...props} />;
      case "Sparkles":
        return <Sparkles {...props} />;
      case "Zap":
        return <Zap {...props} />;
      default:
        return <Cpu {...props} />;
    }
  };

  return (
    <section id="konikmalar" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-purple-500/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111] border border-[#222222] text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-4">
            <Cpu className="w-3.5 h-3.5 text-neutral-300" />
            02 / Texnologik Vositalar
          </div>
          <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-4">
            Zamonaviy Texnologiyalar & Stack
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto">
            Tez, xavfsiz va kelajakka mos veb-ilovalarni yaratish uchun eng ilg'or kutubxonalar va standartlardan foydalanaman.
          </p>
        </div>

        {/* Framer-Style Endless Marquee Ticker */}
        <div className="relative w-full overflow-hidden py-4 mb-16 border-y border-[#1C1C1C] bg-[#0A0A0A]/40">
          {/* Edge Gradients for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-infinite flex items-center gap-8 text-neutral-400 font-clash uppercase text-sm sm:text-base tracking-widest">
            {[...SKILL_MARQUEE, ...SKILL_MARQUEE].map((skill, index) => (
              <div key={index} className="flex items-center gap-8 whitespace-nowrap group">
                <span className="text-neutral-300 hover:text-white transition-colors duration-200 cursor-default">
                  {skill}
                </span>
                <span className="text-neutral-600 select-none">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  : "bg-[#0F0F0F] text-neutral-400 hover:text-white border border-[#1F1F1F] hover:border-[#333]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4, borderColor: "#3F3F46" }}
              className="group relative p-6 rounded-2xl bg-[#0D0D0D] border border-[#1F1F1F] transition-all duration-300 overflow-hidden shadow-sm"
            >
              {/* Subtle top indicator bar */}
              <div
                className="absolute top-0 left-6 right-6 h-[1.5px] opacity-20 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: tech.color }}
              />

              <div className="flex items-start justify-between mb-5">
                <div className="p-3 rounded-xl bg-[#141414] border border-[#222] group-hover:scale-110 transition-transform duration-300">
                  {getTechIcon(tech.icon, tech.color)}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#161616] border border-[#262626] text-neutral-400">
                  {tech.category}
                </span>
              </div>

              <h3 className="font-clash text-lg font-medium text-white mb-1 group-hover:text-white transition-colors">
                {tech.name}
              </h3>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#1A1A1A]">
                <span className="text-xs text-neutral-400">Daraja:</span>
                <span className="text-xs font-mono font-medium text-neutral-300 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  {tech.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
