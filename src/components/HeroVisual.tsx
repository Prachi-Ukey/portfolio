import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import {
  Terminal,
  Activity,
  Sparkles,
  Code2,
  CheckCircle2,
  Workflow,
} from "lucide-react";

// Crisp brand & technology SVG icons
const TechIcons = {
  React: () => (
    <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="-11.5 -10.23174 23 20.46348">
      <circle cx="0" cy="0" r="2.05" fill="#22d3ee" />
      <g stroke="#22d3ee" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  Python: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
      <path
        fill="#38bdf8"
        d="M11.9 2c-3.1 0-5 1.4-5 3.3v2.3h5.2c1.4 0 2.5 1.1 2.5 2.5v.3h2.3c1.9 0 3.3-1.4 3.3-3.3 0-2.8-2.6-5.1-8.3-5.1zm-2.2 1.9c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
      />
      <path
        fill="#fbbf24"
        d="M12.1 22c3.1 0 5-1.4 5-3.3v-2.3H11.9c-1.4 0-2.5-1.1-2.5-2.5v-.3H7.1C5.2 13.6 3.8 15 3.8 16.9c0 2.8 2.6 5.1 8.3 5.1zm2.2-1.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
      />
    </svg>
  ),
  FastAPI: () => (
    <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L3 13.5h7.5L9 22l11-12.5h-7.5L14 2h-2z" />
    </svg>
  ),
  PostgreSQL: () => (
    <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  ),
  Docker: () => (
    <svg className="w-3.5 h-3.5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.98 11.08h1.94v1.89h-1.94zm-2.73 0h1.94v1.89h-1.94zm-2.73 0h1.94v1.89H8.52zm-2.73 0h1.94v1.89H5.79zm5.46-2.67h1.94V10.3h-1.94zm-2.73 0h1.94V10.3H8.52zm5.46 0h1.94V10.3h-1.94zm-2.73-2.67h1.94V7.63h-1.94z" />
      <path d="M21.94 11.23c-.38-.28-1.19-.36-1.85-.2-.14-.72-.6-1.32-1.28-1.68l-.46-.24-.28.43c-.45.69-.58 1.54-.37 2.34-.33.19-.77.34-1.24.44H2.43c-.24.96.08 2.02.66 2.87 1.25 1.83 3.65 2.87 6.4 2.87 5.15 0 9.5-3.32 10.45-6.05.74-.08 1.48-.41 2-.79" />
    </svg>
  ),
  AIML: () => (
    <svg className="w-3.5 h-3.5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-2 3.46V12a4 4 0 0 0 2 3.46V18a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-2.54A4 4 0 0 0 18 12v-1.54A4 4 0 0 0 16 7V6a4 4 0 0 0-4-4z" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M12 4v2m0 12v2M8 12H6m12 0h-2" />
    </svg>
  ),
};

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 140, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-9, 9]);

  // Layer parallax depths
  const terminalX = useTransform(smoothX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-16, 16]);
  const terminalY = useTransform(smoothY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-14, 14]);

  const telemetryX = useTransform(smoothX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [18, -18]);
  const telemetryY = useTransform(smoothY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [14, -14]);

  const archX = useTransform(smoothX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [12, -12]);
  const archY = useTransform(smoothY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-12, 12]);

  const dsaX = useTransform(smoothX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-12, 12]);
  const dsaY = useTransform(smoothY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [12, -12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || shouldReduceMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Sparkline data generation for telemetry HUD
  const sparklinePoints = "0,35 15,30 30,32 45,20 60,25 75,12 90,18 105,8 120,15 135,5 150,10 165,4 180,9";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[580px] lg:max-w-[620px] mx-auto select-none perspective-[1200px]"
      style={{ perspective: 1200 }}
    >
      {/* Ambient Atmospheric Lighting Behind Visual */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] bg-gradient-to-tr from-violet-600/20 via-fuchsia-600/15 to-cyan-500/15 rounded-full blur-[90px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-cyan-500/15 rounded-full blur-[70px]" />
        <div className="absolute bottom-1/4 left-1/4 w-52 h-52 bg-purple-600/15 rounded-full blur-[80px]" />
      </div>

      {/* 3D Preserved Transformation Canvas */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [-6, 6, -6],
              }
        }
        transition={{
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative w-full aspect-[1/0.95] sm:aspect-square flex items-center justify-center p-2 sm:p-4"
      >
        {/* ========================================================
            DEPTH LAYER 0: HOLOGRAPHIC GEOMETRIC ENGINE & SCANNER
           ======================================================== */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="w-full h-full max-w-[480px] max-h-[480px] opacity-80"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="violetCyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#c084fc" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>

              <linearGradient id="scanBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.45" />
              </linearGradient>

              <radialGradient id="coreAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.6" />
                <stop offset="35%" stopColor="#8b5cf6" stopOpacity="0.3" />
                <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Coordinate Grid Crosshairs */}
            <g stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="3 3">
              <line x1="250" y1="30" x2="250" y2="470" />
              <line x1="30" y1="250" x2="470" y2="250" />
              <line x1="90" y1="90" x2="410" y2="410" />
              <line x1="410" y1="90" x2="90" y2="410" />
            </g>

            {/* Corner Cybernetic Alignment Ticks */}
            <path d="M 80 100 H 60 V 120" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1.5" />
            <path d="M 420 100 H 440 V 120" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1.5" />
            <path d="M 80 400 H 60 V 380" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1.5" />
            <path d="M 420 400 H 440 V 380" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1.5" />

            {/* Outer Gimbal Track with Calibrations */}
            <circle
              cx="250"
              cy="250"
              r="210"
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
            <circle
              cx="250"
              cy="250"
              r="185"
              stroke="rgba(6, 182, 212, 0.25)"
              strokeWidth="1.2"
              strokeDasharray="2 12"
            />

            {/* Rotating Technical Compass Ring */}
            <g
              className={shouldReduceMotion ? "" : "origin-center"}
              style={{
                transformOrigin: "250px 250px",
                animation: shouldReduceMotion ? "none" : "spin 50s linear infinite",
              }}
            >
              <circle
                cx="250"
                cy="250"
                r="160"
                stroke="url(#violetCyanGlow)"
                strokeWidth="1.2"
                strokeDasharray="40 10 15 10 60 10"
                opacity="0.6"
              />
              <circle cx="250" cy="90" r="3" fill="#22d3ee" />
              <circle cx="410" cy="250" r="3" fill="#a855f7" />
              <circle cx="250" cy="410" r="3" fill="#22d3ee" />
              <circle cx="90" cy="250" r="3" fill="#a855f7" />
            </g>

            {/* Counter-Rotating Hexagonal Aperture */}
            <g
              className={shouldReduceMotion ? "" : "origin-center"}
              style={{
                transformOrigin: "250px 250px",
                animation: shouldReduceMotion ? "none" : "spin-reverse 35s linear infinite",
              }}
            >
              {/* Concentric Hexagons */}
              <polygon
                points="250,130 354,190 354,310 250,370 146,310 146,190"
                stroke="rgba(192, 132, 252, 0.35)"
                strokeWidth="1.5"
                fill="none"
              />
              <polygon
                points="250,165 324,208 324,292 250,335 176,292 176,208"
                stroke="rgba(6, 182, 212, 0.3)"
                strokeWidth="1"
                fill="none"
              />
            </g>

            {/* Rotating Holographic Scanning Beam */}
            <g
              className={shouldReduceMotion ? "" : "origin-center"}
              style={{
                transformOrigin: "250px 250px",
                animation: shouldReduceMotion ? "none" : "spin 12s linear infinite",
              }}
            >
              <path
                d="M 250 250 L 400 200 A 160 160 0 0 1 410 250 Z"
                fill="url(#scanBeam)"
                opacity="0.75"
              />
              <line
                x1="250"
                y1="250"
                x2="410"
                y2="250"
                stroke="#22d3ee"
                strokeWidth="1.5"
                strokeOpacity="0.8"
                filter="drop-shadow(0 0 6px #06b6d4)"
              />
            </g>

            {/* Inclined 3D Orbital Ellipse with Traveling Node */}
            <g transform="rotate(-30 250 250)">
              <ellipse
                cx="250"
                cy="250"
                rx="140"
                ry="55"
                stroke="rgba(168, 85, 247, 0.4)"
                strokeWidth="1.2"
                strokeDasharray="6 4"
                fill="none"
              />
              <circle cx="390" cy="250" r="4" fill="#a855f7">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 250 250"
                  to="360 250 250"
                  dur={shouldReduceMotion ? "0s" : "7s"}
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* Second Inclined Orbital Ellipse (Opposite Angle) */}
            <g transform="rotate(35 250 250)">
              <ellipse
                cx="250"
                cy="250"
                rx="130"
                ry="50"
                stroke="rgba(6, 182, 212, 0.35)"
                strokeWidth="1.2"
                strokeDasharray="4 6"
                fill="none"
              />
              <circle cx="120" cy="250" r="3.5" fill="#22d3ee">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 250 250"
                  to="0 250 250"
                  dur={shouldReduceMotion ? "0s" : "9s"}
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* Central Neural Energy Nucleus */}
            <circle cx="250" cy="250" r="60" fill="url(#coreAura)" />
            <circle
              cx="250"
              cy="250"
              r="26"
              fill="#0d091e"
              stroke="#a855f7"
              strokeWidth="2"
              className="drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"
            />
            <circle cx="250" cy="250" r="14" fill="#22d3ee" className="animate-pulse" />
            <circle cx="250" cy="250" r="6" fill="#ffffff" />

            {/* Telemetry Coordinate Markers */}
            <text x="258" y="235" fill="rgba(6, 182, 212, 0.75)" fontSize="9" fontFamily="monospace">
              TENSOR_v4.2
            </text>
            <text x="258" y="247" fill="rgba(192, 132, 252, 0.75)" fontSize="8" fontFamily="monospace">
              INFER_12ms
            </text>
          </svg>
        </div>

        {/* ========================================================
            DEPTH LAYER 1: FLOATING CODE INTELLIGENCE TERMINAL
            Position: Top-Left (Z: 45px)
           ======================================================== */}
        <motion.div
          style={{
            x: terminalX,
            y: terminalY,
            transform: "translateZ(45px)",
          }}
          className="absolute -top-2 sm:top-2 -left-2 sm:-left-3 z-20 w-[240px] sm:w-[280px] rounded-xl bg-[#0b071d]/90 backdrop-blur-xl border border-violet-500/30 p-3 sm:p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.7)] group hover:border-violet-400/50 transition-all duration-300"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08]">
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[10px] font-mono text-gray-300 flex items-center gap-1">
                <Terminal className="w-3 h-3 text-violet-400 inline" />
                ai_pipeline.py
              </span>
            </div>
            <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              Live
            </span>
          </div>

          {/* Syntax-Highlighted Real AI/Full-Stack Code Snippet */}
          <div className="font-mono text-[10.5px] sm:text-[11.5px] leading-[1.45] text-gray-300">
            <div>
              <span className="text-purple-400 font-medium">@app</span>
              <span className="text-gray-400">.</span>
              <span className="text-cyan-400">post</span>
              <span className="text-gray-400">(</span>
              <span className="text-emerald-300">"/infer"</span>
              <span className="text-gray-400">)</span>
            </div>
            <div>
              <span className="text-purple-400">async def </span>
              <span className="text-blue-300">predict</span>
              <span className="text-gray-400">(prompt: </span>
              <span className="text-amber-300">Tensor</span>
              <span className="text-gray-400">):</span>
            </div>
            <div className="pl-3 text-gray-400">
              embeds = <span className="text-cyan-300">await</span> model.
              <span className="text-yellow-200">encode</span>(prompt)
            </div>
            <div className="pl-3">
              <span className="text-purple-400">return </span>
              <span className="text-cyan-300">await</span> engine.
              <span className="text-yellow-200">generate</span>(embeds)
              <span className="inline-block w-1.5 h-3 ml-1 bg-cyan-400 animate-pulse align-middle" />
            </div>
          </div>

          {/* Bottom Execution Telemetry Badge */}
          <div className="mt-2.5 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[9px] font-mono text-gray-400">
            <span className="flex items-center gap-1.5 text-violet-300">
              <Sparkles className="w-2.5 h-2.5 text-violet-400" />
              FastAPI • PyTorch Runtime
            </span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              99.4% acc
            </span>
          </div>
        </motion.div>

        {/* ========================================================
            DEPTH LAYER 2: REAL-TIME SYSTEM TELEMETRY HUD
            Position: Bottom-Right (Z: 40px)
           ======================================================== */}
        <motion.div
          style={{
            x: telemetryX,
            y: telemetryY,
            transform: "translateZ(40px)",
          }}
          className="absolute -bottom-2 sm:bottom-2 -right-2 sm:-right-3 z-20 w-[230px] sm:w-[265px] rounded-xl bg-[#09061a]/92 backdrop-blur-xl border border-cyan-500/30 p-3 sm:p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.7)] group hover:border-cyan-400/50 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="text-[10px] font-mono font-semibold tracking-wider text-cyan-300 uppercase">
                Neural Telemetry
              </span>
            </div>
            <span className="text-[9px] font-mono text-cyan-400/80">14ms latency</span>
          </div>

          {/* Animated Mini Loss / Sparkline Graph */}
          <div className="relative h-10 w-full mb-2 bg-black/40 rounded-lg p-1 border border-white/[0.05] overflow-hidden flex items-end">
            <svg className="w-full h-8 overflow-visible" viewBox="0 0 180 40">
              <defs>
                <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Sparkline Fill */}
              <polygon
                points={`0,40 ${sparklinePoints} 180,40`}
                fill="url(#sparklineGrad)"
              />
              {/* Sparkline Line */}
              <polyline
                points={sparklinePoints}
                fill="none"
                stroke="#22d3ee"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Pulsing End Node */}
              <circle cx="180" cy="9" r="3" fill="#22d3ee" className="animate-ping" />
              <circle cx="180" cy="9" r="2.5" fill="#ffffff" />
            </svg>
          </div>

          {/* System Metric Indicators */}
          <div className="grid grid-cols-2 gap-2 text-[9.5px] font-mono">
            <div className="bg-white/[0.03] rounded p-1.5 border border-white/[0.06]">
              <span className="text-gray-400 block text-[8.5px]">PostgreSQL Pool</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 inline" /> Healthy
              </span>
            </div>
            <div className="bg-white/[0.03] rounded p-1.5 border border-white/[0.06]">
              <span className="text-gray-400 block text-[8.5px]">Throughput</span>
              <span className="text-violet-300 font-semibold">1.4k req/sec</span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            DEPTH LAYER 4: PROBLEM SOLVING & LEETCODE REAL DATA HUD
            Position: Bottom-Left (Z: 35px)
           ======================================================== */}
        <motion.div
          style={{
            x: dsaX,
            y: dsaY,
            transform: "translateZ(35px)",
          }}
          className="absolute bottom-12 sm:bottom-16 left-0 sm:-left-4 z-10 hidden sm:flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#0a071d]/85 backdrop-blur-md border border-amber-500/25 shadow-lg"
        >
          <div className="w-6 h-6 rounded-md bg-amber-500/15 flex items-center justify-center">
            <Code2 className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="font-mono text-left">
            <div className="text-[10px] font-bold text-amber-300">DSA</div>
          </div>
        </motion.div>

        {/* ========================================================
            DEPTH LAYER 5: THE 6 ORBITING TECHNOLOGY BADGES
            (React, Python, FastAPI, PostgreSQL, Docker, AI/ML)
            Position: Circular Constellation Around Core (Z: 50px)
           ======================================================== */}
        {/* 1. React Badge (Top Center) */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [-3, 3, -3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(50px)" }}
          className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 z-30"
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0d0922]/90 backdrop-blur-md border border-cyan-500/30 shadow-[0_4px_16px_rgba(6,182,212,0.15)] hover:border-cyan-400 hover:scale-105 transition-all cursor-default">
            <TechIcons.React />
            <span className="text-[10px] font-mono font-medium text-cyan-300">React</span>
          </div>
        </motion.div>

        {/* 2. Python Badge (Mid-Right) */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [3, -3, 3] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ transform: "translateZ(55px)" }}
          className="absolute top-1/3 -right-3 sm:-right-5 z-30"
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0d0922]/90 backdrop-blur-md border border-sky-500/30 shadow-[0_4px_16px_rgba(56,189,248,0.15)] hover:border-sky-400 hover:scale-105 transition-all cursor-default">
            <TechIcons.Python />
            <span className="text-[10px] font-mono font-medium text-sky-300">Python</span>
          </div>
        </motion.div>

        {/* 3. FastAPI Badge (Mid-Left) */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [-4, 4, -4] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ transform: "translateZ(50px)" }}
          className="absolute top-1/2 -left-3 sm:-left-5 -translate-y-1/2 z-30"
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0d0922]/90 backdrop-blur-md border border-emerald-500/30 shadow-[0_4px_16px_rgba(16,185,129,0.15)] hover:border-emerald-400 hover:scale-105 transition-all cursor-default">
            <TechIcons.FastAPI />
            <span className="text-[10px] font-mono font-medium text-emerald-300">FastAPI</span>
          </div>
        </motion.div>

        {/* 4. PostgreSQL Badge (Bottom Center-Left) */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [3, -3, 3] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          style={{ transform: "translateZ(48px)" }}
          className="absolute -bottom-1 sm:bottom-3 left-1/4 -translate-x-1/2 z-30"
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0d0922]/90 backdrop-blur-md border border-blue-500/30 shadow-[0_4px_16px_rgba(59,130,246,0.15)] hover:border-blue-400 hover:scale-105 transition-all cursor-default">
            <TechIcons.PostgreSQL />
            <span className="text-[10px] font-mono font-medium text-blue-300">PostgreSQL</span>
          </div>
        </motion.div>

        {/* 5. Docker Badge (Center-Right Lower) */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [-3, 3, -3] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ transform: "translateZ(52px)" }}
          className="absolute top-2/3 -right-2 sm:-right-4 z-30"
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0d0922]/90 backdrop-blur-md border border-sky-400/30 shadow-[0_4px_16px_rgba(14,165,233,0.15)] hover:border-sky-300 hover:scale-105 transition-all cursor-default">
            <TechIcons.Docker />
            <span className="text-[10px] font-mono font-medium text-sky-200">Docker</span>
          </div>
        </motion.div>

        {/* 6. AI/ML Badge (Top Center-Right) */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [4, -4, 4] }}
          transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          style={{ transform: "translateZ(55px)" }}
          className="absolute top-8 sm:top-10 right-10 sm:right-14 z-30"
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0d0922]/90 backdrop-blur-md border border-purple-500/30 shadow-[0_4px_16px_rgba(168,85,247,0.2)] hover:border-purple-400 hover:scale-105 transition-all cursor-default">
            <TechIcons.AIML />
            <span className="text-[10px] font-mono font-medium text-purple-300">AI / ML</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroVisual;
