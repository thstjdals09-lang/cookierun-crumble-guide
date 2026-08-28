import Disclaimer from "@/components/Disclaimer";
import CookieDex from "@/components/CookieDex";
import { COOKIES } from "@/data/cookies";

export const metadata = {
  title: "쿠키 도감 | 크럼블 도감",
};

export default function CookiesPage() {
  return (
    <div>
      <h1 className="font-display mb-1 text-2xl font-bold text-ink">쿠키 도감</h1>
      <p className="mb-4 text-sm text-ink-soft">전체 쿠키의 등급, 스킬, 시너지 정보를 확인하세요.</p>
      <Disclaimer>
        나무위키, CrumbleHub, crumbleguides.com 등 공개된 커뮤니티 정보를 정리한 팬메이드 자료입니다.
        실제 게임 밸런스 패치에 따라 정보가 달라질 수 있습니다.
      </Disclaimer>
      <CookieDex cookies={COOKIES} />
    </div>
  );
}
