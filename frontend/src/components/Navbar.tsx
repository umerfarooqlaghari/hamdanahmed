"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  isCaseStudy?: boolean;
}

export default function Navbar({ isCaseStudy = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(244, 244, 246, 0.94)" : "var(--bg-body)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid var(--border-light)",
        transition: "all 0.25s ease",
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "var(--header-h)",
          }}
        >
          {/* Brand Mark */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.875rem",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "var(--vermilion)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontFamily: "var(--font-serif)",
                fontSize: "1.25rem",
                fontWeight: 900,
                letterSpacing: "-0.05em",
              }}
            >
              H
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                HAMDAN AHMED
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                AI &amp; Growth Specialist
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "2rem",
            }}
            className="desktop-nav"
          >
            {!isCaseStudy ? (
              <>
                <a href="#about" className="nav-link">
                  01. ABOUT
                </a>
                <a href="#services" className="nav-link">
                  02. SERVICES
                </a>
                <a href="#case-studies" className="nav-link">
                  03. CASE STUDIES
                </a>
                <a href="#graphics" className="nav-link">
                  04. GRAPHICS
                </a>
                <a href="#testimonials" className="nav-link">
                  05. REVIEWS
                </a>
              </>
            ) : (
              <>
                <Link href="/" className="nav-link">
                  ← RETURN TO MAIN PORTFOLIO
                </Link>
                <Link href="/case-studies/thryve" className="nav-link">
                  01. THRYVE
                </Link>
                <Link href="/case-studies/royal-essence" className="nav-link">
                  02. ROYAL ESSENCE
                </Link>
                <Link href="/case-studies/emerald-wear" className="nav-link">
                  03. EMERALD WEAR
                </Link>
                <Link href="/case-studies/creative-design" className="nav-link">
                  04. DESIGN GALLERY
                </Link>
              </>
            )}
          </nav>

          {/* Right Action */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              className="availability-badge"
              style={{
                display: "none",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "#166534",
                backgroundColor: "#DCFCE7",
                padding: "0.3rem 0.65rem",
                borderRadius: "999px",
                border: "1px solid #BBF7D0",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#22C55E",
                  display: "inline-block",
                  animation: "pulse-green 2s infinite",
                }}
              />
              AVAILABLE FOR HIRE
            </div>

            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: "0.6rem 1.25rem",
                fontSize: "0.8rem",
              }}
            >
              Let&apos;s Talk <span>→</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-burger-btn"
              aria-label="Toggle Navigation Menu"
              style={{
                display: "inline-flex",
                flexDirection: "column",
                gap: "5px",
                background: "none",
                border: "1px solid var(--border-light)",
                padding: "8px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "2px",
                  backgroundColor: "var(--text-main)",
                  display: "block",
                  transition: "0.2s",
                  transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                }}
              />
              <span
                style={{
                  width: "20px",
                  height: "2px",
                  backgroundColor: "var(--text-main)",
                  display: "block",
                  opacity: mobileMenuOpen ? 0 : 1,
                  transition: "0.2s",
                }}
              />
              <span
                style={{
                  width: "20px",
                  height: "2px",
                  backgroundColor: "var(--text-main)",
                  display: "block",
                  transition: "0.2s",
                  transform: mobileMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "var(--bg-card)",
            borderBottom: "2px solid var(--vermilion)",
            padding: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {!isCaseStudy ? (
              <>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  01. ABOUT &amp; SKILLS
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  02. SERVICES &amp; EXPERTISE
                </a>
                <a
                  href="#case-studies"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  03. PERFORMANCE CASE STUDIES
                </a>
                <a
                  href="#graphics"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  04. GRAPHIC DESIGN
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  05. CLIENT TESTIMONIALS
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link"
                  style={{ color: "var(--vermilion)", fontWeight: 700 }}
                >
                  06. CONTACT &amp; LET&apos;S TALK →
                </a>
              </>
            ) : (
              <>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link"
                  style={{ fontWeight: 700 }}
                >
                  ← RETURN TO MAIN PORTFOLIO
                </Link>
                <Link
                  href="/case-studies/thryve"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  01. THRYVE FASHION
                </Link>
                <Link
                  href="/case-studies/royal-essence"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  02. ROYAL ESSENCE PERFUME
                </Link>
                <Link
                  href="/case-studies/emerald-wear"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  03. EMERALD WEAR JEWELLERY
                </Link>
                <Link
                  href="/case-studies/creative-design"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  04. CREATIVE DESIGN GALLERY
                </Link>
              </>
            )}
          </div>
        </div>
      )}

    </header>
  );
}

