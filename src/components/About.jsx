import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, Code, ShieldCheck, HeartHandshake, Zap } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function About() {
  const highlights = [
    {
      title: "Pixel-Perfect Aniqlik",
      desc: "Figma dizaynlarni vebda 100% o'xshashlik, to'g'ri oraliqlar (spacing) va moslashuvchan grid bilan jonlantiraman."
    },
    {
      title: "Toza & Modulli Kod",
      desc: "Qayta ishlatiluvchi React komponentlari, tushunarli arxitektura va oson kengaytiriluvchi kod yozaman."
    },
    {
      title: "Yuqori Tezlik & Optimallash",
      desc: "Vite, Tailwind va engil kutubxonalar orqali saytning chaqmoqdek tez yuklanishini ta'minlayman."
    },
    {
      title: "Doimiy O'rganish & Moslashuv",
      desc: "Frontend sohasidagi eng so'nggi trendlar va texnologiyalarni amaliyotda tez o'zlashtiraman."
    }
  ];

  return (
    <section id="haqimda" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#1C1C1C] bg-[#070707]/30">
      <div className="max-w-6xl mx-auto">
        {/* Manifesto Style Callout */}
        <div className="p-8 sm:p-14 md:p-16 rounded-3xl bg-[#0C0C0C] border border-[#1F1F1F] relative overflow-hidden mb-16 shadow-2xl">
          {/* Subtle backdrop glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />

          <div className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neutral-400" />
            04 / Falsafa & Dasturchi Manifesti
          </div>

          <h2 className="font-clash text-2xl sm:text-4xl md:text-5xl font-normal text-white leading-tight tracking-tight mb-8">
            "Men shunchaki kod yozmayman — har bir foydalanuvchi his qiladigan <span className="text-neutral-400">tezkor, qulay va ko'rkam</span> raqamli tajribalarni quramiz."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-400 font-light text-sm sm:text-base leading-relaxed pt-8 border-t border-[#1C1C1C]">
            <p>
              Mening ismim <strong className="text-white font-medium">{PERSONAL_INFO.name}</strong>. Frontend yo'nalishida 1+ yildan ortiq amaliy tajribaga egaman. HTML, CSS, JavaScript va React.js asoslarini mustahkam egallab, zamonaviy Tailwind CSS va REST API texnologiyalari bilan real loyihalar ustida ishlayman.
            </p>
            <p>
              Har bir loyihada dizaynning eng mayda detallariga e'tibor qarataman: mikro-animatsiyalar, tugmalarning reaktivligi, yuklanish tezligi va barcha o'lchamdagi ekranlarga to'liq moslashish men uchun ustuvor vazifadir.
            </p>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#0D0D0D] border border-[#1E1E1E] hover:border-[#333] transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#141414] border border-[#242424] flex items-center justify-center text-white mb-4">
                <Check className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="font-clash text-base font-medium text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
