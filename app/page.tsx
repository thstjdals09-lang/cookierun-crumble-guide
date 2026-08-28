import Link from "next/link";
import { COOKIES } from "@/data/cookies";
import { PATCH_NOTES } from "@/data/patchNotes";

const SHORTCUTS = [
  { href: "/cookies", title: "쿠키 도감", desc: "전체 쿠키의 등급·역할·스킬·시너지를 한눈에" },
  { href: "/synergy", title: "시너지 계산기", desc: "5슬롯 팀을 짜고 발동 시너지를 실시간 확인" },
  { href: "/tier", title: "티어리스트", desc: "PVE 스테이지 / PVP 아레나 기준 티어" },
  { href: "/guide/pve", title: "PVE 공략", desc: "막히기 쉬운 스테이지·보스 벽 구간 공략" },
  { href: "/guide/pvp", title: "PVP 공략", desc: "아레나 조합과 방덱 대응 전략" },
  { href: "/pets", title: "펫 도감", desc: "펫 효과와 조합 활용법" },
];

export default function Home() {
  const latestPatch = PATCH_NOTES[0];

  return (
    <div>
      <section className="mb-12 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Cookie Run: Crumble
        </p>
        <h1 className="mb-4 font-display text-3xl font-black leading-tight text-ink sm:text-5xl">
          <span className="gold-text">쿠키런: 크럼블</span> PVE·PVP 통합 공략
        </h1>
        <p className="mx-auto max-w-2xl text-sm text-ink-soft sm:text-base">
          쿠키 도감부터 시너지 계산기, 티어리스트, 스테이지·보스 공략, 펫 도감, 패치노트까지 —
          공개된 정보를 모아 정리한 팬메이드 공략 허브입니다.
        </p>
        <div className="luxury-divider mx-auto mt-8 max-w-md" />
      </section>

      {latestPatch && (
        <section className="card-surface mb-12 rounded-2xl p-5">
          <p className="mb-1 text-xs font-semibold text-gold-light">
            최신 패치 · {latestPatch.date} · {latestPatch.version}
          </p>
          <h2 className="mb-2 font-display text-lg font-bold text-ink">{latestPatch.title}</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-ink-soft">
            {latestPatch.highlights.slice(0, 3).map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
          <Link href="/patch-notes" className="mt-3 inline-block text-sm font-semibold text-gold hover:underline">
            전체 패치노트 보기 →
          </Link>
        </section>
      )}

      <section className="mb-4 flex items-baseline justify-between">
        <h2 className="font-display text-xl font-bold text-ink">바로가기</h2>
        <span className="text-xs text-ink-faint">등록된 쿠키 {COOKIES.length}종</span>
      </section>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SHORTCUTS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="card-surface rounded-2xl p-5 transition-transform hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]"
          >
            <h3 className="mb-1 font-display text-base font-bold text-ink">{s.title}</h3>
            <p className="text-sm text-ink-soft">{s.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
