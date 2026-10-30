import React from "react";
import { motion } from "framer-motion";
import { Compass, Sparkles, Code2, Rocket } from "lucide-react";
import { WORK_PROCESS } from "../data/portfolioData";

export default function Process() {
  const getIcon = (step) => {
    switch (step) {
      case "01":
        return <Compass className="w-5 h-5 text-blue-400" />;
      case "02":
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      case "03":
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case "04":
        return <Rocket className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="jarayon" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111] border border-[#222222] text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-4">
            05 / Ishlash Bosqichlari
          </div>
          <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight mb-4">
            G'oyadan to jonli natijagacha
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light">
            Har bir muvaffaqiyatli veb-ilova tizimli yondashuv va qat'iy ishlab chiqish tartibiga tayanadi.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_PROCESS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#383838] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-clash text-3xl sm:text-4xl font-semibold text-neutral-600 group-hover:text-white transition-colors duration-300">
                    {item.step}
                  </span>
                  <div className="p-3 rounded-xl bg-[#141414] border border-[#222] group-hover:border-[#333] transition-colors">
                    {getIcon(item.step)}
                  </div>
                </div>

                <h3 className="font-clash text-lg sm:text-xl font-medium text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Progress connector line */}
              <div className="mt-8 pt-4 border-t border-[#1A1A1A] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Bosqich {item.step}</span>
                <span className="text-emerald-400">Tizimli yondashuv</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
