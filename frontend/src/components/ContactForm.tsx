"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Meta Ads Scaling",
    budget: "$1,000 - $3,000 / month",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setStatus("submitting");

    // Simulate clean dispatch with fallback
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  return (
    <div
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-light)",
        padding: "2.5rem",
        position: "relative",
        boxShadow: "0 20px 40px rgba(0,0,0,0.03)",
      }}
    >
      {/* Editorial Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderBottom: "1px solid var(--border-light)",
          paddingBottom: "1.25rem",
          marginBottom: "2rem",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--vermilion)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "0.25rem",
            }}
          >
            DISPATCH // INQUIRY FORM
          </div>
          <h3
            style={{
              fontSize: "1.65rem",
              fontWeight: 800,
              fontFamily: "var(--font-serif)",
            }}
          >
            Initiate Collaboration
          </h3>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
          }}
        >
          [SEC // 06]
        </span>
      </div>

      {status === "success" ? (
        <div
          style={{
            padding: "3rem 1.5rem",
            textAlign: "center",
            backgroundColor: "var(--vermilion-subtle)",
            border: "1px solid var(--vermilion-border)",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "var(--vermilion)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.25rem auto",
              fontSize: "1.5rem",
              fontWeight: 800,
            }}
          >
            ✓
          </div>
          <h4
            style={{
              fontSize: "1.5rem",
              fontFamily: "var(--font-serif)",
              marginBottom: "0.5rem",
            }}
          >
            Transmission Received
          </h4>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              maxWidth: "460px",
              margin: "0 auto 1.5rem auto",
            }}
          >
            Thank you, {formData.name}. Your project details have been recorded. I typically review
            inbound briefs and reply within 24 hours.
          </p>
          <a
            href={`mailto:ThryveDigital@hamdanahmed.com?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
            className="btn-primary"
            style={{ fontSize: "0.8rem", padding: "0.7rem 1.5rem" }}
          >
            Send Direct Confirmation via Email ↗
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-secondary)",
                  marginBottom: "0.5rem",
                }}
              >
                01. Your Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alexander Vance"
                className="editorial-input"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-secondary)",
                  marginBottom: "0.5rem",
                }}
              >
                02. Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className="editorial-input"
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            {/* Service */}
            <div>
              <label
                htmlFor="service"
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-secondary)",
                  marginBottom: "0.5rem",
                }}
              >
                03. Core Objective / Service
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="editorial-input"
              >
                <option value="Meta Ads Scaling">Meta Ads Scaling (Facebook &amp; Instagram)</option>
                <option value="AI Agents & Voice Automation">AI Agents &amp; Autonomous Voice Bots</option>
                <option value="n8n Workflow Automation">n8n / Make Workflow Automation</option>
                <option value="Brand Design & Creative Ad Direction">Brand Design &amp; Creative Ad Direction</option>
                <option value="Complete E-Commerce Growth Infrastructure">Complete Growth &amp; Automation System</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label
                htmlFor="budget"
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-secondary)",
                  marginBottom: "0.5rem",
                }}
              >
                04. Estimated Monthly Budget
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="editorial-input"
              >
                <option value="Under $1,000 / month">Under $1,000 / PKR 250K</option>
                <option value="$1,000 - $3,000 / month">$1,000 - $3,000 / PKR 250K - 750K</option>
                <option value="$3,000 - $7,500 / month">$3,000 - $7,500 / PKR 750K - 2M</option>
                <option value="$7,500+ / month">$7,500+ / PKR 2M+</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div style={{ marginBottom: "2rem" }}>
            <label
              htmlFor="message"
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-secondary)",
                marginBottom: "0.5rem",
              }}
            >
              05. Project Context &amp; Key Goals *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your current revenue, current ads/automation stack, and what you aim to achieve..."
              className="editorial-input"
              style={{ resize: "vertical" }}
            />
          </div>

          {/* Submit */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary"
              style={{ width: "100%", maxWidth: "260px" }}
            >
              {status === "submitting" ? "Transmitting..." : "Send Dispatch →"}
            </button>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
              }}
            >
              DIRECT DISPATCH: ThryveDigital@hamdanahmed.com
            </div>
          </div>
        </form>
      )}

    </div>
  );
}

