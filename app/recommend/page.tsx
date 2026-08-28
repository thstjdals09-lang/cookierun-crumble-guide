import Disclaimer from "@/components/Disclaimer";
import RecommendationEngine from "@/components/RecommendationEngine";
import { COOKIES } from "@/data/cookies";

export const metadata = {
  title: "추천 조합 | 크럼블 도감",
};

export default function RecommendPage() {
  return (
    <div>
      <h1 className="font-display mb-1 text-2xl font-bold text-ink">추천 조합</h1>
      <p className="mb-4 text-sm text-ink-soft">
        상황별로 어떤 쿠키가 유리한지 분석해서 보여주고, 로그인해서 &quot;내 컬렉션&quot;에 기록해둔
        쿠키 중에서 가장 잘 맞는 조합을 자동으로 짜드려요.
      </p>
      <Disclaimer>
        여기 나오는 4가지 분류(다수 상대 / 소수 정예 / 단일 상대 / PVP)는 공식 용어가 아니라 이
        사이트가 콘텐츠 성격에 따라 자체적으로 나눈 분류입니다. 추천 조합도 인터넷에서 찾은 &quot;이미
        검증된 조합&quot;이 아니라, 각 쿠키의 역할·스킬·시너지 데이터를 이 사이트가 직접 채점해서
        구성한 결과입니다 — 쿠키 도감에 스킬/시너지 정보가 비어있는 항목이 아직 많아 (약 76종 중
        20종 정도만 상세 확인됨) 추천의 정교함에는 한계가 있어요.
      </Disclaimer>
      <RecommendationEngine cookies={COOKIES} />
    </div>
  );
}
