import { Code2, Layout, Server, Smartphone, Globe, Search } from "lucide-react";

export const services = [
  {
    title: "Full-Stack Development",
    description: "Building scalable web applications using the MERN stack and Next.js.",
    icon: <Code2 className="w-6 h-6" />,
    color: "#3B82F6", // Blue
  },
  {
    title: "Responsive UI/UX",
    description: "Crafting beautiful, pixel-perfect interfaces with Tailwind CSS and Framer Motion.",
    icon: <Layout className="w-6 h-6" />,
    color: "#EC4899", // Pink
  },
  {
    title: "Backend & API Design",
    description: "Designing robust RESTful APIs and database schemas with Node.js and MongoDB.",
    icon: <Server className="w-6 h-6" />,
    color: "#10B981", // Green
  },
  {
    title: "E-Commerce Solutions",
    description: "Developing high-performance online stores with secure payment integrations.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "#F59E0B", // Amber
  },
  {
    title: "Web Performance",
    description: "Optimizing sites for maximum speed and Core Web Vitals compliance.",
    icon: <Globe className="w-6 h-6" />,
    color: "#8B5CF6", // Violet
  },
  {
    title: "SEO Optimization",
    description: "Implementing best practices to improve search engine visibility and ranking.",
    icon: <Search className="w-6 h-6" />,
    color: "#EF4444", // Red
  },
];
