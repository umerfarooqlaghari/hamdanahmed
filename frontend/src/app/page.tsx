"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Flame,
  Layers,
  Mail,
  Palette,
  Phone,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { GrowthEngineSvg, MarketingConsoleContainer } from "@/components/GrowthEngineSvg";
import { Navbar } from "@/components/Navbar";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Modal } from "@/components/ui/Modal";
import { PulseDot } from "@/components/ui/PulseDot";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { CASE_STUDIES } from "@/data/portfolioData";
import { cn } from "@/lib/cn";

// 4 Strategic Growth Pillars (Replaces crowded numeric band)
const GROWTH_PILLARS = [
  {
    icon: Target,
    code: "PIL-01",
    title: "Algorithmic Media Buying",
    desc: "Advantage+ CBO budget scaling with predictive bid cap controls.",
  },
  {
    icon: Sparkles,
    code: "PIL-02",
    title: "Creative Sandboxing",
    desc: "Rapid dynamic creative testing across 3-second hooks and static carousels.",
  },
  {
    icon: Zap,
    code: "PIL-03",
    title: "Full-Funnel CRO",
    desc: "Zero-friction Shopify checkout optimization and high-AOV bundle architecture.",
  },
  {
    icon: ShieldCheck,
    code: "PIL-04",
    title: "Lossless Attribution",
    desc: "Server-side Meta Conversions API (CAPI) and GA4 cohort tracking.",
  },
];

// Marquee ticker items with vector diamonds
const TICKER_ITEMS = [
  { code: "META-01", text: "CBO ALGORITHMIC SCALING" },
  { code: "UGC-02", text: "DIRECT-RESPONSE CREATIVE TESTING" },
  { code: "CAPI-03", text: "LOSSLESS SERVER-SIDE ATTRIBUTION" },
  { code: "CRO-04", text: "FRICTIONLESS CHECKOUT FUNNELS" },
  { code: "TIKTOK-05", text: "SHORT-FORM VIDEO SPARK ADS" },
  { code: "AI-06", text: "AUTONOMOUS MARKETING AGENTS" },
  { code: "KLAVIYO-07", text: "LIFECYCLE RETENTION AUTOMATION" },
];

