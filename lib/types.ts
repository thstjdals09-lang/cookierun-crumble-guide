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
  /** 동행 효과 — 파티에 실제로 장착(최대 3마리)했을 때만 발동. */
  companionEffect?: string;
  /** 상시 효과 — 보유만 해도 모든 쿠키에 자동 적용. */
  passiveEffect?: string;
  /** 효과 유형이 companion/passive 중 어느 쪽인지 확인되지 않은 경우의 원문. */
  unclassifiedEffect?: string;
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
