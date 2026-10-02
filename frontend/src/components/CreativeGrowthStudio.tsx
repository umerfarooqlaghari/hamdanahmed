"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useId, useState } from "react";
import { 
  Palette, 
  TrendingUp, 
  Sparkles, 
  Layers, 
  Zap, 
  Target, 
  ArrowUpRight, 
  Sliders, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/cn";

export type StudioMode = "synergy" | "creative" | "performance";

export function CreativeGrowthStudio() {
  const [mode, setMode] = useState<StudioMode>("synergy");
  const uid = useId().replace(/:/g, "");

  return (
    <div className="relative w-full">
      {/* Exquisite ambient multi-layered glow behind the studio container */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.22),transparent_65%),radial-gradient(ellipse_at_bottom_left,rgba(0,102,204,0.35),transparent_70%)] blur-2xl"
      />

      {/* Main Glassmorphic Studio Panel */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.12] bg-gradient-to-b from-[#0c1832]/90 via-[#070e1e]/95 to-obsidian shadow-[0_30px_90px_-20px_rgba(0,51,160,0.55),inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-2xl">
        
        {/* Subtle top specular highlight border line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ping/50 to-transparent" />

        {/* Top Studio Control Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-ping/30 bg-ping/10 text-ping shadow-[0_0_15px_rgba(56,189,248,0.35)]">
              <Palette className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-ping font-semibold">
                  Creative Direction &amp; Growth Studio
                </p>
                <span className="inline-flex items-center gap-1 rounded-full bg-signal/15 px-1.5 py-0.5 font-mono text-[8px] font-medium text-signal">
                  <span className="h-1 w-1 rounded-full bg-signal animate-pulse" />
                  Active
                </span>
              </div>
              <p className="font-display text-sm font-semibold tracking-tight text-white">
                The Designer &amp; Marketer Synergy
              </p>
            </div>
          </div>

          {/* Interactive Mode Pills */}
          <div className="flex rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-md">
            {[
              { id: "synergy" as const, label: "Unified Flow", icon: Sparkles },
              { id: "creative" as const, label: "Design Direction", icon: Palette },
              { id: "performance" as const, label: "ROAS Engine", icon: TrendingUp },
            ].map((tab) => {
              const active = tab.id === mode;
              return (
                <button
                  key={tab.id}
                  onClick={() => setMode(tab.id)}
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-all duration-300 sm:px-3.5",
                    active ? "text-white font-semibold" : "text-slate-400 hover:text-white"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="studio-tab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-boeing to-aero shadow-[0_0_18px_rgba(56,189,248,0.5)]"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  <tab.icon className="relative h-3 w-3" />
                  <span className="relative">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

          {/* Main Visual SVG Canvas */}
          <div className="relative aspect-[16/10.5] w-full overflow-hidden p-3 sm:p-5">
            {/* Fine background grid with soft radial mask */}
            <div aria-hidden className="absolute inset-0 bg-grid-fine opacity-30" />
            <div 
              aria-hidden 
              className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-ping/10 blur-[80px]" 
            />
            <div 
              aria-hidden 
              className="pointer-events-none absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-boeing/20 blur-[80px]" 
            />

            <AnimatePresence mode="wait">
              {mode === "synergy" && (
                <motion.div
                  key="synergy"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative h-full w-full"
                >
                  <svg
                    viewBox="0 0 540 330"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full select-none"
                  >
                    <defs>
                      <linearGradient id={`gradCard-${uid}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#1e293b" stopOpacity="0.75" />
                        <stop offset="100%" stopColor="#0f172a" stopOpacity="0.85" />
                      </linearGradient>

                      <linearGradient id={`flowGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#818cf8" stopOpacity="1" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
                      </linearGradient>

                      <linearGradient id={`chartFill-${uid}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                        <stop offset="60%" stopColor="#0066cc" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#060b14" stopOpacity="0" />
                      </linearGradient>

                      <filter id={`softGlow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* ============================================================== */}
                    {/* LEFT CLUSTER: DIRECT-RESPONSE DESIGN ARTBOARD (THE DESIGNER)   */}
                    {/* ============================================================== */}
                    <g transform="translate(18, 24)">
                      {/* Outer Artboard Frame with Figma-style handles */}
                      <rect
                        x="0"
                        y="0"
                        width="190"
                        height="250"
                        rx="16"
                        fill={`url(#gradCard-${uid})`}
                        stroke="#38bdf8"
                        strokeWidth="1.2"
                        strokeOpacity="0.35"
                      />

                      {/* Header bar of the design canvas */}
                      <rect x="0" y="0" width="190" height="28" rx="16" fill="#0f172a" fillOpacity="0.6" />
                      {/* Window dots */}
                      <circle cx="14" cy="14" r="3" fill="#ef4444" fillOpacity="0.7" />
                      <circle cx="24" cy="14" r="3" fill="#f59e0b" fillOpacity="0.7" />
                      <circle cx="34" cy="14" r="3" fill="#10b981" fillOpacity="0.7" />
                      <text x="50" y="17" fill="#94a3b8" fontSize="8" fontFamily="var(--font-jetbrains)" letterSpacing="0.15em">
                        FIGMA · AD REEL #04
                      </text>

                      {/* Designer corner tick markers */}
                      <rect x="-3" y="-3" width="6" height="6" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" />
                      <rect x="187" y="-3" width="6" height="6" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" />
                      <rect x="-3" y="247" width="6" height="6" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" />
                      <rect x="187" y="247" width="6" height="6" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" />

                      {/* Creative Visual Asset Mockup inside Canvas */}
                      <g transform="translate(14, 38)">
                        {/* Hero Image Container */}
                        <rect x="0" y="0" width="162" height="110" rx="10" fill="#0b1329" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.2" />
                        
                        {/* High-aesthetic abstract product/brand artwork */}
                        <path
                          d="M 15,85 C 40,40 70,95 105,50 C 130,20 150,70 155,85 Z"
                          fill="url(#chartFill)"
                          opacity="0.7"
                        />
                        <circle cx="115" cy="40" r="18" fill="#38bdf8" fillOpacity="0.15" />
                        <circle cx="115" cy="40" r="8" fill="#38bdf8" fillOpacity="0.4" />

                        {/* Top Badge: 0.3s Thumbstop Hook */}
                        <rect x="8" y="8" width="86" height="16" rx="8" fill="#0033a0" fillOpacity="0.8" stroke="#38bdf8" strokeWidth="0.8" />
                        <text x="16" y="19" fill="#e0f2fe" fontSize="7" fontWeight="600" fontFamily="var(--font-jetbrains)">
                          ★ 0.3s HOOK ANGLE
                        </text>

                        {/* Editorial Typography overlay */}
                        <text x="10" y="86" fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="var(--font-grotesk)" letterSpacing="-0.02em">
                          SCALED MINIMALISM
                        </text>
                        <text x="10" y="97" fill="#94a3b8" fontSize="7" fontFamily="var(--font-jetbrains)">
                          Direct-Response Editorial Drop
                        </text>
                      </g>

                      {/* Design System Details below hero */}
                      <g transform="translate(14, 158)">
                        {/* Color swatches */}
                        <text x="0" y="8" fill="#64748b" fontSize="7" fontFamily="var(--font-jetbrains)" letterSpacing="0.1em">
                          PALETTE HARMONY
                        </text>
                        <circle cx="6" cy="20" r="5" fill="#060b14" stroke="#38bdf8" strokeWidth="0.8" />
                        <circle cx="20" cy="20" r="5" fill="#0033a0" />
                        <circle cx="34" cy="20" r="5" fill="#0066cc" />
                        <circle cx="48" cy="20" r="5" fill="#38bdf8" />
                        <circle cx="62" cy="20" r="5" fill="#f8fafc" />

                        {/* Creative Performance Pill */}
                        <rect x="88" y="10" width="74" height="20" rx="6" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeWidth="0.8" />
                        <text x="94" y="23" fill="#10b981" fontSize="7.5" fontWeight="600" fontFamily="var(--font-jetbrains)">
                          48.2% THUMBSTOP
                        </text>

                        {/* Direct Response CTA button mockup */}
                        <rect x="0" y="38" width="162" height="24" rx="7" fill={`url(#flowGrad-${uid})`} />
                        <text x="32" y="53" fill="#060b14" fontSize="8.5" fontWeight="700" fontFamily="var(--font-grotesk)" letterSpacing="0.04em">
                          CONVERT ON SHOPIFY →
                        </text>
                      </g>
                    </g>

                    {/* ============================================================== */}
                    {/* CENTER: SILKY LUMINOUS BEZIER PIPELINES (THE CONNECTION)       */}
                    {/* ============================================================== */}
                    <g>
                      {/* Flow 1: Top Creative Hook to Algorithmic Ingestion */}
                      <path
                        d="M 208,95 C 255,95 260,115 315,115"
                        stroke={`url(#flowGrad-${uid})`}
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                      {/* Glowing particle on Flow 1 */}
                      <circle cx="260" cy="105" r="3.5" fill="#38bdf8" filter={`url(#softGlow-${uid})`} />

                      {/* Flow 2: Center Design Angle to ROAS Scaling Engine */}
                      <path
                        d="M 208,160 C 265,160 260,175 315,175"
                        stroke="#818cf8"
                        strokeWidth="1.8"
                        strokeOpacity="0.8"
                      />
                      <circle cx="262" cy="168" r="3.5" fill="#818cf8" filter={`url(#softGlow-${uid})`} />

                      {/* Flow 3: Conversion CTA to Purchase Lift */}
                      <path
                        d="M 208,225 C 255,225 265,245 315,245"
                        stroke="#10b981"
                        strokeWidth="1.8"
                        strokeDasharray="3 3"
                        strokeOpacity="0.75"
                      />
                      <circle cx="260" cy="235" r="3.5" fill="#10b981" filter={`url(#softGlow-${uid})`} />

                      {/* Center floating synergy badge */}
                      <g transform="translate(225, 128)">
                        <rect
                          x="0"
                          y="0"
                          width="74"
                          height="26"
                          rx="13"
                          fill="#091326"
                          stroke="#38bdf8"
                          strokeWidth="1"
                          filter={`url(#softGlow-${uid})`}
                        />
                        <text x="14" y="16" fill="#38bdf8" fontSize="8" fontWeight="600" fontFamily="var(--font-jetbrains)">
                          CBO SCALE
                        </text>
                      </g>
                    </g>

                    {/* ============================================================== */}
                    {/* RIGHT CLUSTER: PERFORMANCE MARKETING ROAS ACCELERATOR (MARKETER)*/}
                    {/* ============================================================== */}
                    <g transform="translate(315, 24)">
                      {/* Outer Glass Card */}
                      <rect
                        x="0"
                        y="0"
                        width="205"
                        height="250"
                        rx="16"
                        fill={`url(#gradCard-${uid})`}
                        stroke="#38bdf8"
                        strokeWidth="1.2"
                        strokeOpacity="0.35"
                      />

                      {/* Header */}
                      <rect x="0" y="0" width="205" height="28" rx="16" fill="#0f172a" fillOpacity="0.6" />
                      <circle cx="16" cy="14" r="3.5" fill="#10b981" />
                      <text x="26" y="17" fill="#ffffff" fontSize="8.5" fontWeight="600" fontFamily="var(--font-jetbrains)" letterSpacing="0.08em">
                        META ADVANTAGE+ ENGINE
                      </text>

                      {/* ROAS Metric Highlight */}
                      <g transform="translate(14, 38)">
                        <text x="0" y="10" fill="#94a3b8" fontSize="7.5" fontFamily="var(--font-jetbrains)" letterSpacing="0.12em">
                          BLENDED RETURN ON AD SPEND
                        </text>
                        <text x="0" y="32" fill="#ffffff" fontSize="24" fontWeight="700" fontFamily="var(--font-grotesk)" letterSpacing="-0.03em">
                          5.42<tspan fill="#38bdf8" fontSize="16">x</tspan>
                        </text>

                        {/* Trending Pill */}
                        <rect x="88" y="16" width="60" height="18" rx="9" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="0.8" />
                        <text x="96" y="28" fill="#10b981" fontSize="8" fontWeight="600" fontFamily="var(--font-jetbrains)">
                          ▲ +184%
                        </text>
                      </g>

                      {/* Smooth Vector Area Graph (ROAS Ascent) */}
                      <g transform="translate(14, 86)">
                        {/* Graph Baseline & Gridlines */}
                        <line x1="0" y1="0" x2="175" y2="0" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.4" />
                        <line x1="0" y1="35" x2="175" y2="35" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.4" />
                        <line x1="0" y1="70" x2="175" y2="70" stroke="#334155" strokeWidth="0.8" strokeOpacity="0.6" />

                        {/* Area Fill */}
                        <path
                          d="M 0,65 C 35,60 65,50 95,30 C 130,12 155,8 175,2 L 175,70 L 0,70 Z"
                          fill={`url(#chartFill-${uid})`}
                        />

                        {/* Smooth Glowing ROAS Line */}
                        <path
                          d="M 0,65 C 35,60 65,50 95,30 C 130,12 155,8 175,2"
                          stroke="#38bdf8"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          filter={`url(#softGlow-${uid})`}
                        />

                        {/* Milestone Pins */}
                        {/* Point 1: Baseline */}
                        <circle cx="0" cy="65" r="3" fill="#64748b" stroke="#ffffff" strokeWidth="1" />
                        <text x="5" y="62" fill="#64748b" fontSize="6.5" fontFamily="var(--font-jetbrains)">1.8x</text>

                        {/* Point 2: Creative Testing Winner */}
                        <circle cx="95" cy="30" r="3.5" fill="#0066cc" stroke="#38bdf8" strokeWidth="1.2" />
                        <text x="82" y="22" fill="#93c5fd" fontSize="6.5" fontWeight="600" fontFamily="var(--font-jetbrains)">Angle Winner</text>

                        {/* Point 3: Peak Scaled ROAS */}
                        <circle cx="175" cy="2" r="4.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
                        <circle cx="175" cy="2" r="8" fill="#38bdf8" fillOpacity="0.3" />
                        <text x="145" y="-5" fill="#38bdf8" fontSize="8" fontWeight="700" fontFamily="var(--font-jetbrains)">5.4x</text>
                      </g>

                      {/* Real-Time Scaled Funnel Stats */}
                      <g transform="translate(14, 185)">
                        <rect x="0" y="0" width="177" height="48" rx="8" fill="#060b14" fillOpacity="0.8" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.25" />
                        
                        <g transform="translate(10, 10)">
                          <text x="0" y="10" fill="#64748b" fontSize="6.5" fontFamily="var(--font-jetbrains)">CLICK-THROUGH (CTR)</text>
                          <text x="0" y="24" fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="var(--font-grotesk)">3.84%</text>
                        </g>

                        <line x1="88" y1="8" x2="88" y2="40" stroke="#1e293b" strokeWidth="1" />

                        <g transform="translate(98, 10)">
                          <text x="0" y="10" fill="#64748b" fontSize="6.5" fontFamily="var(--font-jetbrains)">CONVERSION (CVR)</text>
                          <text x="0" y="24" fill="#10b981" fontSize="11" fontWeight="700" fontFamily="var(--font-grotesk)">4.72%</text>
                        </g>
                      </g>
                    </g>

                    {/* Bottom Status Ticker */}
                    <g transform="translate(20, 295)">
                      <text x="0" y="10" fill="#64748b" fontSize="7.5" fontFamily="var(--font-jetbrains)" letterSpacing="0.12em">
                        FIGMA CREATIVE HOOK → META ADVANTAGE+ CBO → SHOPIFY PDP
                      </text>
                      <text x="445" y="10" fill="#38bdf8" fontSize="7.5" fontWeight="600" fontFamily="var(--font-jetbrains)">
                        ● 100% VECTOR
                      </text>
                    </g>
                  </svg>
                </motion.div>
              )}

              {mode === "creative" && (
                <motion.div
                  key="creative"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative h-full w-full"
                >
                  <svg
                    viewBox="0 0 540 330"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full select-none"
                  >
                    <defs>
                      <linearGradient id={`artCard-${uid}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#1e293b" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#0b1329" stopOpacity="0.95" />
                      </linearGradient>
                    </defs>

                    {/* Creative Artboard 1: 9:16 Vertical Reel Ad */}
                    <g transform="translate(25, 20)">
                      <rect x="0" y="0" width="145" height="255" rx="14" fill={`url(#artCard-${uid})`} stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.4" />
                      {/* Notch & Header */}
                      <rect x="52" y="6" width="40" height="4" rx="2" fill="#334155" />
                      <rect x="10" y="16" width="60" height="14" rx="7" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="0.8" />
                      <text x="16" y="26" fill="#fca5a5" fontSize="6.5" fontWeight="600" fontFamily="var(--font-jetbrains)">
                        ● HOOK 0.3s
                      </text>

                      {/* Visual Artwork */}
                      <rect x="10" y="36" width="125" height="145" rx="8" fill="#081024" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.2" />
                      <circle cx="72" cy="95" r="32" fill="#0066cc" fillOpacity="0.25" />
                      <circle cx="72" cy="95" r="16" fill="#38bdf8" fillOpacity="0.5" />
                      <text x="20" y="145" fill="#ffffff" fontSize="10" fontWeight="700" fontFamily="var(--font-grotesk)">
                        FOUNDER STORY
                      </text>
                      <text x="20" y="156" fill="#94a3b8" fontSize="6.5" fontFamily="var(--font-jetbrains)">
                        Angle A · Problem/Solution
                      </text>

                      {/* Performance metric tag */}
                      <rect x="10" y="190" width="125" height="26" rx="6" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="0.8" />
                      <text x="18" y="206" fill="#10b981" fontSize="8" fontWeight="600" fontFamily="var(--font-jetbrains)">
                        ROAS: 4.8x · CTR: 3.9%
                      </text>

                      <rect x="10" y="222" width="125" height="22" rx="6" fill="#38bdf8" />
                      <text x="35" y="236" fill="#060b14" fontSize="7.5" fontWeight="700" fontFamily="var(--font-grotesk)">
                        SHOP NOW →
                      </text>
                    </g>

                    {/* Creative Artboard 2: 1:1 Static Feed Asset */}
                    <g transform="translate(195, 20)">
                      <rect x="0" y="0" width="165" height="165" rx="14" fill={`url(#artCard-${uid})`} stroke="#818cf8" strokeWidth="1.2" strokeOpacity="0.4" />
                      <rect x="12" y="14" width="70" height="14" rx="7" fill="#818cf8" fillOpacity="0.2" stroke="#818cf8" strokeWidth="0.8" />
                      <text x="18" y="24" fill="#c7d2fe" fontSize="6.5" fontWeight="600" fontFamily="var(--font-jetbrains)">
                        ◆ SOCIAL PROOF
                      </text>
                      
                      {/* Editorial Typography showcase */}
                      <text x="14" y="65" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="var(--font-grotesk)" letterSpacing="-0.02em">
                        &quot;5X FASTER RESULTS.&quot;
                      </text>
                      <text x="14" y="82" fill="#94a3b8" fontSize="7.5" fontFamily="var(--font-jetbrains)">
                        Verified Review Campaign · Angle B
                      </text>

                      {/* Star Rating SVG */}
                      <g transform="translate(14, 98)">
                        {[0, 14, 28, 42, 56].map((offset) => (
                          <polygon
                            key={offset}
                            points="5,0 6.5,3.5 10,4 7.5,6.5 8,10 5,8 2,10 2.5,6.5 0,4 3.5,3.5"
                            transform={`translate(${offset}, 0)`}
                            fill="#f59e0b"
                          />
                        ))}
                      </g>

                      {/* Metric tag */}
                      <rect x="12" y="125" width="141" height="24" rx="6" fill="#0f172a" stroke="#818cf8" strokeWidth="0.8" strokeOpacity="0.4" />
                      <text x="20" y="140" fill="#c7d2fe" fontSize="8" fontWeight="600" fontFamily="var(--font-jetbrains)">
                        RETENTION: 54% @ 3 SEC
                      </text>

                      {/* Sub-card: Dynamic Color & Type token palette */}
                      <g transform="translate(0, 180)">
                        <rect x="0" y="0" width="165" height="95" rx="12" fill="#0f172a" fillOpacity="0.7" stroke="#334155" strokeWidth="0.8" />
                        <text x="14" y="20" fill="#94a3b8" fontSize="7.5" fontFamily="var(--font-jetbrains)" letterSpacing="0.1em">
                          DESIGN SYSTEM TOKENS
                        </text>
                        <text x="14" y="42" fill="#ffffff" fontSize="11" fontWeight="600" fontFamily="var(--font-grotesk)">
                          Space Grotesk + Inter
                        </text>
                        <text x="14" y="58" fill="#64748b" fontSize="7" fontFamily="var(--font-jetbrains)">
                          High Contrast · Direct-Response
                        </text>
                        <circle cx="20" cy="76" r="6" fill="#0033a0" />
                        <circle cx="38" cy="76" r="6" fill="#0066cc" />
                        <circle cx="56" cy="76" r="6" fill="#38bdf8" />
                        <circle cx="74" cy="76" r="6" fill="#10b981" />
                        <circle cx="92" cy="76" r="6" fill="#f8fafc" />
                      </g>
                    </g>

                    {/* Creative Artboard 3: High-Converting Carousel / Story */}
                    <g transform="translate(385, 20)">
                      <rect x="0" y="0" width="130" height="255" rx="14" fill={`url(#artCard-${uid})`} stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.4" />
                      <rect x="10" y="14" width="75" height="14" rx="7" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="0.8" />
                      <text x="16" y="24" fill="#a7f3d0" fontSize="6.5" fontWeight="600" fontFamily="var(--font-jetbrains)">
                        ★ CAROUSEL #02
                      </text>

                      {/* Slide Preview */}
                      <rect x="10" y="38" width="110" height="90" rx="8" fill="#081024" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.25" />
                      <text x="20" y="70" fill="#38bdf8" fontSize="16" fontWeight="700" fontFamily="var(--font-grotesk)">
                        01 / 05
                      </text>
                      <text x="20" y="85" fill="#94a3b8" fontSize="7" fontFamily="var(--font-jetbrains)">
                        Swipe Retention: 72%
                      </text>

                      {/* Hook Angle Testing Matrix */}
                      <g transform="translate(10, 140)">
                        <rect x="0" y="0" width="110" height="42" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
                        <text x="8" y="15" fill="#64748b" fontSize="6.5" fontFamily="var(--font-jetbrains)">CREATIVE LIFT</text>
                        <text x="8" y="32" fill="#10b981" fontSize="12" fontWeight="700" fontFamily="var(--font-grotesk)">+210%</text>
                      </g>

                      <rect x="10" y="195" width="110" height="48" rx="8" fill="#091326" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.3" />
                      <text x="18" y="215" fill="#ffffff" fontSize="7.5" fontWeight="600" fontFamily="var(--font-jetbrains)">
                        Dynamic Creative
                      </text>
                      <text x="18" y="230" fill="#38bdf8" fontSize="7" fontFamily="var(--font-jetbrains)">
                        Multi-Format Delivery
                      </text>
                    </g>

                    <g transform="translate(25, 295)">
                      <text x="0" y="10" fill="#64748b" fontSize="7.5" fontFamily="var(--font-jetbrains)" letterSpacing="0.18em">
                        DIRECT-RESPONSE DESIGN: PSYCHOLOGICAL HOOKS · HIGH-CONVERTING LAYOUTS · LUXURY AESTHETIC
                      </text>
                    </g>
                  </svg>
                </motion.div>
              )}

              {mode === "performance" && (
                <motion.div
                  key="performance"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative h-full w-full"
                >
                  <svg
                    viewBox="0 0 540 330"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full select-none"
                  >
                    <defs>
                      <linearGradient id={`perfArea-${uid}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                        <stop offset="60%" stopColor="#0066cc" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#060b14" stopOpacity="0" />
                      </linearGradient>
                      <filter id={`perfGlow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Top Stats Cards Banner */}
                    <g transform="translate(20, 20)">
                      {/* Stat 1 */}
                      <rect x="0" y="0" width="155" height="62" rx="10" fill="#0f172a" fillOpacity="0.8" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.3" />
                      <text x="14" y="20" fill="#94a3b8" fontSize="7.5" fontFamily="var(--font-jetbrains)" letterSpacing="0.1em">OVERALL BLENDED ROAS</text>
                      <text x="14" y="46" fill="#ffffff" fontSize="20" fontWeight="700" fontFamily="var(--font-grotesk)">5.42x</text>
                      <text x="80" y="44" fill="#10b981" fontSize="9" fontWeight="600" fontFamily="var(--font-jetbrains)">+184% YoY</text>

                      {/* Stat 2 */}
                      <rect x="172" y="0" width="155" height="62" rx="10" fill="#0f172a" fillOpacity="0.8" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.3" />
                      <text x="186" y="20" fill="#94a3b8" fontSize="7.5" fontFamily="var(--font-jetbrains)" letterSpacing="0.1em">AVERAGE ORDER VALUE</text>
                      <text x="186" y="46" fill="#ffffff" fontSize="20" fontWeight="700" fontFamily="var(--font-grotesk)">$142.50</text>
                      <text x="272" y="44" fill="#38bdf8" fontSize="9" fontWeight="600" fontFamily="var(--font-jetbrains)">+38%</text>

                      {/* Stat 3 */}
                      <rect x="344" y="0" width="155" height="62" rx="10" fill="#0f172a" fillOpacity="0.8" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
                      <text x="358" y="20" fill="#94a3b8" fontSize="7.5" fontFamily="var(--font-jetbrains)" letterSpacing="0.1em">CAPI ATTRIBUTION MATCH</text>
                      <text x="358" y="46" fill="#10b981" fontSize="20" fontWeight="700" fontFamily="var(--font-grotesk)">9.4 / 10</text>
                      <text x="444" y="44" fill="#a7f3d0" fontSize="8" fontFamily="var(--font-jetbrains)">EXCELLENT</text>
                    </g>

                    {/* Main Performance Trajectory Chart */}
                    <g transform="translate(20, 100)">
                      <rect x="0" y="0" width="500" height="175" rx="12" fill="#091326" fillOpacity="0.75" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.2" />

                      {/* Horizontal Gridlines */}
                      {[30, 65, 100, 135].map((y) => (
                        <line key={y} x1="15" y1={y} x2="485" y2={y} stroke="#334155" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.3" />
                      ))}

                      {/* Performance Curve Area Fill */}
                      <path
                        d="M 20,135 C 100,130 180,110 260,75 C 340,42 420,25 480,18 L 480,150 L 20,150 Z"
                        fill={`url(#perfArea-${uid})`}
                      />

                      {/* Glowing Trajectory Curve */}
                      <path
                        d="M 20,135 C 100,130 180,110 260,75 C 340,42 420,25 480,18"
                        stroke="#10b981"
                        strokeWidth="3"
                        strokeLinecap="round"
                        filter={`url(#perfGlow-${uid})`}
                      />

                      {/* Key Scaled Milestones */}
                      <circle cx="20" cy="135" r="4" fill="#64748b" stroke="#ffffff" strokeWidth="1.5" />
                      <text x="25" y="130" fill="#94a3b8" fontSize="8" fontFamily="var(--font-jetbrains)">$10k/mo (1.9x ROAS)</text>

                      <circle cx="260" cy="75" r="5" fill="#0066cc" stroke="#38bdf8" strokeWidth="2" />
                      <text x="210" y="60" fill="#93c5fd" fontSize="8.5" fontWeight="600" fontFamily="var(--font-jetbrains)">
                        Dynamic Sandbox Winner ($50k/mo)
                      </text>

                      <circle cx="480" cy="18" r="6" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                      <circle cx="480" cy="18" r="10" fill="#10b981" fillOpacity="0.3" />
                      <text x="380" y="32" fill="#10b981" fontSize="10" fontWeight="700" fontFamily="var(--font-grotesk)">
                        $250k/mo @ 5.4x ROAS
                      </text>
                    </g>

                    <g transform="translate(25, 295)">
                      <text x="0" y="10" fill="#64748b" fontSize="7.5" fontFamily="var(--font-jetbrains)" letterSpacing="0.18em">
                        ALGORITHMIC MEDIA BUYING: META ADVANTAGE+ CBO · TIKTOK SHOP · LOSSLESS SERVER-SIDE CAPI
                      </text>
                    </g>
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        {/* Refined Bottom Insight Strip (3 pillars of Marketing & Design) */}
        <div className="border-t border-white/[0.08] bg-obsidian/70 px-4 py-3.5 sm:px-6 backdrop-blur-md">
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 font-mono text-xs">
            <div className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ping shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-ping font-semibold">
                  01 / Creative Art Direction
                </p>
                <p className="font-sans text-xs font-medium text-silver">
                  Figma design systems, 0.3s visual hooks &amp; direct-response layouts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 sm:border-x border-white/[0.08] sm:px-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-signal shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-signal font-semibold">
                  02 / Media Buying Architecture
                </p>
                <p className="font-sans text-xs font-medium text-silver">
                  Meta Advantage+ CBO, dynamic testing pods &amp; lossless CAPI.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#818cf8] shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-[#818cf8] font-semibold">
                  03 / Full-Funnel CRO
                </p>
                <p className="font-sans text-xs font-medium text-silver">
                  High-converting Shopify custom PDPs with zero-friction checkout.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CreativeGrowthStudio;
