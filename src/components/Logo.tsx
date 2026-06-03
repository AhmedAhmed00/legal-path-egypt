import { Link } from "@tanstack/react-router";
import { Scale } from "lucide-react";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const textClass = variant === "light" ? "text-cream" : "text-navy";
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-gold shadow-gold">
        <Scale className="h-5 w-5 text-navy" strokeWidth={2.2} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-xl font-extrabold ${textClass}`}>محاميك</span>
        <span className="text-[10px] font-medium tracking-wide text-gold">MUHAMIK · LEGAL</span>
      </span>
    </Link>
  );
}