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
}

export const videoReviews: VideoReview[] = [
  {
    id: "review-1",
    name: "Gantabya Kumar Bayda",
    avatar:
      "https://res.cloudinary.com/dynxnpj21/image/upload/v1783938670/1734641947822_sx18m3.jpg",
    reviewText:
      "Thanks Naim bhai, you are not only teaching backend development, you are also helping the interns build discipline, confidence, and real-world problem-solving skills. The effort and dedication from both you and the interns are clearly visible. Huge respect to you for guiding them with so much patience and passion.",
    source: "linkedin",
    linkedinId: "devgantabya",
  },
  {
    id: "review-2",
    name: "Abdul Mannan",
    avatar:
      "https://res.cloudinary.com/dynxnpj21/image/upload/v1783938670/1741711149455_mpc2jb.jpg",
    reviewText:
      "Really enjoyed today’s session — productive discussion, great energy, and clear communication from everyone involved. These kinds of meetings make teamwork smooth and motivating. Looking forward to the next one!",
    source: "linkedin",
    linkedinId: "senpaioka",
  },
  {
    id: "review-3",
    name: "Md Abdullah",
    avatar:
      "https://res.cloudinary.com/dynxnpj21/image/upload/v1783938671/1777990732026_othhbr.jpg",
    reviewText:
      "I’m very grateful for this learning experience. The explanations are simple, helpful, and beginner-friendly. I’ve learned many new things with confidence. Thank you for making learning easier and more enjoyable!",
    source: "linkedin",
    linkedinId: "ars-abdullah",
  },
  {
    id: "review-4",
    name: "Mehedi Hasan",
    avatar:
      "https://res.cloudinary.com/dynxnpj21/image/upload/v1783938670/1777692823682_ojfbtu.jpg",
    reviewText:
      "The way you teach actually makes things click. You don't just cover the topics, you make sure everyone really understands it.Really grateful to learn under your guidance, vai. 🙌",
    source: "linkedin",
    linkedinId: "thisismahdihasan",
  },
  {
    id: "review-7",
    name: "learnwithshahariar",
    avatar:
      "https://res.cloudinary.com/dynxnpj21/image/upload/v1783939950/channels4_profile_s7lwag.jpg",
    reviewText:
      "Redis শিখবো বলে ইউটিউবে খুজছিলাম কিন্ত ভালো কোনো রিসোর্চ খুজে পাচ্ছিলাম না। ধন্যবাদ ভাই টিউটোরিয়াল এর জন্য।",
    source: "youtube",
    youtubeUsername: "@learnwithshahariar",
    youtubeProfileUrl: "https://youtube.com/@learnwithshahariar",
  },
  {
    id: "review-6",
    name: "Md. Rayhan Islam Rabby",
    avatar:
      "https://res.cloudinary.com/dynxnpj21/image/upload/v1783938670/1777800762761_u7kwxy.jpg",
    reviewText:
      "Alhamdulillah, I’m one of the students in this batch, and I’m learning a lot from these classes. The way you teach is very clear, practical, and easy to understand. Even difficult backend concepts feel much simpler because of your guidance. Every class is truly helpful and inspiring. Grateful to have such a supportive mentor ❤️🙌",
    source: "linkedin",
    linkedinId: "rayhanislamrabby",
  },
  {
    id: "review-5",
    name: "Al Shahariar Arafat Shawon",
    avatar:
      "https://res.cloudinary.com/dynxnpj21/image/upload/v1783938670/1770736288626_vuwkp5.jpg",
    reviewText:
      "These classes are truly helpful for us. The way you are teaching Naim bhai is really matter of praising. After completing the internship fully, I believe I will be a backend developer with hands on project knowledge.",
    source: "linkedin",
    linkedinId: "shahariar-dev",
  },
];
