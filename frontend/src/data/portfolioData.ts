export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  brand: string;
  category: string;
  industry: string;
  market: string;
  platform: string;
  duration: string;
  heroStat: string;
  heroStatLabel: string;
  secondaryStat: string;
  secondaryStatLabel: string;
  revenue: string;
  roas: string;
  orders: string;
  costPerPurchase?: string;
  impressions?: string;
  clicks?: string;
  conversionRate?: string;
  image: string;
  summary: string;
  challenge: string;
  strategy: {
    title: string;
    description: string;
    funnel: {
      stage: string;
      target: string;
      creative: string;
    }[];
  };
  deliverables: string[];
  results: {
    metric: string;
    value: string;
  }[];
  learnings: string[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "thryve",
    slug: "thryve",
    number: "01",
    title: "Full-Funnel Meta Ads Scaling for Fashion & Apparel",
    brand: "THRYVE",
    category: "Meta Ads & Performance Growth",
    industry: "Fashion & Apparel",
    market: "Pakistan",
    platform: "Facebook & Instagram",
    duration: "30 Days",
    heroStat: "PKR 742K",
    heroStatLabel: "Simulated Campaign Revenue",
    secondaryStat: "4.95x",
    secondaryStatLabel: "Return on Ad Spend (ROAS)",
    revenue: "PKR 742,000",
    roas: "4.95x",
    orders: "515 Purchases",
    costPerPurchase: "PKR 291",
    impressions: "1.24M",
    clicks: "24,800",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=961,fit=crop/wmfBm6kPSFwto7zo/chatgpt-image-sep-4-2026-at-07_54_01-pm-uFImxPOHPQmoW6Um.png",
    summary:
      "A complete full-funnel Meta Ads architecture engineered to attract net-new cold shoppers, re-engage high-intent visitors, and optimize conversion pathways to achieve 515 purchases at a CPA of PKR 291.",
    challenge:
      "Thryve sought to systematically expand customer acquisition and drive high-margin eCommerce orders. The core objective was constructing an airtight funnel that solved cold-audience fatigue, captured drop-offs, and converted cart abandoners at maximum ROAS.",
    strategy: {
      title: "Three-Tier Customer Journey Architecture",
      description:
        "Rather than treating all social traffic identically, the campaign segregated prospects across distinct intent thresholds with dynamically matched messaging.",
      funnel: [
        {
          stage: "Cold Prospecting (Top of Funnel)",
          target: "Lookalikes + Broad Fashion & Lifestyle Enthusiasts",
          creative: "High-energy Reels, trend hooks, and aesthetic lifestyle videos highlighting wardrobe fit.",
        },
        {
          stage: "Warm Retargeting (Middle of Funnel)",
          target: "Social Engagers + Video Viewers (50%+) + Site Visitors",
          creative: "Product benefit breakdowns, customer reviews, social proof carousels, and bestseller carousels.",
        },
        {
          stage: "High-Intent Bottom of Funnel",
          target: "Add-to-Cart & Initiate Checkout (Past 7–14 Days)",
          creative: "Limited-time offers, urgency triggers, direct guarantees, and zero-friction checkout calls to action.",
        },
      ],
    },
    deliverables: [
      "Meta Pixel + Conversions API (CAPI) Server-Side Tracking",
      "Dynamic Creative Testing (DCT) across 24+ variants",
      "Custom Lookalike & Retargeting Audiences",
      "Automated Budget Optimization & Daypart Scaling Rules",
      "Weekly Attribution & Cohort Performance Dashboards",
    ],
    results: [
      { metric: "Total Generated Revenue", value: "PKR 742,000" },
      { metric: "Return on Ad Spend (ROAS)", value: "4.95x" },
      { metric: "Verified Purchases", value: "515 Orders" },
      { metric: "Cost per Purchase (CPA)", value: "PKR 291" },
      { metric: "Total Ad Impressions", value: "1,240,000" },
      { metric: "High-Intent Link Clicks", value: "24,800" },
    ],
    learnings: [
      "Creative diversification between UGC-style quick hooks and polished carousels reduced fatigue and halved cold CPA.",
      "CAPI server-side event tracking recovered over 18% of dropped conversions often lost to mobile browser restrictions.",
      "Retargeting segmented by cart value generated 42% of total campaign net margin with under 15% of total budget.",
    ],
    testimonial: {
      quote:
        "Hamdan understood our goals quickly, communicated clearly, and delivered a structured campaign that gave us complete clarity on our advertising unit economics.",
      author: "Eric Watson",
      title: "Brand Director",
    },
  },
  {
    id: "royal-essence",
    slug: "royal-essence",
    number: "02",
    title: "High-ROAS Meta Ads Scaling for Luxury Fragrance",
    brand: "ROYAL ESSENCE",
    category: "Perfume & Luxury Goods",
    industry: "Luxury Fragrance & Beauty",
    market: "Pakistan",
    platform: "Facebook & Instagram",
    duration: "60 Days",
    heroStat: "5.3x",
    heroStatLabel: "Return on Ad Spend (ROAS)",
    secondaryStat: "PKR 559K",
    secondaryStatLabel: "Revenue in 60 Days",
    revenue: "PKR 559,200",
    roas: "5.3x",
    orders: "311 Orders",
    conversionRate: "4.86%",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=676,fit=crop/wmfBm6kPSFwto7zo/chatgpt-image-aug-18-2026-at-08_51_47-pm-1-X7xLNcK2vppTlklE.png",
    summary:
      "How continuous creative testing, precision sensory messaging, and disciplined ad set scaling yielded a 5.3x ROAS and 4.86% conversion rate for an emerging fragrance house.",
    challenge:
      "Fragrance is notoriously challenging to sell online because buyers cannot physically smell the product. Royal Essence required a data-backed creative strategy that translated scent notes into aspirational visual and sensory hooks while preserving strict profit margins.",
    strategy: {
      title: "Sensory Hook Testing & Retargeting Funnel",
      description:
        "We tested descriptive video creatives focused on longevity, compliments, and scent occasion, followed by micro-targeted social proof ads to overcome hesitation.",
      funnel: [
        {
          stage: "Sensory Prospecting",
          target: "Luxury Lifestyle, Gifting, Premium Perfume affinities",
          creative: "Cinematic bottle aesthetics, notes breakdown, and honest first-impression reaction formats.",
        },
        {
          stage: "Trust & Validation",
          target: "Product Page Viewers (No Add-to-Cart)",
          creative: "Customer unboxing videos, longevity comparisons, and customer satisfaction ratings.",
        },
        {
          stage: "Conversion Closer",
          target: "Cart Abandoners & Repeat Shoppers",
          creative: "Bundle savings, sample pack incentives, and expedited delivery guarantees.",
        },
      ],
    },
    deliverables: [
      "Audience Persona Modeling & Scent Profiles",
      "Micro-Budget Creative Sandboxing (DCT)",
      "Automated Winner Scaling to Target 5x+ ROAS",
      "Catalog Retargeting with Dynamic Product Ads",
    ],
    results: [
      { metric: "Total Store Revenue", value: "PKR 559,200" },
      { metric: "Return on Ad Spend", value: "5.3x ROAS" },
      { metric: "Delivered Orders", value: "311 Orders" },
      { metric: "Store Conversion Rate", value: "4.86%" },
      { metric: "Customer Acquisition Cost", value: "Reduced by 34%" },
    ],
    learnings: [
      "Targeting fragrance gift-buyers alongside self-purchasers doubled average basket size during weekend surges.",
      "Customer reviews mentioning scent longevity outperformed all discount-led copy variations by 2.4x.",
    ],
    testimonial: {
      quote:
        "His approach was practical, professional, and focused on results. We achieved profitability from week two and scaled with confidence.",
      author: "Muhammad Murtaza",
      title: "Co-Founder",
    },
  },
  {
    id: "emerald-wear",
    slug: "emerald-wear",
    number: "03",
    title: "Seasonal Scaling & Conversion Optimization for Fine Jewellery",
    brand: "EMERALD WEAR",
    category: "Jewellery & Accessories",
    industry: "Fine Jewellery & Accessories",
    market: "Pakistan",
    platform: "Facebook & Instagram",
    duration: "90 Days",
    heroStat: "PKR 712K",
    heroStatLabel: "Campaign Revenue",
    secondaryStat: "4.2x",
    secondaryStatLabel: "Return on Ad Spend",
    revenue: "PKR 712,700",
    roas: "4.2x",
    orders: "594 Orders",
    conversionRate: "3.5%",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=684,fit=crop/wmfBm6kPSFwto7zo/chatgpt-image-aug-18-2026-at-08_57_00-pm-fV4RFlV8j3cIGW18.png",
    summary:
      "A 90-day comprehensive audience segmentation and seasonal collection campaign that unlocked 594 orders and established repeatable customer acquisition for a modern jewellery brand.",
    challenge:
      "Emerald Wear operated in an intensely competitive accessories market with rising acquisition costs and customer skepticism around craftsmanship. They needed a repeatable system to drive consistent volume without eroding brand equity through constant discounting.",
    strategy: {
      title: "Seasonal Segmentation & Craftsmanship Proof",
      description:
        "Crafted a multi-layered campaign that paired close-up macro product craftsmanship videos with seasonal trend edits and social proof testimonials.",
      funnel: [
        {
          stage: "Broad Brand Discovery",
          target: "Broad Women 18-38 + Fashion/Jewellery interests",
          creative: "Macro jewellery details, anti-tarnish proofs, and styling guides for everyday wear.",
        },
        {
          stage: "Collection Engagement",
          target: "Instagram & Facebook Page Engagers (90 Days)",
          creative: "Curated collection carousels, customer review overlays, and influencer styling clips.",
        },
        {
          stage: "VIP Cart Recovery",
          target: "Cart & Checkout Abandoners",
          creative: "Complimentary gift packaging, stock scarcity alerts, and customer support direct chat links.",
        },
      ],
    },
    deliverables: [
      "90-Day Seasonal Campaign Blueprint",
      "Full Audience Segmentation & Exclusion Architecture",
      "Dynamic Product Catalog Setup",
      "Weekly Creative Refresh Workflow",
    ],
    results: [
      { metric: "Total Campaign Revenue", value: "PKR 712,700" },
      { metric: "Delivered Orders", value: "594 Purchases" },
      { metric: "Blended ROAS", value: "4.2x" },
      { metric: "Store Conversion Rate", value: "3.5%" },
      { metric: "Repeat Customer Rate", value: "+22% Growth" },
    ],
    learnings: [
      "Clear warranty and packaging guarantees reduced checkout bounce rates by 28%.",
      "Collection carousels featuring 3 curated complementary pieces generated a 35% higher average order value.",
    ],
  },
];

