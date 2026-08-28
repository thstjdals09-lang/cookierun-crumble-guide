import Disclaimer from "@/components/Disclaimer";
import GuideCard from "@/components/GuideCard";
import { PVP_GUIDES } from "@/data/guides";

export const metadata = {
  title: "PVP 공략 | 크럼블 도감",
};

export default function PvpGuidePage() {
  return (
    <div>
      <h1 className="font-display mb-1 text-2xl font-bold text-ink">PVP 아레나 공략</h1>
      <p className="mb-4 text-sm text-ink-soft">
        비동기 아레나 시스템에서 이기기 위한 조합 원칙과 방덱 대응 전략입니다.
      </p>
      <Disclaimer>
        아레나 메타는 시즌·패치마다 바뀔 수 있습니다. 특정 조합이 항상 정답은 아닙니다.
      </Disclaimer>
      {PVP_GUIDES.map((g) => (
        <GuideCard key={g.title} guide={g} />
      ))}
    </div>
  );
}
