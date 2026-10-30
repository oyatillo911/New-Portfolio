import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import About from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEDED] font-sans selection:bg-white selection:text-black">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Stats & Key Metrics (1+ yil, 20+ GitHub, 10+ Vercel Deploy) */}
        <Stats />

        {/* Tech Stack & Skills (Endless Marquee & Interactive Grid) */}
        <TechStack />

        {/* Featured Projects (Top 4 Projects with Repo & Live Demo) */}
        <Projects />

        {/* About & Manifesto */}
        <About />

        {/* How We Work / Process (01 Discovery -> 04 Launch) */}
        <Process />

        {/* Contact & Interaction (Telegram, Email, Form) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
