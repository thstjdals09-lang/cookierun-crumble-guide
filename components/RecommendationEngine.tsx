"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Cookie } from "@/lib/types";
import { CONTENT_TYPES, type ContentCategory } from "@/lib/contentTypes";
import { buildTeam, recommendPets, type OwnedCookie } from "@/lib/recommend";
import { GRADE_LABEL, GRADE_COLOR_VAR } from "@/lib/constants";
import { PETS } from "@/data/pets";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "./AuthProvider";
import CookieAvatar from "./CookieAvatar";
import PetAvatar from "./PetAvatar";
import SynergyTag from "./SynergyTag";

interface ProgressRow {
  cookie_id: string;
  level: number;
  stars: number;
}

export default function RecommendationEngine({ cookies }: { cookies: Cookie[] }) {
  const { user, loading: authLoading, signInWithGoogle } = useAuth();
  const [category, setCategory] = useState<ContentCategory>("wave");
  const [owned, setOwned] = useState<OwnedCookie[]>([]);
  const [loadingOwned, setLoadingOwned] = useState(true);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    supabase
      .from("cookie_progress")
      .select("cookie_id, level, stars")
      .then(({ data, error }) => {
        if (cancelled || error || !data) return;
        const byId = new Map(cookies.map((c) => [c.id, c]));
        const list: OwnedCookie[] = (data as ProgressRow[])
          .map((row) => {
            const cookie = byId.get(row.cookie_id);
            return cookie ? { cookie, level: row.level, stars: row.stars } : null;
          })
          .filter((x): x is OwnedCookie => x !== null);
        setOwned(list);
        setLoadingOwned(false);
      });
    return () => {
      cancelled = true;
    };
  }, [user, cookies]);

  const activeType = CONTENT_TYPES.find((c) => c.id === category)!;

  const result = useMemo(() => {
    if (!user || owned.length === 0) return null;
    return buildTeam(owned, category, 12);
  }, [owned, category, user]);

  const petPicks = useMemo(() => recommendPets(category, PETS, 3), [category]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {CONTENT_TYPES.map((ct) => (
          <button
            key={ct.id}
            onClick={() => setCategory(ct.id)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-all hover:scale-105 ${
              category === ct.id
                ? "bg-accent text-white shadow-[var(--shadow-accent)]"
                : "border-2 border-border text-ink-soft"
            }`}
          >
            {ct.emoji} {ct.label}
          </button>
        ))}
      </div>

      <div className="card-surface mb-8 rounded-3xl p-5">
        <h2 className="font-display mb-1 text-lg font-bold text-ink">
          {activeType.emoji} {activeType.label}
        </h2>
        <p className="mb-2 text-sm text-ink-soft">{activeType.description}</p>
        <p className="mb-3 text-xs text-ink-faint">
          예시: {activeType.examples.join(" · ")}
        </p>
        {activeType.prioritySynergies.length > 0 && (
          <div className="mb-2 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-ink-faint">우선 시너지:</span>
            {activeType.prioritySynergies.map((s) => (
              <SynergyTag key={s} id={s} />
            ))}
          </div>
        )}
        <p className="text-xs text-ink-faint">💡 {activeType.reasoning}</p>
      </div>

      {authLoading ? (
        <p className="py-10 text-center text-sm text-ink-faint">불러오는 중...</p>
      ) : !user ? (
        <div className="card-surface flex flex-col items-center gap-4 rounded-3xl p-10 text-center">
          <p className="text-4xl">🔒</p>
          <p className="text-sm text-ink-soft">
            Google로 로그인하고 &quot;내 컬렉션&quot;에 쿠키를 기록해두면, 그 중에서 이 유형에 가장
            잘 맞는 조합을 분석해서 보여드려요.
          </p>
          <button
            onClick={() => signInWithGoogle()}
            className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-[var(--shadow-accent)]"
          >
            Google로 로그인
          </button>
        </div>
      ) : loadingOwned ? (
        <p className="py-10 text-center text-sm text-ink-faint">컬렉션 불러오는 중...</p>
      ) : owned.length === 0 ? (
        <div className="card-surface rounded-3xl p-8 text-center">
          <p className="mb-2 text-sm text-ink-soft">
            아직 &quot;내 컬렉션&quot;에 기록된 쿠키가 없어요.
          </p>
          <Link href="/my-collection" className="text-sm font-bold text-accent hover:underline">
            내 컬렉션에서 보유 쿠키 기록하러 가기 →
          </Link>
        </div>
      ) : (
        <div>
          <h3 className="font-display mb-3 text-lg font-bold text-ink">
            내 컬렉션 기준 추천 조합 ({result?.picks.length ?? 0}/{result?.teamSize ?? 12})
          </h3>

          {result && result.missingRoleNotes.length > 0 && (
            <ul className="mb-3 list-disc space-y-1 pl-5 text-xs text-ink-faint">
              {result.missingRoleNotes.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          )}
          {result && result.duplicateSynergyWarnings.length > 0 && (
            <ul className="mb-4 list-disc space-y-1 pl-5 text-xs text-red-400">
              {result.duplicateSynergyWarnings.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          )}

          <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {result?.picks.map((p) => (
              <div key={p.cookie.id} className="card-surface flex items-start gap-3 rounded-2xl p-3">
                <CookieAvatar cookie={p.cookie} size={44} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="inline-block rounded-full px-1.5 py-0.5 text-[0.6rem] font-extrabold text-white"
                      style={{ backgroundColor: GRADE_COLOR_VAR[p.cookie.grade] }}
                    >
                      {GRADE_LABEL[p.cookie.grade]}
                    </span>
                    <p className="truncate text-sm font-bold text-ink">{p.cookie.nameKr}</p>
                  </div>
                  <p className="mt-0.5 text-xs text-ink-faint">
                    Lv{p.level} · ⭐{p.stars}
                  </p>
                  <p className="mt-1 text-[0.72rem] text-ink-soft">{p.reasons.join(" · ")}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-display mb-3 text-lg font-bold text-ink">추천 펫</h3>
          {petPicks.length === 0 ? (
            <p className="text-sm text-ink-faint">
              이 유형에 맞는 효과가 확인된 펫이 아직 없어요 (펫 효과 데이터가 6종만 확보되어 있어요).
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {petPicks.map(({ pet, matchedKeywords }) => (
                <div key={pet.id} className="card-surface flex items-start gap-3 rounded-2xl p-3">
                  <PetAvatar pet={pet} size={40} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-ink">{pet.nameKr}</p>
                    <p className="mt-1 text-[0.72rem] text-ink-soft">
                      일치 키워드: {matchedKeywords.join(", ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