export const GRAPHIC_DESIGN_WORKS = [
  {
    title: "National Independence Celebration Creative",
    category: "Social Media Campaign",
    aspect: "1:1",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/wmfBm6kPSFwto7zo/14auguest-UPtUtYrk58IJkdXO.png",
    description: "Patriotic visual campaign blending heritage iconography with high-impact modern typography.",
  },
  {
    title: "Eventex Corporate Brand Identity",
    category: "Branding & Event Graphics",
    aspect: "4:3",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/wmfBm6kPSFwto7zo/eventex-abc-Sxo12yRbrMyQTWm7.png",
    description: "Sleek typographic poster and keynote presentation system for an international tech exhibition.",
  },
  {
    title: "Luxury Apparel Editorial Ad Suite",
    category: "High-Conversion Ad Creative",
    aspect: "1:1",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/wmfBm6kPSFwto7zo/chatgpt-image-aug-18-2026-at-10_00_29-pm-kLD7E6y6wolVjotO.png",
    description: "Minimalist fashion hero graphics designed for Instagram feed & stories ad placements.",
  },
  {
    title: "Performance Infographic & Data Architecture",
    category: "Information Design",
    aspect: "3:4",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/wmfBm6kPSFwto7zo/infographic-CgQ8duLFi1x1VkDY.png",
    description: "Visualizing complex business logic and funnel workflows into clean, digestible diagrams.",
  },
  {
    title: "New Year Seasonal Promotional Suite",
    category: "Commercial Campaign",
    aspect: "1:1",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/wmfBm6kPSFwto7zo/new-year-static-r4-copy-p4hzFqaraC29ePjm.jpg",
    description: "Vibrant promotional sales creative with custom typography and seasonal lighting effects.",
  },
  {
    title: "Executive Book Launch Social Graphics",
    category: "Publication & Media",
    aspect: "1:1",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/wmfBm6kPSFwto7zo/book-launch-post-copy-G2E2WjpMXpCCCFlB.jpg",
    description: "Author spotlight and publication promo crafted with Swiss editorial layout discipline.",
  },
  {
    title: "High-Growth SaaS Product Showcase",
    category: "Product Marketing",
    aspect: "4:3",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/wmfBm6kPSFwto7zo/chatgpt-image-aug-18-2026-at-10_04_48-pm-giqGNqond3bDTM2T.png",
    description: "Feature highlight cards showcasing UI elements, speed metrics, and cloud automation.",
  },
  {
    title: "Regional Conference Social Activation",
    category: "Event Social Kit",
    aspect: "1:1",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=crop/wmfBm6kPSFwto7zo/inc-regionals-social-post-LnFIsg1xneC0ySCx.jpg",
    description: "Speaker announcement and agenda cards optimized for LinkedIn and Twitter engagement.",
  },
];

