import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import ThemeAwareLightRays from "@/components/bg/LightRays";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naim Sorker | Full Stack Developer",
  description:
    "Portfolio of Naim, a passionate Full Stack Developer specializing in Next.js, TypeScript, React, and modern web technologies. Explore my projects and skills.",
  keywords: [
    "Next.js",
    "TypeScript",
    "React",
    "Full Stack Developer",
    "Portfolio",
    "Web Development",
    "JavaScript",
    "TypeScript",
  ],
  openGraph: {
    title: "Naim Sorker | Full Stack Developer",
    description:
      "Explorer my projects and skills. Specialized in Next.js, React, and modern web technologies.",
    type: "website",
    locale: "en_US",
    siteName: "Naim Sorker",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
          <ThemeAwareLightRays
            raysOrigin="top-center"
            raysSpeed={1.1}
            lightSpread={0.9}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.04}
            className="custom-rays"
          />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" reverseOrder={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
