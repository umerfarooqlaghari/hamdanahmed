"use client";

import { motion } from "framer-motion";
import { useId, useState } from "react";
import { Crosshair, Eye, Layers, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/cn";

export type ArchitectureMode = "funnel" | "creative" | "capi";

interface GrowthEngineSvgProps {
  mode: ArchitectureMode;
  wireframe: boolean;
}

export function GrowthEngineSvg({ mode, wireframe }: GrowthEngineSvgProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-obsidian/85 p-3 sm:p-5">
      {/* Blueprint fine grid */}
      <div aria-hidden className="absolute inset-0 bg-grid-fine opacity-50" />

      {/* Rotating Radar Rings & Sweep */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2 opacity-30">
        <div className="absolute inset-0 rounded-full border border-ping/20" />
        <div className="absolute inset-[20%] rounded-full border border-ping/20" />
        <div className="absolute inset-[40%] rounded-full border border-ping/20" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-ping/20" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-ping/20" />
        <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(56,189,248,0.22)_40deg,transparent_70deg)]" />
      </div>

      {/* HUD Corner Brackets */}
      {["left-2 top-2 border-l border-t", "right-2 top-2 border-r border-t", "left-2 bottom-2 border-l border-b", "right-2 bottom-2 border-r border-b"].map((pos) => (
        <span key={pos} aria-hidden className={cn("absolute h-3 w-3 border-ping/60", pos)} />
      ))}

      {/* Top Left System ID Label */}
      <div className="pointer-events-none absolute left-4 top-3 z-10 font-mono text-[9px] uppercase tracking-[0.22em] text-slate-steel">
        <span className="text-ping font-semibold">
          {mode === "funnel" && "SYS.01 · FULL-FUNNEL BLUEPRINT"}
          {mode === "creative" && "SYS.02 · CREATIVE MATRIX CLUSTER"}
          {mode === "capi" && "SYS.03 · LOSSLESS ATTRIBUTION PIPELINE"}
        </span>
        <p className="text-slate-400">VECTOR GEOMETRY · ACTIVE</p>
      </div>

      {/* Top Right Live Vector Node */}
      <div className="pointer-events-none absolute right-4 top-3 z-10 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-signal">
        <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
        OPTIMAL
      </div>

      {/* Main Vector Architectural Blueprint SVG */}
      <div className="relative h-full w-full">
        <svg
          viewBox="0 0 520 340"
          className="h-full w-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`gradPlate-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0033a0" stopOpacity={wireframe ? "0.08" : "0.35"} />
              <stop offset="50%" stopColor="#0066cc" stopOpacity={wireframe ? "0.05" : "0.25"} />
              <stop offset="100%" stopColor="#00a3e0" stopOpacity={wireframe ? "0.02" : "0.15"} />
            </linearGradient>

            <linearGradient id={`glowLine-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
            </linearGradient>

            <filter id={`glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ============================================================== */}
          {/* TIER 3 (BOTTOM LAYER) — CHECKOUT & CONVERSION BASELINE */}
          {/* ============================================================== */}
          <g transform="translate(0, 40)">
            {/* Isometric Base Plate */}
            <polygon
              points="260,200 440,245 260,290 80,245"
              fill={`url(#gradPlate-${uid})`}
              stroke="#38bdf8"
              strokeWidth={wireframe ? "1" : "1.5"}
              strokeOpacity="0.5"
              strokeDasharray={wireframe ? "3 3" : undefined}
            />

            {/* Depth Edge */}
            <polygon
              points="80,245 260,290 260,300 80,255"
              fill="#060b14"
              stroke="#0066cc"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <polygon
              points="260,290 440,245 440,255 260,300"
              fill="#0a1428"
              stroke="#0066cc"
              strokeWidth="1"
              strokeOpacity="0.4"
            />

            {/* Micro grid lines on base plate */}
            <line x1="170" y1="222" x2="350" y2="267" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.3" />
            <line x1="350" y1="222" x2="170" y2="267" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.3" />

            {/* Conversion Hub Node */}
            <circle cx="260" cy="245" r="8" fill="#0033a0" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="260" cy="245" r="3" fill="#ffffff" />

            {/* Label */}
            <text x="260" y="270" textAnchor="middle" fill="#94a3b8" fontFamily="monospace" fontSize="8" letterSpacing="0.18em">
              CONVERSION ENGINE // PDP CHECKOUT
            </text>
          </g>

          {/* ============================================================== */}
          {/* VERTICAL LASER DATA CONNECTORS */}
          {/* ============================================================== */}
          <g stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.5">
            <line x1="150" y1="140" x2="150" y2="245" />
            <line x1="370" y1="140" x2="370" y2="245" />
            <line x1="260" y1="100" x2="260" y2="245" />
          </g>

          {/* Pulsing data packets travelling downwards */}
          <motion.circle
            cx="260"
            r="3"
            fill="#38bdf8"
            animate={{ cy: [90, 245] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            filter={`url(#glow-${uid})`}
          />
          <motion.circle
            cx="150"
            r="2.5"
            fill="#10b981"
            animate={{ cy: [140, 245] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.6 }}
          />
          <motion.circle
            cx="370"
            r="2.5"
            fill="#38bdf8"
            animate={{ cy: [140, 245] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.1 }}
          />

          {/* ============================================================== */}
          {/* TIER 2 (MID LAYER) — ADVANTAGE+ CBO & DCT SANDBOX */}
          {/* ============================================================== */}
          <g transform="translate(0, -10)">
            <polygon
              points="260,120 410,160 260,200 110,160"
              fill={`url(#gradPlate-${uid})`}
              stroke="#00a3e0"
              strokeWidth={wireframe ? "1" : "1.5"}
              strokeOpacity="0.7"
              strokeDasharray={wireframe ? "2 2" : undefined}
            />

            {/* Depth Edge */}
            <polygon
              points="110,160 260,200 260,207 110,167"
              fill="#060b14"
              stroke="#0066cc"
              strokeWidth="0.8"
              strokeOpacity="0.4"
            />
            <polygon
              points="260,200 410,160 410,167 260,207"
              fill="#0a1428"
              stroke="#0066cc"
              strokeWidth="0.8"
              strokeOpacity="0.4"
            />

            {/* 4 Interactive Node Diamonds on Mid Plate */}
            {[
              { x: 260, y: 140, label: "DCT WINNER", color: "#38bdf8" },
              { x: 190, y: 160, label: "BID CAPS", color: "#10b981" },
              { x: 330, y: 160, label: "RETARGET", color: "#38bdf8" },
              { x: 260, y: 180, label: "CBO SCALER", color: "#00a3e0" },
            ].map((node, i) => (
              <g key={i}>
                <polygon
                  points={`${node.x},${node.y - 7} ${node.x + 8},${node.y} ${node.x},${node.y + 7} ${node.x - 8},${node.y}`}
                  fill="#060b14"
                  stroke={node.color}
                  strokeWidth="1.2"
                />
                <circle cx={node.x} cy={node.y} r="2" fill={node.color} />
              </g>
            ))}

            <text x="260" y="163" textAnchor="middle" fill="#e2e8f0" fontFamily="monospace" fontSize="8.5" fontWeight="bold" letterSpacing="0.14em">
              CBO ALGORITHMIC ENGINE
            </text>
          </g>

          {/* ============================================================== */}
          {/* TIER 1 (TOP LAYER) — AUDIENCE DISCOVERY & CREATIVE CLUSTER */}
          {/* ============================================================== */}
          <g transform="translate(0, -55)">
            <polygon
              points="260,50 370,80 260,110 150,80"
              fill={`url(#gradPlate-${uid})`}
              stroke="#38bdf8"
              strokeWidth="1.5"
              filter={`url(#glow-${uid})`}
            />

            {/* Center Prism Beacon */}
            <polygon
              points="260,35 272,48 260,60 248,48"
              fill="#38bdf8"
              stroke="#ffffff"
              strokeWidth="1"
            />
            <line x1="260" y1="35" x2="260" y2="60" stroke="#ffffff" strokeWidth="1" />

            {/* Concentric Signal Orbit Circles */}
            <ellipse cx="260" cy="80" rx="42" ry="14" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.8" />
            <ellipse cx="260" cy="80" rx="80" ry="24" stroke="#00a3e0" strokeWidth="0.8" strokeOpacity="0.4" />

            {/* Orbiting Satellite Nodes */}
            <circle cx="218" cy="80" r="3" fill="#10b981" />
            <circle cx="302" cy="80" r="3" fill="#38bdf8" />
            <circle cx="260" cy="94" r="3" fill="#ffffff" />
            <circle cx="260" cy="66" r="3" fill="#0066cc" />

            <text x="260" y="83" textAnchor="middle" fill="#ffffff" fontFamily="monospace" fontSize="8" fontWeight="bold" letterSpacing="0.15em">
              AUDIENCE &amp; CREATIVE INGESTION
            </text>
          </g>

          {/* Technical Dimension Callouts & Coordinate Markers */}
          <g fontFamily="monospace" fontSize="7.5" fill="#64748b" letterSpacing="0.12em">
            {/* Left measurement bracket */}
            <path d="M 65,80 L 55,80 L 55,270 L 65,270" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
            <text x="48" y="180" textAnchor="middle" transform="rotate(-90 48,180)">
              FULL FUNNEL // 3 TIERS
            </text>

            {/* Right CAPI status */}
            <path d="M 455,130 L 465,130 L 465,220 L 455,220" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
            <text x="475" y="165" fill="#10b981">
              LOSSLESS CAPI
            </text>
            <text x="475" y="180">
              SERVER API v20
            </text>
            <text x="475" y="195">
              ROAS ATTR: 100%
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Technical Coordinates Bar */}
      <div className="pointer-events-none absolute bottom-3 left-4 right-4 flex items-center justify-between border-t border-white/[0.08] pt-2 font-mono text-[9px] uppercase tracking-wider text-slate-steel">
        <span className="flex items-center gap-1 text-slate-400">
          <Crosshair className="h-3 w-3 text-ping" /> LAT: 24.8607° N · LNG: 67.0011° E
        </span>
        <span className="hidden sm:inline text-slate-400">
          PIPELINE: PROSPECTING → RETARGETING → CHECKOUT
        </span>
        <span className="text-ping font-semibold">100% VECTOR</span>
      </div>
    </div>
  );
}

