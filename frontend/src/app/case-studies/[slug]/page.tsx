import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CASE_STUDIES, CaseStudy } from "@/data/portfolioData";
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
    title: `${project.brand} &mdash; ${project.title} | Hamdan Ahmed Portfolio`,
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
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-body)" }}>
      <Navbar isCaseStudy={true} />

      <main style={{ paddingBottom: "6rem" }}>
        {/* Breadcrumb Header */}
        <section
          style={{
            borderBottom: "1px solid var(--border-light)",
            backgroundColor: "var(--bg-card)",
            padding: "1.25rem 0",
          }}
        >
          <div className="site-container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Link
                  href="/"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  PORTFOLIO
                </Link>
                <span style={{ color: "var(--text-muted)" }}>/</span>
                <span style={{ color: "var(--text-secondary)" }}>CASE STUDIES</span>
                <span style={{ color: "var(--text-muted)" }}>/</span>
                <span style={{ color: "var(--vermilion)", fontWeight: 700 }}>
                  PROJECT {project.number} &mdash; {project.brand}
                </span>
              </div>

              <Link
                href="/"
                style={{
                  color: "var(--vermilion)",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                ← BACK TO MAIN PAGE
              </Link>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section
          style={{
            padding: "4rem 0 3rem 0",
            borderBottom: "1px solid var(--border-light)",
            position: "relative",
          }}
        >
          <div className="site-container">
            {/* Project Label & Number */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.5rem",
                borderBottom: "1px solid var(--border-light)",
                paddingBottom: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    backgroundColor: "var(--vermilion)",
                    padding: "0.25rem 0.65rem",
                  }}
                >
                  PROJECT {project.number}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    color: "var(--text-secondary)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {project.category} &bull; {project.duration}
                </span>
              </div>

              <span
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: "1.75rem",
                  color: "var(--vermilion)",
                }}
              >
                {project.brand}
              </span>
            </div>

            {/* Title & Key Highlights Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3rem",
                alignItems: "flex-end",
                marginBottom: "3rem",
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)",
                    lineHeight: 1.08,
                    fontWeight: 900,
                    marginBottom: "1.5rem",
                  }}
                >
                  {project.title}
                </h1>
                <p
                  style={{
                    fontSize: "1.15rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    maxWidth: "600px",
                  }}
                >
                  {project.summary}
                </p>
              </div>

              {/* Big Stat Boxes (Slide deck style) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.25rem",
                }}
              >
                <div
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-light)",
                    borderTop: "4px solid var(--vermilion)",
                    padding: "1.75rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.heroStatLabel}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "2.75rem",
                      fontWeight: 900,
                      color: "var(--vermilion)",
                      lineHeight: 1,
                    }}
                  >
                    {project.heroStat}
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-light)",
                    borderTop: "4px solid var(--text-main)",
                    padding: "1.75rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.secondaryStatLabel}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "2.75rem",
                      fontWeight: 900,
                      color: "var(--text-main)",
                      lineHeight: 1,
                    }}
                  >
                    {project.secondaryStat}
                  </div>
                </div>
              </div>
            </div>

            {/* Campaign Visual Asset */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "auto",
                aspectRatio: "16 / 9",
                maxHeight: "620px",
                backgroundColor: "var(--bg-dark)",
                border: "1px solid var(--border-light)",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src={project.image}
                alt={`${project.brand} Case Study Campaign Dashboard`}
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1rem 1.5rem",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                }}
              >
                <span>CAMPAIGN ATTRIBUTION DASHBOARD // {project.brand}</span>
                <span style={{ color: "var(--vermilion)" }}>VERIFIED PERFORMANCE DATA</span>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Breakdown Sections */}
        <section style={{ padding: "4rem 0" }}>
          <div className="site-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3.5rem",
              }}
            >
              {/* Left Column: Narrative Details */}
              <div style={{ flex: 2 }}>
                {/* 1. The Challenge */}
                <div style={{ marginBottom: "3.5rem" }}>
                  <div className="section-meta-tag">01 // THE CHALLENGE</div>
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      marginBottom: "1rem",
                    }}
                  >
                    Overcoming Scale Ceilings &amp; Rising Acquisition Costs
                  </h2>
                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {project.challenge}
                  </p>
                </div>

                {/* 2. Strategy & Funnel Architecture */}
                <div style={{ marginBottom: "3.5rem" }}>
                  <div className="section-meta-tag">02 // ARCHITECTURE &amp; STRATEGY</div>
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      marginBottom: "1rem",
                    }}
                  >
                    {project.strategy.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      marginBottom: "2rem",
                    }}
                  >
                    {project.strategy.description}
                  </p>

                  {/* Funnel Stage Cards */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {project.strategy.funnel.map((step, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: "var(--bg-card)",
                          border: "1px solid var(--border-light)",
                          borderLeft: "4px solid var(--vermilion)",
                          padding: "1.5rem",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "0.5rem",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.75rem",
                              color: "var(--vermilion)",
                              fontWeight: 700,
                            }}
                          >
                            STAGE 0{idx + 1}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.72rem",
                              color: "var(--text-muted)",
                            }}
                          >
                            {step.target}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            marginBottom: "0.5rem",
                          }}
                        >
                          {step.stage}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.95rem",
                            color: "var(--text-secondary)",
                            lineHeight: 1.6,
                          }}
                        >
                          <strong style={{ color: "var(--text-main)" }}>Creative Mechanism: </strong>
                          {step.creative}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Core Deliverables */}
                <div style={{ marginBottom: "3.5rem" }}>
                  <div className="section-meta-tag">03 // EXECUTION STACK</div>
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      marginBottom: "1.5rem",
                    }}
                  >
                    Implemented Systems &amp; Workflows
                  </h2>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                      gap: "1rem",
                    }}
                  >
                    {project.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: "var(--bg-card)",
                          border: "1px solid var(--border-light)",
                          padding: "1.25rem",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.75rem",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--vermilion)",
                            fontFamily: "var(--font-mono)",
                            fontWeight: 700,
                            fontSize: "0.85rem",
                          }}
                        >
                          0{idx + 1}.
                        </span>
                        <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Strategic Learnings */}
                <div>
                  <div className="section-meta-tag">04 // INSIGHTS &amp; TAKEAWAYS</div>
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      marginBottom: "1rem",
                    }}
                  >
                    What This Means For Your Brand
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {project.learnings.map((learn, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "1rem",
                          padding: "1.25rem",
                          backgroundColor: "var(--bg-card)",
                          border: "1px solid var(--border-light)",
                        }}
                      >
                        <div
                          style={{
                            width: "24px",
                            height: "24px",
                            backgroundColor: "var(--vermilion-subtle)",
                            color: "var(--vermilion)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            flexShrink: 0,
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </div>
                        <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                          {learn}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Metadata Sidebar & Quick Stats */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    position: "sticky",
                    top: "100px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}
                >
                  {/* Metadata Table */}
                  <div
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-light)",
                      padding: "2rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--vermilion)",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: "1rem",
                        borderBottom: "1px solid var(--border-light)",
                        paddingBottom: "0.5rem",
                      }}
                    >
                      PROJECT SPECIFICATIONS
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)" }}>
                          CLIENT BRAND
                        </div>
                        <div style={{ fontWeight: 700, fontSize: "1rem" }}>{project.brand}</div>
                      </div>

                      <div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)" }}>
                          INDUSTRY / SECTOR
                        </div>
                        <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{project.industry}</div>
                      </div>

                      <div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)" }}>
                          TARGET MARKET
                        </div>
                        <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{project.market}</div>
                      </div>

                      <div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)" }}>
                          CAMPAIGN DURATION
                        </div>
                        <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{project.duration}</div>
                      </div>

                      <div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)" }}>
                          ADVERTISING PLATFORMS
                        </div>
                        <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{project.platform}</div>
                      </div>
                    </div>
                  </div>

                  {/* Results Metric Card */}
                  <div
                    style={{
                      backgroundColor: "var(--bg-dark)",
                      color: "#FFFFFF",
                      padding: "2rem",
                      border: "1px solid var(--border-dark)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--vermilion)",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: "1.25rem",
                      }}
                    >
                      FINAL MEASURED OUTCOMES
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {project.results.map((r, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderBottom: "1px solid rgba(255,255,255,0.08)",
                            paddingBottom: "0.6rem",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.78rem",
                              color: "var(--text-inverse-muted)",
                            }}
                          >
                            {r.metric}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-serif)",
                              fontSize: "1.15rem",
                              fontWeight: 700,
                              color: "var(--vermilion)",
                            }}
                          >
                            {r.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: "2rem" }}>
                      <a
                        href="/#contact"
                        className="btn-primary"
                        style={{ width: "100%", textAlign: "center" }}
                      >
                        Request Case Study Briefing →
                      </a>
                    </div>
                  </div>

                  {/* Client Quote Box if exists */}
                  {project.testimonial && (
                    <div
                      style={{
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border-light)",
                        padding: "1.75rem",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "3rem",
                          lineHeight: 0.8,
                          color: "var(--vermilion)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        “
                      </div>
                      <p
                        style={{
                          fontSize: "0.95rem",
                          fontStyle: "italic",
                          lineHeight: 1.6,
                          marginBottom: "1rem",
                        }}
                      >
                        {project.testimonial.quote}
                      </p>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
                        <strong>{project.testimonial.author}</strong> &mdash;{" "}
                        <span style={{ color: "var(--text-muted)" }}>
                          {project.testimonial.title}, {project.brand}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Pagination & Jump to Next */}
        <section
          style={{
            borderTop: "1px solid var(--border-light)",
            borderBottom: "1px solid var(--border-light)",
            backgroundColor: "var(--bg-card)",
            padding: "2.5rem 0",
          }}
        >
          <div className="site-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
              }}
            >
              <Link
                href={`/case-studies/${prevProject.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  ← PREVIOUS CASE STUDY
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--text-main)",
                  }}
                >
                  PROJECT {prevProject.number}: {prevProject.brand}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--vermilion)" }}>
                  {prevProject.heroStat} {prevProject.heroStatLabel}
                </span>
              </Link>

              <Link
                href={`/case-studies/${nextProject.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  textAlign: "right",
                  gap: "0.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  NEXT CASE STUDY →
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--text-main)",
                  }}
                >
                  PROJECT {nextProject.number}: {nextProject.brand}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--vermilion)" }}>
                  {nextProject.heroStat} {nextProject.heroStatLabel}
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
