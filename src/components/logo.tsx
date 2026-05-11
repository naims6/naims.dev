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
      <span className="bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent group-hover:to-purple-500 transition-all duration-500">
        naims.dev
      </span>
    </Link>
  );
}
