import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "JG University | Admissions, Programs & Campus Life",
  description:
    "Explore JG University programs, admissions, campus life, placements, and student support.",
  keywords: ["university", "education", "admissions", "programs", "campus"],
  openGraph: {
    title: "JG University",
    description:
      "Admissions, programs, campus life, and career support at JG University.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#f8f7f3] text-slate-900 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
