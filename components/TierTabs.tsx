"use client";

import { useState } from "react";
import type { Cookie } from "@/lib/types";
import TierListView from "./TierListView";

export default function TierTabs({ cookies }: { cookies: Cookie[] }) {
  const [mode, setMode] = useState<"tierPve" | "tierPvp">("tierPve");

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setMode("tierPve")}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
            mode === "tierPve" ? "bg-gold text-black" : "border border-border text-ink-soft"
          }`}
        >
          PVE 스테이지 기준
        </button>
        <button
          onClick={() => setMode("tierPvp")}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
            mode === "tierPvp" ? "bg-gold text-black" : "border border-border text-ink-soft"
          }`}
        >
          PVP 아레나 기준
        </button>
      </div>
      <TierListView cookies={cookies} tierKey={mode} />
    </div>
  );
}
