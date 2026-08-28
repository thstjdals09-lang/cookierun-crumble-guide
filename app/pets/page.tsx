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
        출시 시점 펫은 총 54종으로 알려져 있습니다. 조합에 펫을 포함한 추천 기능은 다음 단계(로그인
        연동)에서 추가될 예정이며, 지금은 확인된 펫 효과를 정리해 제공합니다.
      </p>
      <Disclaimer>
        공개된 커뮤니티 정보를 기반으로 하며, 아래 목록은 54종 중 개별 효과가 확인된 일부입니다.
        계속 보강 중입니다.
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
