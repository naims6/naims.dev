"use client";

import React, { useState, useMemo } from "react";
import { ArrowLeft, Search, X, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SectionHeader } from "@/components/section-header";
import { BlurFade } from "@/components/animation-wrapper";
import SecondaryButton from "@/components/secondary-button";
import { Input } from "@/components/ui/input";
import { ReviewCard } from "@/components/landing/video-reviews";
import { videoReviews } from "@/data/videoReviews";
import { SiYoutube } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

type Filter = "all" | "linkedin" | "youtube";

export default function AllReviewsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    return videoReviews.filter((r) => {
      const matchesSource = filter === "all" || r.source === filter;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.reviewText.toLowerCase().includes(q);
      return matchesSource && matchesSearch;
    });
  }, [search, filter]);

  const filterButtons: { label: string; value: Filter; icon: React.ReactNode }[] =
    [
      { label: "All", value: "all", icon: <SlidersHorizontal className="w-3.5 h-3.5" /> },
      {
        label: "LinkedIn",
        value: "linkedin",
        icon: <FaLinkedinIn className="w-3.5 h-3.5" />,
      },
      {
        label: "YouTube",
        value: "youtube",
        icon: <SiYoutube className="w-3.5 h-3.5" />,
      },
    ];

  return (
    <main className="flex flex-col min-h-screen mx-auto px-4 max-w-6xl">
      <Navbar />

      <section className="mt-12 mb-20 relative">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="relative z-10">
          <SectionHeader title="What Learners Say" className="mb-4" />

          {/* Subtitle */}
          <BlurFade delay={0.1} inView yOffset={6}>
            <p className="text-sm text-muted-foreground mb-10 max-w-xl">
              Honest feedback from students who leveled up through my tutorials —
              collected from{" "}
              <span className="text-[#0A66C2] dark:text-[#60a5fa] font-semibold">
                LinkedIn
              </span>{" "}
              and{" "}
              <span className="text-[#FF0000] dark:text-[#f87171] font-semibold">
                YouTube
              </span>
              .
            </p>
          </BlurFade>

          {/* Search + Filter bar */}
          <BlurFade delay={0.15} inView yOffset={6}>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              {/* Search */}
              <div className="relative flex-1 max-w-lg">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by name or review text…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 pr-4 py-5 rounded-2xl bg-white/40 dark:bg-transparent backdrop-blur-md border border-border/50 dark:border-white/10 focus-visible:ring-blue-500/50"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground rounded-full"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Source filter pills */}
              <div className="flex items-center gap-2">
                {filterButtons.map((btn) => (
                  <button
                    key={btn.value}
                    onClick={() => setFilter(btn.value)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border transition-all duration-200 ${
                      filter === btn.value
                        ? btn.value === "linkedin"
                          ? "bg-[#0A66C2] border-[#0A66C2] text-white"
                          : btn.value === "youtube"
                          ? "bg-[#FF0000] border-[#FF0000] text-white"
                          : "bg-foreground border-foreground text-background"
                        : "bg-white/40 dark:bg-white/[0.03] border-border/60 dark:border-white/10 text-muted-foreground hover:border-border dark:hover:border-white/20 hover:text-foreground"
                    }`}
                  >
                    {btn.icon}
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Stats row */}
          <BlurFade delay={0.2} inView yOffset={6}>
            <div className="flex items-center gap-3 mb-8 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground/90">
                {filtered.length}
              </span>
              <span>
                {filtered.length === 1 ? "review" : "reviews"} found
              </span>
              {filter !== "all" && (
                <span className="flex items-center gap-1">
                  · filtered by{" "}
                  <span
                    className={
                      filter === "linkedin"
                        ? "text-[#0A66C2] dark:text-[#60a5fa] font-semibold"
                        : "text-[#FF0000] dark:text-[#f87171] font-semibold"
                    }
                  >
                    {filter === "linkedin" ? "LinkedIn" : "YouTube"}
                  </span>
                </span>
              )}
            </div>
          </BlurFade>

          {/* Review grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((review, index) => (
                  <ReviewCard key={review.id} review={review} index={index} />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 bg-white/20 dark:bg-white/[0.03] border border-border/50 dark:border-white/10 rounded-2xl backdrop-blur-md"
            >
              <p className="text-muted-foreground mb-4">
                No reviews found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setFilter("all");
                }}
                className="text-blue-500 hover:text-blue-600 font-semibold text-sm underline underline-offset-4"
              >
                Reset filters
              </button>
            </motion.div>
          )}

          {/* Return Home */}
          <div className="mt-16 flex justify-center">
            <SecondaryButton href="/#reviews" icon={<ArrowLeft className="w-5 h-5" />}>
              Back to Home
            </SecondaryButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
