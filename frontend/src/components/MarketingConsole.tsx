"use client";

import { motion } from "framer-motion";
import { Activity, BarChart3, Layers, Sparkles, TrendingUp, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { PulseDot } from "@/components/ui/PulseDot";
import { cn } from "@/lib/cn";

type ConsoleMode = "meta" | "creative" | "scaling";

const TABS: { id: ConsoleMode; label: string; icon: typeof BarChart3 }[] = [
  { id: "meta", label: "Meta CBO", icon: TrendingUp },
  { id: "creative", label: "Creative Lab", icon: Sparkles },
  { id: "scaling", label: "Scale Engine", icon: Zap },
];

interface MetricItem {
  label: string;
  value: string;
  change?: string;
  status?: "live" | "optimal" | "scaled";
}

function metricsFor(mode: ConsoleMode, t: number): MetricItem[] {
  const sin = (k: number, amp: number) => Math.sin(t * k) * amp;
  if (mode === "meta") {
    return [
      { label: "Blended ROAS", value: (4.95 + sin(0.3, 0.12)).toFixed(2) + "x", status: "optimal" },
      { label: "CBO Daily Budget", value: "PKR " + Math.round(28500 + sin(0.2, 800)).toLocaleString(), status: "live" },
      { label: "Avg Click-Through", value: (3.84 + sin(0.4, 0.18)).toFixed(2) + "%", status: "scaled" },
      { label: "Cost Per Acquisition", value: "PKR " + Math.round(1120 + sin(0.25, 45)), status: "live" },
    ];
  }
  if (mode === "creative") {
    return [
      { label: "Hook Rate (3s)", value: (44.6 + sin(0.35, 1.2)).toFixed(1) + "%", status: "optimal" },
      { label: "Hold Rate (15s)", value: (22.8 + sin(0.28, 0.9)).toFixed(1) + "%", status: "live" },
      { label: "Ad Variations Live", value: "16 formats", status: "scaled" },
      { label: "Creative Fatigue Index", value: "0.04 Low", status: "optimal" },
    ];
  }
  return [
    { label: "Revenue Pacing", value: "+284% MoM", status: "optimal" },
    { label: "Customer LTV : CAC", value: "4.8 : 1", status: "optimal" },
    { label: "Funnel Conversion Rate", value: (4.18 + sin(0.2, 0.14)).toFixed(2) + "%", status: "live" },
    { label: "Scaling Headroom", value: "High (No Cap)", status: "scaled" },
  ];
}

export function MarketingConsole() {
  const [mode, setMode] = useState<ConsoleMode>("meta");
  const [t, setT] = useState(0);
  const [clock, setClock] = useState("--:--:--");

  useEffect(() => {
    const id = window.setInterval(() => {
      setT((v) => v + 1);
      setClock(new Date().toISOString().slice(11, 19));
    }, 200);
    return () => window.clearInterval(id);
  }, []);

  const metrics = metricsFor(mode, t);

  return (
    <div className="relative">
      {/* Outer ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgba(0,102,204,0.35),transparent)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-ping/20 bg-midnight/80 shadow-[0_40px_120px_-40px_rgba(0,51,160,0.9)] backdrop-blur-xl">
        {/* Top Console Bar */}
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-ping/30 bg-ping/10 text-ping">
              <Activity className="h-4 w-4" />
            </span>
            <div className="min-w-0 leading-tight">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.26em] text-slate-steel">
                Campaign Telemetry HUD
              </p>
              <p className="truncate font-display text-sm font-semibold text-white">
                Cell 01 · Full-Funnel Performance Engine
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em]">
            <span className="inline-flex items-center gap-1.5 text-signal">
              <PulseDot color="signal" /> Active
            </span>
            <span className="hidden whitespace-nowrap tabular-nums text-slate-steel sm:inline" suppressHydrationWarning>
              {clock} UTC
            </span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-3 sm:px-6">
          <div
            role="tablist"
            aria-label="Campaign telemetry mode"
            className="flex rounded-full border border-white/10 bg-white/[0.03] p-1"
          >
            {TABS.map((tab) => {
              const active = tab.id === mode;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setMode(tab.id)}
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] transition-colors sm:px-4",
                    active ? "text-white" : "text-slate-steel hover:text-silver"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="console-tab-active"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-boeing to-aero shadow-[0_0_20px_rgba(0,102,204,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <tab.icon className="relative h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span className="relative">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ping sm:flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ping animate-pulse" />
            Meta Conversion API v20.0
          </div>
        </div>

        {/* Live Sparkline Visualizer Area */}
        <div className="relative border-b border-white/[0.06] bg-obsidian/60 px-4 py-6 sm:px-6">
          <div aria-hidden className="absolute inset-0 bg-grid-fine opacity-40" />

          <div className="relative flex items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-ping">
                Live Conversion Velocity
              </span>
              <p className="mt-1 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                4.95x ROAS <span className="font-sans text-xs font-normal text-signal">+18.4% scaling uplift</span>
              </p>
            </div>
            <div className="text-right">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-steel">
                Total Ad Volume
              </span>
              <p className="font-mono text-sm font-semibold text-silver">PKR 100M+ Deployed</p>
            </div>
          </div>

          {/* SVG Sparkline */}
          <div className="relative mt-4 h-24 w-full">
            <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 90">
              <defs>
                <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#0033a0" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,75 Q40,65 80,50 T160,42 T240,28 T320,18 T400,8 L400,90 L0,90 Z"
                fill="url(#curveGradient)"
              />
              <path
                d="M0,75 Q40,65 80,50 T160,42 T240,28 T320,18 T400,8"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Pulsing indicator node at the tip */}
              <circle cx="400" cy="8" r="4" fill="#38bdf8" className="animate-ping origin-center" />
              <circle cx="400" cy="8" r="4" fill="#ffffff" />
            </svg>
          </div>
        </div>

        {/* 4 Telemetry Metrics Grid */}
        <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.06] border-t border-white/[0.06] bg-obsidian/40 sm:grid-cols-4 sm:divide-y-0">
          {metrics.map((m) => (
            <div key={m.label} className="p-4 sm:p-5">
              <div className="flex items-center justify-between gap-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-steel">
                  {m.label}
                </span>
                <span
                  className={cn(
                    "rounded px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider",
                    m.status === "optimal" && "border border-signal/30 bg-signal/10 text-signal",
                    m.status === "live" && "border border-ping/30 bg-ping/10 text-ping",
                    m.status === "scaled" && "border border-amber-signal/30 bg-amber-signal/10 text-amber-300"
                  )}
                >
                  {m.status}
                </span>
              </div>
              <p className="mt-2 font-display text-lg font-bold tracking-tight text-white sm:text-xl">
                {m.value}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Status Bar */}
        <div className="flex items-center justify-between border-t border-white/[0.06] bg-navy-950/60 px-4 py-2.5 sm:px-6">
          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-steel">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            <span>Targeting: Pakistani &amp; GCC E-Commerce Markets</span>
          </div>
          <a
            href="/#case-studies"
            className="font-mono text-[10px] uppercase tracking-widest text-ping hover:underline"
          >
            Inspect Case Studies →
          </a>
        </div>
      </div>
    </div>
  );
}
