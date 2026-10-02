"use client";

import { motion } from "framer-motion";
import { ArrowUp, CheckCircle, Mail, Phone, TrendingUp } from "lucide-react";
import { PulseDot } from "@/components/ui/PulseDot";

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}


const services = [
  { code: "ADS-01", title: "Meta & Facebook Ads Scaling" },
  { code: "AUD-02", title: "TikTok & Video Acquisition" },
  { code: "CRT-03", title: "Creative Strategy & UGC" },
  { code: "CRO-04", title: "Full-Funnel CRO & Landing Pages" },
  { code: "RET-05", title: "Retention & Email Automation" },
  { code: "DAT-06", title: "Conversion API & Pixel Setup" },
];

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-silver">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-25" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ping/50 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3.5">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-boeing to-aero text-white shadow-[0_0_25px_rgba(0,102,204,0.6)]">
                <TrendingUp className="h-6 w-6 text-ping" />
              </span>
              <div>
                <p className="font-display text-xl font-semibold text-white">Hamdan Ahmed</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-slate-steel">
                  Performance &amp; Growth Architect
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-steel">
              Scaling e-commerce brands past 5x ROAS with data-driven Meta &amp; TikTok acquisition, creative testing
              frameworks, and conversion-optimized sales funnels.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-silver backdrop-blur-md">
              <PulseDot color="signal" /> Accepting 2 New Brands for Q4
            </p>

            {/* Direct Quick Contact Card */}
            <div className="mt-6 max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ping">
                  Direct Line
                </p>
                <span className="flex items-center gap-1 font-mono text-[10px] text-signal">
                  <CheckCircle className="h-3 w-3" /> WhatsApp Online
                </span>
              </div>
              <div className="mt-3 space-y-2">
                <a
                  href="mailto:contact@hamdanahmed.com"
                  className="group flex items-center justify-between rounded-lg border border-white/[0.06] bg-navy-950/60 px-3 py-2 text-xs text-silver transition-all hover:border-ping/40 hover:bg-white/[0.06]"
                >
                  <span className="flex items-center gap-2 font-medium text-white group-hover:text-ping">
                    <Mail className="h-3.5 w-3.5 text-ping" /> contact@hamdanahmed.com
                  </span>
                  <span className="font-mono text-[9px] text-slate-400">Email</span>
                </a>
                <a
                  href="https://wa.me/923412055383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-white/[0.06] bg-navy-950/60 px-3 py-2 text-xs text-silver transition-all hover:border-ping/40 hover:bg-white/[0.06]"
                >
                  <span className="flex items-center gap-2 font-medium text-white group-hover:text-ping">
                    <Phone className="h-3.5 w-3.5 text-signal" /> +92 341 2055383
                  </span>
                  <span className="font-mono text-[9px] text-slate-400">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ping">Capabilities</p>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s.code}>
                  <a
                    href="/#services"
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm text-slate-steel transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-ping transition-all duration-300 group-hover:mr-1.5 group-hover:w-2.5" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies & Pages */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ping">Case Studies</p>
            <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-steel">
              <li>
                <a
                  href="/case-studies/thryve-scaling"
                  className="hover:text-white transition-colors block"
                >
                  Thryve Apparel · 4.95x ROAS
                </a>
              </li>
              <li>
                <a
                  href="/case-studies/royal-essence-scaling"
                  className="hover:text-white transition-colors block"
                >
                  Royal Essence · 5.3x ROAS
                </a>
              </li>
              <li>
                <a
                  href="/case-studies/emerald-wear-scaling"
                  className="hover:text-white transition-colors block"
                >
                  Emerald Wear · 4.2x ROAS
                </a>
              </li>
              <li>
                <a
                  href="/case-studies/creative-design"
                  className="hover:text-ping font-medium transition-colors block"
                >
                  16 Creative Design Showcase →
                </a>
              </li>
              <li className="pt-2">
                <a href="/#journey" className="hover:text-white transition-colors">
                  My Journey &amp; Milestones
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-white transition-colors">
                  Growth &amp; Technical Skills
                </a>
              </li>
              <li>
                <a href="/#reviews" className="hover:text-white transition-colors">
                  Verified Client Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Platforms & Ad Channels */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ping">Ad Channels</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {[
                "Meta Ads",
                "Instagram CBO",
                "TikTok Ads",
                "Shopify Plus",
                "Klaviyo",
                "n8n AI Agents",
                "GA4 / CAPI",
                "Figma",
              ].map((p) => (
                <span
                  key={p}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-silver"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-1.5">
              <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Headquarters</p>
              <p className="text-xs text-white">Karachi, Pakistan · Serving Global Brands</p>
            </div>
          </div>
        </div>

        {/* Giant Watermark wordmark */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          aria-hidden
          className="pointer-events-none mt-16 select-none bg-gradient-to-b from-white/15 to-white/0 bg-clip-text text-center whitespace-nowrap font-display text-[13vw] font-bold leading-none tracking-tighter text-transparent"
        >
          HAMDAN AHMED
        </motion.p>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-steel sm:flex-row sm:items-center">
          <p>© {year} Hamdan Ahmed. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-steel transition-colors hover:text-ping"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-slate-steel transition-colors hover:text-ping"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
              Performance · Data · Growth
            </span>
          </div>
          <a
            href="/#top"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-silver transition-colors hover:border-ping/50 hover:text-white"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

