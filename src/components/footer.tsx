import Link from "next/link";
import { Github, Linkedin, Mail, Heart, Youtube } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/naims6/",
      label: "LinkedIn",
      color: "from-blue-600 to-blue-500",
      iconColor: "text-blue-600",
    },
    {
      icon: Github,
      href: "https://github.com/naims6",
      label: "GitHub",
      color: "from-gray-700 to-gray-600",
      iconColor: "text-gray-700",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@NaimsDev",
      label: "YouTube",
      color: "from-red-600 to-red-500",
      iconColor: "text-red-600",
      iconSize: 16,
    },
    {
      icon: Mail,
      href: "mailto:naim.sorker06@gmail.com",
      label: "Email",
      color: "from-red-500 to-red-400",
      iconColor: "text-red-500",
    },
    {
      icon: SiWhatsapp,
      href: "https://wa.me/+8801908390036",
      label: "WhatsApp",
      color: "from-green-500 to-green-400",
      iconColor: "text-green-500",
    },
  ];

  return (
    <footer className="relative mt-4 md:mt-6 border-t border-white/30 dark:border-white/10 bg-transparent overflow-hidden -mx-4 md:mx-0 w-[calc(100%+2rem)] md:w-full max-w-[100vw]">
      {/* Decorative gradient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright and Attribution */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <p className="text-sm text-muted-foreground font-medium">
              © {currentYear}{" "}
              <span className="text-foreground font-bold">Naim Sorker</span>.
              All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5 group">
              Developed{" "}
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 group-hover:scale-125 transition-transform" />{" "}
              by{" "}
              <Link
                href="https://www.facebook.com/naim.sorker6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors font-bold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full"
              >
                Naim Sorker
              </Link>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl bg-gradient-to-br ${link.color} hover:shadow-lg hover:scale-110 transition-all duration-300 border border-transparent backdrop-blur-sm text-white`}
                aria-label={link.label}
              >
                <link.icon size={link.iconSize || 18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
