import type { Pet } from "@/lib/types";
import { GRADE_COLOR_VAR } from "@/lib/constants";
import SafeImage from "./SafeImage";

export default function PetAvatar({ pet, size = 56 }: { pet: Pet; size?: number }) {
  const bg = pet.grade ? GRADE_COLOR_VAR[pet.grade] : "var(--color-ink-faint)";
  return (
    <div
      className="shrink-0 overflow-hidden rounded-full border-2 border-border bg-bg-elevated-2"
      style={{ width: size, height: size }}
    >
      <SafeImage
        src={pet.image}
        alt={pet.nameKr}
        className="h-full w-full object-cover"
        fallback={
          <div
            className="font-display flex h-full w-full items-center justify-center text-white"
            style={{ backgroundColor: bg, fontSize: size * 0.5 }}
          >
            🐾
          </div>
        }
      />
    </div>
  );
}
