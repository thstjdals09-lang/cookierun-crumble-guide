"use client";

import { useMemo, useState } from "react";
import type { Cookie, Grade, SynergyId } from "@/lib/types";
import { GRADE_LABEL, GRADE_SHORT_LABEL, GRADE_COLOR_VAR } from "@/lib/constants";
import { SYNERGIES } from "@/data/synergies";
import SynergyTag from "./SynergyTag";

export default function CookieDex({ cookies }: { cookies: Cookie[] }) {
  const [query, setQuery] = useState("");
  const [grade, setGrade] = useState<Grade | "all">("all");
  const [synergy, setSynergy] = useState<SynergyId | "all">("all");
  const [selected, setSelected] = useState<Cookie | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cookies.filter((c) => {
      if (grade !== "all" && c.grade !== grade) return false;
      if (synergy !== "all" && !c.gives.includes(synergy)) return false;
      if (
        q &&
        !(
          c.nameKr.toLowerCase().includes(q) ||
          (c.nameEn ?? "").toLowerCase().includes(q)
        )
      )
        return false;
      return true;
    });
  }, [cookies, query, grade, synergy]);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="쿠키 이름 검색..."
          className="rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-gold focus:outline-none"
        />
        <select
          value={grade}
          onChange={(e) => setGrade(e.target.value as Grade | "all")}
          className="rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-ink focus:border-gold focus:outline-none"
        >
          <option value="all">전체 등급</option>
          {(Object.keys(GRADE_LABEL) as Grade[]).map((g) => (
            <option key={g} value={g}>
              {GRADE_LABEL[g]}
            </option>
          ))}
        </select>
        <span className="text-sm text-ink-faint">{filtered.length}종</span>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {SYNERGIES.map((s) => (
          <button
            key={s.id}
            onClick={() => setSynergy(synergy === s.id ? "all" : s.id)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
              synergy === s.id
                ? "border-transparent text-white"
                : "border-border text-ink-soft hover:border-gold hover:text-gold-light"
            }`}
            style={synergy === s.id ? { backgroundColor: s.color } : undefined}
          >
            {s.name}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-sm text-ink-faint">조건에 맞는 쿠키가 없습니다.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelected(c)}
              className="card-surface rounded-2xl p-3 text-left transition-transform hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]"
            >
              <span
                className="mb-2 inline-block rounded px-1.5 py-0.5 text-[0.65rem] font-extrabold text-white"
                style={{ backgroundColor: GRADE_COLOR_VAR[c.grade] }}
              >
                {GRADE_SHORT_LABEL[c.grade]}
              </span>
              <p className="font-display text-sm font-bold text-ink">{c.nameKr}</p>
              <p className="mb-2 text-xs text-ink-faint">{c.role ?? ""}</p>
              <div className="flex flex-wrap gap-1">
                {c.gives.map((g) => (
                  <SynergyTag key={g} id={g} />
                ))}
              </div>
            </button>
          ))}
        </div>
      )}

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="card-surface w-full max-w-md rounded-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between">
              <div>
                <span
                  className="mb-1 inline-block rounded px-1.5 py-0.5 text-[0.65rem] font-extrabold text-white"
                  style={{ backgroundColor: GRADE_COLOR_VAR[selected.grade] }}
                >
                  {GRADE_LABEL[selected.grade]}
                </span>
                <h2 className="font-display text-xl font-bold text-ink">{selected.nameKr}</h2>
                <p className="text-sm text-ink-faint">
                  {selected.nameEn ?? ""} {selected.role ? `· ${selected.role}` : ""}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="rounded-full bg-gold-soft px-2.5 py-1 text-sm text-ink hover:text-gold"
              >
                ✕
              </button>
            </div>
            <p className="mb-4 text-sm text-ink-soft">{selected.skill ?? "스킬 정보 준비 중"}</p>
            <div className="mb-3">
              <p className="mb-1.5 text-xs font-bold text-ink-faint">주는 시너지</p>
              <div className="flex flex-wrap gap-1.5">
                {selected.gives.length ? (
                  selected.gives.map((g) => <SynergyTag key={g} id={g} />)
                ) : (
                  <span className="text-xs text-ink-faint">없음</span>
                )}
              </div>
            </div>
            <div className="mb-3">
              <p className="mb-1.5 text-xs font-bold text-ink-faint">받는 시너지</p>
              <div className="flex flex-wrap gap-1.5">
                {selected.receives.length ? (
                  selected.receives.map((g) => <SynergyTag key={g} id={g} />)
                ) : (
                  <span className="text-xs text-ink-faint">없음</span>
                )}
              </div>
            </div>
            {selected.sourceNote && (
              <p className="mt-4 border-t border-border pt-3 text-xs text-ink-faint">
                {selected.sourceNote}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
