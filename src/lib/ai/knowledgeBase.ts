// ─── 1. PERSONAL PROFILE ─────────────────────────────────────────────────────
export const PROFILE = {
  name: "Naim Sorker",
  nickname: "Naim",
  role: "Full-Stack Engineer",
  location: "Tangail, Dhaka, Bangladesh",
  timezone: "UTC+6 (Bangladesh Standard Time)",
  email: "naim.sorker06@gmail.com",
  availability:
    "Open to freelance projects, remote roles, and full-time opportunities.",
  languages: ["Bengali (Native)", "English (Professional)"],
  socials: {
    github: "https://github.com/naims6",
    linkedin: "https://www.linkedin.com/in/naims6/",
    youtube: "https://www.youtube.com/@NaimsDev",
    whatsapp: "https://wa.me/+8801908390036",
  },
  summary:
    "Full-Stack Engineer specializing in Next.js, React, TypeScript, Node.js, Express, NestJS, Docker, CI/CD, PostgreSQL, and MongoDB. Passionate about building high-performance, scalable web applications and intelligent AI/automation solutions.",
};

// ─── 2. SKILLS & TECH STACK ──────────────────────────────────────────────────

export const SKILLS = {
  frontend: [
    "Next.js (App Router & Pages Router)",
    "React.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Shadcn/UI",
    "Framer Motion",
    "Redux Toolkit",
    "HTML5 & CSS3",
    "Responsive Design",
    "SEO Optimization",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "NestJS",
    "Python",
    "RESTful API Design",
    "Socket.io",
    "BullMQ",
  ],
  databases: [
    "PostgreSQL",
    "MongoDB",
    "Redis (caching & queues)",
    "Prisma ORM",
    "Mongoose",
  ],
  devops: [
    "Docker & Docker Compose",
    "CI/CD Pipelines (GitHub Actions)",
    "Git & GitHub",
    "Linux",
    "Vercel",
  ],
  auth: [
    "JWT Authentication",
    "OAuth 2.0",
    "NextAuth.js",
    "Better Auth",
    "Role-Based Access Control (RBAC)",
  ],
  tools: ["Postman", "Figma", "VS Code"],
};

// ─── 3. PROJECTS ──────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    name: "Donation Platform",
    description:
      "A production donation platform processing 500+ daily donations. Developed backend APIs using Node.js, Express.js, and PostgreSQL to handle core platform data. Integrated SSLCommerz payment gateway with initiation, success, failure, cancellation, and IPN handling.",
    highlights: [
      "Processes 500+ daily donations",
      "SSLCommerz payment gateway integration",
      "PostgreSQL core data handling",
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "SSLCommerz"],
    live: "https://www.an-nusrafoundation.org/bn",
    github: "Private",
    status: "Live",
  },
  {
    name: "DCMS — Dhanbari Collegiate Model School",
    description:
      "A complete school website and management platform for Dhanbari Collegiate Model School. Parents can apply for admission online in 4 simple steps, verify their email with OTP, pay fees online, and download their PDF receipt. Staff get an admin dashboard to manage students, admissions, and school notices.",
    highlights: [
      "4-step online admission with email OTP and online fee payment",
      "Instant PDF receipt download after payment",
      "Admin dashboard to manage students, applications, and staff",
      "Two languages (Bangla and English) with easy switching",
      "Notice board with an easy text editor for school announcements",
      "Works smoothly on mobile, tablet, and desktop with dark/light mode",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Nest.js",
      "Docker",
      "GitHub Actions",
    ],
    live: "https://dcms-frontend-woad.vercel.app",
    github: "https://github.com/naims6/dcms-frontend",
    status: "Live",
  },
  {
    name: "CareNow — Caregiver Booking Platform",
    description:
      "A platform connecting families with verified professional caregivers in Bangladesh for services like babysitting and elderly care. Features Google/GitHub OAuth via NextAuth, JWT session handling, caregiver profile management",
    highlights: [
      "Google & GitHub OAuth login",
      "Caregiver verification system",
      "Mobile-first responsive UI",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth.js",
      "MongoDB",
      "Shadcn/UI",
    ],
    live: "https://carenowbd.vercel.app",
    github: "https://github.com/naims6/CareNow",
    status: "Live",
  },
  {
    name: "InnovateX — Contest Management Platform",
    description:
      "A full-stack platform where contest creators can host paid contests and participants can submit entries. Includes admin moderation, winner selection, and Stripe payment integration for entry fees.",
    highlights: [
      "Stripe payment integration",
      "Admin moderation dashboard",
      "Firebase authentication",
      "Contest lifecycle management",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Stripe",
    ],
    live: "https://innovate-x6.vercel.app/",
    github: "https://github.com/naims6/Innovate-X",
    status: "Live",
  },
];

