import "./globals.css";
import type { Metadata } from "next";

import { Roboto_Slab } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import ThemeSettings from "@/components/theme-settings";
import Cursor from "@/components/Cursor";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tyndale Anane Antwi | Full Stack Developer",
  description:
    "Full Stack Developer, Frontend Engineer, UI/UX Designer and Software Engineer.",
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

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}