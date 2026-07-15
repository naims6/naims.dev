import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ReviewsContent } from "@/components/reviews-content";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read honest reviews and feedback from students and learners who have taken Naim Sorker's web development tutorials on YouTube.",
  alternates: {
    canonical: "https://naims-dev.vercel.app/reviews",
  },
  openGraph: {
    title: "Reviews | Naim Sorker",
    description:
      "Read honest reviews and feedback from students and learners who have taken Naim Sorker's web development tutorials on YouTube and LinkedIn.",
    url: "https://naims-dev.vercel.app/reviews",
    siteName: "Naim Sorker",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://naims-dev.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naim Sorker - Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reviews | Naim Sorker",
    description:
      "Read honest reviews and feedback from students and learners who have taken Naim Sorker's web development tutorials on YouTube and LinkedIn.",
    images: ["https://naims-dev.vercel.app/og-image.png"],
  },
  keywords: [
    "Naim Sorker reviews",
    "web development tutorials reviews",
    "student feedback",
    "YouTube tutorials reviews",
    "LinkedIn recommendations",
    "coding instructor reviews",
  ],
};

export default function AllReviewsPage() {
  return (
    <main className="flex flex-col min-h-screen mx-auto px-4 max-w-6xl">
      <Navbar />
      <ReviewsContent />
      <Footer />
    </main>
  );
}
