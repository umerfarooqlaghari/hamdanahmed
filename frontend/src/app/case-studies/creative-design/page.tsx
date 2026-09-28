"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Maximize2, Palette, Sparkles, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GRAPHIC_DESIGN_WORKS } from "@/data/portfolioData";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Modal } from "@/components/ui/Modal";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/cn";

type GraphicDesignWork = (typeof GRAPHIC_DESIGN_WORKS)[number];


const CATEGORIES = [
  "All Works",
  "Social Media Campaign",
  "High-Conversion Ad Creative",
  "Branding & Event Graphics",
  "Information Design",
  "Commercial Campaign",
];

export default function CreativeDesignPage() {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const [selectedWork, setSelectedWork] = useState<GraphicDesignWork | null>(null);

  const filteredWorks =
    activeCategory === "All Works"
      ? GRAPHIC_DESIGN_WORKS
      : GRAPHIC_DESIGN_WORKS.filter((w) => w.category === activeCategory);

  return (
    <div className="min-h-screen bg-obsidian text-silver selection:bg-aero selection:text-white">
      <Navbar isCaseStudy={true} />

      <main className="relative pt-24 pb-20 sm:pt-28">
        {/* Blueprint Grids & Ambient Glow */}
        <div aria-hidden className="absolute inset-0 bg-grid opacity-30 mask-fade-y pointer-events-none" />
        <div aria-hidden className="absolute -top-40 right-1/4 h-[520px] w-[520px] rounded-full bg-boeing/25 blur-[140px] pointer-events-none" />

        {/* Breadcrumb Navigation */}
        <section className="border-b border-white/[0.08] bg-midnight/60 py-3.5 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-ping font-semibold uppercase tracking-wider">
                [ 04 ] 16 Graphic &amp; Ad Creative Showcase
              </span>
            </div>

            <Link href="/#case-studies" className="inline-flex items-center gap-1.5 text-ping hover:underline font-semibold">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Case Studies
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2.5 font-mono text-xs text-ping uppercase tracking-[0.24em]">
              <Palette className="h-4 w-4" />
              <span>Creative Architecture &amp; Asset Sandboxing</span>
            </div>

            <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              16 High-Impact Brand Designs &amp; Ad Creatives
            </h1>

            <p className="mt-6 max-w-3xl text-sm sm:text-lg leading-relaxed text-slate-steel">
              High-converting direct-response ad visuals, premium product mockups, and commercial brand assets.
              Engineered with proven psychological triggers, bold typography, and visual hierarchy to stop the scroll
              and maximize return on ad spend.
            </p>

            {/* Category Filter Pills (Daniels-website layout) */}
            <div className="mt-10 overflow-x-auto pb-2">
              <div role="tablist" aria-label="Filter creative works" className="flex w-max gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-md">
                {CATEGORIES.map((cat) => {
                  const on = activeCategory === cat;
                  const count = cat === "All Works" ? GRAPHIC_DESIGN_WORKS.length : GRAPHIC_DESIGN_WORKS.filter((w) => w.category === cat).length;
                  return (
                    <button
                      key={cat}
                      role="tab"
                      aria-selected={on}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "relative whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-colors",
                        on ? "text-white" : "text-slate-steel hover:text-silver"
                      )}
                    >
                      {on && (
                        <motion.span
                          layoutId="creative-pill"
                          className="absolute inset-0 rounded-full border border-ping/30 bg-gradient-to-r from-boeing/80 to-aero/80"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative flex items-center gap-2">
                        {cat}
                        <span className={cn("font-mono text-[10px]", on ? "text-ping" : "text-slate-steel/70")}>
                          {String(count).padStart(2, "0")}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filteredWorks.map((work, idx) => (
                <motion.div
                  key={`${work.title}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.03, duration: 0.25 }}
                >
                  <TiltCard className="group h-full rounded-2xl">
                    <button
                      onClick={() => setSelectedWork(work)}
                      className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-4 text-left transition-colors duration-300 hover:border-ping/40 focus:outline-none"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ping/0 to-transparent transition-all duration-500 group-hover:via-ping/70"
                      />

                      {/* Image Thumbnail */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-obsidian">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-obsidian/90 px-3 py-1 font-mono text-[10px] text-ping backdrop-blur-md">
                            <Maximize2 className="h-3 w-3" /> Click to Expand
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="mt-4 flex-1">
                        <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-slate-400">
                          <span className="text-ping">{work.category}</span>
                          <span>#{String(idx + 1).padStart(2, "0")}</span>
                        </div>
                        <h3 className="mt-1.5 font-display text-base font-semibold text-white group-hover:text-ping transition-colors">
                          {work.title}
                        </h3>
                        <p className="mt-1 text-xs text-slate-steel line-clamp-2">
                          {work.description}
                        </p>
                      </div>

                      {/* Footer Specs */}
                      <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 font-mono text-[10px] text-slate-400">
                        <span>Format: Direct Response</span>
                        <span className="group-hover:text-ping flex items-center gap-1">
                          Inspect <ArrowUpRight className="h-3 w-3" />
                        </span>
                      </div>
                    </button>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Modal for Full-Resolution Image Inspection */}
        <Modal open={!!selectedWork} onClose={() => setSelectedWork(null)} labelledBy="work-modal-title">
          {selectedWork && (
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ping">
                    {selectedWork.category} · Ad Creative Asset
                  </span>
                  <h3 id="work-modal-title" className="mt-1 font-display text-2xl font-bold text-white">
                    {selectedWork.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <MagneticButton href="#contact" onClick={() => setSelectedWork(null)} variant="primary" className="text-xs px-4 py-2">
                    Request Creative Sprint <ArrowRight className="h-3.5 w-3.5" />
                  </MagneticButton>
                </div>
              </div>

              {/* High-Res Image View */}
              <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-obsidian shadow-2xl">
                <Image
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Creative Strategy Notes</p>
                <p className="mt-2 text-sm leading-relaxed text-silver">
                  {selectedWork.description}
                </p>
              </div>
            </div>
          )}
        </Modal>

        {/* Bottom Call to Action */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16">
          <div className="relative overflow-hidden rounded-3xl border border-ping/30 bg-gradient-to-br from-boeing/40 via-midnight to-obsidian p-8 text-center shadow-2xl backdrop-blur-xl sm:p-14">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ping">Creative Production Sprint</span>
            <h2 className="mt-3 font-display text-2xl sm:text-4xl font-bold text-white">
              Need high-converting ad assets for your store?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-steel">
              I produce complete direct-response creative suites — from 3-second hook variations and static carousels to
              high-converting packaging concepts designed for scalable Meta and TikTok campaigns.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <MagneticButton href="/#contact" variant="primary">
                Book a Creative Sprint <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
