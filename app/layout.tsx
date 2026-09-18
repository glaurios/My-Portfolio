import "./globals.css";
import type { Metadata } from "next";

import { Roboto_Slab } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import ThemeSettings from "@/components/theme-settings";
import Cursor from "@/components/Cursor";
import StructuredData from "@/components/structured-data";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Tyndale Anane Antwi | Full Stack Developer",
    template: "%s | Tyndale Anane Antwi",
  },

  description:
    "Tyndale Anane Antwi is a Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and modern digital experiences.",

  applicationName: "Tyndale Anane Antwi Portfolio",

  authors: [
    {
      name: "Tyndale Anane Antwi",
      url: siteUrl,
    },
  ],

  creator: "Tyndale Anane Antwi",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Tyndale Anane Antwi | Full Stack Developer",
    description:
      "Tyndale Anane Antwi is a Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and modern digital experiences.",
    siteName: "Tyndale Anane Antwi",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tyndale Anane Antwi | Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tyndale Anane Antwi | Full Stack Developer",
    description:
      "Tyndale Anane Antwi is a Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and modern digital experiences.",
    images: ["/opengraph-image.png"],
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
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className={robotoSlab.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
        >
          <Cursor />
          <ThemeSettings />
          <StructuredData />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}