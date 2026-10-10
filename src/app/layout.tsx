import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Harshit Bhojwani — Software Developer",
  description:
    "Portfolio of Harshit Bhojwani, an aspiring Software Developer and Information Technology student based in New Delhi.",
  openGraph: {
    title: "Harshit Bhojwani — Software Developer",
    description:
      "Portfolio of Harshit Bhojwani, an aspiring Software Developer and Information Technology student based in New Delhi.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
