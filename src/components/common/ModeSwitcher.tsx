"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Copy, ExternalLink } from "lucide-react";

export function ModeSwitcher() {
  const pathname = usePathname();
  const isClone = pathname === "/clone";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-sand-300 bg-white/95 p-1.5 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl">
      <Link
        href="/"
        className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all ${
          !isClone
            ? "bg-forest-900 text-sand-50 shadow-sm"
            : "text-ink-700 hover:text-ink-950 hover:bg-sand-100"
        }`}
      >
        <Sparkles className="h-3.5 w-3.5 text-clay-400" />
        <span>Dr. Maya Redesign</span>
        <span className="rounded bg-clay-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-clay-600">
          Part 2 & 3
        </span>
      </Link>

      <Link
        href="/clone"
        className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all ${
          isClone
            ? "bg-forest-900 text-sand-50 shadow-sm"
            : "text-ink-700 hover:text-ink-950 hover:bg-sand-100"
        }`}
      >
        <Copy className="h-3.5 w-3.5 text-sage-500" />
        <span>Conejo Valley Clone</span>
        <span className="rounded bg-sage-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-forest-800">
          Part 1
        </span>
      </Link>

      <a
        href="https://www.conejovalleycounseling.com/home"
        target="_blank"
        rel="noopener noreferrer"
        title="View live original template site"
        className="hidden md:flex items-center gap-1 border-l border-sand-300 pl-3 pr-2 text-[11px] text-ink-500 hover:text-forest-900"
      >
        <span>Original Site</span>
        <ExternalLink className="h-3 w-3" />
      </a>
    </div>
  );
}
