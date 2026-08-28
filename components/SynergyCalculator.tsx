"use client";

import { useMemo, useState } from "react";
import type { Cookie, SynergyId } from "@/lib/types";
import { GRADE_SHORT_LABEL, GRADE_COLOR_VAR } from "@/lib/constants";
import { SYNERGIES } from "@/data/synergies";
import CookieAvatar from "./CookieAvatar";

const MAX_SLOTS = 5;

export default function SynergyCalculator({ cookies }: { cookies: Cookie[] }) {
  const [query, setQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const team = useMemo(
    () => selectedIds.map((id) => cookies.find((c) => c.id === id)).filter((c): c is Cookie => !!c),
    [selectedIds, cookies]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cookies;
    return cookies.filter(
      (c) => c.nameKr.toLowerCase().includes(q) || (c.nameEn ?? "").toLowerCase().includes(q)
    );
  }, [cookies, query]);

  function toggle(id: string) {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= MAX_SLOTS) return prev;
      return [...prev, id];
    });
  }

  const giveCount: Record<SynergyId, number> = useMemo(() => {
    const counts = Object.fromEntries(SYNERGIES.map((s) => [s.id, 0])) as Record<SynergyId, number>;
    team.forEach((c) => c.gives.forEach((g) => (counts[g] = (counts[g] ?? 0) + 1)));
    return counts;
  }, [team]);

  const activeGiveIds = useMemo(
    () => new Set(Object.entries(giveCount).filter(([, n]) => n > 0).map(([id]) => id)),
    [giveCount]
  );
  const boosted = team.filter((c) => c.receives.some((r) => activeGiveIds.has(r)));
  const dupWarnings = Object.entries(giveCount).filter(([, n]) => n > 1);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="쿠키 검색..."
            className="rounded-xl border border-border bg-bg-elevated px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
          />
          <button
            onClick={() => setSelectedIds([])}
            className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-ink-soft hover:border-accent hover:text-accent"
          >
            팀 초기화
          </button>
        </div>
        <div className="scrollbar-thin grid max-h-[560px] grid-cols-3 gap-2 overflow-y-auto pr-1 sm:grid-cols-4 md:grid-cols-5">
          {filtered.map((c) => {
            const isSelected = selectedIds.includes(c.id);
            return (
              <button
                key={c.id}
                onClick={() => toggle(c.id)}
                className={`flex flex-col items-center gap-1 rounded-2xl border-2 p-2 text-center text-xs font-semibold transition-all hover:scale-105 ${
                  isSelected
                    ? "border-accent bg-accent-soft text-ink"
                    : "border-border bg-bg-elevated text-ink-soft hover:border-border-strong"
                }`}
              >
                <CookieAvatar cookie={c} size={40} />
                <span
                  className="inline-block rounded-full px-1 py-0.5 text-[0.6rem] font-extrabold text-white"
                  style={{ backgroundColor: GRADE_COLOR_VAR[c.grade] }}
                >
                  {GRADE_SHORT_LABEL[c.grade]}
                </span>
                <div>{c.nameKr}</div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="card-surface h-fit rounded-3xl p-4 lg:sticky lg:top-20">
        <h3 className="mb-2 font-display text-base font-bold text-ink">내 팀</h3>
        <div className="mb-4 flex flex-col gap-1.5">
          {team.length === 0 ? (
            <p className="py-6 text-center text-xs text-ink-faint">
              왼쪽에서 쿠키를 선택해 팀을 구성해보세요 (최대 {MAX_SLOTS}명).
            </p>
          ) : (
            team.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between rounded-xl bg-accent-soft px-2.5 py-1.5 text-sm text-ink"
              >
                <span className="flex items-center gap-2">
                  <CookieAvatar cookie={c} size={24} />
                  {c.nameKr}
                </span>
                <button onClick={() => toggle(c.id)} className="text-ink-faint hover:text-accent">
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        <h3 className="mb-2 font-display text-base font-bold text-ink">시너지 발동 현황</h3>
        <div className="mb-3 flex flex-col gap-2">
          {SYNERGIES.map((s) => {
            const count = giveCount[s.id] ?? 0;
            const pct = Math.min(100, (count / MAX_SLOTS) * 100);
            return (
              <div key={s.id} className="flex items-center gap-2">
                <span className="w-12 shrink-0 text-xs font-bold" style={{ color: s.color }}>
                  {s.name}
                </span>
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-accent-soft">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, backgroundColor: s.color }}
                  />
                </div>
                <span className="w-4 text-right text-xs text-ink-faint">{count}</span>
              </div>
            );
          })}
        </div>

        {dupWarnings.length > 0 && (
          <ul className="mb-3 list-disc space-y-1 pl-4 text-xs text-red-400">
            {dupWarnings.map(([id, n]) => {
              const s = SYNERGIES.find((x) => x.id === id);
              return (
                <li key={id}>
                  {s?.name} 시너지를 주는 쿠키가 {n}명 있어요. 시너지는 중첩되지 않으니 다른 시너지로
                  교체를 고려해보세요.
                </li>
              );
            })}
          </ul>
        )}

        {team.length > 0 && (
          <p className="text-xs text-ink-faint">
            현재 조합에서 시너지로 강화되는 쿠키:{" "}
            {boosted.length ? boosted.map((c) => c.nameKr).join(", ") : "없음"}
          </p>
        )}
      </div>
    </div>
  );
}
