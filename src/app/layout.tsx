import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PageTransition } from "@/components/layout/PageTransition";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akash Deshapathi — Robotics & AI Engineer",
  description:
    "Portfolio of Akash Deshapathi — Robotics, AI Systems, and Control Engineering. Available for freelance.",
  keywords: [
    "Robotics",
    "AI",
    "ROS2",
    "Control Systems",
    "Machine Learning",
    "Freelance Engineer",
  ],
  authors: [{ name: "Akash Deshapathi" }],
  openGraph: {
    title: "Akash Deshapathi — Robotics & AI Engineer",
    description: "Building intelligent machines at the frontier of robotics and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <SmoothScroll>
          <Navbar />
          <PageTransition>{children}</PageTransition>
        </SmoothScroll>
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
