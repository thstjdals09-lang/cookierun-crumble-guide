import type { Cookie, Pet, SynergyId, Tier } from "./types";
import { CONTENT_TYPE_MAP, type ContentCategory, type ContentTypeInfo } from "./contentTypes";
import { SYNERGY_MAP } from "@/data/synergies";

export interface OwnedCookie {
  cookie: Cookie;
  level: number;
  stars: number;
}

export interface ScoredCookie extends OwnedCookie {
  score: number;
  reasons: string[];
}

export interface TeamResult {
  category: ContentCategory;
  teamSize: number;
  picks: ScoredCookie[];
  duplicateSynergyWarnings: string[];
  missingRoleNotes: string[];
}

const TIER_SCORE: Record<Tier, number> = { S: 4, A: 3, B: 2, C: 1 };

const SUPPORT_KEYWORDS = ["힐", "회복", "버프", "실드", "보호", "지원"];
const TANK_KEYWORDS = ["탱커", "방어력", "어그로", "탱"];

/**
 * role 필드가 없는 쿠키도 많아, skill 텍스트에 등장하는 키워드로 탱커/서포터
 * 가능성을 보조 판단합니다 (확정 정보가 아니라 보조 신호입니다).
 */
function isTankish(c: Cookie): boolean {
  if (c.role === "방어") return true;
  const skill = c.skill ?? "";
  return TANK_KEYWORDS.some((k) => skill.includes(k));
}

function isSupportish(c: Cookie): boolean {
  if (c.role === "지원") return true;
  const skill = c.skill ?? "";
  return SUPPORT_KEYWORDS.some((k) => skill.includes(k));
}

function scoreCookie(oc: OwnedCookie, ct: ContentTypeInfo): ScoredCookie {
  const { cookie, level, stars } = oc;
  let score = 0;
  const reasons: string[] = [];

  const tier = ct.tierField === "tierPvp" ? cookie.tierPvp : cookie.tierPve;
  if (tier) {
    score += TIER_SCORE[tier] * 3;
    reasons.push(`${ct.tierField === "tierPvp" ? "PVP" : "PVE"} 티어 ${tier}`);
  }

  const givesMatch = cookie.gives.filter((g) => ct.prioritySynergies.includes(g));
  if (givesMatch.length > 0) {
    score += givesMatch.length * 4;
    reasons.push(`${givesMatch.map((id) => SYNERGY_MAP[id]?.name ?? id).join("·")} 시너지 제공`);
  }

  if (ct.wantsTank && isTankish(cookie)) {
    score += 3;
    reasons.push("탱커 역할 가능");
  }
  if (ct.wantsSupport && isSupportish(cookie)) {
    score += 3;
    reasons.push("서포터 역할 가능");
  }

  // 레벨/성급 투자도는 소폭 가산 (동점자 우선순위 정도의 비중)
  const investment = Math.min(2, level / 50 + stars / 10);
  score += investment;

  if (reasons.length === 0) {
    reasons.push("스킬/시너지 정보가 확인되지 않아 기본 점수만 반영됨");
  }

  return { ...oc, score, reasons };
}

/**
 * 보유 쿠키 목록에서 콘텐츠 유형에 맞는 팀을 조립합니다. 리서치로 찾은
 * "이미 알려진 좋은 조합"을 그대로 옮기는 것이 아니라, 각 쿠키의 role/skill/
 * gives·receives/티어 데이터를 이 파일의 점수식으로 직접 채점해 구성합니다.
 */
export function buildTeam(
  owned: OwnedCookie[],
  category: ContentCategory,
  teamSize = 12
): TeamResult {
  const ct = CONTENT_TYPE_MAP[category];
  const scored = owned.map((oc) => scoreCookie(oc, ct)).sort((a, b) => b.score - a.score);

  const picks: ScoredCookie[] = [];
  const missingRoleNotes: string[] = [];

  if (ct.wantsTank) {
    const tank = scored.find((s) => isTankish(s.cookie));
    if (tank) picks.push(tank);
    else missingRoleNotes.push("탱커 역할을 할 만한 쿠키가 컬렉션에 없어요.");
  }
  if (ct.wantsSupport) {
    const support = scored.find((s) => isSupportish(s.cookie) && !picks.includes(s));
    if (support) picks.push(support);
    else missingRoleNotes.push("서포터 역할을 할 만한 쿠키가 컬렉션에 없어요.");
  }

  for (const s of scored) {
    if (picks.length >= teamSize) break;
    if (picks.includes(s)) continue;
    picks.push(s);
  }

  const giveCount: Partial<Record<SynergyId, number>> = {};
  picks.forEach((p) => p.cookie.gives.forEach((g) => (giveCount[g] = (giveCount[g] ?? 0) + 1)));
  const duplicateSynergyWarnings = Object.entries(giveCount)
    .filter(([, n]) => (n ?? 0) > 1)
    .map(([id, n]) => `${SYNERGY_MAP[id as SynergyId]?.name ?? id} 시너지 제공 쿠키가 ${n}명 겹쳐요 (시너지는 중첩되지 않아요).`);

  return {
    category,
    teamSize,
    picks: picks.slice(0, teamSize),
    duplicateSynergyWarnings,
    missingRoleNotes,
  };
}

export interface ScoredPet {
  pet: Pet;
  score: number;
  matchedKeywords: string[];
}

const PET_KEYWORDS: Record<ContentCategory, string[]> = {
  wave: ["피해 감소", "범위", "체력"],
  elite: ["저항", "크리티컬", "연타"],
  boss: ["크리티컬", "스킬 증폭", "연타", "공격력"],
  pvp: ["저항", "피해 감소", "크리티컬"],
};

function petEffectText(p: Pet): string {
  return [p.companionEffect, p.passiveEffect, p.unclassifiedEffect].filter(Boolean).join(" ");
}

/**
 * 펫도 마찬가지로 리서치된 "추천 펫 목록"을 옮기는 게 아니라, 확보된 효과
 * 텍스트(장착시/보유시)를 콘텐츠 유형별 키워드와 직접 대조해 채점합니다.
 * 효과가 확인된 펫이 6종뿐이라 대부분의 펫은 후보에 오르지 않는데, 이는
 * 알고리즘의 한계라기보다 원본 데이터가 부족하기 때문입니다.
 */
export function recommendPets(category: ContentCategory, pets: Pet[], count = 3): ScoredPet[] {
  const keywords = PET_KEYWORDS[category];
  return pets
    .map((pet) => {
      const text = petEffectText(pet);
      const matchedKeywords = keywords.filter((k) => text.includes(k));
      return { pet, score: matchedKeywords.length, matchedKeywords };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}
