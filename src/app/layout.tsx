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
  metadataBase: new URL("https://naims-dev.vercel.app"),

  title: {
    default: "Naim Sorker | Full Stack Developer",
    template: "%s | Naim Sorker",
  },

  description:
    "Naim Sorker is a Full Stack Developer (MERN) specializing in building fast, scalable, and user-friendly web applications using Next.js, TypeScript, React, and Node.js.",

  keywords: [
    "Naim Sorker",
    "Naim Sorker Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
  ],

  authors: [
    {
      name: "Naim Sorker",
      url: "https://naims-dev.vercel.app",
    },
  ],

  creator: "Naim Sorker",
  publisher: "Naim Sorker",
  applicationName: "Naim Sorker Portfolio",
  category: "Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "https://naims-dev.vercel.app",
  },

  openGraph: {
    title: "Naim Sorker | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies. Passionate about clean code and great user experiences.",
    url: "https://naims-dev.vercel.app",
    siteName: "Naim Sorker – Full Stack Developer",
    images: [
      {
        url: "/public/assets/naims6_profile.png",
        width: 1200,
        height: 630,
        alt: "Naim Sorker – Full Stack Developer Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Naim Sorker | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies.",
    creator: "@naimsorker", 
    images: ["/assets/naims6_profile.png"],
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
