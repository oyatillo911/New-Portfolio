import React from "react";
import { motion } from "framer-motion";
import { Calendar, GitPullRequest, Rocket, CheckCircle2, TrendingUp } from "lucide-react";
import { STATS } from "../data/portfolioData";

export default function Stats() {
  const getIcon = (id) => {
    switch (id) {
      case 1:
        return <Calendar className="w-5 h-5 text-blue-400" />;
      case 2:
        return <GitPullRequest className="w-5 h-5 text-purple-400" />;
      case 3:
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      case 4:
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
      default:
        return <TrendingUp className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-[#1A1A1A] bg-[#070707]/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-2">
              01 / Ko'rsatkichlar
            </div>
            <h2 className="font-clash text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight">
              Raqamlarda erishilgan natijalar
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Har bir loyiha va qator kod ortida amaliy tajriba, qat'iyat hamda sifatga bo'lgan talabchanlik mujassam.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#383838] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]"
            >
              {/* Subtle hover gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-neutral-500">
                  0{stat.id}
                </span>
                <div className="p-2.5 rounded-xl bg-[#141414] border border-[#222222] group-hover:border-[#333] transition-colors">
                  {getIcon(stat.id)}
                </div>
              </div>

              {/* Large Value */}
              <div className="font-clash text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-2 group-hover:text-glow transition-all">
                {stat.value}
              </div>

              {/* Label */}
              <h3 className="text-sm sm:text-base font-medium text-neutral-200 mb-1.5 font-clash">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