export const SERVICES = [
  {
    number: "01",
    tag: "PAID ACQUISITION",
    title: "Meta Ads & Performance Growth",
    description:
      "I plan, execute, and scale Facebook and Instagram ad campaigns engineered for measurable revenue and sustainable ROAS. From Pixel and CAPI tracking to multi-variant creative testing, every dollar is tied to business outcomes.",
    features: [
      "Full-Funnel Campaign Architecture (Cold to Conversion)",
      "Meta Conversions API (CAPI) & Pixel Setup",
      "Dynamic Creative Testing (Reels, Carousels, UGC)",
      "Retargeting Funnels & Cart Recovery Optimization",
    ],
  },
  {
    number: "02",
    tag: "INTELLIGENT SYSTEMS",
    title: "AI Agents & Voice Automation",
    description:
      "I develop bespoke AI-powered agents that handle customer support, lead qualification, appointment booking, and automated CRM communication 24 hours a day without human bottleneck.",
    features: [
      "Lead Qualification & Intent Scoring Agents",
      "Automated Appointment & Calendar Booking",
      "Customer Support & Knowledge-Base Assistants",
      "Multi-channel Chat & Voice Integration",
    ],
  },
  {
    number: "03",
    tag: "OPERATIONAL LEVERAGE",
    title: "n8n & Workflow Automation",
    description:
      "I architect automated backend workflows connecting your CRM, marketing channels, email software, and internal databases (n8n, Make, Zapier) to eliminate manual data entry and lead drop-off.",
    features: [
      "Custom n8n & Make Automated Workflows",
      "Instant Lead Routing & Instant SMS/WhatsApp Alerts",
      "Automated Post-Purchase Nurturing Sequences",
      "Cross-Platform Database & Sheet Synchronizations",
    ],
  },
  {
    number: "04",
    tag: "CONVERSION ARCHITECTURE",
    title: "Strategic Lead Gen & Funnel Design",
    description:
      "I help businesses attract and convert high-intent prospects using targeted multi-channel outreach, conversion-optimized landing pages, and follow-up sequences that close deals automatically.",
    features: [
      "High-Converting Landing Page Direction",
      "Cold Outreach & Inbound Funnel Design",
      "Lead Magnet & Offer Value Structuring",
      "Analytics Attribution & Conversion Rate Optimization",
    ],
  },
];

