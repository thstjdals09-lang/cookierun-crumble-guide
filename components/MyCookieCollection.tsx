"use client";

import { useEffect, useMemo, useState } from "react";
import type { Cookie, Grade } from "@/lib/types";
import { GRADE_LABEL, GRADE_COLOR_VAR } from "@/lib/constants";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "./AuthProvider";
import CookieAvatar from "./CookieAvatar";

interface ProgressRow {
  cookie_id: string;
  level: number;
  stars: number;
}

type ProgressMap = Record<string, { level: number; stars: number }>;
type SaveState = "idle" | "saving" | "saved" | "error";

export default function MyCookieCollection({ cookies }: { cookies: Cookie[] }) {
  const { user, loading: authLoading, signInWithGoogle } = useAuth();
  const [progress, setProgress] = useState<ProgressMap>({});
  // Only ever read while `user` is truthy (the component returns its own
  // "please log in" UI before this matters), so the no-user case below
  // doesn't need to touch this state at all.
  const [loadingProgress, setLoadingProgress] = useState(true);
  const [saveStates, setSaveStates] = useState<Record<string, SaveState>>({});
  const [query, setQuery] = useState("");
  const [grade, setGrade] = useState<Grade | "all">("all");
  const [onlyTracked, setOnlyTracked] = useState(false);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    supabase
      .from("cookie_progress")
      .select("cookie_id, level, stars")
      .then(({ data, error }) => {
        if (cancelled) return;
        if (!error && data) {
          const map: ProgressMap = {};
          (data as ProgressRow[]).forEach((row) => {
            map[row.cookie_id] = { level: row.level, stars: row.stars };
          });
          setProgress(map);
        }
        setLoadingProgress(false);
      });
    return () => {
      cancelled = true;
    };
  }, [user]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cookies.filter((c) => {
      if (grade !== "all" && c.grade !== grade) return false;
      if (onlyTracked && !progress[c.id]) return false;
      if (q && !c.nameKr.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [cookies, query, grade, onlyTracked, progress]);

  async function saveRow(cookieId: string, level: number, stars: number) {
    if (!user) return;
    setSaveStates((s) => ({ ...s, [cookieId]: "saving" }));
    const { error } = await supabase
      .from("cookie_progress")
      .upsert({ user_id: user.id, cookie_id: cookieId, level, stars }, { onConflict: "user_id,cookie_id" });
    setSaveStates((s) => ({ ...s, [cookieId]: error ? "error" : "saved" }));
    if (!error) {
      setTimeout(() => {
        setSaveStates((s) => (s[cookieId] === "saved" ? { ...s, [cookieId]: "idle" } : s));
      }, 1500);
    }
  }

  function updateLocal(cookieId: string, patch: Partial<{ level: number; stars: number }>) {
    setProgress((prev) => ({
      ...prev,
      [cookieId]: {
        level: prev[cookieId]?.level ?? 1,
        stars: prev[cookieId]?.stars ?? 0,
        ...patch,
      },
    }));
  }

  if (authLoading) {
    return <p className="py-16 text-center text-sm text-ink-faint">불러오는 중...</p>;
  }

  if (!user) {
    return (
      <div className="card-surface flex flex-col items-center gap-4 rounded-3xl p-10 text-center">
        <p className="text-4xl">🔒</p>
        <p className="text-sm text-ink-soft">
          Google로 로그인하면 보유한 쿠키의 레벨·성급을 저장하고 언제든 다시 확인할 수 있어요.
        </p>
        <button
          onClick={() => signInWithGoogle()}
          className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-[var(--shadow-accent)]"
        >
          Google로 로그인
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="쿠키 이름 검색..."
          className="rounded-xl border border-border bg-bg-elevated px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
        />
        <select
          value={grade}
          onChange={(e) => setGrade(e.target.value as Grade | "all")}
          className="rounded-xl border border-border bg-bg-elevated px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
        >
          <option value="all">전체 등급</option>
          {(Object.keys(GRADE_LABEL) as Grade[]).map((g) => (
            <option key={g} value={g}>
              {GRADE_LABEL[g]}
            </option>
          ))}
        </select>
        <button
          onClick={() => setOnlyTracked((v) => !v)}
          className={`rounded-full border-2 px-3 py-1.5 text-xs font-bold transition-all hover:scale-105 ${
            onlyTracked
              ? "border-accent bg-accent-soft text-accent-dark"
              : "border-border text-ink-soft"
          }`}
        >
          기록한 쿠키만 보기
        </button>
        {loadingProgress && <span className="text-xs text-ink-faint">불러오는 중...</span>}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => {
          const p = progress[c.id] ?? { level: 1, stars: 0 };
          const state = saveStates[c.id] ?? "idle";
          return (
            <div key={c.id} className="card-surface flex items-center gap-3 rounded-2xl p-3">
              <CookieAvatar cookie={c} size={48} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-ink">{c.nameKr}</p>
                <span
                  className="mb-1 inline-block rounded-full px-1.5 py-0.5 text-[0.6rem] font-extrabold text-white"
                  style={{ backgroundColor: GRADE_COLOR_VAR[c.grade] }}
                >
                  {GRADE_LABEL[c.grade]}
                </span>
                <div className="mt-1 flex items-center gap-2 text-xs">
                  <label className="flex items-center gap-1 text-ink-faint">
                    Lv
                    <input
                      type="number"
                      min={1}
                      max={999}
                      value={p.level}
                      onChange={(e) => updateLocal(c.id, { level: Number(e.target.value) })}
                      onBlur={() => saveRow(c.id, p.level, p.stars)}
                      className="w-14 rounded-lg border border-border bg-bg px-1.5 py-0.5 text-ink focus:border-accent focus:outline-none"
                    />
                  </label>
                  <label className="flex items-center gap-1 text-ink-faint">
                    ⭐
                    <input
                      type="number"
                      min={0}
                      max={10}
                      value={p.stars}
                      onChange={(e) => updateLocal(c.id, { stars: Number(e.target.value) })}
                      onBlur={() => saveRow(c.id, p.level, p.stars)}
                      className="w-14 rounded-lg border border-border bg-bg px-1.5 py-0.5 text-ink focus:border-accent focus:outline-none"
                    />
                  </label>
                  {state === "saving" && <span className="text-ink-faint">저장 중…</span>}
                  {state === "saved" && <span className="text-accent-dark">저장됨 ✓</span>}
                  {state === "error" && <span className="text-red-500">저장 실패</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
