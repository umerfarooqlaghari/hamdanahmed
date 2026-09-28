"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-card)",
        borderTop: "1px solid var(--border-light)",
        paddingTop: "4.5rem",
        paddingBottom: "3rem",
        position: "relative",
      }}
    >
      <div className="site-container">
        {/* Top Editorial Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Col 1: Identity */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "var(--vermilion)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 900,
                  fontSize: "1.1rem",
                }}
              >
                H
              </div>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                HAMDAN AHMED
              </span>
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                maxWidth: "340px",
                marginBottom: "1.5rem",
              }}
            >
              AI Automation &amp; Digital Marketing Specialist. Engineering high-converting Meta Ads
              campaigns and autonomous workflow architectures for ambitious modern businesses.
            </p>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--vermilion)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "var(--vermilion)",
                  display: "inline-block",
                }}
              />
              LOCATION // PAKISTAN &bull; GLOBAL CLIENTS
            </div>
          </div>

          {/* Col 2: Navigation Index */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--vermilion)",
                marginBottom: "1.25rem",
              }}
            >
              INDEX &bull; NAVIGATION
            </div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
              }}
            >
              <li>
                <a href="#about" className="footer-link">
                  01. ABOUT &amp; BIOGRAPHY
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  02. SERVICES &amp; EXPERTISE
                </a>
              </li>
              <li>
                <a href="#case-studies" className="footer-link">
                  03. PERFORMANCE CASE STUDIES
                </a>
              </li>
              <li>
                <a href="#graphics" className="footer-link">
                  04. GRAPHIC &amp; AD CREATIVE
                </a>
              </li>
              <li>
                <a href="#testimonials" className="footer-link">
                  05. CLIENT TESTIMONIALS
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  06. GET IN TOUCH / BOOKING
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Case Studies Direct */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--vermilion)",
                marginBottom: "1.25rem",
              }}
            >
              DETAILED CASE STUDIES
            </div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
              }}
            >
              <li>
                <Link href="/case-studies/thryve" className="footer-link">
                  &bull; THRYVE &mdash; 4.95x ROAS (PKR 742K)
                </Link>
              </li>
              <li>
                <Link href="/case-studies/royal-essence" className="footer-link">
                  &bull; ROYAL ESSENCE &mdash; 5.3x ROAS (PKR 559K)
                </Link>
              </li>
              <li>
                <Link href="/case-studies/emerald-wear" className="footer-link">
                  &bull; EMERALD WEAR &mdash; 4.2x ROAS (594 Orders)
                </Link>
              </li>
              <li>
                <Link href="/case-studies/creative-design" className="footer-link">
                  &bull; DESIGN &amp; BRANDING ARCHIVE (16+ Works)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Channels */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--vermilion)",
                marginBottom: "1.25rem",
              }}
            >
              DIRECT CONTACT
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  marginBottom: "0.25rem",
                }}
              >
                DIRECT INBOX
              </div>
              <a
                href="mailto:ThryveDigital@hamdanahmed.com"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem",
                  color: "var(--vermilion)",
                  fontWeight: 600,
                  textDecoration: "none",
                  wordBreak: "break-all",
                }}
              >
                ThryveDigital@hamdanahmed.com
              </a>
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.25rem" }}>
              <a
                href="https://www.instagram.com/hamdannahmeddd"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="Instagram profile"
              >
                Instagram ↗
              </a>
              <a
                href="https://wa.me/?text=Hi%20Hamdan,%20I%20would%20like%20to%20discuss%20a%20marketing%20project."
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="WhatsApp chat"
              >
                WhatsApp ↗
              </a>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="hairline-divider" style={{ marginBottom: "2.5rem" }} />

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              letterSpacing: "0.04em",
            }}
          >
            &copy; {new Date().getFullYear()} HAMDAN AHMED. ALL RIGHTS RESERVED. DESIGNED WITH SWISS EDITORIAL PRECISION.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "none",
              border: "1px solid var(--border-light)",
              padding: "0.45rem 1rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-main)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            className="back-to-top"
          >
            TOP OF PAGE <span>↑</span>
          </button>
        </div>
      </div>

    </footer>
  );
}

