import Disclaimer from "@/components/Disclaimer";
import TierTabs from "@/components/TierTabs";
import { COOKIES } from "@/data/cookies";

export const metadata = {
  title: "티어리스트 | 크럼블 도감",
};

export default function TierPage() {
  return (
    <div>
      <h1 className="font-display mb-1 text-2xl font-bold text-ink">티어리스트</h1>
      <p className="mb-4 text-sm text-ink-soft">
        PVE 스테이지 클리어 기준과 PVP 아레나 기준 티어를 분리해서 제공합니다.
      </p>
      <Disclaimer>
        티어는 사이트마다 편차가 있는 커뮤니티 정설을 교차 참고해 정리한 것으로, 절대적인 기준이
        아닙니다. 패치에 따라 수시로 바뀔 수 있습니다.
      </Disclaimer>
      <TierTabs cookies={COOKIES} />
    </div>
  );
}
