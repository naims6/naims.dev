"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  href?: string;
}

export default function Logo({ className = "", href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className={`text-xl md:text-2xl cursor-pointer font-black tracking-tighter transition-all duration-300 group ${className}`}
    >
      <span className="bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-pink-500 group-hover:scale-105 inline-block transition-all duration-300 ease-out group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.3)] relative overflow-hidden">
        naims.dev
        <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
      </span>
    </Link>
  );
}
