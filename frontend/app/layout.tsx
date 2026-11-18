import "./globals.css";
import "./desktop.css";
import { Yusei_Magic, Zen_Maru_Gothic } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const body = Zen_Maru_Gothic({ variable: "--font-body", weight: ["500", "700", "900"], subsets: ["latin"] });
const display = Yusei_Magic({ variable: "--font-display", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivy Tang",
  description: "Ivy Tang: cybersecurity student at Northeastern University. Projects, research, and extracurriculars.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
