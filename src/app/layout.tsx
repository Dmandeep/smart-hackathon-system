import type { Metadata } from "next";
import { Bricolage_Grotesque, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { AnimatedBackground } from "@/components/animated-background";

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackVerse AI",
  description: "The Intelligent Operating System for Hackathons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${bricolage.variable} font-sans antialiased min-h-screen bg-background text-foreground overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          <AnimatedBackground />

          <div className="relative z-0">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
