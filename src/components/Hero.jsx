import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Send, Terminal, Sparkles, FileText } from "lucide-react";
import { GithubIcon } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern">
      {/* Framer-style subtle radial ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/[0.04] rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-500/[0.03] rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111111]/80 border border-[#222222] shadow-[0_0_25px_rgba(255,255,255,0.03)] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs uppercase tracking-widest text-neutral-300 font-medium font-mono">
            {PERSONAL_INFO.availability}
          </span>
        </motion.div>

        {/* High-Impact Headline with Clash Display Font */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="space-y-4 mb-6"
        >
          <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-neutral-400">
            Frontend Dasturchi & UI/UX Muhandisi
          </div>
          <h1 className="font-clash text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05]">
            Oyatillo <span className="text-neutral-400 hover:text-white transition-colors duration-300">Ahmadaliyev</span>
          </h1>
          <p className="font-clash text-2xl sm:text-3xl md:text-4xl text-neutral-300 font-normal tracking-tight">
            Frontend Dasturchi
          </p>
        </motion.div>

        {/* 1-Year Experience Overview & Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed mb-10 text-center"
        >
          {PERSONAL_INFO.experience}ga ega bo'lgan dasturchi. Zamonaviy <span className="text-white font-medium">React.js</span>, <span className="text-white font-medium">Tailwind CSS</span> va toza arxitektura yordamida tezkor, moslashuvchan va foydalanuvchiga yoqimli raqamli mahsulotlar yarataman.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 w-full max-w-md mb-12"
        >
          {/* Primary CTA: Loyihalarni ko'rish */}
          <a
            href="#loyihalar"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Loyihalarni ko'rish</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Secondary CTA: Bog'lanish */}
          <a
            href="#aloqa"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white bg-[#111111] hover:bg-[#1A1A1A] border border-[#262626] hover:border-neutral-500 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send className="w-4 h-4 text-neutral-400" />
            <span>Bog'lanish</span>
          </a>

          {/* CV Button on Mobile/Tablet */}
          <a
            href={PERSONAL_INFO.cvUrl}
            download={PERSONAL_INFO.cvFileName}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-neutral-300 bg-[#0F0F0F] border border-[#222222] hover:text-white hover:border-neutral-500 transition-all sm:hidden w-full"
          >
            <FileText className="w-4 h-4" />
            <span>CV Yuklab Olish (PDF)</span>
          </a>
        </motion.div>

        {/* Quick Tech Highlights Badge Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs text-neutral-400 max-w-xl"
        >
          <span className="px-3 py-1.5 rounded-lg bg-[#0F0F0F] border border-[#1F1F1F]">
            ⚡ React 19 / Modern JS
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-[#0F0F0F] border border-[#1F1F1F]">
            🎨 Tailwind CSS
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-[#0F0F0F] border border-[#1F1F1F]">
            🌐 REST API & Axios
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-[#0F0F0F] border border-[#1F1F1F]">
            📦 20+ GitHub Loyihalar
          </span>
        </motion.div>
      </div>

      {/* Minimalist Framer-Style Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-mono">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-neutral-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
