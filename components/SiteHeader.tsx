"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { href: "/", label: "홈" },
  { href: "/cookies", label: "쿠키 도감" },
  { href: "/synergy", label: "시너지 계산기" },
  { href: "/tier", label: "티어리스트" },
  { href: "/guide/pve", label: "PVE 공략" },
  { href: "/guide/pvp", label: "PVP 공략" },
  { href: "/pets", label: "펫 도감" },
  { href: "/patch-notes", label: "패치노트" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0 font-display text-lg font-bold tracking-tight">
          <span className="gold-text">크럼블 도감</span>
        </Link>

        <nav className="scrollbar-thin flex flex-1 items-center gap-1 overflow-x-auto">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-gold text-black"
                    : "text-ink-soft hover:bg-gold-soft hover:text-gold-light"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <span
            className="ml-1 whitespace-nowrap rounded-full border border-dashed border-border px-3 py-1.5 text-sm font-semibold text-ink-faint"
            title="로그인/커뮤니티 기능은 다음 단계에서 열려요"
          >
            커뮤니티 (준비중)
          </span>
        </nav>

        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
