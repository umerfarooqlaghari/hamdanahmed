import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const scriptFont = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hamdan Ahmed | AI Automation & Digital Marketing Specialist",
  description:
    "Portfolio of Hamdan Ahmed — AI Automation & Digital Marketing Specialist. Scaling e-commerce brands with full-funnel Meta Ads, AI agents, and n8n workflow automation.",
  keywords: [
    "Hamdan Ahmed",
    "AI Automation",
    "Digital Marketing",
    "Meta Ads",
    "Growth Specialist",
    "n8n Automation",
    "AI Agents",
    "Performance Marketing",
    "Case Studies",
  ],
  openGraph: {
    title: "Hamdan Ahmed | AI Automation & Digital Marketing Specialist",
    description:
      "Scaling brands with full-funnel Meta Ads, autonomous AI agents, and intelligent workflow automation.",
    type: "website",
    url: "https://hamdanahmed.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${scriptFont.variable} ${monoFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
