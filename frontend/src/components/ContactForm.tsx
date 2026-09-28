"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Send } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in the required fields: Full Name, Email, and Message.");
      return;
    }
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 700);
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      {status === "success" ? (
        <div className="rounded-3xl border border-ping/40 bg-midnight/90 p-8 text-center shadow-[0_20px_80px_-20px_rgba(0,102,204,0.5)] backdrop-blur-xl sm:p-12">
          <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-signal/40 bg-signal/15 text-signal shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Audit Request Received!
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-steel sm:text-base">
            Thank you, <strong className="text-white">{formData.fullName}</strong>. I will review your store
            and ad accounts and provide an initial growth audit within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <MagneticButton
              href={`mailto:contact@hamdanahmed.com?subject=${encodeURIComponent(
                formData.subject || "E-Commerce Growth Inquiry"
              )}&body=${encodeURIComponent(formData.message)}`}
              variant="primary"
            >
              Direct Email Confirmation <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              onClick={() => {
                setStatus("idle");
                setFormData({ fullName: "", email: "", mobile: "", subject: "", message: "" });
              }}
              variant="ghost"
            >
              Send Another Request
            </MagneticButton>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* 2x2 Grid of HUD styled inputs */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-steel">
                Full Name <span className="text-ping">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Hamdan Ahmed"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-obsidian/80 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-ping focus:bg-obsidian focus:outline-none focus:ring-1 focus:ring-ping backdrop-blur-md"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-steel">
                Email Address <span className="text-ping">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="brand@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-obsidian/80 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-ping focus:bg-obsidian focus:outline-none focus:ring-1 focus:ring-ping backdrop-blur-md"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-steel">
                Mobile / WhatsApp
              </label>
              <input
                type="tel"
                placeholder="+92 300 1234567"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-obsidian/80 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-ping focus:bg-obsidian focus:outline-none focus:ring-1 focus:ring-ping backdrop-blur-md"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-steel">
                Monthly Ad Spend or Store URL
              </label>
              <input
                type="text"
                placeholder="e.g. PKR 500K/mo · yourstore.com"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-obsidian/80 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-ping focus:bg-obsidian focus:outline-none focus:ring-1 focus:ring-ping backdrop-blur-md"
              />
            </div>
          </div>

          {/* Full Width Message Area */}
          <div>
            <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-steel">
              Current Bottleneck &amp; Revenue Goals <span className="text-ping">*</span>
            </label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your product, current ROAS/CPA, and where you'd like to scale in the next 90 days..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-obsidian/80 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-ping focus:bg-obsidian focus:outline-none focus:ring-1 focus:ring-ping backdrop-blur-md resize-y"
            />
          </div>

          {/* Centered Submit Button */}
          <div className="pt-2 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-slate-steel">
              🔒 Confidential review · No agency sales reps
            </p>
            <MagneticButton
              type="submit"
              disabled={status === "submitting"}
              variant="primary"
              className="w-full sm:w-auto px-8 py-3.5"
            >
              {status === "submitting" ? (
                "Processing Request..."
              ) : (
                <>
                  Request Growth Audit <Send className="h-4 w-4" />
                </>
              )}
            </MagneticButton>
          </div>
        </form>
      )}
    </div>
  );
}