// Key Performance Capabilities
const CAPABILITIES = [
  {
    id: "meta-ads",
    icon: Target,
    code: "ADS-01",
    title: "Meta & Instagram Ads Scaling",
    category: "Paid Acquisition",
    summary:
      "Full-funnel media buying using CBO algorithms, dynamic creative testing (DCT), and predictive bid caps.",
    detail:
      "We design airtight audience funnels that isolate cold prospecting, warm retargeting, and high-intent cart recovery. Powered by Meta Conversions API (CAPI) for lossless server-side attribution.",
    chips: ["CBO / ABO", "CAPI Setup", "Dynamic Creative", "Bid Caps"],
    deliverables: [
      "Lossless Meta Conversions API (CAPI) Setup",
      "Dynamic Creative Testing (24+ weekly iterations)",
      "Automated Daypart & Budget Scaling Rules",
      "Real-time Attribution & Cohort Dashboards",
    ],
  },
  {
    id: "creative-strategy",
    icon: Palette,
    code: "CRT-02",
    title: "Creative Strategy & Direct Response",
    category: "Creative Direction",
    summary:
      "High-converting visual assets engineered specifically to hook attention in the first 3 seconds.",
    detail:
      "Creative is the new targeting. We analyze competitors, isolate customer psychological triggers, and produce scroll-stopping static carousels, reaction reels, and unboxing formats.",
    chips: ["3s Hook Testing", "Static Carousels", "UGC Scripting", "Direct Response"],
    deliverables: [
      "16+ Custom Direct-Response Ad Variations",
      "A/B Split Hook Scripts for Creators",
      "High-Converting Packaging & Product Graphics",
      "Weekly Creative Fatigue Audits",
    ],
  },
  {
    id: "funnel-cro",
    icon: Zap,
    code: "CRO-03",
    title: "Full-Funnel CRO & Landing Pages",
    category: "Conversion Rate",
    summary:
      "Turning ad clicks into paid orders with zero-friction Shopify PDPs, bundle architectures, and checkout flow tuning.",
    detail:
      "Traffic without conversion is wasted capital. We audit customer drop-off points, improve page load speeds, test high-urgency checkout elements, and engineer high-AOV bundle offers.",
    chips: ["Shopify Plus", "Bundle Upsells", "Heatmap Analysis", "Frictionless Checkout"],
    deliverables: [
      "Custom Shopify Product Detail Page Wireframes",
      "Post-Purchase One-Click Upsell Architecture",
      "Mobile Checkout Speed Optimization (<1.8s)",
      "Live Heatmap & User Session Tracking",
    ],
  },
  {
    id: "tiktok-acquisition",
    icon: Flame,
    code: "TIK-04",
    title: "TikTok Ads & Short-Form Video",
    category: "Viral Discovery",
    summary:
      "Tapping into organic virality and Spark Ads to capture younger demographics and expand audience scale.",
    detail:
      "We deploy native short-form video strategies built around TikTok trends, authentic customer testimonials, and algorithmic sound hooks to scale cold acquisition cost-effectively.",
    chips: ["Spark Ads", "Creator Sparking", "Native Sound Hooks", "Broad Prospecting"],
    deliverables: [
      "TikTok Pixel & Events API Configuration",
      "High-Velocity Creator Collaboration Scripts",
      "Targeted Hashtag & Affinity Audience Arrays",
      "Weekly Short-Form Creative Sandboxes",
    ],
  },
  {
    id: "ai-automation",
    icon: Bot,
    code: "AUT-05",
    title: "AI Marketing Agents & Workflows",
    category: "Intelligent Systems",
    summary:
      "Autonomous n8n and Make workflows that handle ad reporting, customer lead routing, and dynamic retargeting.",
    detail:
      "We build customized AI agent architectures that monitor ROAS thresholds 24/7, alert on creative fatigue, automatically route high-ticket WhatsApp leads, and trigger post-purchase workflows.",
    chips: ["n8n Workflows", "Slack Alerts", "Autonomous Agents", "Lead Routing"],
    deliverables: [
      "Real-time 24/7 ROAS Deviation Alert Bots",
      "Automated Shopify to WhatsApp CRM Sync",
      "Dynamic Customer Tagging & Segmentation",
      "Custom Multi-Platform Reporting Dashboards",
    ],
  },
  {
    id: "retention-email",
    icon: Layers,
    code: "RET-06",
    title: "Retention & Klaviyo Lifecycle Architecture",
    category: "Customer LTV",
    summary:
      "Maximizing customer lifetime value through hyper-segmented automated email flows and VIP SMS campaigns.",
    detail:
      "Acquisition brings the first order; retention builds the enterprise. We construct high-converting welcome series, abandoned cart recovery, browse abandonment, and VIP loyalty triggers.",
    chips: ["Klaviyo Flows", "VIP SMS Triggers", "Churn Prevention", "Predictive Reorder"],
    deliverables: [
      "7-Part High-Converting Welcome & Story Flow",
      "Abandoned Cart & Checkout SMS sequences",
      "Repeat Purchase & VIP Replenishment Automations",
      "Predictive Re-order Window Segmentation",
    ],
  },
];

