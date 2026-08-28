import type { Pet } from "@/lib/types";
import { GRADE_LABEL, GRADE_COLOR_VAR } from "@/lib/constants";
import PetAvatar from "./PetAvatar";

export default function PetCard({ pet }: { pet: Pet }) {
  return (
    <div className="card-surface rounded-3xl p-4">
      <div className="mb-2 flex items-center gap-3">
        <PetAvatar pet={pet} size={48} />
        <div className="flex-1">
          <p className="font-display text-base font-bold text-ink">{pet.nameKr}</p>
          {pet.grade && (
            <span
              className="mt-0.5 inline-block rounded-full px-1.5 py-0.5 text-[0.65rem] font-extrabold text-white"
              style={{ backgroundColor: GRADE_COLOR_VAR[pet.grade] }}
            >
              {GRADE_LABEL[pet.grade]}
            </span>
          )}
        </div>
      </div>
      <p className="text-sm text-ink-soft">{pet.effect}</p>
      {pet.notes && <p className="mt-2 text-xs text-ink-faint">{pet.notes}</p>}
    </div>
  );
}
