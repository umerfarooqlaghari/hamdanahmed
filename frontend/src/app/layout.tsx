import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const grotesk = localFont({
  src: "./fonts/SpaceGrotesk-Variable.woff2",
  variable: "--font-grotesk",
  weight: "300 700",
  display: "swap",
});

const jetbrains = localFont({
  src: "./fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-jetbrains",
  weight: "100 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hamdan Ahmed — Performance Marketing & Growth Architecture",
    template: "%s · Hamdan Ahmed",
  },
  description:
    "Performance Marketer, Meta Ads Specialist, & Growth Architect. Scaling e-commerce brands past 5x ROAS with data-driven paid acquisition, creative strategy, and full-funnel CRO.",
  keywords: [
    "Hamdan Ahmed",
    "Performance Marketing",
    "Meta Ads Specialist",
    "E-Commerce Growth",
    "ROAS Scaling",
    "Creative Strategy",
    "Media Buying",
    "Conversion Rate Optimization",
  ],
  openGraph: {
    title: "Hamdan Ahmed — Performance Marketing & Growth Architecture",
    description:
      "Scaling brands with full-funnel Meta Ads, precision media buying, and high-converting creative strategy.",
    type: "website",
    url: "https://hamdanahmed.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#060B14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
