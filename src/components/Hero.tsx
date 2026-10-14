
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Sparkles,
  Terminal,
  Code2,
} from "lucide-react";
import { portfolioData } from "../data/portfolio";
import HeroVisual from "./HeroVisual";
import HeroBackground from "./HeroBackground";

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 lg:py-24 overflow-hidden"
    >
      <HeroBackground />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Introduction */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Availability Indicator */}
            <motion.div variants={itemVariants} className="mb-5 sm:mb-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.12)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-emerald-300 tracking-wide">
                  Open to Full-Time Opportunities
                </span>
              </div>
            </motion.div>

            {/* Name and Role */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-mono tracking-widest text-violet-400 uppercase font-semibold">
                <Terminal className="w-3.5 h-3.5 text-violet-400" />
                <span>{portfolioData.personal.name}</span>
                <span className="text-white/20">•</span>
                <span className="text-gray-400 normal-case font-sans tracking-normal font-medium">
                  Software Developer | Full-Stack Developer | AI/ML Enthusiast
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] font-extrabold text-white tracking-tight leading-[1.12] sm:leading-[1.1] mb-6 max-w-2xl"
            >
              Engineering Ideas
              <br />
              <span className="relative inline-block mt-1 sm:mt-2">
                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                  Into Intelligent Software.
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500/40 via-cyan-400/40 to-transparent blur-[1px]" />
              </span>
            </motion.h1>

            {/* Supporting Statement */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300/90 leading-relaxed max-w-xl mb-8 font-normal"
            >
              Computer Engineering graduate building full-stack applications,
              intelligent AI-powered systems, and data-driven solutions.
            </motion.p>

            {/* Technical Highlights */}
            <motion.div
              variants={itemVariants}
              className="w-full flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-8"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-xs font-mono text-violet-200">
                <Code2 className="w-3.5 h-3.5 text-violet-400" />
                <span>Full-Stack Engineering</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-xs font-mono text-cyan-200">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI &amp; Deep Learning</span>
              </div>
            </motion.div>

            {/* Buttons and Social Links */}
            <motion.div
              variants={itemVariants}
              className="w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 shadow-[0_0_28px_rgba(124,58,237,0.35)] hover:shadow-[0_0_36px_rgba(124,58,237,0.55)] transition-all duration-300 flex items-center justify-center space-x-2.5 overflow-hidden active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="text-sm sm:text-base">Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-gray-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-violet-400/40 hover:text-white transition-all duration-300 backdrop-blur-md flex items-center justify-center space-x-2 active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-violet-400" />
                <span className="text-sm sm:text-base">Let's Connect</span>
              </button>

              {/* GitHub and LinkedIn */}
              <div className="flex items-center gap-2.5 pt-2 sm:pt-0">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-11 h-11 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 hover:border-violet-400/50 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 shadow-lg group"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 hover:border-blue-400/50 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 shadow-lg group"
                >
                  <svg
                    className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 w-full flex justify-center items-center relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
