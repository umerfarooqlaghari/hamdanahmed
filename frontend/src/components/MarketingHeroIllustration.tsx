"use client";

import { motion } from "framer-motion";
import { useId } from "react";

export function MarketingHeroIllustration() {
  const uid = useId().replace(/:/g, "");

  return (
    <div className="relative w-full max-w-2xl mx-auto select-none">
      {/* Dynamic ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_65%),radial-gradient(circle_at_20%_40%,rgba(249,115,22,0.15),transparent_60%)] blur-2xl"
      />

      {/* Main SVG Vector Canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full aspect-[860/760] filter drop-shadow-2xl"
      >
        <svg
          viewBox="0 0 860 760"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id={`laptopBody-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <linearGradient id={`laptopRim-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="50%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>

            <linearGradient id={`baseChassis-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="40%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>

            <linearGradient id={`screenBezel-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0a0f1d" />
              <stop offset="100%" stopColor="#030712" />
            </linearGradient>

            {/* Megaphone Orange Gradients */}
            <linearGradient id={`megaOrange-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff782d" />
              <stop offset="50%" stopColor="#f95700" />
              <stop offset="100%" stopColor="#d84300" />
            </linearGradient>

            <linearGradient id={`megaConeWhite-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            <linearGradient id={`cardWhite-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>

            <linearGradient id={`cardDarkGlass-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id={`instaGrad-${uid}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#feda75" />
              <stop offset="25%" stopColor="#fa7e1e" />
              <stop offset="50%" stopColor="#d62976" />
              <stop offset="75%" stopColor="#962fbf" />
              <stop offset="100%" stopColor="#4f5bd5" />
            </linearGradient>

            <linearGradient id={`fbGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            <linearGradient id={`liGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0077b5" />
              <stop offset="100%" stopColor="#005582" />
            </linearGradient>

            <linearGradient id={`ytGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff0000" />
              <stop offset="100%" stopColor="#cc0000" />
            </linearGradient>

            <linearGradient id={`mailGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* Drop Shadows */}
            <filter id={`cardShadow-${uid}`} x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#000000" floodOpacity="0.14" />
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.08" />
            </filter>

            <filter id={`megaShadow-${uid}`} x="-30%" y="-20%" width="160%" height="150%">
              <feDropShadow dx="-10" dy="24" stdDeviation="20" floodColor="#000000" floodOpacity="0.3" />
            </filter>

            <filter id={`glowOrange-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id={`badgeShadow-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000000" floodOpacity="0.18" />
            </filter>
          </defs>

          {/* ========================================================================= */}
          {/* 1. CURVED DOTTED/DASHED CONNECTING MOTION TRAILS                          */}
          {/* ========================================================================= */}
          <g opacity="0.6">
            {/* Trail from Megaphone to Top Cards */}
            <path
              d="M 170,250 C 180,180 220,130 270,120"
              stroke="#fb923c"
              strokeWidth="2"
              strokeDasharray="4 6"
            />
            {/* Trail from Megaphone to Facebook/Instagram */}
            <path
              d="M 230,220 C 300,160 380,130 460,110"
              stroke="#fb923c"
              strokeWidth="2"
              strokeDasharray="4 6"
            />
            {/* Trail to Growth Card */}
            <path
              d="M 520,130 C 560,170 580,120 620,120"
              stroke="#f97316"
              strokeWidth="2"
              strokeDasharray="4 6"
            />
            {/* Trail from Laptop to Google Ads & Target */}
            <path
              d="M 680,290 C 730,280 750,290 770,270"
              stroke="#fb923c"
              strokeWidth="2"
              strokeDasharray="4 6"
            />
            <path
              d="M 690,400 C 730,420 740,460 760,500"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="4 6"
            />
            {/* Bottom trail to Analytics & Leads */}
            <path
              d="M 250,580 C 330,620 400,600 480,630"
              stroke="#94a3b8"
              strokeWidth="2"
              strokeDasharray="5 7"
            />
          </g>

          {/* ========================================================================= */}
          {/* 2. CENTRAL PERSPECTIVE LAPTOP WITH DASHBOARD                              */}
          {/* ========================================================================= */}
          <g id="laptop-group" transform="translate(60, 20)">
            {/* Screen Drop Shadow */}
            <rect
              x="200"
              y="180"
              width="450"
              height="300"
              rx="20"
              fill="#000000"
              opacity="0.35"
              filter="blur(20px)"
            />

            {/* Laptop Screen Outer Bezel (Sleek dark aluminum frame) */}
            <rect
              x="195"
              y="170"
              width="460"
              height="315"
              rx="22"
              fill={`url(#laptopBody-${uid})`}
              stroke={`url(#laptopRim-${uid})`}
              strokeWidth="2"
            />

            {/* Laptop Camera dot */}
            <circle cx="425" cy="180" r="2.5" fill="#475569" />
            <circle cx="425" cy="180" r="1" fill="#38bdf8" />

            {/* Laptop Screen Display Canvas */}
            <g transform="translate(205, 188)">
              {/* Screen Background: Clean, high-taste white dashboard */}
              <rect
                x="0"
                y="0"
                width="440"
                height="288"
                rx="14"
                fill="#ffffff"
              />

              {/* Sidebar (Dark modern navigation) */}
              <g>
                <rect x="0" y="0" width="85" height="288" rx="14" fill="#0b1329" />
                {/* Keep right side flat */}
                <rect x="75" y="0" width="10" height="288" fill="#0b1329" />

                <text x="12" y="24" fill="#ffffff" fontSize="9.5" fontWeight="700" fontFamily="var(--font-grotesk)" letterSpacing="-0.02em">
                  Dashboard
                </text>

                {/* Sidebar menu items */}
                {[
                  { label: "Overview", active: true, y: 46 },
                  { label: "Analytics", active: false, y: 70 },
                  { label: "Campaigns", active: false, y: 94 },
                  { label: "Audience", active: false, y: 118 },
                  { label: "Creative", active: false, y: 142 },
                  { label: "Leads", active: false, y: 166 },
                  { label: "Reports", active: false, y: 190 },
                  { label: "Settings", active: false, y: 214 },
                ].map((item) => (
                  <g key={item.label} transform={`translate(0, ${item.y})`}>
                    {item.active && (
                      <rect x="6" y="-10" width="73" height="18" rx="5" fill="#f97316" fillOpacity="0.2" />
                    )}
                    <circle cx="14" cy="-1" r="2.5" fill={item.active ? "#f97316" : "#64748b"} />
                    <text
                      x="23"
                      y="2"
                      fill={item.active ? "#f97316" : "#94a3b8"}
                      fontSize="7.5"
                      fontWeight={item.active ? "600" : "500"}
                      fontFamily="var(--font-jetbrains)"
                    >
                      {item.label}
                    </text>
                  </g>
                ))}
              </g>

              {/* Main Content Area */}
              <g transform="translate(95, 12)">
                {/* Top Header */}
                <text x="0" y="12" fill="#0f172a" fontSize="11" fontWeight="700" fontFamily="var(--font-grotesk)">
                  Overview
                </text>
                <text x="260" y="12" fill="#64748b" fontSize="7" fontFamily="var(--font-jetbrains)">
                  Apr 1 – Apr 30, 2026 ▾
                </text>

                {/* 4 Metric Cards */}
                <g transform="translate(0, 24)">
                  {[
                    { label: "Total Visitors", val: "25.8K", growth: "+18.2%", color: "#10b981", x: 0 },
                    { label: "Leads Generated", val: "3.6K", growth: "+22.7%", color: "#10b981", x: 82 },
                    { label: "Total Reach", val: "128K", growth: "+27.3%", color: "#10b981", x: 164 },
                    { label: "Conversions", val: "6.7%", growth: "+15.6%", color: "#f97316", x: 246 },
                  ].map((m) => (
                    <g key={m.label} transform={`translate(${m.x}, 0)`}>
                      <rect x="0" y="0" width="76" height="42" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
                      <text x="7" y="11" fill="#64748b" fontSize="6.5" fontFamily="var(--font-jetbrains)">
                        {m.label}
                      </text>
                      <text x="7" y="27" fill="#0f172a" fontSize="12" fontWeight="700" fontFamily="var(--font-grotesk)">
                        {m.val}
                      </text>
                      <text x="7" y="37" fill={m.color} fontSize="6" fontWeight="600" fontFamily="var(--font-jetbrains)">
                        ▲ {m.growth}
                      </text>
                    </g>
                  ))}
                </g>

                {/* Performance Dual-Line Graph (Center Left) */}
                <g transform="translate(0, 76)">
                  <rect x="0" y="0" width="205" height="110" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.8" />
                  <text x="10" y="15" fill="#0f172a" fontSize="8.5" fontWeight="600" fontFamily="var(--font-grotesk)">
                    Performance
                  </text>
                  
                  {/* Legend */}
                  <circle cx="95" cy="12" r="3" fill="#f97316" />
                  <text x="102" y="15" fill="#64748b" fontSize="6" fontFamily="var(--font-jetbrains)">Traffic</text>
                  <circle cx="145" cy="12" r="3" fill="#0066cc" />
                  <text x="152" y="15" fill="#64748b" fontSize="6" fontFamily="var(--font-jetbrains)">Conversions</text>

                  {/* Grid Lines */}
                  {[32, 54, 76, 94].map((y) => (
                    <line key={y} x1="12" y1={y} x2="195" y2={y} stroke="#f1f5f9" strokeWidth="0.8" />
                  ))}

                  {/* Line 1: Orange (Website Traffic) */}
                  <path
                    d="M 14,75 Q 35,50 60,70 T 110,48 T 150,60 T 192,36"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Dots on orange line */}
                  {[
                    [14, 75], [60, 70], [110, 48], [150, 60], [192, 36]
                  ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="2.5" fill="#ffffff" stroke="#f97316" strokeWidth="1.5" />
                  ))}

                  {/* Line 2: Blue (Conversions) */}
                  <path
                    d="M 14,88 Q 40,78 65,85 T 110,72 T 150,78 T 192,52"
                    fill="none"
                    stroke="#0066cc"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {[
                    [14, 88], [65, 85], [110, 72], [150, 78], [192, 52]
                  ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="2" fill="#ffffff" stroke="#0066cc" strokeWidth="1.2" />
                  ))}

                  {/* X Axis dates */}
                  <text x="12" y="104" fill="#94a3b8" fontSize="5.5" fontFamily="var(--font-jetbrains)">Apr 1</text>
                  <text x="55" y="104" fill="#94a3b8" fontSize="5.5" fontFamily="var(--font-jetbrains)">Apr 7</text>
                  <text x="100" y="104" fill="#94a3b8" fontSize="5.5" fontFamily="var(--font-jetbrains)">Apr 14</text>
                  <text x="145" y="104" fill="#94a3b8" fontSize="5.5" fontFamily="var(--font-jetbrains)">Apr 21</text>
                  <text x="175" y="104" fill="#94a3b8" fontSize="5.5" fontFamily="var(--font-jetbrains)">Apr 30</text>
                </g>

                {/* Top Channels Donut Chart (Center Right) */}
                <g transform="translate(214, 76)">
                  <rect x="0" y="0" width="112" height="110" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.8" />
                  <text x="10" y="15" fill="#0f172a" fontSize="8.5" fontWeight="600" fontFamily="var(--font-grotesk)">
                    Top Channels
                  </text>

                  {/* Donut SVG */}
                  <g transform="translate(38, 54)">
                    {/* Ring segments */}
                    <circle cx="0" cy="0" r="22" fill="none" stroke="#f97316" strokeWidth="9" strokeDasharray="62 100" />
                    <circle cx="0" cy="0" r="22" fill="none" stroke="#0066cc" strokeWidth="9" strokeDasharray="34 100" strokeDashoffset="-62" />
                    <circle cx="0" cy="0" r="22" fill="none" stroke="#10b981" strokeWidth="9" strokeDasharray="28 100" strokeDashoffset="-96" />
                    <circle cx="0" cy="0" r="22" fill="none" stroke="#f59e0b" strokeWidth="9" strokeDasharray="14 100" strokeDashoffset="-124" />
                  </g>

                  {/* Donut Legends */}
                  <g transform="translate(8, 86)">
                    <circle cx="4" cy="2" r="2" fill="#f97316" />
                    <text x="10" y="4" fill="#475569" fontSize="5.5" fontFamily="var(--font-jetbrains)">Organic 45%</text>
                    <circle cx="62" cy="2" r="2" fill="#0066cc" />
                    <text x="68" y="4" fill="#475569" fontSize="5.5" fontFamily="var(--font-jetbrains)">Social 25%</text>

                    <circle cx="4" cy="14" r="2" fill="#10b981" />
                    <text x="10" y="16" fill="#475569" fontSize="5.5" fontFamily="var(--font-jetbrains)">Paid 20%</text>
                    <circle cx="62" cy="14" r="2" fill="#f59e0b" />
                    <text x="68" y="16" fill="#475569" fontSize="5.5" fontFamily="var(--font-jetbrains)">Direct 10%</text>
                  </g>
                </g>

                {/* Bottom Active Campaigns Row */}
                <g transform="translate(0, 194)">
                  <text x="0" y="8" fill="#64748b" fontSize="7" fontWeight="600" fontFamily="var(--font-jetbrains)" letterSpacing="0.08em">
                    CAMPAIGNS
                  </text>
                  <g transform="translate(0, 14)">
                    {[
                      { name: "Meta CBO", val: "18.2%", fill: "#f97316", x: 0 },
                      { name: "Social Media", val: "22.7%", fill: "#0066cc", x: 80 },
                      { name: "Google Ads", val: "15.6%", fill: "#10b981", x: 160 },
                      { name: "Content CRO", val: "27.3%", fill: "#eab308", x: 242 },
                    ].map((c) => (
                      <g key={c.name} transform={`translate(${c.x}, 0)`}>
                        <rect x="0" y="0" width="76" height="24" rx="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
                        <circle cx="10" cy="12" r="4" fill={c.fill} />
                        <text x="18" y="11" fill="#0f172a" fontSize="6.5" fontWeight="600" fontFamily="var(--font-grotesk)">
                          {c.name}
                        </text>
                        <text x="18" y="18" fill="#10b981" fontSize="5.5" fontFamily="var(--font-jetbrains)">
                          +{c.val}
                        </text>
                      </g>
                    ))}
                  </g>
                </g>
              </g>
            </g>

            {/* Laptop Base / Keyboard Deck in Perspective */}
            <g transform="translate(145, 478)">
              {/* Lower Chassis Drop Shadow */}
              <polygon
                points="40,24 520,24 480,55 80,55"
                fill="#000000"
                opacity="0.4"
                filter="blur(10px)"
              />

              {/* Main metallic wedge chassis */}
              <polygon
                points="25,4 535,4 505,48 55,48"
                fill={`url(#baseChassis-${uid})`}
                stroke="#94a3b8"
                strokeWidth="1.2"
              />

              {/* Front chamfer lip */}
              <polygon
                points="55,48 505,48 500,56 60,56"
                fill="#64748b"
              />

              {/* Keyboard depression */}
              <polygon
                points="68,8 492,8 472,32 88,32"
                fill="#1e293b"
                opacity="0.9"
              />

              {/* Minimal keyboard row grid lines */}
              <line x1="78" y1="14" x2="482" y2="14" stroke="#334155" strokeWidth="1" />
              <line x1="84" y1="20" x2="476" y2="20" stroke="#334155" strokeWidth="1" />
              <line x1="90" y1="26" x2="470" y2="26" stroke="#334155" strokeWidth="1" />

              {/* Trackpad */}
              <polygon
                points="245,34 315,34 312,46 248,46"
                fill="#94a3b8"
                stroke="#64748b"
                strokeWidth="0.8"
              />
            </g>
          </g>

          {/* ========================================================================= */}
          {/* 3. DYNAMIC 3D MEGAPHONE / MARKETING AMPLIFIER (LEFT)                     */}
          {/* ========================================================================= */}
          <g id="megaphone-group" transform="translate(45, 170)" filter={`url(#megaShadow-${uid})`}>
            {/* Sound emission energy bursts */}
            <g opacity="0.9">
              {/* Outer wave dashes */}
              <path
                d="M 120,40 C 135,20 150,15 160,10"
                stroke="#f97316"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 140,75 C 160,65 175,60 190,55"
                stroke="#f97316"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 130,130 C 150,135 165,145 180,160"
                stroke="#f97316"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="165" cy="30" r="3.5" fill="#f97316" />
              <circle cx="180" cy="115" r="3" fill="#f97316" />
            </g>

            {/* Megaphone Handle */}
            <g transform="translate(110, 160)">
              {/* Handle angle */}
              <path
                d="M 10,10 L 25,65 L -5,75 L -18,20 Z"
                fill="#ea580c"
                stroke="#c2410c"
                strokeWidth="2"
              />
              {/* Handle grip trigger */}
              <rect x="-8" y="24" width="8" height="20" rx="3" fill="#f97316" />
            </g>

            {/* Megaphone Main Cone Body */}
            {/* White Body Shell */}
            <path
              d="M 52,90 L 132,46 L 152,142 L 56,122 Z"
              fill={`url(#megaConeWhite-${uid})`}
              stroke="#e2e8f0"
              strokeWidth="2"
            />

            {/* Orange Back Cap / Housing */}
            <path
              d="M 12,106 C 12,85 28,75 52,90 L 56,122 C 30,132 12,125 12,106 Z"
              fill={`url(#megaOrange-${uid})`}
              stroke="#c2410c"
              strokeWidth="2"
            />
            <circle cx="28" cy="106" r="14" fill="#d97706" />

            {/* Large Front Megaphone Bell Opening (Orange flared rim) */}
            <ellipse
              cx="142"
              cy="94"
              rx="24"
              ry="54"
              fill={`url(#megaOrange-${uid})`}
              stroke="#c2410c"
              strokeWidth="3"
            />

            {/* Inner Bell Cavity Depth */}
            <ellipse
              cx="138"
              cy="94"
              rx="17"
              ry="46"
              fill="#9a3412"
            />

            {/* Central Speaker Core Inside Cone */}
            <ellipse
              cx="134"
              cy="94"
              rx="8"
              ry="22"
              fill={`url(#megaOrange-${uid})`}
              stroke="#fdba74"
              strokeWidth="1"
            />
          </g>

          {/* ========================================================================= */}
          {/* 4. FLOATING METRIC CARDS (ORBITING WITH ELEVATED SHADOWS)                 */}
          {/* ========================================================================= */}

          {/* CARD 1: Top-Left (Target Audience / Engaged Users 38K) */}
          <g id="card-target-audience" transform="translate(155, 60)" filter={`url(#cardShadow-${uid})`}>
            <rect
              x="0"
              y="0"
              width="170"
              height="100"
              rx="16"
              fill={`url(#cardWhite-${uid})`}
              stroke="#ffffff"
              strokeWidth="1.5"
            />
            {/* Icon */}
            <rect x="14" y="14" width="38" height="38" rx="10" fill="#f97316" />
            {/* User group icon */}
            <circle cx="28" cy="27" r="4.5" fill="#ffffff" />
            <path d="M 20,38 C 20,34 24,33 28,33 C 32,33 36,34 36,38 Z" fill="#ffffff" />
            <circle cx="37" cy="26" r="3" fill="#fed7aa" />
            <path d="M 33,37 C 34,34 37,33 40,33 C 42,33 44,34 44,37 Z" fill="#fed7aa" />

            {/* Text details */}
            <text x="60" y="24" fill="#0f172a" fontSize="10.5" fontWeight="700" fontFamily="var(--font-grotesk)">
              Target Audience
            </text>
            <text x="60" y="36" fill="#64748b" fontSize="7.5" fontFamily="var(--font-jetbrains)">
              Engaged Users
            </text>

            <text x="60" y="52" fill="#0f172a" fontSize="16" fontWeight="800" fontFamily="var(--font-grotesk)">
              38K <tspan fill="#10b981" fontSize="13">↑</tspan>
            </text>

            {/* Sparkline wave */}
            <path
              d="M 16,78 C 35,65 55,85 85,70 C 115,55 135,78 154,68"
              fill="none"
              stroke="#f97316"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>

          {/* CARD 2: Top-Right (Growth +150% This Month / Bar Chart) */}
          <g id="card-growth" transform="translate(585, 60)" filter={`url(#cardShadow-${uid})`}>
            <rect
              x="0"
              y="0"
              width="170"
              height="115"
              rx="16"
              fill={`url(#cardWhite-${uid})`}
              stroke="#ffffff"
              strokeWidth="1.5"
            />

            <text x="16" y="24" fill="#0f172a" fontSize="11" fontWeight="700" fontFamily="var(--font-grotesk)">
              Growth
            </text>
            <text x="16" y="46" fill="#f97316" fontSize="20" fontWeight="800" fontFamily="var(--font-grotesk)">
              +150%
            </text>
            <text x="16" y="60" fill="#64748b" fontSize="8" fontFamily="var(--font-jetbrains)">
              This Month
            </text>

            {/* Ascending Bar Chart with Growth Arrow */}
            <g transform="translate(18, 72)">
              {[
                { h: 10, x: 0 },
                { h: 16, x: 14 },
                { h: 22, x: 28 },
                { h: 18, x: 42 },
                { h: 26, x: 56 },
                { h: 32, x: 70 },
                { h: 38, x: 84 },
              ].map((b) => (
                <rect
                  key={b.x}
                  x={b.x}
                  y={40 - b.h}
                  width="8"
                  height={b.h}
                  rx="3"
                  fill="#f97316"
                />
              ))}

              {/* Upward Growth Trend Arrow */}
              <path
                d="M 6,36 L 45,24 L 88,6"
                fill="none"
                stroke="#f97316"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <polygon points="88,6 80,6 84,14" fill="#f97316" />
            </g>
          </g>

          {/* CARD 3: Bottom-Left (Analytics / Real Time Data) */}
          <g id="card-analytics" transform="translate(60, 560)" filter={`url(#cardShadow-${uid})`}>
            <rect
              x="0"
              y="0"
              width="165"
              height="90"
              rx="16"
              fill={`url(#cardWhite-${uid})`}
              stroke="#ffffff"
              strokeWidth="1.5"
            />

            {/* Icon */}
            <rect x="14" y="14" width="34" height="34" rx="8" fill="#f97316" />
            {/* Bar icon */}
            <rect x="22" y="28" width="3.5" height="12" rx="1.5" fill="#ffffff" />
            <rect x="28" y="22" width="3.5" height="18" rx="1.5" fill="#ffffff" />
            <rect x="34" y="25" width="3.5" height="15" rx="1.5" fill="#ffffff" />

            <text x="56" y="26" fill="#0f172a" fontSize="11" fontWeight="700" fontFamily="var(--font-grotesk)">
              Analytics
            </text>
            <text x="56" y="38" fill="#64748b" fontSize="7.5" fontFamily="var(--font-jetbrains)">
              Real Time Data
            </text>

            {/* Wavy line */}
            <path
              d="M 14,70 C 35,62 55,75 80,65 C 105,55 125,72 150,62"
              fill="none"
              stroke="#f97316"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>

          {/* CARD 4: Bottom-Right (Leads Generated 3.6K +22.7%) */}
          <g id="card-leads" transform="translate(570, 560)" filter={`url(#cardShadow-${uid})`}>
            <rect
              x="0"
              y="0"
              width="180"
              height="90"
              rx="16"
              fill={`url(#cardWhite-${uid})`}
              stroke="#ffffff"
              strokeWidth="1.5"
            />

            {/* Chat Icon */}
            <rect x="14" y="14" width="34" height="34" rx="8" fill="#f97316" />
            <circle cx="27" cy="27" r="1.5" fill="#ffffff" />
            <circle cx="32" cy="27" r="1.5" fill="#ffffff" />
            <circle cx="37" cy="27" r="1.5" fill="#ffffff" />

            <text x="56" y="26" fill="#0f172a" fontSize="11" fontWeight="700" fontFamily="var(--font-grotesk)">
              Leads Generated
            </text>
            <text x="56" y="48" fill="#0f172a" fontSize="18" fontWeight="800" fontFamily="var(--font-grotesk)">
              3.6K <tspan fill="#10b981" fontSize="10" fontWeight="600">+22.7%</tspan>
            </text>
          </g>

          {/* ========================================================================= */}
          {/* 5. FLOATING CHANNEL APP BADGES & TARGET (THE EXACT ICONS IN IMAGE)        */}
          {/* ========================================================================= */}

          {/* INSTAGRAM BADGE (Top Center-Left) */}
          <g transform="translate(360, 110)" filter={`url(#badgeShadow-${uid})`}>
            <rect x="0" y="0" width="54" height="54" rx="14" fill={`url(#instaGrad-${uid})`} />
            {/* Camera icon */}
            <rect x="13" y="13" width="28" height="28" rx="8" fill="none" stroke="#ffffff" strokeWidth="2.5" />
            <circle cx="27" cy="27" r="7" fill="none" stroke="#ffffff" strokeWidth="2.5" />
            <circle cx="34" cy="20" r="1.8" fill="#ffffff" />
          </g>

          {/* FACEBOOK BADGE (Top Center-Right) */}
          <g transform="translate(460, 70)" filter={`url(#badgeShadow-${uid})`}>
            <circle cx="28" cy="28" r="28" fill={`url(#fbGrad-${uid})`} />
            <text x="21" y="42" fill="#ffffff" fontSize="38" fontWeight="700" fontFamily="Helvetica, Arial, sans-serif">
              f
            </text>
          </g>

          {/* GOOGLE ADS BADGE (Right Top) */}
          <g transform="translate(735, 220)" filter={`url(#badgeShadow-${uid})`}>
            <rect x="0" y="0" width="50" height="50" rx="12" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />
            {/* Google Ads angle bars */}
            <line x1="16" y1="36" x2="28" y2="14" stroke="#4285f4" strokeWidth="6" strokeLinecap="round" />
            <line x1="28" y1="14" x2="40" y2="36" stroke="#fbbc05" strokeWidth="6" strokeLinecap="round" />
            <circle cx="16" cy="36" r="3.5" fill="#34a853" />
          </g>

          {/* TARGET WITH BULLSEYE & ARROW (Right Mid) */}
          <g transform="translate(720, 320)" filter={`url(#badgeShadow-${uid})`}>
            {/* Target 3D Outer Ring */}
            <circle cx="45" cy="45" r="44" fill="#f97316" />
            <circle cx="45" cy="45" r="34" fill="#ffffff" />
            <circle cx="45" cy="45" r="24" fill="#f97316" />
            <circle cx="45" cy="45" r="14" fill="#ffffff" />
            <circle cx="45" cy="45" r="6" fill="#ea580c" />

            {/* Piercing Arrow from top right */}
            <line x1="85" y1="5" x2="48" y2="42" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
            {/* Arrow feathers */}
            <line x1="85" y1="5" x2="82" y2="15" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
            <line x1="85" y1="5" x2="75" y2="2" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* YOUTUBE BADGE (Right Bottom-Mid) */}
          <g transform="translate(710, 460)" filter={`url(#badgeShadow-${uid})`}>
            <rect x="0" y="0" width="54" height="42" rx="12" fill={`url(#ytGrad-${uid})`} />
            <polygon points="22,13 36,21 22,29" fill="#ffffff" />
          </g>

          {/* LINKEDIN BADGE (Left Mid-Bottom) */}
          <g transform="translate(68, 430)" filter={`url(#badgeShadow-${uid})`}>
            <rect x="0" y="0" width="46" height="46" rx="12" fill={`url(#liGrad-${uid})`} />
            <text x="10" y="34" fill="#ffffff" fontSize="26" fontWeight="700" fontFamily="Helvetica, Arial, sans-serif">
              in
            </text>
          </g>

          {/* MAIL ENVELOPE BADGE (Bottom Center) */}
          <g transform="translate(360, 610)" filter={`url(#badgeShadow-${uid})`}>
            <rect x="0" y="0" width="52" height="42" rx="10" fill={`url(#mailGrad-${uid})`} />
            <path d="M 8,10 L 26,24 L 44,10" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* POTTED PLANT ACCENT (Bottom-Right of Laptop) */}
          <g transform="translate(735, 520)" filter={`url(#badgeShadow-${uid})`}>
            {/* White minimal plant pot */}
            <polygon points="12,40 38,40 34,60 16,60" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
            {/* Soil */}
            <ellipse cx="25" cy="40" rx="13" ry="3" fill="#475569" />
            {/* Green leaves */}
            <path d="M 25,40 C 22,28 10,24 8,16 C 18,16 24,28 25,40 Z" fill="#22c55e" />
            <path d="M 25,40 C 28,26 40,20 42,12 C 34,14 26,26 25,40 Z" fill="#16a34a" />
            <path d="M 25,40 C 24,22 25,12 25,6 C 28,12 27,24 25,40 Z" fill="#4ade80" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

export default MarketingHeroIllustration;
