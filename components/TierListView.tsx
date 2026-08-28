import type { Cookie, Tier } from "@/lib/types";
import { GRADE_COLOR_VAR, TIER_COLOR_VAR, TIER_ORDER } from "@/lib/constants";

export default function TierListView({
  cookies,
  tierKey,
}: {
  cookies: Cookie[];
  tierKey: "tierPve" | "tierPvp";
}) {
  const grouped = TIER_ORDER.map((tier) => ({
    tier,
    cookies: cookies.filter((c) => c[tierKey] === tier),
  })).filter((g) => g.cookies.length > 0);

  if (grouped.length === 0) {
    return (
      <p className="py-10 text-center text-sm text-ink-faint">
        아직 등록된 티어 데이터가 없습니다. 곧 채워질 예정입니다.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {grouped.map((g) => (
        <div key={g.tier} className="card-surface flex overflow-hidden rounded-xl">
          <div
            className="flex w-16 shrink-0 items-center justify-center font-display text-2xl font-black text-black"
            style={{ backgroundColor: TIER_COLOR_VAR[g.tier as Tier] }}
          >
            {g.tier}
          </div>
          <div className="flex flex-1 flex-wrap gap-3 p-3">
            {g.cookies.map((c) => (
              <div key={c.id} className="flex w-16 flex-col items-center text-center text-[0.68rem]">
                <div
                  className="mb-1 flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold text-white"
                  style={{ backgroundColor: GRADE_COLOR_VAR[c.grade] }}
                >
                  {c.nameKr[0]}
                </div>
                <span className="text-ink-soft">{c.nameKr}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
