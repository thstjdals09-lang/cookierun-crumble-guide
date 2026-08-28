"use client";

import { useLayoutEffect, useState } from "react";

const STORAGE_KEY = "crc-theme";

function readInitialTheme(): "dark" | "light" {
  if (typeof document === "undefined") return "light";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    // localStorage unavailable (private mode, etc.)
  }
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "dark" ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(readInitialTheme);

  // Re-apply after React's dev Strict Mode remount clears the attribute
  // the inline bootstrap script set in <head>. No-op in production.
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only re-sync on mount
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore — theme just won't persist across visits
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="테마 전환"
      className="flex items-center gap-1.5 rounded-full border-2 border-border px-3 py-1.5 text-xs font-bold text-ink-soft transition-all hover:scale-105 hover:border-accent hover:text-accent-dark"
    >
      <span className="text-sm">{theme === "dark" ? "🌙" : "☀️"}</span>
      {theme === "dark" ? "다크" : "라이트"}
    </button>
  );
}
