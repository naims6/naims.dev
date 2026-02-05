import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import ThemeAwareLightRays from "@/components/bg/LightRays";
import SpaceBackground from "@/components/bg/SpaceBackground";
import ChatWidget from "@/components/chat/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Naim Sorker | Full Stack Developer",
    template: "%s | Naim Sorker",
  },
  description:
    "Full-Stack Developer (MERN) specializing in building clean, scalable, and user-friendly web applications using Next.js, TypeScript, and Node.js.",
  keywords: [
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Full Stack Developer",
    "Portfolio",
    "Web Development",
    "Software Engineer",
    "Naim Sorker",
  ],
  authors: [{ name: "Naim Sorker", url: "https://github.com/naims6" }],
  creator: "Naim Sorker",
  publisher: "Naim Sorker",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Naim Sorker | Full Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, React, and modern web technologies. Focus on clean code and user-centric design.",
    url: "https://naims.dev",
    siteName: "Naim Sorker Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naim Sorker | Full Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, React, and modern web technologies.",
    creator: "@naims6",
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
          <SpaceBackground />
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
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
