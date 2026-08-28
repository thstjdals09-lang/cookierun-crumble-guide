// Real Cookie Run: Crumble rarity codes (confirmed via community research,
// 2026-08 launch state) — not the Cookie Run: Kingdom-style grade names.
export type Grade = "C" | "U" | "R" | "SR" | "SSR" | "TSSR";

export type Element = "fire" | "water" | "grass" | "light" | "dark";

export type Role = "방어" | "돌격" | "사격" | "지원";

export type SynergyId =
  | "pierce"
  | "chain"
  | "volley"
  | "speed"
  | "rapid"
  | "range"
  | "duration";

export type Tier = "S" | "A" | "B" | "C";

export interface Synergy {
  id: SynergyId;
  name: string;
  nameEn: string;
  color: string;
  desc: string;
}

export interface Cookie {
  id: string;
  nameKr: string;
  nameEn?: string;
  grade: Grade;
  /** Flavor subtype shown only for some TSSR cookies, e.g. "얼터너티브" / "레전더리" */
  subtype?: string;
  element?: Element;
  role?: Role;
  skill?: string;
  gives: SynergyId[];
  receives: SynergyId[];
  tierPve?: Tier;
  tierPvp?: Tier;
  sourceNote?: string;
  /** Hotlinked portrait URL from a public source; omitted when none was found. */
  image?: string;
  imageSource?: string;
}

export interface Pet {
  id: string;
  nameKr: string;
  nameEn?: string;
  grade?: Grade;
  effect: string;
  notes?: string;
  image?: string;
  imageSource?: string;
}

export interface GuideEntry {
  title: string;
  tags: string[];
  summary: string;
  points: string[];
}

export interface PatchNote {
  version: string;
  date: string;
  title: string;
  highlights: string[];
}
