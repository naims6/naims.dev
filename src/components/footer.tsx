import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/naims6/",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/naims6", label: "GitHub" },
    { icon: Mail, href: "mailto:naim.sorker06@gmail.com", label: "Email" },
    {
      icon: SiWhatsapp,
      href: "https://wa.me/+8801908390036",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="relative mt-20 border-t border-muted/20 bg-background/50 backdrop-blur-md overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright and Attribution */}
          <div className="flex flex-col items-center md:items-start gap-2">
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
                className="p-2.5 rounded-xl bg-muted/30 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20 backdrop-blur-sm"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-primary/5 blur-3xl -z-10 rounded-full" />
    </footer>
  );
}
