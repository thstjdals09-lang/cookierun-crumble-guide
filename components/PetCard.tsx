import type { Pet } from "@/lib/types";
import { GRADE_LABEL, GRADE_COLOR_VAR } from "@/lib/constants";

export default function PetCard({ pet }: { pet: Pet }) {
  return (
    <div className="card-surface rounded-2xl p-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="font-display text-base font-bold text-ink">{pet.nameKr}</p>
        {pet.grade && (
          <span
            className="rounded px-1.5 py-0.5 text-[0.65rem] font-extrabold text-white"
            style={{ backgroundColor: GRADE_COLOR_VAR[pet.grade] }}
          >
            {GRADE_LABEL[pet.grade]}
          </span>
        )}
      </div>
      <p className="text-sm text-ink-soft">{pet.effect}</p>
      {pet.notes && <p className="mt-2 text-xs text-ink-faint">{pet.notes}</p>}
    </div>
  );
}
