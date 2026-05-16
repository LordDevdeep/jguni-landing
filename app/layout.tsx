import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "JG University — Shape Your Future",
  description:
    "A premier institution blending innovation and excellence. Discover AI, Design, Cybersecurity, Aviation and more programs at JG University.",
  keywords: ["university", "education", "AI", "technology", "programs", "campus"],
  openGraph: {
    title: "JG University — Shape Your Future",
    description: "Premier institution blending innovation and excellence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#020617] text-slate-100 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
