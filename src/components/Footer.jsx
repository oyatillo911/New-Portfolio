import React from "react";
import { ArrowUpRight, Heart, Download } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-[#1A1A1A] bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#141414]">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#111111] border border-[#262626] flex items-center justify-center text-white font-clash font-bold text-sm shadow-inner">
              {PERSONAL_INFO.shortName}
            </div>
            <div>
              <div className="font-clash text-base font-semibold text-white uppercase tracking-wider">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-neutral-400">
                Frontend Dasturchi & UI/UX Muhandisi
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400">
            <a href="#haqimda" className="hover:text-white transition-colors">
              Haqimda
            </a>
            <a href="#konikmalar" className="hover:text-white transition-colors">
              Ko'nikmalar
            </a>
            <a href="#loyihalar" className="hover:text-white transition-colors">
              Loyihalar
            </a>
            <a href="#jarayon" className="hover:text-white transition-colors">
              Ishlash Jarayoni
            </a>
            <a href="#aloqa" className="hover:text-white transition-colors">
              Aloqa
            </a>
            <a
              href={PERSONAL_INFO.cvUrl}
              download={PERSONAL_INFO.cvFileName}
              className="text-white hover:text-neutral-300 transition-colors flex items-center gap-1 font-medium"
            >
              <Download className="w-3 h-3" />
              <span>CV (PDF)</span>
            </a>
          </div>

          {/* External Social Profiles */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href={PERSONAL_INFO.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Telegram</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{PERSONAL_INFO.location} · Masofadan & Ofisda ishlashga ochiq</span>
          </div>

          <div className="text-center sm:text-right">
            © {currentYear} {PERSONAL_INFO.name}. Barcha huquqlar himoyalangan.
          </div>
        </div>
      </div>
    </footer>
  );
}
