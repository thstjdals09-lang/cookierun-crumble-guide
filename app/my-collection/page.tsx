import Disclaimer from "@/components/Disclaimer";
import MyCookieCollection from "@/components/MyCookieCollection";
import { COOKIES } from "@/data/cookies";

export const metadata = {
  title: "내 컬렉션 | 크럼블 도감",
};

export default function MyCollectionPage() {
  return (
    <div>
      <h1 className="font-display mb-1 text-2xl font-bold text-ink">내 컬렉션</h1>
      <p className="mb-4 text-sm text-ink-soft">
        보유한 쿠키의 레벨·성급을 기록해두면 언제 어디서나 다시 확인할 수 있어요.
      </p>
      <Disclaimer>
        Google 계정으로 로그인해야 사용할 수 있어요. 기록한 데이터는 본인만 볼 수 있도록 안전하게
        저장됩니다.
      </Disclaimer>
      <MyCookieCollection cookies={COOKIES} />
    </div>
  );
}
