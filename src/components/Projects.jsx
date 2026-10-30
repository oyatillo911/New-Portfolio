import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, FolderGit2, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="loyihalar" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#1C1C1C]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-500/[0.03] to-purple-500/[0.03] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111] border border-[#222222] text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-4">
              <FolderGit2 className="w-3.5 h-3.5 text-neutral-300" />
              03 / Saralangan Loyihalar
            </div>
            <h2 className="font-clash text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
              Top 4 Asosiy Ishlanmalar
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 font-light">
              Har bir loyiha toza kod arxitekturasi, tezkor REST API aloqalari va pixel-perfect UI standartlari asosida qurilgan.
            </p>
          </div>
        </div>

        {/* Top 4 Projects Grid (2x2 layout with Framer aesthetic) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col rounded-3xl bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#383838] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#141414] border-b border-[#1A1A1A]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/20" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-white bg-black/60 backdrop-blur-md border border-white/10 shadow-sm">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono text-neutral-400 bg-black/60 backdrop-blur-md border border-white/10">
                    {project.year}
                  </span>
                </div>

                {/* Bottom stat pill on preview */}
                <div className="absolute bottom-3 left-4 z-10 hidden sm:block">
                  <span className="text-[11px] font-mono text-neutral-300 bg-black/75 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                    ⚡ {project.stats}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="font-clash text-xl sm:text-2xl font-medium text-white tracking-tight mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono text-neutral-300 bg-[#161616] border border-[#262626]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ========================================================== */}
                {/* LOYIHA TUGMALARI: GITHUB REPO VA LIVE DEMO HAVOLALARI      */}
                {/* ========================================================== */}
                <div className="flex items-center gap-3 pt-5 border-t border-[#1C1C1C]">
                  {/* GitHub Repo Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-neutral-300 bg-[#141414] hover:bg-[#1C1C1C] hover:text-white border border-[#262626] hover:border-neutral-500 transition-all duration-200"
                    title="GitHub Repositoriyasini ko'rish"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repo</span>
                  </a>

                  {/* Live Demo Button */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-sm"
                    title="Jonli versiyasini ochish"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Projects GitHub Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 text-center p-8 rounded-3xl bg-[#090909] border border-[#1C1C1C] max-w-2xl mx-auto"
        >
          <p className="text-sm text-neutral-400 mb-4">
            Barcha 20 ga yaqin ochiq kodli loyihalar, test ishlanmalari va komponentlar kutubxonasi bilan GitHub profilimda tanishishingiz mumkin.
          </p>
          <a
            href="https://github.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#141414] hover:bg-[#1E1E1E] border border-[#2A2A2A] hover:border-white/40 transition-all duration-200"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub-da 20+ loyihalarni ko'rish</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
