export type ReviewSource = "linkedin" | "youtube";

export interface VideoReview {
  id: string;
  name: string;
  avatar: string; // URL to user profile picture
  reviewText: string;
  source: ReviewSource;
  // For LinkedIn reviews
  linkedinId?: string; // e.g. "john-doe-123abc"
  // For YouTube reviews
  youtubeUsername?: string; // e.g. "@johndoe"
  youtubeProfileUrl?: string;
  // Optional: rating out of 5
  rating?: number;
  // Optional: the tutorial/video they reviewed
  tutorialTitle?: string;
}

export const videoReviews: VideoReview[] = [
  {
    id: "review-1",
    name: "Arafat Hossain",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Arafat",
    reviewText:
      "Naim bhai's tutorials are incredibly clear and practical. I went from zero to building full-stack apps after following his Next.js series. The way he explains complex concepts like server actions and middleware is genuinely impressive. Highly recommend!",
    source: "linkedin",
    linkedinId: "arafat-hossain-dev",
    rating: 5,
    tutorialTitle: "Next.js Full-Stack Series",
  },
  {
    id: "review-2",
    name: "Sadia Islam",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sadia",
    reviewText:
      "I've watched countless YouTube tutorials but Naim's content stands out. His TypeScript course helped me land my first developer job! The explanations are super detailed and he always codes live so you can follow along easily.",
    source: "youtube",
    youtubeUsername: "@sadia_codes",
    youtubeProfileUrl: "https://youtube.com/@sadia_codes",
    rating: 5,
    tutorialTitle: "TypeScript Masterclass",
  },
  {
    id: "review-3",
    name: "Rakib Hasan",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Rakib",
    reviewText:
      "Best Bangla programming tutorials on the internet, period. The Node.js backend series saved me months of struggling on my own. Everything from REST APIs to authentication is covered in depth. Thank you Naim bhai!",
    source: "youtube",
    youtubeUsername: "@rakib_dev",
    youtubeProfileUrl: "https://youtube.com/@rakib_dev",
    rating: 5,
    tutorialTitle: "Node.js Backend Mastery",
  },
  {
    id: "review-4",
    name: "Nusrat Jahan",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Nusrat",
    reviewText:
      "I was stuck on React state management for weeks. After watching Naim's Redux Toolkit tutorial, everything clicked! His approach of building real projects while teaching makes all the difference. Can't wait for more content.",
    source: "linkedin",
    linkedinId: "nusrat-jahan-developer",
    rating: 5,
    tutorialTitle: "Redux Toolkit Deep Dive",
  },
  {
    id: "review-5",
    name: "Tanvir Ahmed",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Tanvir",
    reviewText:
      "The Docker and deployment tutorials are phenomenal. I finally understand how to ship production-ready applications confidently. Naim explains DevOps concepts in a way that even a complete beginner can follow. Absolutely brilliant content!",
    source: "youtube",
    youtubeUsername: "@tanvir_techie",
    youtubeProfileUrl: "https://youtube.com/@tanvir_techie",
    rating: 5,
    tutorialTitle: "Docker & Deployment Guide",
  },
  {
    id: "review-6",
    name: "Priya Sharma",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Priya",
    reviewText:
      "Found Naim's channel through a friend's recommendation and never looked back. His PostgreSQL and Prisma ORM series transformed how I think about database design. The code quality in tutorials is production-level — something rare in free content.",
    source: "linkedin",
    linkedinId: "priya-sharma-fullstack",
    rating: 5,
    tutorialTitle: "PostgreSQL & Prisma ORM",
  },
];
