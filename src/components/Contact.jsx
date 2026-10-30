import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  Mail, 
  MessageSquare, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkles,
  PhoneCall
} from "lucide-react";
import { GithubIcon, TelegramIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", contact: "", message: "" });
    }, 4000);
  };

  return (
    <section id="aloqa" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#1C1C1C] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-white/[0.04] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Giant Hero CTA Card like Framer "Let's build something beyond the dark" */}
        <div className="p-8 sm:p-14 md:p-16 rounded-3xl bg-[#0D0D0D] border border-[#1F1F1F] text-center relative overflow-hidden mb-16 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            06 / Hamkorlik & Aloqa
          </div>

          <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto">
            Birgalikda ajoyib va tezkor <span className="text-neutral-400">veb-loyihalarni</span> yaratamiz
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light mb-10">
            Sizda yangi loyiha g'oyasi bormi yoki jamoangizga tajribali Frontend dasturchi kerakmi? Har qanday savol va takliflar uchun ochiqman.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-lg mx-auto">
            {/* ========================================================================= */}
            {/* TELEGRAM HAVOLASI (Quyidagi havolani o'zingizning telegramingizga ulang)   */}
            {/* ========================================================================= */}
            <a
              href={PERSONAL_INFO.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <TelegramIcon className="w-4 h-4 text-black fill-none" />
              <span>Telegram orqali yozish</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </a>

            {/* ========================================================================= */}
            {/* EMAIL HAVOLASI (Quyidagi havolani o'zingizning emailingizga ulang)         */}
            {/* ========================================================================= */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium text-white bg-[#141414] hover:bg-[#1C1C1C] border border-[#282828] hover:border-neutral-400 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email nusxalandi!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-neutral-400" />
                  <span>Email nusxalash</span>
                  <Copy className="w-3.5 h-3.5 text-neutral-500" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Contact Info & Direct Interactive Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-clash text-xl font-medium text-white mb-4">
              To'g'ridan-to'g'ri bog'lanish
            </h3>

            {/* Telegram Card */}
            <a
              href={PERSONAL_INFO.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#383838] transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#141414] border border-[#242424] text-sky-400 group-hover:scale-110 transition-transform">
                  <TelegramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-mono">Telegram</div>
                  <div className="text-sm font-medium text-white group-hover:text-neutral-200">
                    {PERSONAL_INFO.telegramHandle}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
            </a>

            {/* Email Card */}
            <a
              href={PERSONAL_INFO.emailMailto}
              className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#383838] transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#141414] border border-[#242424] text-neutral-200 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-mono">Email Pochta</div>
                  <div className="text-sm font-medium text-white group-hover:text-neutral-200 truncate max-w-[180px] sm:max-w-none">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#383838] transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#141414] border border-[#242424] text-white group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-mono">GitHub Repositoriyalar</div>
                  <div className="text-sm font-medium text-white group-hover:text-neutral-200">
                    github.com/{PERSONAL_INFO.githubUsername}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-3 p-6 sm:p-8 rounded-3xl bg-[#0D0D0D] border border-[#1F1F1F]">
            <h3 className="font-clash text-xl font-medium text-white mb-2">
              Xabar qoldiring
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light mb-6">
              Quyidagi formani to'ldiring, qisqa vaqt ichida siz bilan bog'lanaman.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#111111] border border-emerald-500/30 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-clash text-lg font-medium text-white mb-2">
                  Xabaringiz qabul qilindi!
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Tez orada siz ko'rsatgan aloqa orqali javob qaytaraman. Rahmat!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masalan: Sardor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#242424] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Telegram yoki Email manzilingiz
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@username yoki email@domain.com"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#242424] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Loyiha haqida yoki xabaringiz
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Loyiha maqsadi, talablar yoki taklifingiz haqida qisqacha yozing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#242424] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold text-black bg-white hover:bg-neutral-200 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Xabarni yuborish</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
