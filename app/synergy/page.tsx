import Disclaimer from "@/components/Disclaimer";
import SynergyCalculator from "@/components/SynergyCalculator";
import SynergyTag from "@/components/SynergyTag";
import { COOKIES } from "@/data/cookies";
import { SYNERGIES, SYNERGY_NOTES } from "@/data/synergies";

export const metadata = {
  title: "시너지 계산기 | 크럼블 도감",
};

export default function SynergyPage() {
  return (
    <div>
      <h1 className="font-display mb-1 text-2xl font-bold text-ink">시너지 조합 계산기</h1>
      <p className="mb-4 text-sm text-ink-soft">
        쿠키를 최대 12종까지 선택해서 팀의 시너지 발동 현황을 확인해보세요. (메인 스테이지
        전투는 최대 12종 편성이 공식 확인되었습니다 — 데브시스터즈 글로벌 출시 보도자료 기준)
      </p>
      <Disclaimer>
        시너지 give/receive 데이터는 공개된 커뮤니티 자료를 기반으로 하며, 모든 쿠키의 정보가 검증된
        것은 아닙니다.
      </Disclaimer>

      <SynergyCalculator cookies={COOKIES} />

      <div className="fun-divider my-12" />

      <h2 className="font-display mb-4 text-xl font-bold text-ink">시너지 시스템이란?</h2>
      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SYNERGIES.map((s) => {
          const givers = COOKIES.filter((c) => c.gives.includes(s.id)).map((c) => c.nameKr);
          return (
            <div key={s.id} className="card-surface rounded-3xl p-4">
              <div className="mb-2 flex items-center gap-2">
                <SynergyTag id={s.id} />
                <span className="text-xs text-ink-faint">{s.nameEn}</span>
              </div>
              <p className="mb-2 text-sm text-ink-soft">{s.desc}</p>
              <p className="text-xs text-ink-faint">
                주는 쿠키: {givers.length ? givers.join(", ") : "조사 중"}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-3">
        {SYNERGY_NOTES.map((n) => (
          <div key={n.title} className="card-surface rounded-3xl p-5">
            <h3 className="font-display mb-1.5 text-base font-bold text-ink">{n.title}</h3>
            <p className="text-sm text-ink-soft">{n.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
