"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GRAPHIC_DESIGN_WORKS } from "@/data/portfolioData";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredWorks =
    activeCategory === "All Works"
      ? GRAPHIC_DESIGN_WORKS
      : GRAPHIC_DESIGN_WORKS.filter((w) => w.category === activeCategory);

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
                <span style={{ color: "var(--text-secondary)" }}>CREATIVE WORK</span>
                <span style={{ color: "var(--text-muted)" }}>/</span>
                <span style={{ color: "var(--vermilion)", fontWeight: 700 }}>
                  GRAPHIC DESIGN &amp; AD ASSETS
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
                ← BACK TO MAIN PORTFOLIO
              </Link>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section
          style={{
            padding: "4.5rem 0 3.5rem 0",
            borderBottom: "1px solid var(--border-light)",
          }}
        >
          <div className="site-container">
            <div className="section-meta-tag">04 // CREATIVE DIRECTION</div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3rem",
                alignItems: "flex-end",
                marginBottom: "2.5rem",
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                    lineHeight: 1.05,
                    fontWeight: 900,
                    marginBottom: "1.25rem",
                  }}
                >
                  GRAPHIC DESIGN &amp; BRAND CREATIVE
                </h1>
                <p
                  style={{
                    fontSize: "1.15rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    maxWidth: "680px",
                  }}
                >
                  Crafting clean, purposeful, and high-conversion visual design where strategic marketing
                  meets editorial aesthetics.
                </p>
              </div>

              {/* Design Manifesto Box */}
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-light)",
                  borderLeft: "4px solid var(--vermilion)",
                  padding: "1.75rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--vermilion)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "0.5rem",
                  }}
                >
                  DESIGN PHILOSOPHY
                </div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;My journey in graphic design has been driven by a passion for turning ideas into visually
                  engaging and meaningful designs. I approach graphic design with both creativity and strategy,
                  focusing on visuals that help businesses communicate their message effectively and convert.&rdquo;
                </p>
                <div
                  style={{
                    fontFamily: "var(--font-script)",
                    fontSize: "1.5rem",
                    color: "var(--vermilion)",
                    marginTop: "0.75rem",
                  }}
                >
                  Hamdan Ahmed
                </div>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-light)",
              }}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    padding: "0.5rem 1.15rem",
                    borderRadius: "999px",
                    border:
                      activeCategory === cat
                        ? "1px solid var(--vermilion)"
                        : "1px solid var(--border-light)",
                    backgroundColor:
                      activeCategory === cat ? "var(--vermilion)" : "var(--bg-card)",
                    color: activeCategory === cat ? "#FFFFFF" : "var(--text-secondary)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section style={{ padding: "4rem 0" }}>
          <div className="site-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "2rem",
              }}
            >
              {filteredWorks.map((work, idx) => (
                <div
                  key={idx}
                  className="work-card"
                  onClick={() => setSelectedImage(work.image)}
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-light)",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Image Container */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "1 / 1",
                      backgroundColor: "#0D0D10",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      className="work-image"
                    />
                    <div className="image-overlay">
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          backgroundColor: "var(--vermilion)",
                          color: "#FFFFFF",
                          padding: "0.4rem 0.8rem",
                        }}
                      >
                        EXPAND VIEW ↗
                      </span>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div style={{ padding: "1.5rem" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--vermilion)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {work.category}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {work.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      {work.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Bar */}
        <section
          style={{
            borderTop: "1px solid var(--border-light)",
            backgroundColor: "var(--bg-card)",
            padding: "4rem 0",
          }}
        >
          <div className="site-container">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              <div className="section-meta-tag">COLLABORATE WITH HAMDAN</div>
              <h2
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 900,
                  marginBottom: "1rem",
                }}
              >
                Need High-Converting Creatives for Your Next Campaign?
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "2rem",
                }}
              >
                Whether you need high-CTR Meta ad creatives, complete brand identity assets, or
                conversion-focused marketing graphics, let&apos;s build visuals that perform.
              </p>
              <Link href="/#contact" className="btn-primary">
                Inquire for Creative Direction →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.88)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            cursor: "zoom-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "85vh",
              width: "700px",
              height: "700px",
            }}
          >
            <Image
              src={selectedImage}
              alt="Design Preview Full View"
              fill
              style={{ objectFit: "contain" }}
              sizes="90vw"
            />
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0px",
                backgroundColor: "var(--vermilion)",
                color: "#FFFFFF",
                border: "none",
                padding: "6px 14px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              CLOSE &times;
            </button>
          </div>
        </div>
      )}

      <Footer />

    </div>
  );
}