// Tools & Ecosystem (Replaces crowded percentage progress bars with clean SVG badges)
const ECOSYSTEM_STACK = [
  {
    name: "Meta Ads Manager",
    category: "Primary Ad Platform",
    tag: "Advantage+ CBO",
    icon: Target,
    desc: "Algorithmic audience scaling, dynamic creative testing, and automated daypart bidding.",
  },
  {
    name: "TikTok Ads Manager",
    category: "Short-Form Discovery",
    tag: "Spark Ads & UGC",
    icon: Flame,
    desc: "Viral creator partnerships, sound hooks, and interest targeting for cold acquisition.",
  },
  {
    name: "Shopify Plus",
    category: "E-Commerce Core",
    tag: "Checkout & CRO",
    icon: ShoppingBag,
    desc: "High-speed PDP architecture, native bundle upsells, and friction-free payment gateways.",
  },
  {
    name: "Meta Conversions API",
    category: "Server-side Tracking",
    tag: "Lossless Event Match",
    icon: ShieldCheck,
    desc: "Direct gateway server integration preventing mobile browser cookie drop-offs.",
  },
  {
    name: "Klaviyo Lifecycle",
    category: "Retention & Email",
    tag: "Automated Flows",
    icon: Mail,
    desc: "Predictive reorder flows, VIP SMS triggers, and cart abandonment win-back sequences.",
  },
  {
    name: "n8n AI Agents",
    category: "Autonomous Systems",
    tag: "Workflow Logic",
    icon: Workflow,
    desc: "Real-time Slack alerts, CRM synchronization, and multi-channel performance logging.",
  },
  {
    name: "Google Analytics 4",
    category: "Attribution & Data",
    tag: "Cohort Modeling",
    icon: BarChart3,
    desc: "Cross-channel multi-touch attribution, user journey mapping, and conversion modeling.",
  },
  {
    name: "Figma & Creative Suite",
    category: "Direct-Response Design",
    tag: "High-Impact Assets",
    icon: Palette,
    desc: "Psychological ad angles, high-contrast packaging concepts, and editorial story ads.",
  },
];

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<(typeof CAPABILITIES)[0] | null>(null);

  return (
    <div className="relative min-h-screen bg-obsidian text-silver selection:bg-aero selection:text-white">
      <Navbar />

      <main>
        {/* ========================================================================= */}
        {/* 1. HERO SECTION — CLEAN ARCHITECTURE WITH ISOMETRIC VECTOR ENGINE */}
        {/* ========================================================================= */}
        <section id="top" className="relative isolate overflow-hidden bg-obsidian pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-36 lg:pb-28">
          {/* Background Blueprint Grid & Radial Atmospheric Glows */}
          <div aria-hidden className="absolute inset-0 -z-10 bg-grid mask-radial" />
          <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-boeing/30 blur-[140px]" />
            <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-aero-bright/15 blur-[140px]" />
            <div className="absolute bottom-[-20%] left-[30%] h-[400px] w-[680px] rounded-full bg-navy-900/70 blur-[120px]" />
          </div>

          {/* Animated Scanline Beam */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-full animate-scan">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-ping/40 to-transparent" />
              <div className="h-24 w-full bg-gradient-to-b from-ping/[0.04] to-transparent" />
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1.1fr] lg:gap-10 lg:px-8">
            {/* Left Column: Clear, Breathable Copy & Vector Badges */}
            <div className="relative min-w-0">
              {/* Online Status Pill */}
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-ping/20 bg-ping/[0.06] py-1.5 pl-3 pr-2.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ping backdrop-blur-md transition-colors hover:border-ping/40"
                >
                  <PulseDot color="signal" />
                  <span className="text-signal font-semibold">Growth Engine Online</span>
                  <span className="hidden h-3 w-px bg-ping/30 sm:block" />
                  <span className="hidden text-silver sm:inline">Direct Founder Review</span>
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-ping/15 transition-transform group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </a>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[clamp(2.75rem,4.1vw,3.75rem)]"
              >
                <span className="block">Precision Growth.</span>
                <span className="block bg-gradient-to-r from-ping via-aero-bright to-[#7aa7ff] bg-clip-text text-transparent">
                  Rapidly Scaled.
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-xl text-sm leading-relaxed text-slate-steel sm:text-base lg:text-lg"
              >
                Scaling e-commerce brands past profitability plateaus. I architect full-funnel systems combining{" "}
                <span className="text-silver font-medium">algorithmic Meta &amp; TikTok media buying, dynamic creative testing</span>, and{" "}
                <span className="text-silver font-medium">zero-friction Shopify checkout funnels</span>.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-3.5"
              >
                <MagneticButton href="#contact" variant="primary">
                  Start a Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
                <MagneticButton href="#case-studies" variant="ghost">
                  Explore Case Studies
                </MagneticButton>
              </motion.div>

              {/* Clean SVG Architecture Highlights (Replaces crowded numeric dl) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-3 max-w-lg border-t border-white/10 pt-6"
              >
                {[
                  { icon: Target, label: "Advantage+ CBO", sub: "Algorithmic Media Buying" },
                  { icon: Sparkles, label: "Dynamic Creative", sub: "Direct-Response Testing" },
                  { icon: ShieldCheck, label: "Lossless CAPI", sub: "Server-side Attribution" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5 backdrop-blur-xs">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-ping/20 bg-ping/10 text-ping">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 leading-tight">
                      <p className="font-mono text-[10px] font-semibold text-white truncate">{item.label}</p>
                      <p className="font-mono text-[8.5px] uppercase tracking-wider text-slate-400 truncate">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Clean Isometric SVG Vector Cockpit (Zero cluttered numbers) */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.25 }}
              className="relative min-w-0"
            >
              <MarketingConsoleContainer />
            </motion.div>
          </div>

          {/* Bottom Scroll Cue */}
          <div className="mt-14 hidden justify-center lg:flex">
            <a
              href="#pillars"
              className="inline-flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-steel transition-colors hover:text-white"
            >
              Scroll to explore
              <ArrowDown className="h-4 w-4 animate-bounce text-ping" />
            </a>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. CORE GROWTH PILLARS & MARQUEE (CLEAN SVG CARDS, ZERO NUMERIC CLUTTER) */}
        {/* ========================================================================= */}
        <section id="pillars" aria-label="Core Pillars" className="relative border-y border-white/[0.06] bg-gradient-to-b from-navy-950 to-obsidian">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/[0.06] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4 px-4 sm:px-6 lg:px-8">
            {GROWTH_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 90, damping: 18 }}
                className="group relative py-7 px-4 sm:py-8 lg:px-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-ping/25 bg-ping/[0.07] text-ping transition-all duration-300 group-hover:bg-ping/15 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.3)]">
                    <pillar.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-steel">
                    {pillar.code}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white group-hover:text-ping transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-steel">
                  {pillar.desc}
                </p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-ping to-transparent transition-all duration-700 group-hover:w-2/3" />
              </motion.div>
            ))}
          </div>

          {/* Marquee Ticker */}
          <div className="relative overflow-hidden border-t border-white/[0.06] py-3.5 mask-fade-x">
            <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span
                  key={`${item.code}-${i}`}
                  className="flex items-center gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.28em] text-slate-steel"
                >
                  <span className="text-ping/70">{item.code}</span>
                  <span className="text-silver">{item.text}</span>
                  <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-ping/60" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. PROVEN CASE STUDIES SECTION */}
        {/* ========================================================================= */}
        <section id="case-studies" className="relative overflow-hidden bg-obsidian py-24 sm:py-32">
          <div aria-hidden className="absolute inset-0 bg-grid opacity-40 mask-fade-y" />
          <div aria-hidden className="absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-boeing/20 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                index="01"
                eyebrow="Case Studies"
                title={
                  <>
                    Proven campaigns.{" "}
                    <span className="text-slate-steel">Measurable breakthroughs.</span>
                  </>
                }
                description="Detailed breakdowns of how structured audience testing, direct-response creative, and full-funnel CRO delivered verifiable growth."
              />

              <div className="shrink-0">
                <Link
                  href="/case-studies/creative-design"
                  className="inline-flex items-center gap-2 rounded-full border border-ping/30 bg-ping/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-ping transition-colors hover:bg-ping/20"
                >
                  <Sparkles className="h-3.5 w-3.5" /> View 16 Graphic Designs →
                </Link>
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CASE_STUDIES.map((study, idx) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 80, damping: 18 }}
                >
                  <TiltCard className="group h-full rounded-2xl">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 text-left transition-colors duration-300 hover:border-ping/40"
                    >
                      {/* Hover Top Shine */}
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ping/0 to-transparent transition-all duration-500 group-hover:via-ping/70"
                      />

                      {/* Header with Code & ROAS Badge */}
                      <div className="flex items-start justify-between">
                        <span className="grid h-11 w-11 place-items-center rounded-xl border border-ping/25 bg-ping/[0.07] text-ping transition-all duration-300 group-hover:bg-ping/15 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.35)]">
                          <TrendingUp className="h-5 w-5" />
                        </span>
                        <div className="text-right">
                          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-steel">
                            [ {study.number} ]
                          </span>
                          <span className="block font-mono text-xs font-semibold text-signal">
                            {study.secondaryStat} ROAS
                          </span>
                        </div>
                      </div>

                      {/* Title & Brand */}
                      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-ping">
                        {study.brand} · {study.industry}
                      </p>
                      <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-white group-hover:text-ping transition-colors">
                        {study.title}
                      </h3>

                      <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-steel">
                        {study.summary}
                      </p>

                      {/* Deliverable Chips */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {study.deliverables.slice(0, 2).map((chip) => (
                          <span
                            key={chip}
                            className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-silver/80"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>

                      {/* Footer Link */}
                      <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-3 text-xs font-medium text-silver">
                        <span>Inspect Full Case Study</span>
                        <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 transition-all duration-300 group-hover:rotate-45 group-hover:border-ping/60 group-hover:bg-ping/10 group-hover:text-ping">
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  </TiltCard>
                </motion.div>
              ))}

              {/* 4th Card: Dedicated Creative Design Showcase */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.3, type: "spring", stiffness: 80, damping: 18 }}
                className="flex"
              >
                <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-aero/40 bg-gradient-to-br from-boeing via-aero to-aero-bright p-6 text-white shadow-xl">
                  <div aria-hidden className="absolute inset-0 bg-grid opacity-35" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <Palette className="h-7 w-7 text-white" />
                      <span className="font-mono text-xs uppercase tracking-widest text-white/80">[ 04 ]</span>
                    </div>
                    <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/80">
                      Brand &amp; Creative Lab
                    </p>
                    <h3 className="mt-2 font-display text-xl sm:text-2xl font-semibold text-white">
                      16 Graphic &amp; Ad Creative Showcase
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-white/90">
                      High-impact product renders, social ad creatives, packaging concepts, and direct-response
                      campaign visuals across fashion, supplements, and luxury goods.
                    </p>
                  </div>
                  <Link
                    href="/case-studies/creative-design"
                    className="relative mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-boeing transition-transform hover:translate-x-1"
                  >
                    View All 16 Designs <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. CAPABILITIES & PERFORMANCE DISCIPLINES */}
        {/* ========================================================================= */}
        <section id="services" className="relative overflow-hidden bg-obsidian py-24 sm:py-32">
          <div aria-hidden className="absolute inset-0 bg-grid-fine opacity-30 mask-fade-y" />
          <div aria-hidden className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-aero/15 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              index="02"
              eyebrow="Capabilities"
              title={
                <>
                  An end-to-end growth cell —{" "}
                  <span className="text-slate-steel">from first creative to checkout.</span>
                </>
              }
              description="Six performance disciplines, one accountable team. Pick a capability to inspect its deliverables, strategy, and execution framework."
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CAPABILITIES.map((cap) => (
                <TiltCard key={cap.id} className="group h-full rounded-2xl">
                  <button
                    onClick={() => setSelectedService(cap)}
                    className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 text-left transition-colors duration-300 hover:border-ping/40 focus-visible:outline-2 focus-visible:outline-ping"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ping/0 to-transparent transition-all duration-500 group-hover:via-ping/70"
                    />
                    <div className="flex items-start justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-ping/25 bg-ping/[0.07] text-ping transition-all duration-300 group-hover:bg-ping/15 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.35)]">
                        <cap.icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-steel">
                        {cap.code}
                      </span>
                    </div>

                    <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-ping/80">
                      {cap.category}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-white">
                      {cap.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-xs leading-relaxed text-slate-steel">
                      {cap.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {cap.chips.map((c) => (
                        <span
                          key={c}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-silver/80"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-3 text-xs font-medium text-silver">
                      <span>Inspect Deliverables</span>
                      <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 transition-all duration-300 group-hover:rotate-45 group-hover:border-ping/60 group-hover:bg-ping/10 group-hover:text-ping">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </button>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Modal for Service Inspection */}
          <Modal open={!!selectedService} onClose={() => setSelectedService(null)} labelledBy="cap-modal-title">
            {selectedService && (
              <div className="p-6 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-ping/30 bg-ping/10 text-ping">
                    <selectedService.icon className="h-6 w-6" />
                  </span>
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-steel">
                    <p className="text-ping">{selectedService.code}</p>
                    <p>{selectedService.category}</p>
                  </div>
                </div>

                <h3 id="cap-modal-title" className="mt-6 font-display text-2xl sm:text-3xl font-semibold text-white">
                  {selectedService.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-steel">
                  {selectedService.detail}
                </p>

                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.24em] text-ping">
                  Deliverables &amp; System Specs
                </p>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {selectedService.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-xs sm:text-sm text-silver">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-signal mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex justify-end gap-3 border-t border-white/10 pt-6">
                  <MagneticButton href="#contact" onClick={() => setSelectedService(null)} variant="primary">
                    Book Growth Audit <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>
            )}
          </Modal>
        </section>

        {/* ========================================================================= */}
        {/* 5. HOW WE SCALE (FOUR DISCIPLINED STAGES) */}
        {/* ========================================================================= */}
        <section id="process" className="relative overflow-hidden bg-white py-24 text-navy-950 sm:py-32">
          <div aria-hidden className="absolute inset-0 bg-grid-light opacity-70 mask-fade-y" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
            {/* Left Sticky Header */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeading
                tone="light"
                index="03"
                eyebrow="How We Scale"
                title={
                  <>
                    One growth pipeline. <span className="text-aero">Four disciplined phases.</span>
                  </>
                }
                description="A continuous growth thread runs from initial ad account diagnostic to aggressive budget scaling — ensuring no revenue is leaked in hand-offs between creative, media buying, and CRO."
              />

              <div className="mt-10 rounded-2xl border border-slate-200 bg-paper p-6 shadow-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-aero">
                  Advertising &amp; Analytics Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Meta Ads Manager",
                    "TikTok Ads",
                    "Shopify Plus",
                    "Klaviyo",
                    "Google Analytics 4",
                    "Meta CAPI",
                    "n8n Workflows",
                    "Figma",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs text-navy-950 shadow-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Stages Pipeline */}
            <ol className="relative space-y-8">
              {[
                {
                  step: "01",
                  title: "Ad Account & Unit Economics Audit",
                  summary:
                    "Deep-dive into historical ad spend, blended ROAS, CAC, conversion leakages, and server-side tracking health.",
                  deliverable: "Lossless CAPI verification & 90-day scaling roadmap.",
                },
                {
                  step: "02",
                  title: "Creative Sandboxing & Angle Testing",
                  summary:
                    "Deploying Dynamic Creative Testing (DCT) with distinct psychological angles, short-form hooks, and direct-response formats.",
                  deliverable: "Statistical winner identification with minimum 4.0x ROAS threshold.",
                },
                {
                  step: "03",
                  title: "CBO Media Buying & Budget Scaling",
                  summary:
                    "Migrating validated creative winners into high-capacity Advantage+ Campaign Budget (CBO) scaling ad sets with bid controls.",
                  deliverable: "Predictable day-to-day revenue volume without ad fatigue.",
                },
                {
                  step: "04",
                  title: "Full-Funnel CRO & Retention Automation",
                  summary:
                    "Tuning Shopify checkout friction, implementing post-purchase upsells, and deploying automated Klaviyo recovery flows.",
                  deliverable: "Compounded customer LTV and reduced blended CPA.",
                },
              ].map((phase) => (
                <li key={phase.step} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-aero hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-boeing font-mono text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,51,160,0.3)]">
                      {phase.step}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-navy-950">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {phase.summary}
                  </p>
                  <p className="mt-3 font-mono text-xs text-aero">
                    Deliverable: <span className="text-slate-800 font-sans">{phase.deliverable}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. CAREER JOURNEY & TRACK RECORD */}
        {/* ========================================================================= */}
        <section id="journey" className="relative overflow-hidden bg-obsidian py-24 sm:py-32">
          <div aria-hidden className="absolute inset-0 bg-grid opacity-30 mask-fade-y" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              index="04"
              eyebrow="My Journey"
              title={
                <>
                  Proven execution.{" "}
                  <span className="text-slate-steel">Tested in competitive markets.</span>
                </>
              }
              description="A track record built on disciplined media buying, direct-response design, and scalable client growth."
            />

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {/* Column 1: Experience & Milestones */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  <Rocket className="h-5 w-5 text-ping" />
                  <h3 className="font-display text-xl font-semibold text-white">Experience &amp; Agency Roles</h3>
                </div>

                {[
                  {
                    period: "2023 — Present",
                    role: "Performance Marketing Consultant & Founder",
                    org: "Thryve Digital",
                    desc: "Managing high-six-figure monthly ad spend across Meta and TikTok for Pakistani and GCC D2C brands. Architecting end-to-end full-funnel scaling.",
                  },
                  {
                    period: "2022 — 2023",
                    role: "Senior Media Buyer & Creative Strategist",
                    org: "Performance Growth Agency",
                    desc: "Spearheaded creative testing pods, constructed dynamic catalog retargeting, and scaled fashion, footwear, and beauty brands past 8-figure monthly turnover.",
                  },
                  {
                    period: "2021 — 2022",
                    role: "Digital Marketing Specialist",
                    org: "E-Commerce Incubator",
                    desc: "Handled Facebook Ads Manager, audience segmentation, conversion tracking troubleshooting, and direct-response ad copywriting.",
                  },
                ].map((item) => (
                  <div key={item.role} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-ping/30 transition-colors">
                    <span className="font-mono text-xs text-ping tracking-wider">{item.period}</span>
                    <h4 className="mt-1 font-display text-lg font-semibold text-white">{item.role}</h4>
                    <p className="font-mono text-xs text-slate-steel">{item.org}</p>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-steel">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Column 2: Education & Technical Certifications */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  <Target className="h-5 w-5 text-ping" />
                  <h3 className="font-display text-xl font-semibold text-white">Certifications &amp; Education</h3>
                </div>

                {[
                  {
                    period: "2023",
                    role: "Meta Certified Media Buying Professional",
                    org: "Meta Blueprint",
                    desc: "Validated expertise in campaign planning, audience architecture, auction bidding mechanics, CAPI integration, and attribution measurement.",
                  },
                  {
                    period: "2022",
                    role: "Advanced Google Analytics (GA4) & Tracking",
                    org: "Google Analytics Academy",
                    desc: "Proficiency in event-based data streams, custom dimensions, funnel exploration reports, and UTM tracking frameworks.",
                  },
                  {
                    period: "2019 — 2023",
                    role: "Bachelor's in Business & Digital Strategy",
                    org: "University Level",
                    desc: "Core focus on digital consumer psychology, statistical unit economics, financial margins, and commercial scalability.",
                  },
                ].map((item) => (
                  <div key={item.role} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-ping/30 transition-colors">
                    <span className="font-mono text-xs text-ping tracking-wider">{item.period}</span>
                    <h4 className="mt-1 font-display text-lg font-semibold text-white">{item.role}</h4>
                    <p className="font-mono text-xs text-slate-steel">{item.org}</p>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-steel">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. PLATFORM ECOSYSTEM & TECHNICAL STACK (CLEAN SVG CARDS, ZERO NUMERIC BARS) */}
        {/* ========================================================================= */}
        <section id="skills" className="relative overflow-hidden bg-obsidian py-24 sm:py-32">
          <div aria-hidden className="absolute inset-0 bg-grid-fine opacity-25 mask-fade-y" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              index="05"
              eyebrow="Ecosystem & Tools"
              title={
                <>
                  Platform ecosystem.{" "}
                  <span className="text-slate-steel">Growth infrastructure.</span>
                </>
              }
              description="A battle-tested stack combining enterprise ad managers, server-side attribution engines, and autonomous workflow bots."
            />

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ECOSYSTEM_STACK.map((item) => (
                <div
                  key={item.name}
                  className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-5 backdrop-blur-md transition-all duration-300 hover:border-ping/40 hover:-translate-y-1"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ping/0 to-transparent transition-all duration-500 group-hover:via-ping/70"
                  />
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-ping/25 bg-ping/[0.07] text-ping transition-all group-hover:bg-ping/15 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-ping">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="mt-4 font-display text-base font-semibold text-white group-hover:text-ping transition-colors">
                    {item.name}
                  </h4>
                  <p className="font-mono text-[9.5px] uppercase tracking-wider text-slate-400 mt-0.5">
                    {item.category}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-steel">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. CLIENT REVIEWS & VERIFIED TESTIMONIALS */}
        {/* ========================================================================= */}
        <section id="reviews" className="relative overflow-hidden bg-obsidian py-24 sm:py-32">
          <div aria-hidden className="absolute inset-0 bg-grid opacity-35 mask-fade-y" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              index="06"
              eyebrow="Testimonials"
              title={
                <>
                  Trusted by founders.{" "}
                  <span className="text-slate-steel">Verified campaign results.</span>
                </>
              }
              description="Direct feedback from brand directors and business owners who scaled their stores through our performance frameworks."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Hamdan understood our goals quickly, communicated clearly, and delivered a structured campaign that gave us complete clarity on our advertising unit economics.",
                  author: "Eric Watson",
                  title: "Brand Director",
                  company: "Thryve Fashion",
                  stat: "Verified Brand Director",
                },
                {
                  quote:
                    "His approach was practical, professional, and focused on results. We achieved profitability from week two and scaled with confidence.",
                  author: "Muhammad Murtaza",
                  title: "Co-Founder",
                  company: "Royal Essence",
                  stat: "Verified Co-Founder",
                },
                {
                  quote:
                    "The creative testing framework alone saved us months of wasted spend. We went from guessing to systematic scaling in under 30 days.",
                  author: "Farhan Saeed",
                  title: "Head of Growth",
                  company: "Emerald Accessories",
                  stat: "Verified Head of Growth",
                },
              ].map((rev) => (
                <div
                  key={rev.author}
                  className="relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 shadow-lg backdrop-blur-md"
                >
                  <div>
                    <div className="flex items-center gap-1 text-amber-signal">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-signal text-amber-signal" />
                      ))}
                    </div>
                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-steel italic">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <p className="font-display text-sm font-semibold text-white">{rev.author}</p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      {rev.title} · {rev.company}
                    </p>
                    <span className="mt-2 inline-block rounded-md border border-signal/30 bg-signal/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-signal">
                      {rev.stat}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. CONTACT & START A PROJECT (BOEING GRADIENT BACKDROP) */}
        {/* ========================================================================= */}
        <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-boeing via-[#0047B3] to-aero py-24 sm:py-32">
          <div aria-hidden className="absolute inset-0 bg-grid opacity-35" />
          <div aria-hidden className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-aero-bright/40 blur-[140px]" />
          <div aria-hidden className="absolute -bottom-40 -left-20 h-[480px] w-[480px] rounded-full bg-navy-900/70 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-white/90"
              >
                <span className="rounded border border-white/30 bg-white/10 px-2 py-0.5">07</span>
                <span className="h-px w-8 bg-white/40" />
                Contact &amp; Scale Your Brand
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80, damping: 18 }}
                className="text-balance mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Ready to scale your store?{" "}
                <span className="text-white/90 underline decoration-white/30 underline-offset-8">
                  Let&apos;s build your engine.
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-sm sm:text-lg leading-relaxed text-white/80"
              >
                Send your store URL and current monthly goals directly. I personally audit your creatives, pixel setup,
                and ad account structure to provide an actionable scaling roadmap.
              </motion.p>
            </div>

            {/* 3 Step Process Bar */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3 max-w-5xl mx-auto">
              {[
                { k: "01", t: "Submit Account & Store URL", d: "Share your product line, store link, and monthly ad budget." },
                { k: "02", t: "Direct Growth Audit", d: "I review your creatives, pixel setup, drop-offs, and CBO architecture." },
                { k: "03", t: "90-Day Scaling Blueprint", d: "Clear targets, weekly creative sprint schedule, and profit milestones." },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-white/20 bg-white/[0.08] p-5 backdrop-blur-md"
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-white/70">{s.k}</span>
                  <p className="mt-2 text-base font-semibold text-white">{s.t}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/75">{s.d}</p>
                </div>
              ))}
            </div>

            {/* Direct Contact Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-5xl mx-auto">
              <a
                href="mailto:contact@hamdanahmed.com"
                className="group rounded-2xl border border-white/25 bg-navy-950/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-navy-900 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-xl bg-white/10 p-2 text-white group-hover:bg-white/20 transition-colors">
                    <Mail className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/50 group-hover:text-white" />
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-slate-400">Direct Email</p>
                <p className="mt-1 font-display text-sm font-semibold text-white group-hover:text-ping transition-colors break-all">
                  contact@hamdanahmed.com
                </p>
                <p className="mt-1 text-xs text-slate-400">Response within 24 hours</p>
              </a>

              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/25 bg-navy-950/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-navy-900 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-xl bg-signal/20 p-2 text-signal group-hover:bg-signal/30 transition-colors">
                    <Phone className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/50 group-hover:text-white" />
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-slate-400">Direct WhatsApp</p>
                <p className="mt-1 font-display text-sm font-semibold text-white group-hover:text-signal transition-colors">
                  Priority Founder Channel
                </p>
                <p className="mt-1 text-xs text-slate-400">Instant messaging &amp; voice note audits</p>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/25 bg-navy-950/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-navy-900 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-xl bg-[#0A66C2]/20 p-2 text-[#38BDF8] group-hover:bg-[#0A66C2]/30 transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/50 group-hover:text-white" />
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-slate-400">Professional Network</p>
                <p className="mt-1 font-display text-sm font-semibold text-white group-hover:text-ping transition-colors">
                  LinkedIn Profile
                </p>
                <p className="mt-1 text-xs text-slate-400">Case studies &amp; insights</p>
              </a>
            </div>

            {/* Interactive Contact Form */}
            <div className="mt-12 rounded-3xl border border-white/20 bg-navy-950/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl max-w-4xl mx-auto">
              <div className="mb-6 text-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ping">
                  Direct Intake Form
                </span>
                <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-white">
                  Book Your Growth Audit
                </h3>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
