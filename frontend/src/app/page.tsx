import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import {
  CASE_STUDIES,
  GRAPHIC_DESIGN_WORKS,
  SERVICES,
  SKILLS_LIST,
  TESTIMONIALS,
} from "@/data/portfolioData";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />

      <main>
        {/* ========================================================================= */}
        {/* HERO SECTION — Inspired by Slide 1 (Architectural Vermilion Graphic & Grayscale) */}
        {/* ========================================================================= */}
        <section
          style={{
            position: "relative",
            paddingTop: "3.5rem",
            paddingBottom: "4.5rem",
            borderBottom: "1px solid var(--border-light)",
            overflow: "hidden",
            backgroundColor: "var(--bg-body)",
          }}
        >
          <div className="site-container">
            {/* Top Coordinate Bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                paddingBottom: "1.25rem",
                borderBottom: "1px solid var(--border-light)",
                marginBottom: "2.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ color: "var(--vermilion)", fontWeight: 700 }}>01 // OVERVIEW</span>
                <span>HAMDAN AHMED ARCHIVE</span>
              </div>
              <div>LOC // PAKISTAN (UTC+5) &bull; SCALE WORLDWIDE</div>
            </div>

            {/* Main Hero Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3.5rem",
                alignItems: "center",
              }}
            >
              {/* Left Column: Typography & Positioning */}
              <div>
                <div
                  className="section-meta-tag"
                  style={{ marginBottom: "1rem" }}
                >
                  AI AUTOMATION &bull; PERFORMANCE MARKETING
                </div>

                <h1
                  style={{
                    fontSize: "clamp(2.75rem, 5.5vw, 5rem)",
                    fontWeight: 900,
                    lineHeight: 1.02,
                    letterSpacing: "-0.03em",
                    marginBottom: "1.5rem",
                  }}
                >
                  GROWTH ENGINEERED THROUGH <span style={{ color: "var(--accent-secondary)" }}>AI &amp; ADS.</span>
                </h1>

                <p
                  style={{
                    fontSize: "1.15rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    maxWidth: "540px",
                    marginBottom: "2.25rem",
                  }}
                >
                  Hi, I am <strong>Hamdan Ahmed</strong>. I combine performance-driven Meta Ads,
                  autonomous AI agents, and custom n8n workflow automations to scale eCommerce brands
                  without manual bottlenecks.
                </p>

                {/* Hero CTAs */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "1rem",
                    marginBottom: "2.5rem",
                  }}
                >
                  <a href="#case-studies" className="btn-primary">
                    Explore Case Studies ↓
                  </a>
                  <a href="#contact" className="btn-secondary">
                    Initiate Collaboration →
                  </a>
                </div>

                {/* Quick Credentials Strip */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1.5rem",
                    paddingTop: "1.75rem",
                    borderTop: "1px solid var(--border-light)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <div>
                    <span style={{ color: "var(--vermilion)", fontWeight: 700 }}>▸ </span>
                    Meta Pixel + CAPI Certified
                  </div>
                  <div>
                    <span style={{ color: "var(--vermilion)", fontWeight: 700 }}>▸ </span>
                    n8n &amp; Make Workflow Architect
                  </div>
                  <div>
                    <span style={{ color: "var(--vermilion)", fontWeight: 700 }}>▸ </span>
                    Autonomous Voice &amp; Chat Agents
                  </div>
                </div>
              </div>

              {/* Right Column: Slide 1 Iconic Vermilion Cutout Graphic with Portrait */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "440px",
                }}
              >
                {/* Architectural Graphite / Slate Block Motif (Slide 1) */}
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    width: "82%",
                    height: "94%",
                    background: "linear-gradient(145deg, #27272A 0%, #18181B 100%)",
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.22)",
                    borderRadius: "4px",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1.75rem",
                    color: "#FFFFFF",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <span>HAMDAN AHMED</span>
                    <span>2026 // ED.</span>
                  </div>
                </div>

                {/* Overlaid Grayscale Portrait Card (Direct from Slide 1) */}
                <div
                  className="editorial-img-wrap"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    width: "68%",
                    maxWidth: "340px",
                    marginRight: "auto",
                    backgroundColor: "var(--bg-card)",
                    border: "2px solid var(--text-main)",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "3 / 4",
                      backgroundColor: "#16161B",
                    }}
                  >
                    <Image
                      src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,fit=crop/wmfBm6kPSFwto7zo/1000123371-DpA2Qkh9ZXgDzsDn.png"
                      alt="Hamdan Ahmed - AI Automation & Digital Marketing Specialist"
                      fill
                      priority
                      className="editorial-img"
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 70vw, 360px"
                    />
                  </div>

                  <div
                    style={{
                      padding: "1rem 1.25rem",
                      backgroundColor: "var(--bg-card)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontWeight: 800,
                          fontSize: "1.05rem",
                        }}
                      >
                        HAMDAN AHMED
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          color: "var(--vermilion)",
                          textTransform: "uppercase",
                        }}
                      >
                        Founder &bull; Thryve Digital
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        backgroundColor: "var(--vermilion)",
                        color: "#FFFFFF",
                        padding: "0.2rem 0.5rem",
                      }}
                    >
                      PRO
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* High-Impact Stat Strip (Slide 12-14 style) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1.5rem",
                marginTop: "4rem",
                paddingTop: "2.5rem",
                borderTop: "1px solid var(--border-light)",
              }}
            >
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-light)",
                  borderTop: "3px solid var(--vermilion)",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.75rem",
                    fontWeight: 900,
                    color: "var(--vermilion)",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  5.3x
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-secondary)",
                  }}
                >
                  Peak Measured ROAS
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                  Royal Essence Perfume
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-light)",
                  borderTop: "3px solid var(--text-main)",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.75rem",
                    fontWeight: 900,
                    color: "var(--text-main)",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  PKR 2.0M+
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-secondary)",
                  }}
                >
                  Tracked Client Revenue
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                  Across Meta Ad Funnels
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-light)",
                  borderTop: "3px solid var(--vermilion)",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.75rem",
                    fontWeight: 900,
                    color: "var(--vermilion)",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  1.24M+
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-secondary)",
                  }}
                >
                  Ad Impressions Delivered
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                  Highly Targeted Audiences
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-light)",
                  borderTop: "3px solid var(--text-main)",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.75rem",
                    fontWeight: 900,
                    color: "var(--text-main)",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  100%
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-secondary)",
                  }}
                >
                  Automated Pipeline Sync
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                  Zero-Leak Lead Workflows
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 01: THE MASTER INDEX — Inspired by Slide 2 */}
        {/* ========================================================================= */}
        <section
          style={{
            padding: "4.5rem 0",
            borderBottom: "1px solid var(--border-light)",
            backgroundColor: "var(--bg-card)",
          }}
        >
          <div className="site-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              {/* Left Side: Index Title with Circular Orange Stamp (Slide 2) */}
              <div>
                <div className="section-meta-tag">NAVIGATIONAL MANIFESTO</div>
                <div
                  style={{
                    display: "inline-block",
                    position: "relative",
                    marginBottom: "1.5rem",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                      fontWeight: 900,
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    INDEX
                  </h2>
                  {/* Subtle Gray Stamp behind text */}
                  <span
                    style={{
                      position: "absolute",
                      width: "80px",
                      height: "80px",
                      backgroundColor: "var(--stamp-gray)",
                      border: "1px solid #D4D4D8",
                      borderRadius: "50%",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-30%, -50%)",
                      zIndex: 1,
                      opacity: 0.9,
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    maxWidth: "360px",
                  }}
                >
                  A systematic directory of core competencies, case studies, operational services, and
                  technical automation frameworks.
                </p>
              </div>

              {/* Right Side: Index Table */}
              <div
                style={{
                  borderLeft: "2px solid var(--border-light)",
                  paddingLeft: "2.5rem",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { num: "01", label: "ABOUT HAMDAN & EXECUTIVE BIO", href: "#about" },
                    { num: "02", label: "SKILLS & AUTOMATION STACK", href: "#about" },
                    { num: "03", label: "MISSION & STRATEGIC VISION", href: "#mission" },
                    { num: "04", label: "FOUR CORE GROWTH SERVICES", href: "#services" },
                    { num: "05", label: "META ADS PERFORMANCE CASE STUDIES", href: "#case-studies" },
                    { num: "06", label: "CREATIVE & GRAPHIC DESIGN ARCHIVE", href: "#graphics" },
                    { num: "07", label: "VERIFIED CLIENT TESTIMONIALS", href: "#testimonials" },
                    { num: "08", label: "DIRECT DISPATCH & BOOKING", href: "#contact" },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0.85rem 1rem",
                        backgroundColor: "var(--bg-body)",
                        border: "1px solid var(--border-light)",
                        textDecoration: "none",
                        color: "inherit",
                        transition: "all 0.2s ease",
                      }}
                      className="index-row"
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            color: "var(--vermilion)",
                          }}
                        >
                          {item.num}.
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        ↓
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 02: INTRO & BIO — Inspired by Slide 3 & 4 */}
        {/* ========================================================================= */}
        <section
          id="about"
          style={{
            padding: "5rem 0",
            borderBottom: "1px solid var(--border-light)",
            position: "relative",
          }}
        >
          <div className="site-container">
            {/* Header: "INTRO." with signature line drawing (Slide 3) */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "3rem",
                flexWrap: "wrap",
                gap: "2rem",
              }}
            >
              <div style={{ position: "relative" }}>
                <div className="section-meta-tag">01 // EXECUTIVE BIOGRAPHY</div>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(3.5rem, 6.5vw, 5rem)",
                      fontWeight: 900,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    INTRO.
                  </h2>
                  {/* Subtle geometric circle outline motif (from Slide 3) */}
                  <span
                    style={{
                      position: "absolute",
                      width: "120px",
                      height: "120px",
                      border: "2px solid rgba(216, 109, 104, 0.35)",
                      borderRadius: "50%",
                      top: "-20px",
                      left: "-30px",
                      zIndex: 1,
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              {/* Script Signature Accent (Slide 3) */}
              <div
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: "2.5rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1,
                }}
              >
                Hamdan Ahmed
              </div>
            </div>

            {/* Bio Narrative & Capabilities Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3.5rem",
              }}
            >
              {/* Bio Narrative */}
              <div>
                <p
                  style={{
                    fontSize: "1.18rem",
                    lineHeight: 1.75,
                    color: "var(--text-main)",
                    marginBottom: "1.75rem",
                    fontWeight: 500,
                  }}
                >
                  I’m a digital marketer and AI automation specialist focused on helping businesses grow
                  smarter, move faster, and eliminate repetitive work.
                </p>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                    marginBottom: "1.5rem",
                  }}
                >
                  My work combines digital marketing, lead generation, Meta Ads, and AI-powered
                  automation to build systems that not only attract potential customers but also help
                  businesses manage and convert them more efficiently.
                </p>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                  }}
                >
                  I work with AI agents, workflow automation, and digital growth strategies to create
                  practical solutions for real business problems &mdash; from automating follow-ups and
                  lead handling to improving marketing performance and customer communication.
                </p>

                <div
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-light)",
                    borderLeft: "4px solid var(--vermilion)",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--vermilion)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    THE MISSION STATEMENT
                  </span>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      marginTop: "0.35rem",
                      color: "var(--text-main)",
                    }}
                  >
                    &ldquo;Use the right mix of marketing and AI to help businesses save time, generate
                    better opportunities, and scale more effectively.&rdquo;
                  </p>
                </div>
              </div>

              {/* Skills & Resume Breakdown — Slide 4 layout */}
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-light)",
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid var(--border-light)",
                    paddingBottom: "0.75rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "var(--vermilion)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    RESUME // QUALIFICATIONS &amp; STACK
                  </span>
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: "var(--vermilion)",
                      display: "inline-block",
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {SKILLS_LIST.map((group, idx) => (
                    <div key={idx}>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          marginBottom: "0.6rem",
                        }}
                      >
                        {group.category}
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {group.items.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.75rem",
                              backgroundColor: "var(--bg-body)",
                              border: "1px solid var(--border-light)",
                              padding: "0.35rem 0.75rem",
                              borderRadius: "2px",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 03: MISSION & VISION — Inspired by Slide 5 & 6 */}
        {/* ========================================================================= */}
        <section
          id="mission"
          style={{
            padding: "5rem 0",
            borderBottom: "1px solid var(--border-light)",
            backgroundColor: "var(--bg-card)",
          }}
        >
          <div className="site-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3rem",
              }}
            >
              {/* Mission Card (Slide 5) */}
              <div
                style={{
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--bg-body)",
                  padding: "2.75rem 2.25rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Thin Vertical Pale Rose Line (Direct from Slide 5) */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: "2.25rem",
                    width: "2px",
                    backgroundColor: "rgba(216, 109, 104, 0.2)",
                  }}
                />

                <div style={{ position: "relative", zIndex: 2 }}>
                  <div className="section-meta-tag">03A // CORE DRIVER</div>

                  {/* Header with Circular Stamp (Slide 5) */}
                  <div
                    style={{
                      display: "inline-block",
                      position: "relative",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "2.75rem",
                        fontWeight: 900,
                        letterSpacing: "-0.02em",
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      MISSION
                    </h2>
                    <span
                      style={{
                        position: "absolute",
                        width: "56px",
                        height: "56px",
                        backgroundColor: "var(--stamp-gray)",
                        border: "1px solid #D4D4D8",
                        borderRadius: "50%",
                        top: "50%",
                        left: "20%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1,
                        opacity: 0.9,
                      }}
                    />
                  </div>

                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      marginBottom: "1.5rem",
                    }}
                  >
                    To dismantle the reliance on linear manual labor by replacing chaotic workflows with
                    intelligent, autonomous growth systems.
                  </p>

                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.85rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.82rem",
                    }}
                  >
                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: "var(--vermilion)", fontWeight: 700 }}>▸</span>
                      Eliminate repetitive manual data entry across marketing stacks
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: "var(--vermilion)", fontWeight: 700 }}>▸</span>
                      Ensure 100% of generated leads receive instant automated qualification
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: "var(--vermilion)", fontWeight: 700 }}>▸</span>
                      Maximize ROAS with server-side CAPI attribution and DCT ad structures
                    </li>
                  </ul>
                </div>
              </div>

              {/* Vision Card (Slide 6) */}
              <div
                style={{
                  border: "1px solid var(--border-light)",
                  backgroundColor: "var(--bg-body)",
                  padding: "2.75rem 2.25rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Thin Vertical Pale Rose Line (Direct from Slide 6) */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: "2.25rem",
                    width: "2px",
                    backgroundColor: "rgba(216, 109, 104, 0.2)",
                  }}
                />

                <div style={{ position: "relative", zIndex: 2 }}>
                  <div className="section-meta-tag">03B // THE FUTURE</div>

                  {/* Header with Circular Stamp (Slide 6) */}
                  <div
                    style={{
                      display: "inline-block",
                      position: "relative",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "2.75rem",
                        fontWeight: 900,
                        letterSpacing: "-0.02em",
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      VISION
                    </h2>
                    <span
                      style={{
                        position: "absolute",
                        width: "56px",
                        height: "56px",
                        backgroundColor: "var(--stamp-gray)",
                        border: "1px solid #D4D4D8",
                        borderRadius: "50%",
                        top: "50%",
                        left: "60%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1,
                        opacity: 0.9,
                      }}
                    />
                  </div>

                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      marginBottom: "1.5rem",
                    }}
                  >
                    Building modern enterprises where high-intent creative advertising seamlessly feeds
                    autonomous AI agents to execute sales and customer support 24/7.
                  </p>

                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.85rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.82rem",
                    }}
                  >
                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: "var(--vermilion)", fontWeight: 700 }}>▸</span>
                      AI agents capable of answering complex inquiries and booking meetings
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: "var(--vermilion)", fontWeight: 700 }}>▸</span>
                      Zero lag between customer intent and business fulfillment
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: "var(--vermilion)", fontWeight: 700 }}>▸</span>
                      Scaling eCommerce brands to multi-million revenues on lean headcounts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 04: SERVICES / 4 GROWTH PILLARS — Inspired by Slide 7 */}
        {/* ========================================================================= */}
        <section
          id="services"
          style={{
            padding: "5.5rem 0",
            borderBottom: "1px solid var(--border-light)",
            position: "relative",
          }}
        >
          <div className="site-container">
            {/* Header: "SERVICES" with Orange Stamp (Slide 7) */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "3.5rem",
                flexWrap: "wrap",
                gap: "2rem",
              }}
            >
              <div>
                <div className="section-meta-tag">04 // WHAT I DO</div>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(3.5rem, 6.5vw, 5rem)",
                      fontWeight: 900,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    SERVICES
                  </h2>
                  <span
                    style={{
                      position: "absolute",
                      width: "72px",
                      height: "72px",
                      backgroundColor: "var(--stamp-gray)",
                      border: "1px solid #D4D4D8",
                      borderRadius: "50%",
                      top: "50%",
                      right: "-20px",
                      transform: "translateY(-50%)",
                      zIndex: 1,
                      opacity: 0.9,
                    }}
                  />
                </div>
              </div>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                  maxWidth: "460px",
                  lineHeight: 1.6,
                }}
              >
                Four integrated disciplines designed to attract qualified attention, nurture intent, and
                automate end-to-end conversion.
              </p>
            </div>

            {/* 4 Pillar Grid (Slide 7) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              {SERVICES.map((serv, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-light)",
                    padding: "2.25rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="service-card"
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "1.25rem",
                        paddingBottom: "0.75rem",
                        borderBottom: "1px solid var(--border-light)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "var(--vermilion)",
                        }}
                      >
                        PILLAR {serv.number}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          color: "var(--text-muted)",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {serv.tag}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "1.45rem",
                        fontWeight: 800,
                        marginBottom: "1rem",
                        lineHeight: 1.25,
                      }}
                    >
                      {serv.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.65,
                        marginBottom: "1.75rem",
                      }}
                    >
                      {serv.description}
                    </p>
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--vermilion)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "0.75rem",
                      }}
                    >
                      KEY CAPABILITIES:
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        fontSize: "0.85rem",
                        color: "var(--text-main)",
                      }}
                    >
                      {serv.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.4rem" }}>
                          <span style={{ color: "var(--vermilion)", fontWeight: 700 }}>&bull;</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 05: EDITORIAL STATEMENT BANNER — Inspired by Slide 9 */}
        {/* ========================================================================= */}
        <section
          style={{
            backgroundColor: "var(--bg-dark)",
            color: "#FFFFFF",
            padding: "6rem 0",
            position: "relative",
            overflow: "hidden",
            borderTop: "1px solid var(--border-dark)",
            borderBottom: "1px solid var(--border-dark)",
          }}
        >
          {/* Pulsing Vermilion Ring (Direct from Slide 9) */}
          <div
            className="quote-ring"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
            <div
              style={{
                maxWidth: "880px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--vermilion)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginBottom: "1.75rem",
                }}
              >
                CORE OPERATIONAL PHILOSOPHY
              </div>

              <blockquote
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.2rem, 4.8vw, 4rem)",
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: "2rem",
                }}
              >
                &ldquo;GROWTH IS UNDERSTANDING BEFORE EXECUTION.&rdquo;
              </blockquote>

              <p
                style={{
                  fontSize: "1.15rem",
                  color: "var(--text-inverse-muted)",
                  lineHeight: 1.7,
                  maxWidth: "680px",
                  margin: "0 auto 2.5rem auto",
                }}
              >
                Too many brands throw ad spend at disjointed funnels without structured testing or
                backend follow-through. We engineer systems that combine compelling creative hooks with
                autonomous AI infrastructure so your conversion rates compound over time.
              </p>

              <div
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: "2rem",
                  color: "var(--vermilion)",
                }}
              >
                Hamdan Ahmed &bull; Founder
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 06: LEADER PERSPECTIVE — Inspired by Slide 10 */}
        {/* ========================================================================= */}
        <section
          style={{
            padding: "5.5rem 0",
            borderBottom: "1px solid var(--border-light)",
            backgroundColor: "var(--bg-body)",
          }}
        >
          <div className="site-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3.5rem",
                alignItems: "center",
              }}
            >
              {/* Grayscale Visual Portrait with Script Watermark (Slide 10) */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Script Watermark in Background */}
                <span
                  style={{
                    position: "absolute",
                    fontFamily: "var(--font-script)",
                    fontSize: "clamp(5rem, 12vw, 9rem)",
                    color: "rgba(0, 0, 0, 0.04)",
                    zIndex: 1,
                    top: "10%",
                    left: "0",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                  }}
                >
                  Hamdan Ahmed
                </span>

                <div
                  className="editorial-img-wrap"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    width: "80%",
                    maxWidth: "360px",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-light)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                    padding: "1rem",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "1 / 1",
                      backgroundColor: "#111116",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,fit=crop/wmfBm6kPSFwto7zo/1000123371-DpA2Qkh9ZXgDzsDn.png"
                      alt="Hamdan Ahmed Leadership"
                      fill
                      className="editorial-img"
                      style={{ objectFit: "cover" }}
                      sizes="360px"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "0.85rem",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700 }}>
                      FOUNDER &amp; GROWTH SPECIALIST
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--vermilion)" }}>
                      ONLINE &bull; ACTIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* Founder Statement Narrative */}
              <div>
                <div className="section-meta-tag">FOUNDER STATEMENT // LEADER SPEECH</div>
                <h2
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.25rem)",
                    fontWeight: 900,
                    marginBottom: "1.5rem",
                    lineHeight: 1.12,
                  }}
                >
                  &ldquo;Marketing is No Longer Just Copy and Spend. It is Engineering.&rdquo;
                </h2>
                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                  }}
                >
                  When I partner with an eCommerce or service brand, I don&apos;t simply set up campaigns
                  and hope the algorithm favors us. We structure the customer journey like a software
                  system: testing creatives until CPA drops, configuring server-side CAPI tracking to
                  preserve attribution, and using n8n to ensure leads are contacted within seconds.
                </p>
                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "2rem",
                  }}
                >
                  The brands that win in 2026 and beyond are those that build autonomous leverage. My role
                  is to build that leverage for you.
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                  }}
                >
                  <div>
                    <div style={{ color: "var(--text-muted)" }}>SPECIALIZATION</div>
                    <div style={{ fontWeight: 700 }}>Full-Funnel Meta Ads &amp; AI</div>
                  </div>
                  <div style={{ width: "1px", height: "30px", backgroundColor: "var(--border-light)" }} />
                  <div>
                    <div style={{ color: "var(--text-muted)" }}>FOCUS</div>
                    <div style={{ fontWeight: 700 }}>Measurable Client ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 07: SELECTED PROJECTS & CASE STUDIES — Inspired by Slide 11-15 */}
        {/* ========================================================================= */}
        <section
          id="case-studies"
          style={{
            padding: "5.5rem 0",
            borderBottom: "1px solid var(--border-light)",
            backgroundColor: "var(--bg-card)",
          }}
        >
          <div className="site-container">
            {/* Header: Script Callout "Let's dive into Projects" (Slide 11) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "4.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "var(--vermilion)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                Let&apos;s dive into Projects
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                PROVEN PERFORMANCE CASE STUDIES
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                  maxWidth: "580px",
                  marginTop: "1rem",
                }}
              >
                Real client data, verified ROAS figures, and detailed breakdowns of our advertising and
                automation workflows.
              </p>
            </div>

            {/* Case Studies Showcase (Slide 12-15 format) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
              {CASE_STUDIES.map((project, idx) => (
                <div
                  key={project.id}
                  style={{
                    backgroundColor: "var(--bg-body)",
                    border: "1px solid var(--border-light)",
                    padding: "2.5rem",
                    position: "relative",
                  }}
                  className="case-study-showcase"
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                      gap: "3rem",
                      alignItems: "center",
                    }}
                  >
                    {/* Left: Metadata & Narrative */}
                    <div>
                      {/* Project Header Tag */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          marginBottom: "1rem",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            backgroundColor: "var(--vermilion)",
                            color: "#FFFFFF",
                            padding: "0.25rem 0.65rem",
                          }}
                        >
                          PROJECT {project.number}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.78rem",
                            color: "var(--text-muted)",
                            textTransform: "uppercase",
                          }}
                        >
                          {project.industry} &bull; {project.duration}
                        </span>
                      </div>

                      {/* Brand Title */}
                      <h3
                        style={{
                          fontSize: "clamp(1.85rem, 3vw, 2.5rem)",
                          fontWeight: 900,
                          lineHeight: 1.15,
                          marginBottom: "1rem",
                        }}
                      >
                        {project.brand}
                      </h3>

                      <p
                        style={{
                          fontSize: "1.05rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.65,
                          marginBottom: "2rem",
                        }}
                      >
                        {project.summary}
                      </p>

                      {/* Big Metric Box (Slide 12-14 style) */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "1rem",
                          marginBottom: "2rem",
                          backgroundColor: "var(--bg-card)",
                          border: "1px solid var(--border-light)",
                          padding: "1.25rem",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.7rem",
                              color: "var(--text-muted)",
                              textTransform: "uppercase",
                            }}
                          >
                            {project.heroStatLabel}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-serif)",
                              fontSize: "2.25rem",
                              fontWeight: 900,
                              color: "var(--vermilion)",
                              lineHeight: 1.1,
                            }}
                          >
                            {project.heroStat}
                          </div>
                        </div>

                        <div>
                          <div
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.7rem",
                              color: "var(--text-muted)",
                              textTransform: "uppercase",
                            }}
                          >
                            {project.secondaryStatLabel}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-serif)",
                              fontSize: "2.25rem",
                              fontWeight: 900,
                              color: "var(--text-main)",
                              lineHeight: 1.1,
                            }}
                          >
                            {project.secondaryStat}
                          </div>
                        </div>
                      </div>

                      {/* Link to Dedicated Case Study Page */}
                      <Link
                        href={`/case-studies/${project.slug}`}
                        className="btn-primary"
                        style={{ display: "inline-flex" }}
                      >
                        Explore Full Case Study &amp; Funnel Strategy →
                      </Link>
                    </div>

                    {/* Right: Dashboard Preview Image */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16 / 10",
                        backgroundColor: "#0D0D12",
                        border: "1px solid var(--border-light)",
                        overflow: "hidden",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.brand} Case Study Campaign Data`}
                        fill
                        className="editorial-img"
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 550px"
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "0.75rem 1rem",
                          background: "rgba(0,0,0,0.8)",
                          color: "#FFFFFF",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>{project.brand} // META ADS</span>
                        <span style={{ color: "var(--vermilion)" }}>VERIFIED REVENUE</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* 4th Feature: Graphic Design Showcase Card */}
              <div
                id="graphics"
                style={{
                  backgroundColor: "var(--bg-body)",
                  border: "1px solid var(--border-light)",
                  borderTop: "4px solid var(--vermilion)",
                  padding: "2.5rem",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "3rem",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          backgroundColor: "var(--text-main)",
                          color: "#FFFFFF",
                          padding: "0.25rem 0.65rem",
                        }}
                      >
                        PROJECT 04
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                        }}
                      >
                        Creative Direction &bull; 16+ Live Assets
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "clamp(1.85rem, 3vw, 2.5rem)",
                        fontWeight: 900,
                        lineHeight: 1.15,
                        marginBottom: "1rem",
                      }}
                    >
                      GRAPHIC DESIGN &amp; BRAND VISUALS
                    </h3>

                    <p
                      style={{
                        fontSize: "1.05rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.65,
                        marginBottom: "2rem",
                      }}
                    >
                      Visual design is the highest leverage lever in advertising. Explore our archive of
                      high-CTR paid social ads, brand identities, event keynotes, and information designs.
                    </p>

                    <Link
                      href="/case-studies/creative-design"
                      className="btn-primary"
                      style={{ display: "inline-flex" }}
                    >
                      Open Full Design Archive (16 Works) →
                    </Link>
                  </div>

                  {/* Thumbnail Preview Mosaic */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: "0.75rem",
                    }}
                  >
                    {GRAPHIC_DESIGN_WORKS.slice(0, 6).map((item, idx) => (
                      <Link
                        key={idx}
                        href="/case-studies/creative-design"
                        style={{
                          position: "relative",
                          aspectRatio: "1 / 1",
                          backgroundColor: "#16161B",
                          overflow: "hidden",
                          border: "1px solid var(--border-light)",
                          display: "block",
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="150px"
                          style={{ objectFit: "cover" }}
                          className="editorial-img"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 08: TESTIMONIALS — Inspired by Slide 8 */}
        {/* ========================================================================= */}
        <section
          id="testimonials"
          style={{
            padding: "5.5rem 0",
            borderBottom: "1px solid var(--border-light)",
            backgroundColor: "var(--bg-body)",
          }}
        >
          <div className="site-container">
            {/* Header: "TEAM / TESTIMONIALS" with Orange Stamp (Slide 8) */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "3.5rem",
                flexWrap: "wrap",
                gap: "2rem",
              }}
            >
              <div>
                <div className="section-meta-tag">05 // CLIENT VALIDATION</div>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(3rem, 6vw, 4.5rem)",
                      fontWeight: 900,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    TESTIMONIALS
                  </h2>
                  <span
                    style={{
                      position: "absolute",
                      width: "64px",
                      height: "64px",
                      backgroundColor: "var(--stamp-gray)",
                      border: "1px solid #D4D4D8",
                      borderRadius: "50%",
                      top: "50%",
                      left: "-15px",
                      transform: "translateY(-50%)",
                      zIndex: 1,
                      opacity: 0.9,
                    }}
                  />
                </div>
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-secondary)",
                  maxWidth: "460px",
                  lineHeight: 1.6,
                }}
              >
                Feedback directly from founders and operators who scaled their advertising and automated
                operations alongside Hamdan.
              </p>
            </div>

            {/* Testimonials Cards (Slide 8 style) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2.5rem",
              }}
            >
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-light)",
                    borderTop: "4px solid var(--vermilion)",
                    padding: "2.75rem 2.25rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                  }}
                >
                  <div>
                    {/* 5-Star Rating & Verified Badge */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "1.5rem",
                        paddingBottom: "1rem",
                        borderBottom: "1px solid var(--border-light)",
                      }}
                    >
                      <div style={{ color: "var(--vermilion)", fontSize: "1.1rem", letterSpacing: "2px" }}>
                        ★★★★★
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "var(--vermilion)",
                          backgroundColor: "var(--vermilion-subtle)",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "2px",
                        }}
                      >
                        VERIFIED CLIENT
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: "1.1rem",
                        lineHeight: 1.7,
                        color: "var(--text-main)",
                        fontStyle: "italic",
                        marginBottom: "2rem",
                      }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        borderTop: "1px solid var(--border-light)",
                        paddingTop: "1.25rem",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontWeight: 800,
                            fontSize: "1.2rem",
                          }}
                        >
                          {t.client}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                            textTransform: "uppercase",
                          }}
                        >
                          {t.role} &bull; {t.project}
                        </div>
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "var(--vermilion)",
                        }}
                      >
                        {t.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 09: CONTACT / "LET'S TALK" — Inspired by Slide 16 */}
        {/* ========================================================================= */}
        <section
          id="contact"
          style={{
            padding: "6rem 0",
            backgroundColor: "var(--bg-card)",
            position: "relative",
          }}
        >
          <div className="site-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3.5rem",
                alignItems: "flex-start",
              }}
            >
              {/* Left Side: Slide 16 Big Vermilion Graphic & Call to Action */}
              <div>
                <div className="section-meta-tag">06 // COLLABORATE</div>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
                    fontWeight: 900,
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                    marginBottom: "1.5rem",
                  }}
                >
                  LET&apos;S SCALE YOUR BRAND TOGETHER.
                </h2>

                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    marginBottom: "2.5rem",
                  }}
                >
                  Whether you are looking to scale your eCommerce store to 5x+ ROAS with full-funnel Meta
                  Ads or want to automate manual operations using AI agents and n8n workflows, let&apos;s
                  construct a tailored growth plan.
                </p>

                {/* Direct Contact Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div
                    style={{
                      padding: "1.25rem",
                      backgroundColor: "var(--bg-body)",
                      border: "1px solid var(--border-light)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                      }}
                    >
                      DIRECT EMAIL INBOX
                    </div>
                    <a
                      href="mailto:ThryveDigital@hamdanahmed.com"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "1rem",
                        color: "var(--vermilion)",
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      ThryveDigital@hamdanahmed.com
                    </a>
                  </div>

                  <div
                    style={{
                      padding: "1.25rem",
                      backgroundColor: "var(--bg-body)",
                      border: "1px solid var(--border-light)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                        }}
                      >
                        COMMUNICATION CHANNELS
                      </div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", fontWeight: 600 }}>
                        Instagram &bull; WhatsApp &bull; Zoom
                      </div>
                    </div>
                    <a
                      href="https://www.instagram.com/hamdannahmeddd"
                      target="_blank"
                      rel="noreferrer"
                      className="pill pill-orange"
                      style={{ textDecoration: "none" }}
                    >
                      @hamdannahmeddd ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side: Interactive Dispatch Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}

