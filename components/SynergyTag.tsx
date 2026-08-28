import { SYNERGY_MAP } from "@/data/synergies";
import type { SynergyId } from "@/lib/types";

export default function SynergyTag({ id }: { id: SynergyId }) {
  const s = SYNERGY_MAP[id];
  if (!s) return null;
  return (
    <span
      className="rounded px-1.5 py-0.5 text-[0.65rem] font-bold text-white"
      style={{ backgroundColor: s.color }}
    >
      {s.name}
    </span>
  );
}
