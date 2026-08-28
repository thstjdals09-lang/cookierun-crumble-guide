import Disclaimer from "@/components/Disclaimer";
import PetCard from "@/components/PetCard";
import { PETS, PET_SYSTEM_NOTES } from "@/data/pets";

export const metadata = {
  title: "펫 도감 | 크럼블 도감",
};

export default function PetsPage() {
  return (
    <div>
      <h1 className="font-display mb-1 text-2xl font-bold text-ink">펫 도감</h1>
      <p className="mb-4 text-sm text-ink-soft">
        나무위키 도감에 등재된 54종에, 2026-08-27 패치로 추가된 &quot;배터리 멜로우&quot;까지 더해
        총 {PETS.length}종의 이름과 이미지를 모았습니다. 조합에 펫을 포함한 추천 기능은 다음
        단계(로그인 연동)에서 추가될 예정입니다.
      </p>
      <Disclaimer>
        이름·이미지는 나무위키 도감 문서로 전부 확인했지만, 실제 게임 내 효과(스탯 보너스)는 6종만
        커뮤니티 자료로 문서화되어 있어 나머지는 &quot;효과 정보 조사 중&quot;으로 표기했습니다.
        등급 정보도 원본 문서에 나와 있지 않아 비워두었습니다.
      </Disclaimer>

      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {PET_SYSTEM_NOTES.map((n) => (
          <div key={n.title} className="card-surface rounded-3xl p-4">
            <h3 className="font-display mb-1.5 text-sm font-bold text-ink">{n.title}</h3>
            <p className="text-sm text-ink-soft">{n.body}</p>
          </div>
        ))}
      </div>

      {PETS.length === 0 ? (
        <p className="py-16 text-center text-sm text-ink-faint">아직 등록된 펫 정보가 없습니다.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PETS.map((p) => (
            <PetCard key={p.id} pet={p} />
          ))}
        </div>
      )}
    </div>
  );
}
