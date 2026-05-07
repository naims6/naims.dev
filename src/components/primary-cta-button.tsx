"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type PrimaryCtaButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export default function PrimaryCtaButton({
  href,
  children,
  className,
  target,
  rel,
}: PrimaryCtaButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white transition-all duration-300 ease-out rounded-2xl overflow-hidden",
        className,
      )}
    >
      <span className="absolute inset-0 bg-linear-to-br from-blue-600 via-blue-500 to-indigo-600 transition-all duration-300 group-hover:scale-105" />
      <span className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2),0_4px_0_0_rgba(37,99,235,1),0_8px_16px_-4px_rgba(37,99,235,0.5)] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2),0_6px_0_0_rgba(37,99,235,1),0_12px_20px_-4px_rgba(37,99,235,0.6)] transition-all duration-300 group-hover:-translate-y-1" />
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </span>
      <span className="relative flex items-center gap-2">{children}</span>
    </Link>
  );
}
