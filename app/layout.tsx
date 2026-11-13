import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Kumar Das Gaurav | Full Stack Developer",
  description:
    "Portfolio of Aditya Kumar Das Gaurav, a Full Stack Developer and CSE student at Ahsania Mission University of Science and Technology.",
  keywords: [
    "Aditya Kumar Das Gaurav",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Aditya Kumar Das Gaurav" }],
  openGraph: {
    title: "Aditya Kumar Das Gaurav | Full Stack Developer",
    description:
      "Explore my projects, technical skills, education, and web development journey.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}