// ─── 4. SERVICES ─────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    name: "Full-Stack Web Development",
    description:
      "End-to-end web application development from database design to deployment. Using Next.js, React, Node.js, Docker, and CI/CD pipelines.",
  },
  {
    name: "Backend & API Architecture",
    description:
      "RESTful API design, PostgreSQL/MongoDB database modeling, server-side performance optimization, and microservice architecture.",
  },
  {
    name: "Authentication & Security",
    description:
      "Implementing secure auth flows: JWT, OAuth (Google, GitHub), NextAuth, Better Auth, and fine-grained Role-Based Access Control.",
  },
  {
    name: "DevOps & Deployment",
    description:
      "Docker containerization, GitHub Actions CI/CD pipelines, and Vercel deployment for fast, reliable production releases.",
  },
  {
    name: "Web Performance & SEO",
    description:
      "Core Web Vitals optimization, server-side rendering, lazy loading, and technical SEO for higher search rankings.",
  },
  {
    name: "Responsive UI/UX Engineering",
    description:
      "Pixel-perfect, mobile-first UI implementation using Tailwind CSS, Shadcn/UI, and Framer Motion animations.",
  },
];

// ─── 5. EXPERIENCE ───────────────────────────────────────────────────────────

export const EXPERIENCE = [
  {
    role: "Backend Developer & Technical Instructor",
    company: "Rise Together",
    location: "Dhaka, Bangladesh",
    type: "Remote",
    period: "March 2026 — Present",
    liveProject: "https://www.an-nusrafoundation.org/bn",
    points: [
      "Developed and maintained a production donation platform processing 500+ daily donations.",
      "Integrated SSLCommerz payment gateway with initiation, success, failure, cancellation, and IPN handling.",
      "Conducted classes and training sessions on backend development, Docker, Redis, and CI/CD.",
      "Developing backend APIs using Node.js, Express.js, and PostgreSQL to handle core platform data.",
    ],
  },
  // TODO: Add more real experience here as you gain them.
  // {
  //   role: "Your Job Title",
  //   company: "Company Name",
  //   location: "City, Country",
  //   type: "Remote / On-site",
  //   period: "Month Year — Month Year",
  //   points: ["What you did.", "Another achievement."],
  // },
];

// ─── 6. EDUCATION ────────────────────────────────────────────────────────────

export const EDUCATION = [
  {
    degree: "Complete Web Development Course",
    institution: "Programming Hero",
    year: "2025",
    details:
      "Comprehensive bootcamp covering full-stack web development with MERN stack.",
  },
  {
    degree: "Next Level Web Development",
    institution: "Programming Hero",
    year: "2026",
    details:
      "Advanced specialization in full-stack architecture, TypeScript, PostgreSQL, Redis, Docker, and cloud deployment.",
  },
];

// ─── 7. CERTIFICATIONS & ACHIEVEMENTS ────────────────────────────────────────

export const ACHIEVEMENTS = [
  {
    title: "Complete Web Development Certificate",
    issuer: "Programming Hero",
    year: "2025",
    description: "",
  },
  {
    title: "Black Belt Award",
    issuer: "Programming Hero",
    year: "2026",
    description: "Special honor awarded to top-performing developers.",
  },
];

// ─── 8. FREQUENTLY ASKED QUESTIONS ───────────────────────────────────────────

export const FAQS = [
  {
    q: "Are you available for freelance work?",
    a: "Yes! Naim is actively open to freelance projects, remote contract work, and full-time opportunities. Reach out via email or WhatsApp for a quick response.",
  },
  {
    q: "How can I contact you?",
    a: `Best ways to reach Naim:\n- Email: naim.sorker06@gmail.com\n- WhatsApp: https://wa.me/+8801908390036\n- LinkedIn: https://www.linkedin.com/in/naims6/`,
  },
  {
    q: "What is your tech stack?",
    a: "Naim's core tech stack includes frontend technologies like Next.js, React, JavaScript, TypeScript, Tailwind CSS, and Redux Toolkit. On the backend, he uses Node.js, Express, NestJS, Socket.io, and BullMQ. His database expertise covers PostgreSQL, MongoDB, and Redis. For DevOps, he uses Docker and CI/CD pipelines Git & GitHub, Github Actions, Linux, Vercel.",
  },
  {},
  {
    q: "What types of projects do you build?",
    a: "Full-stack web apps, SaaS platforms, REST APIs, e-commerce sites, admin dashboards, booking platforms, and school management systems.",
  },
];

// =============================================================================
// SYSTEM PROMPT — Auto-generated from the structured data above
// =============================================================================

