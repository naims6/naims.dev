import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import ChatWidget from "@/components/chat/ChatWidgetWrapper";
import Script from "next/script";
import BackgroundWrapper from "@/components/bg/BackgroundWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naims-dev.vercel.app"),

  title: {
    default: "Naim Sorker | Full Stack Developer",
    template: "%s | Naim Sorker",
  },

  description:
    "Naim Sorker is a professional Full Stack Developer (MERN) based in Bangladesh. Specializing in Next.js, React, TypeScript, and Node.js to build high-performance, scalable, and user-friendly web applications.",

  keywords: [
    "Naim Sorker",
    "Naim Sarker",
    "Nayem Sarker",
    "Naim Sorker Developer",
    "Naim Sorker Full Stack Developer Portfolio",
    "Naim Sorker Portfolio",
    "Naim Sorker Bangladesh",
    "Best MERN Stack Developer in Bangladesh Naim Sorker Portfolio",
    "Next.js Developer Bangladesh",
    "React Developer Portfolio Dhaka, Bangladesh",
    "Full Stack Developer Bangladesh",
    "Web Developer Naim Sorker",
    "Creative Web Developer Portfolio Naim Sorker",
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
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
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
            alternateName: "naims6",
            url: "https://naims-dev.vercel.app",
            image: "https://naims-dev.vercel.app/assets/naims6_profile.png",
            jobTitle: "Full Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tangail",
              addressRegion: "Dhaka",
              addressCountry: "Bangladesh",
            },
            sameAs: [
              "https://github.com/naims6",
              "https://linkedin.com/in/naims6",
              "https://www.facebook.com/naim.sorker6",
              "https://wa.me/+8801908390036",
            ],
            description:
              "Full Stack Developer specializing in MERN stack and Next.js. Naim Sorker",
          }),
        }}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundWrapper />
          {children}
          <Toaster position="bottom-right" reverseOrder={false} />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