export function MarketingConsoleContainer() {
  const [mode, setMode] = useState<ArchitectureMode>("funnel");
  const [wireframe, setWireframe] = useState(false);

  return (
    <div className="relative">
      {/* Outer ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgba(0,102,204,0.3),transparent)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-ping/20 bg-midnight/80 shadow-[0_40px_120px_-40px_rgba(0,51,160,0.9)] backdrop-blur-xl">
        {/* Top Header */}
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-ping/30 bg-ping/10 text-ping">
              <Layers className="h-4 w-4" />
            </span>
            <div className="min-w-0 leading-tight">
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-slate-steel">
                Campaign Architecture HUD
              </p>
              <p className="truncate font-display text-sm font-semibold text-white">
                Cell 01 · Growth Architecture Diagram
              </p>
            </div>
          </div>

          {/* Wireframe / Solid Shading Toggle */}
          <button
            onClick={() => setWireframe((v) => !v)}
            aria-label="Toggle wireframe mode"
            className="group flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-steel hover:text-white transition-colors"
          >
            <span className={cn("hidden sm:inline transition-colors", !wireframe && "text-ping")}>Solid</span>
            <span
              className={cn(
                "relative h-5 w-9 rounded-full border transition-colors",
                wireframe ? "border-aero/60 bg-aero/30" : "border-white/15 bg-white/5"
              )}
            >
              <motion.span
                className="absolute top-0.5 h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                animate={{ left: wireframe ? 18 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </span>
            <span className={cn("hidden sm:inline transition-colors", wireframe && "text-ping")}>Wire</span>
          </button>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] px-4 py-2.5 sm:px-6">
          <div role="tablist" className="flex rounded-full border border-white/10 bg-white/[0.03] p-1">
            {[
              { id: "funnel" as const, label: "Funnel Pipeline", icon: Layers },
              { id: "creative" as const, label: "Creative Matrix", icon: Sparkles },
              { id: "capi" as const, label: "CAPI Attribution", icon: Zap },
            ].map((tab) => {
              const active = tab.id === mode;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setMode(tab.id)}
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors sm:px-3.5",
                    active ? "text-white" : "text-slate-steel hover:text-silver"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="arch-tab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-boeing to-aero shadow-[0_0_16px_rgba(0,102,204,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <tab.icon className="relative h-3 w-3" />
                  <span className="relative">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-slate-400">
            <ShieldCheck className="h-3.5 w-3.5 text-signal" />
            Meta Certified System
          </div>
        </div>

        {/* Clean Vector SVG Visualizer */}
        <div className="p-3 sm:p-4">
          <GrowthEngineSvg mode={mode} wireframe={wireframe} />
        </div>

        {/* Concise Descriptive Strip (No cluttered numbers!) */}
        <div className="border-t border-white/[0.06] bg-obsidian/40 px-4 py-3 sm:px-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ping" />
              <div>
                <p className="text-[9px] uppercase tracking-wider text-slate-400">Cold Acquisition</p>
                <p className="text-white text-xs font-semibold">Broad &amp; Lookalike Pods</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:border-x border-white/[0.06] sm:px-3">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              <div>
                <p className="text-[9px] uppercase tracking-wider text-slate-400">Creative Sandboxing</p>
                <p className="text-white text-xs font-semibold">Dynamic Angle Testing</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-aero-bright" />
              <div>
                <p className="text-[9px] uppercase tracking-wider text-slate-400">Conversion Closer</p>
                <p className="text-white text-xs font-semibold">Zero-Friction Shopify PDP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
