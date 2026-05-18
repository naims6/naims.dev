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
      <span className="bg-linear-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-violet-600 dark:group-hover:from-indigo-400 dark:group-hover:to-violet-400 group-hover:scale-105 inline-block transition-all duration-300 ease-out group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.3)] relative overflow-hidden">
        naims.dev
        <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
      </span>
    </Link>
  );
}
