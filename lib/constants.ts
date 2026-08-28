import type { Element, Grade, Tier } from "./types";

export const GRADE_ORDER: Grade[] = ["C", "U", "R", "SR", "SSR", "TSSR"];

export const GRADE_LABEL: Record<Grade, string> = {
  C: "커먼",
  U: "언커먼",
  R: "레어",
  SR: "슈퍼레어",
  SSR: "슈퍼 스페셜 레어",
  TSSR: "트랜센던트 슈퍼 스페셜 레어",
};

/** Short form for space-constrained UI like grid card badges. */
export const GRADE_SHORT_LABEL: Record<Grade, string> = {
  C: "C",
  U: "U",
  R: "R",
  SR: "SR",
  SSR: "SSR",
  TSSR: "TSSR",
};

export const GRADE_COLOR_VAR: Record<Grade, string> = {
  C: "var(--color-grade-common)",
  U: "var(--color-grade-uncommon)",
  R: "var(--color-grade-rare)",
  SR: "var(--color-grade-sr)",
  SSR: "var(--color-grade-ssr)",
  TSSR: "var(--color-grade-tssr)",
};

export const ELEMENT_LABEL: Record<Element, string> = {
  fire: "불",
  water: "물",
  grass: "풀",
  light: "빛",
  dark: "어둠",
};

export const ELEMENT_COLOR: Record<Element, string> = {
  fire: "#ef6a4c",
  water: "#4c9bef",
  grass: "#5cb85c",
  light: "#f4e2a8",
  dark: "#8a6bd1",
};

export const TIER_LABEL: Record<Tier, string> = {
  S: "S",
  A: "A",
  B: "B",
  C: "C",
};

export const TIER_COLOR_VAR: Record<Tier, string> = {
  S: "var(--color-tier-s)",
  A: "var(--color-tier-a)",
  B: "var(--color-tier-b)",
  C: "var(--color-tier-c)",
};

export const TIER_ORDER: Tier[] = ["S", "A", "B", "C"];