export const SKILLS_LIST = [
  { category: "AI & Automation", items: ["AI Automation", "Autonomous AI Agents", "n8n Workflow Automation", "Make / Zapier", "CRM Automation"] },
  { category: "Paid Growth", items: ["Meta Ads", "Campaign Scaling", "Conversions API (CAPI)", "Audience Segmentation", "ROAS Optimization"] },
  { category: "Creative & Media", items: ["Graphics Designing", "Ad Creative Direction", "Video Editing", "Conversion UI/UX", "Social Branding"] },
  { category: "Strategy & Tech", items: ["E-Commerce Scaling", "Lead Gen Funnels", "Web Analytics", "Data Tracking", "A/B Testing"] },
];

export const TESTIMONIALS = [
  {
    quote:
      "Working with Hamdan was a smooth experience from start to finish. He understood our goals quickly, communicated clearly, and helped us improve our digital marketing and automation process. His approach was practical, professional, and focused on results.",
    client: "Eric Watson",
    role: "E-Commerce Founder",
    project: "Meta Ads & Growth Automation",
    highlight: "5.3x ROAS Scaling",
    rating: 5,
  },
  {
    quote:
      "Hamdan helped us simplify our marketing workflow and introduced automation that saved us a significant amount of manual effort. He was responsive, detail-oriented, and always focused on finding solutions that made sense for our business.",
    client: "Muhammad Murtaza",
    role: "Operations Lead",
    project: "Workflow Architecture & Funnels",
    highlight: "Hours of Manual Work Eliminated",
    rating: 5,
  },
];
