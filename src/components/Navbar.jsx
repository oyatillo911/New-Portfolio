import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ArrowUpRight, Code, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Haqimda", href: "#haqimda" },
    { name: "Ko'nikmalar", href: "#konikmalar" },
    { name: "Loyihalar", href: "#loyihalar" },
    { name: "Jarayon", href: "#jarayon" },
    { name: "Aloqa", href: "#aloqa" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#050505]/80 backdrop-blur-xl border-b border-[#1F1F1F]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-[#111111] border border-[#262626] flex items-center justify-center text-white font-clash font-bold text-sm group-hover:border-white/40 transition-colors shadow-inner">
                {PERSONAL_INFO.shortName}
              </div>
              <div className="flex flex-col">
                <span className="font-clash text-sm sm:text-base font-semibold tracking-wider text-white uppercase group-hover:text-neutral-200 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[10px] text-neutral-400 tracking-widest uppercase">
                  {PERSONAL_INFO.role}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#0D0D0D]/70 border border-[#1F1F1F] backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full transition-all duration-200 hover:bg-white/[0.06]"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions: CV Download & Contact CTA */}
            <div className="hidden sm:flex items-center gap-3">
              {/* CV Yuklab Olish (Download Resume) Tugmasi */}
              <a
                href={PERSONAL_INFO.cvUrl}
                download={PERSONAL_INFO.cvFileName}
                className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#111111] border border-[#262626] hover:border-white/40 rounded-full transition-all duration-300 hover:bg-[#1A1A1A] group shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                title="Rezyumeni PDF formatida yuklab olish"
              >
                <Download className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                <span>CV Yuklab Olish</span>
              </a>

              {/* Aloqa / Telegram Quick CTA */}
              <a
                href={PERSONAL_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-neutral-200 rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                <span>Bog'lanish</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={PERSONAL_INFO.cvUrl}
                download={PERSONAL_INFO.cvFileName}
                className="p-2 rounded-lg bg-[#111111] border border-[#222] text-neutral-300 hover:text-white"
                title="CV Yuklab Olish"
              >
                <Download className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#111111] border border-[#222] text-white hover:border-white/30 transition-colors focus:outline-none"
                aria-label="Menyu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] z-40 p-4 bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-[#1F1F1F] md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2 pt-2 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                </a>
              ))}
              <div className="pt-4 border-t border-[#1F1F1F] flex flex-col gap-2.5">
                <a
                  href={PERSONAL_INFO.cvUrl}
                  download={PERSONAL_INFO.cvFileName}
                  className="w-full py-3 px-4 rounded-xl text-center text-xs font-semibold text-white bg-[#141414] border border-[#262626] flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>CV Yuklab Olish (PDF)</span>
                </a>
                <a
                  href={PERSONAL_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-center text-xs font-semibold text-black bg-white flex items-center justify-center gap-2"
                >
                  <span>Telegram orqali bog'lanish</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
