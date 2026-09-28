import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Layers,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CASE_STUDIES, CaseStudy } from "@/data/portfolioData";
import { MagneticButton } from "@/components/ui/MagneticButton";
import type { Metadata } from "next";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_STUDIES.find((c) => c.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found | Hamdan Ahmed",
    };
  }

  return {
    title: `${project.brand} — ${project.title} | Hamdan Ahmed`,
    description: project.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const projectIndex = CASE_STUDIES.findIndex((c) => c.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project: CaseStudy = CASE_STUDIES[projectIndex];
  const prevProject = projectIndex > 0 ? CASE_STUDIES[projectIndex - 1] : CASE_STUDIES[CASE_STUDIES.length - 1];
  const nextProject = projectIndex < CASE_STUDIES.length - 1 ? CASE_STUDIES[projectIndex + 1] : CASE_STUDIES[0];

  return (
    <div className="min-h-screen bg-obsidian text-silver selection:bg-aero selection:text-white">
      <Navbar isCaseStudy={true} />

      <main className="relative pt-24 pb-20 sm:pt-28">
        {/* Background Grids & Ambient Glow */}
        <div aria-hidden className="absolute inset-0 bg-grid opacity-30 mask-fade-y pointer-events-none" />
        <div aria-hidden className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-boeing/25 blur-[140px] pointer-events-none" />

        {/* Breadcrumb Bar */}
        <section className="border-b border-white/[0.08] bg-midnight/60 py-3.5 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/#case-studies" className="hover:text-white transition-colors">
                Case Studies
              </Link>
              <span>/</span>
              <span className="text-ping font-semibold uppercase tracking-wider">
                [{project.number}] {project.brand}
              </span>
            </div>

            <Link
              href="/#case-studies"
              className="inline-flex items-center gap-1.5 text-ping hover:underline font-semibold"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Case Studies
            </Link>
          </div>
        </section>

        {/* Case Study Hero */}
        <section className="relative overflow-hidden py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="rounded-md border border-ping/40 bg-ping/10 px-2.5 py-1 text-ping uppercase tracking-widest font-semibold">
                Case Study [{project.number}]
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-silver font-medium">{project.industry}</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-400">{project.duration} Duration</span>
            </div>

            <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-steel sm:text-lg">
              {project.summary}
            </p>

            {/* Key Figures HUD Strip */}
            <div className="mt-10 grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-midnight/70 p-6 shadow-2xl backdrop-blur-xl sm:grid-cols-4 sm:p-8">
              <div className="border-r border-white/[0.08] pr-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ping">Return On Ad Spend</p>
                <p className="mt-2 font-display text-2xl sm:text-4xl font-bold text-signal">{project.roas}</p>
                <p className="mt-1 text-xs text-slate-400">{project.secondaryStatLabel}</p>
              </div>

              <div className="sm:border-r border-white/[0.08] sm:pr-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ping">Generated Revenue</p>
                <p className="mt-2 font-display text-2xl sm:text-4xl font-bold text-white">{project.revenue}</p>
                <p className="mt-1 text-xs text-slate-400">{project.heroStatLabel}</p>
              </div>

              <div className="border-r border-white/[0.08] pr-4 pt-4 sm:pt-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ping">Paid Orders</p>
                <p className="mt-2 font-display text-2xl sm:text-4xl font-bold text-white">{project.orders}</p>
                <p className="mt-1 text-xs text-slate-400">Verified Conversions</p>
              </div>

              <div className="pt-4 sm:pt-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ping">Target Market</p>
                <p className="mt-2 font-display text-2xl sm:text-4xl font-bold text-white">{project.market}</p>
                <p className="mt-1 text-xs text-slate-400">{project.platform}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Campaign Visual Showcase */}
        {project.image && (
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-midnight/60 shadow-[0_20px_80px_-20px_rgba(0,102,204,0.4)]">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={project.image}
                  alt={`${project.brand} campaign visual`}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.08] bg-obsidian/90 px-6 py-3 font-mono text-xs text-slate-steel">
                <span>Ad Creative System &amp; Attribution Architecture</span>
                <span className="text-ping">{project.brand} Growth Cell</span>
              </div>
            </div>
          </section>
        )}

        {/* Challenge & Strategy Dual Column */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* The Challenge Card */}
            <div className="rounded-3xl border border-white/10 bg-midnight/50 p-6 sm:p-8 backdrop-blur-md">
              <div className="flex items-center gap-2.5 font-mono text-xs text-ping uppercase tracking-widest">
                <Target className="h-4 w-4" />
                <span>Phase 01 Diagnostics</span>
              </div>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-white">
                The Core Bottleneck &amp; Objective
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-steel">
                {project.challenge}
              </p>
            </div>

            {/* Strategic Framework Card */}
            <div className="rounded-3xl border border-white/10 bg-midnight/50 p-6 sm:p-8 backdrop-blur-md">
              <div className="flex items-center gap-2.5 font-mono text-xs text-signal uppercase tracking-widest">
                <Zap className="h-4 w-4" />
                <span>Phase 02 Architecture</span>
              </div>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-white">
                {project.strategy.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-steel">
                {project.strategy.description}
              </p>
            </div>
          </div>
        </section>

        {/* 3-Tier Customer Journey Funnel */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-ping">Audience Architecture</span>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold text-white">
              Full-Funnel Campaign Execution
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {project.strategy.funnel.map((f, i) => (
              <div
                key={f.stage}
                className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 shadow-lg backdrop-blur-md"
              >
                <span className="font-mono text-xs font-semibold text-ping uppercase tracking-wider">
                  [ Tier 0{i + 1} ]
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">{f.stage}</h3>

                <div className="mt-4 space-y-3 text-xs leading-relaxed">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
                      Target Audience:
                    </span>
                    <p className="text-silver mt-0.5">{f.target}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
                      Creative Angles:
                    </span>
                    <p className="text-slate-steel mt-0.5">{f.creative}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables & Verified Metrics */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Deliverables List */}
            <div className="rounded-3xl border border-white/10 bg-midnight/50 p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-ping">Technical Deliverables</p>
              <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white">
                What Was Engineered &amp; Deployed
              </h3>
              <ul className="mt-6 space-y-3">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-silver">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-signal mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Campaign Learnings & Insights */}
            <div className="rounded-3xl border border-white/10 bg-midnight/50 p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-signal">Key Growth Takeaways</p>
              <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white">
                Statistical Findings &amp; Insights
              </h3>
              <ul className="mt-6 space-y-3">
                {project.learnings.map((lrn, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-steel">
                    <span className="font-mono text-xs text-ping font-semibold shrink-0 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{lrn}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonial Card (if present) */}
        {project.testimonial && (
          <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="rounded-3xl border border-ping/30 bg-gradient-to-br from-boeing/20 via-navy-950/80 to-midnight/80 p-8 text-center shadow-xl backdrop-blur-xl sm:p-12">
              <div className="flex justify-center gap-1 text-amber-signal mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-signal text-amber-signal" />
                ))}
              </div>
              <p className="font-display text-lg sm:text-2xl font-semibold leading-relaxed text-white italic">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-widest text-ping">
                {project.testimonial.author} · {project.testimonial.title}, {project.brand}
              </p>
            </div>
          </section>
        )}

        {/* Prev / Next Navigation & CTA */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
            <Link
              href={`/case-studies/${prevProject.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs text-silver hover:border-ping hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Previous: [{prevProject.number}] {prevProject.brand}
            </Link>

            <MagneticButton href="#contact" variant="primary">
              Scale Your Brand Past 5x ROAS <ArrowRight className="h-4 w-4" />
            </MagneticButton>

            <Link
              href={`/case-studies/${nextProject.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs text-silver hover:border-ping hover:text-white transition-colors"
            >
              Next: [{nextProject.number}] {nextProject.brand} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
