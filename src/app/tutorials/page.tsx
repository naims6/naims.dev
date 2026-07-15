import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { TutorialsContent } from "@/components/tutorials-content";

export const metadata: Metadata = {
  title: "Tutorials",
  description:
    "Free web development tutorials by Naim Sorker — covering Docker, Redis, Node.js, Next.js, and more. Learn full-stack development step by step.",
  alternates: {
    canonical: "https://naims-dev.vercel.app/tutorials",
  },
  openGraph: {
    title: "Tutorials | Naim Sorker",
    description:
      "Free web development tutorials by Naim Sorker — covering Docker, Redis, Node.js, Next.js, and more. Learn full-stack development step by step.",
    url: "https://naims-dev.vercel.app/tutorials",
    siteName: "Naim Sorker",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://naims-dev.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naim Sorker - Tutorials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tutorials | Naim Sorker",
    description:
      "Free web development tutorials by Naim Sorker — covering Docker, Redis, Node.js, Next.js, and more. Learn full-stack development step by step.",
    images: ["https://naims-dev.vercel.app/og-image.png"],
  },
  keywords: [
    "Naim Sorker tutorials",
    "Docker tutorial Bangla",
    "Redis tutorial",
    "Node.js tutorial",
    "Next.js tutorial",
    "web development tutorials",
    "full stack tutorial",
    "programming tutorials Bangla",
  ],
};

export default function AllTutorialsPage() {
  return (
    <main className="flex flex-col min-h-screen mx-auto px-4 max-w-6xl">
      <Navbar />
      <TutorialsContent />
      <Footer />
    </main>
  );
}
