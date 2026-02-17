import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import ThemeAwareLightRays from "@/components/bg/LightRays";
import SpaceBackground from "@/components/bg/SpaceBackground";
import ChatWidget from "@/components/chat/ChatWidget";
import Script from "next/script";
import MousePencilEffect from "@/components/bg/MousePencilEffect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naims-dev.vercel.app"),

  title: {
    default: "Naim Sorker | Full Stack Developer",
    template: "%s | Naim Sorker",
  },

  description:
    "Naim Sorker is a Full Stack Developer (MERN) specializing in building fast, scalable and user-friendly web applications using Next.js, React, TypeScript and Node.js.",

  keywords: [
    "Naim Sorker",
    "Naim Sorker Full Stack Developer",
    "Naim Sorker Portfolio",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer Bangladesh",
  ],

  authors: [
    {
      name: "Naim Sorker",
      url: "https://naims-dev.vercel.app",
    },
  ],

  creator: "Naim Sorker",
  publisher: "Naim Sorker",
  applicationName: "Naim Sorker",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://naims-dev.vercel.app",
  },

  openGraph: {
    title: "Naim Sorker | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, TypeScript and modern web technologies.",
    url: "https://naims-dev.vercel.app",
    siteName: "Naim Sorker",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://naims-dev.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naim Sorker - Full Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Naim Sorker | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React and TypeScript.",
    creator: "@naimsorker",
    images: ["https://naims-dev.vercel.app/og-image.png"],
  },

  verification: {
    google: "60soApdEaXJwnlo2xCuKIE86sxUgxnRHE_nqk3GIUEE",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Naim Sorker",
            url: "https://naims-dev.vercel.app",
          }),
        }}
      />

      {/* Person Structured Data - Helps ranking for your name */}
      <Script
        id="person-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Naim Sorker",
            url: "https://naims-dev.vercel.app",
            jobTitle: "Full Stack Developer",
            sameAs: [
              "https://github.com/naims6",
              "https://linkedin.com/in/naims6",
            ],
          }),
        }}
      />
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
            distortion={0.08}
            className="custom-rays"
          />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MousePencilEffect />
          {children}
          <Toaster position="bottom-right" reverseOrder={false} />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
