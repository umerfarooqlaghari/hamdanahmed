"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, Menu, TrendingUp, X } from "lucide-react";
import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/cn";

export type NavId = "top" | "case-studies" | "services" | "journey" | "skills" | "reviews" | "contact";

const navLinks: { id: NavId; label: string; href: string }[] = [
  { id: "top", label: "Home", href: "/#top" },
  { id: "case-studies", label: "Case Studies", href: "/#case-studies" },
  { id: "services", label: "Capabilities", href: "/#services" },
  { id: "journey", label: "Journey", href: "/#journey" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "reviews", label: "Reviews", href: "/#reviews" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export interface NavbarProps {
  isCaseStudy?: boolean;
}

export function Navbar({ isCaseStudy }: NavbarProps = {}) {
  const [active, setActive] = useState<NavId | null>("top");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 480 && y > prev + 4);
    if (y < prev - 4) setHidden(false);
  });

  // Scroll-spy observer
  useEffect(() => {
    const ids = ["top", "case-studies", "services", "journey", "skills", "reviews", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as NavId);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => obs.observe(el));

    return () => {
      obs.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden && !open ? -110 : 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="fixed inset-x-0 top-0 z-[60] px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <nav
          aria-label="Primary"
          className={cn(
            "relative mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border px-3 py-2.5 transition-all duration-500 sm:px-4",
            scrolled || open
              ? "border-white/10 bg-obsidian/85 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              : "border-white/[0.06] bg-obsidian/40 backdrop-blur-md"
          )}
        >
          {/* Logo badge */}
          <a href="/#top" className="group flex items-center gap-3" aria-label="Hamdan Ahmed — Home">
            <span className="relative grid h-10 w-10 place-items-center">
              <motion.span
                aria-hidden
                className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-ping/30 to-boeing/40 blur-sm"
              />
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 14 }}
                className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-gradient-to-br from-boeing/90 via-midnight to-obsidian text-white shadow-[0_0_20px_rgba(0,102,204,0.4)]"
              >
                <TrendingUp className="h-4.5 w-4.5 text-ping" />
              </motion.span>
            </span>
            <span className="leading-none">
              <span className="block font-display text-[15px] font-semibold tracking-tight text-white group-hover:text-ping transition-colors">
                Hamdan Ahmed
              </span>
              <span className="mt-1 block font-mono text-[8.5px] uppercase tracking-[0.26em] text-slate-steel">
                Marketing Manager &amp; Designer
              </span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => {
              const on = active === l.id;
              return (
                <li key={l.id}>
                  <a
                    href={l.href}
                    className={cn(
                      "relative block px-3 py-1.5 text-xs font-medium tracking-wide transition-colors",
                      on ? "text-white" : "text-slate-steel hover:text-white"
                    )}
                  >
                    {l.label}
                    {on && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-2.5 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-aero to-ping shadow-[0_0_12px_rgba(56,189,248,0.9)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <MagneticButton href="/#contact" className="px-5 py-2 text-xs">
                Book Consultation <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </MagneticButton>
            </div>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "m"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-obsidian/95 px-6 pb-12 pt-28 backdrop-blur-2xl lg:hidden"
          >
            <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
            <div aria-hidden className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-boeing/30 blur-[120px]" />

            <nav aria-label="Mobile" className="relative flex flex-col gap-2">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  className="group flex items-center justify-between border-b border-white/[0.08] py-4"
                >
                  <span className="font-display text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-ping">
                    {l.label}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-steel group-hover:text-ping">
                    [ 0{i + 1} ]
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.3 }}
              className="relative mt-8 flex flex-col gap-3"
            >
              <MagneticButton
                href="/#contact"
                onClick={() => setOpen(false)}
                className="w-full justify-center py-3.5 text-center text-sm"
              >
                Scale Your Brand <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-slate-steel">
                Direct Growth Engineering · Available Q4
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

