import Disclaimer from "@/components/Disclaimer";
import GuideCard from "@/components/GuideCard";
import { PVE_GUIDES } from "@/data/guides";

export const metadata = {
  title: "PVE 공략 | 크럼블 도감",
};

export default function PveGuidePage() {
  return (
    <div>
      <h1 className="font-display mb-1 text-2xl font-bold text-ink">PVE 공략</h1>
      <p className="mb-4 text-sm text-ink-soft">
        초반~엔드게임까지 막히기 쉬운 스테이지와 보스전 공략 팁을 정리했습니다.
      </p>
      <Disclaimer>
        스테이지 구성과 권장 전투력은 패치로 조정될 수 있습니다. 편성 예시는 참고용으로 활용하세요.
      </Disclaimer>
      {PVE_GUIDES.map((g) => (
        <GuideCard key={g.title} guide={g} />
      ))}
    </div>
  );
}
