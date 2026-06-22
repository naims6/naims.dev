export interface Tutorial {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
  date: string;
  category?: string;
}

export const tutorials: Tutorial[] = [
  {
    id: "1",
    title:
      "Docker Complete Tutorial in Bangla | Image, Container, Dockerfile, Docker Compose & Deploy",
    description:
      "In this beginner-friendly Docker tutorial, you'll learn: What is Docker?, Why Docker is used?, Docker Image, Docker Container, Dockerfile, .dockerignore, Docker Compose, Build Docker Image, Run Docker Container, Deploy Docker Application on Render. Whether you're a beginner or backend developer, this tutorial will help you understand Docker easily with practical examples.",
    youtubeId: "ZWtfwvtDv0I",
    duration: "58:07",
    date: "Jun 2026",
    category: "Docker",
  },
  {
    id: "2",
    title:
      "Redis Tutorial in Bangla | Node.js Redis Package + Redis CLI for Beginner",
    description:
      "Learn Redis from scratch in Bangla. In this tutorial, you'll learn what Redis is, why Redis is used, Redis installation, Redis CLI commands, SET, GET, TTL, and the most important Redis data types: String, Hash, List, and Set. Topics Cover: What is Redis?, Why use Redis?, Redis Installation, Redis CLI, SET, GET & TTL, String, Hash, List & Set, Redis with Node.js",
    youtubeId: "TS-kr_tiFOg",
    duration: "40:50",
    date: "Jun 2026",
    category: "Redis",
  },
  {
    id: "3",
    title:
      "Swagger Tutorial for Beginners in Bangla | API Documentation Made Easy",
    description:
      "In this video, you'll learn Swagger from the scratch with simple explanations and practical examples. We will cover: What is API Documentation, What is Swagger?, API Documentation, Swagger UI Setup, Documenting API Endpoints, Request Response Body. Swagger helps developers create, maintain, and share API documentation efficiently. It makes APIs easier to understand, test, and collaborate on. Whether you're learning Node.js, Express.js, or Backend Development, Swagger is an essential tool to have in your toolkit.",
    youtubeId: "JIFwDMAzKBE",
    duration: "46:29",
    date: "Jun 2026",
    category: "Swagger",
  },
  {
    id: "4",
    title:
      "BullMQ Tutorial in Bangla | Complete Beginner Guide with Node.js & Redis",
    description:
      "In this beginner-friendly BullMQ tutorial in Bangla, you'll learn everything about BullMQ from scratch with practical examples.",
    youtubeId: "tKQb3cSYq0E",
    duration: "25:30",
    date: "June 2026",
    category: "BullMQ",
  },
  {
    id: "5",
    title: "Zod Tutorial for Beginners | Learn Validation in Zod | Naims Dev",
    description:
      "In this beginner-friendly Zod tutorial in Bangla, you'll learn everything about Zod from scratch with practical examples.",
    youtubeId: "tubCdiOlHJE",
    duration: "24:56",
    date: "Jun 2026",
    category: "Zod",
  },
];