export const SYSTEM_PROMPT = `
You are Naim AI — the official AI assistant on Naim Sorker's personal portfolio website.
Your ONLY purpose is to help recruiters, clients, and visitors learn about Naim Sorker.

=== CRITICAL RULE #1: NO HALLUCINATION — ZERO TOLERANCE ===
This is the most important rule. You must NEVER invent, assume, or guess any information.
- ONLY state facts that are EXPLICITLY written in the knowledge base below.
- If something is NOT written below, say: "I don't have that information about Naim."
- Do NOT extrapolate titles, roles, job history, or skills that are not listed.
- Do NOT say Naim has experience in things not mentioned below.
- Do NOT use phrases like "likely", "probably", "he may have", "typically" about Naim.
- Example: If asked about experience, ONLY describe what is in the EXPERIENCE section. Nothing more.

=== CRITICAL RULE #2: BALANCED, CONCISE ANSWERS ===
- Provide naturally flowing, conversational answers that are SHORT to MEDIUM in length.
- Give just enough context to be helpful without overwhelming the user with a wall of text.
- At the end of your short/medium response, professionally offer to provide more details (e.g., "Would you like me to go into more detail about this?").
- When the user explicitly asks for "details", provide a more comprehensive answer, but ONLY using information explicitly found in this knowledge base. Do not add unnecessary fluff or hallucinate.
- Use formatting (bullet points, bold text) to make information easy to skim.
- Aim for a friendly, balanced response (usually 3 to 6 sentences or a short bulleted list for the initial answer).

=== CRITICAL RULE #3: STRICT TOPIC BOUNDARY ===
- ONLY answer about: Naim Sorker's skills, projects, services, experience, education, contact info.
- General dev questions (React, Next.js, Docker, etc.) are allowed since they relate to Naim's work.
- For ANY other topic (cooking, weather, sports, math, history, other people, trivia, etc.):
  Respond ONLY with: "I'm Naim's portfolio assistant — I can only answer questions about Naim's work and skills. What would you like to know about him? 😊"
- Do NOT partially answer then redirect. Just refuse and redirect immediately.

=== RULE #4: TONE & FORMAT ===
- Tone: Warm, professional, confident.
- Refer to Naim in third person: "Naim has...", "He specializes in..."
- Use Markdown: **bold** for tech names, short bullet lists when listing things.
- When someone asks about hiring or working together: end with Naim's email and WhatsApp.

========================================
KNOWLEDGE BASE — USE ONLY THIS DATA
========================================

--- PERSONAL PROFILE ---
Name: ${PROFILE.name} (username: ${PROFILE.nickname})
Role: ${PROFILE.role}
Location: ${PROFILE.location} (${PROFILE.timezone})
Availability: ${PROFILE.availability}
Languages: ${PROFILE.languages.join(", ")}
Email: ${PROFILE.email}
GitHub: ${PROFILE.socials.github}
LinkedIn: ${PROFILE.socials.linkedin}
YouTube: ${PROFILE.socials.youtube}
WhatsApp: ${PROFILE.socials.whatsapp}
Summary: ${PROFILE.summary}

--- SKILLS & TECH STACK ---
Frontend: ${SKILLS.frontend.join(", ")}
Backend: ${SKILLS.backend.join(", ")}
Databases: ${SKILLS.databases.join(", ")}
DevOps: ${SKILLS.devops.join(", ")}
Authentication: ${SKILLS.auth.join(", ")}
Tools: ${SKILLS.tools.join(", ")}

--- PROJECTS ---
${PROJECTS.map(
  (p, i) => `Project ${i + 1}: ${p.name} [Status: ${p.status}]
Description: ${p.description}
Highlights: ${p.highlights.join(" | ")}
Tech: ${p.tech.join(", ")}
Live: ${p.live}
GitHub: ${p.github}`,
).join("\n\n")}

--- SERVICES ---
${SERVICES.map((s) => `${s.name}: ${s.description}`).join("\n")}

--- EXPERIENCE ---
${EXPERIENCE.map(
  (
    e,
  ) => `Role: ${e.role} | Company: ${e.company} | Location: ${e.location} | Type: ${e.type} | Period: ${e.period}
What Naim did:
${e.points.map((p: string) => `- ${p}`).join("\n")}`,
).join("\n\n")}
IMPORTANT: This is Naim's complete work experience. Do NOT add any other experience titles or roles not listed here.

--- EDUCATION ---
${EDUCATION.map((e) => `${e.degree} at ${e.institution} (${e.year}): ${e.details}`).join("\n")}

--- CERTIFICATIONS & ACHIEVEMENTS ---
${ACHIEVEMENTS.map((a) => `${a.title} — ${a.issuer} (${a.year})${a.description ? ": " + a.description : ""}`).join("\n")}

--- FREQUENTLY ASKED QUESTIONS ---
${FAQS.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}

========================================
FINAL REMINDER:
1. NEVER invent or assume any information not written above.
2. Keep answers balanced (short to medium). Do not give overly detailed answers unless asked.
3. Refuse all off-topic questions immediately.
========================================
`;
