import type { SynergyId } from "./types";

export type ContentCategory = "wave" | "elite" | "boss" | "pvp";

export interface ContentTypeInfo {
  id: ContentCategory;
  label: string;
  emoji: string;
  description: string;
  examples: string[];
  prioritySynergies: SynergyId[];
  reasoning: string;
  wantsTank: boolean;
  wantsSupport: boolean;
  tierField: "tierPve" | "tierPvp";
}

/**
 * 이 4분류(다수/소수 정예/단일 상대/PVP)는 공식 명칭이나 커뮤니티에서 통용되는
 * 고정 용어가 아니라, 이 사이트가 콘텐츠 성격을 분석해 자체적으로 나눈
 * 분류입니다. 우선 시너지도 각 시너지의 실제 효과 설명(data/synergies.ts)에
 * 근거해 이 사이트가 직접 추론한 것이며, "커뮤니티 정설"이라고 확인된 사실이
 * 아닙니다 — reasoning 필드에 그 추론 근거를 그대로 남겨뒀습니다.
 */
export const CONTENT_TYPES: ContentTypeInfo[] = [
  {
    id: "wave",
    label: "다수 상대 (웨이브)",
    emoji: "🌊",
    description: "잡몹이 몰려오는 광역전 구간입니다.",
    examples: [
      "코인 던전 (모래 딱정벌레)",
      "반죽 던전 (타피오카 개구리)",
      "이노바이트 던전 (위험한 한천 젤리)",
      "6-30 · 10-30 초반 웨이브 구간",
    ],
    prioritySynergies: ["volley", "range", "pierce", "chain"],
    reasoning:
      "다발(동시 투사체 증가)과 범위(공격 범위 확장)는 정의 그대로 다수의 적을 동시에 처리하는 데 유리하고, 관통·연쇄는 설명에 '일렬로 늘어선 적'·'무리 지은 적'을 뚫거나 옮겨 다니며 때린다고 나와 있어 웨이브 처리에 직접적으로 들어맞습니다.",
    wantsTank: true,
    wantsSupport: false,
    tierField: "tierPve",
  },
  {
    id: "elite",
    label: "소수 정예 (보스+정예몹)",
    emoji: "⚔️",
    description: "보스 한 마리와 강한 잡몹 몇 기가 함께 나오는 스테이지 벽 구간입니다.",
    examples: ["30-30 전투력보다 편성 완성도", "32-30 통곡의 벽", "임플란트 타워 상위 층"],
    prioritySynergies: ["chain", "duration", "rapid"],
    reasoning:
      "연쇄는 설명 자체가 '무리 지은 적과 보스가 섞인 스테이지에서 효율이 좋다'고 명시하고 있어 이 유형과 정확히 일치하고, 지속(장기전 대비)과 연타(크리티컬 극대화)는 정예 개체를 상대로 화력과 생존을 동시에 뒷받침합니다.",
    wantsTank: true,
    wantsSupport: true,
    tierField: "tierPve",
  },
  {
    id: "boss",
    label: "단일 상대 (보스 원턴)",
    emoji: "🎯",
    description: "잡몹 없이 보스 하나만 상대하는 장기전입니다.",
    examples: ["룬결정 던전 (화이트 슈가 가디언)", "경험치 던전 (악몽에 시달리는 사서)"],
    prioritySynergies: ["duration", "rapid", "speed"],
    reasoning:
      "지속 시너지는 설명에서부터 '장기전이 되는 보스전에서 효율이 극대화된다'고 명시하고 있어 가장 직접적인 근거이고, 연타·탄속은 크리티컬 극대화·명중 속도로 한 대상에게 화력을 집중하는 데 유리합니다. 범위·다발처럼 다수 대상을 전제한 시너지는 상대적으로 낭비됩니다.",
    wantsTank: true,
    wantsSupport: true,
    tierField: "tierPve",
  },
  {
    id: "pvp",
    label: "PVP 아레나",
    emoji: "🏆",
    description: "상대 플레이어의 방어덱을 상대로 자동 전투로 승부합니다.",
    examples: ["아레나 공격덱 / 방어덱"],
    prioritySynergies: [],
    reasoning:
      "공개된 PVP 공략에서는 시너지 조합보다 '메인 딜러 생존시간·CC 적중률·힐량'을 승패 요인으로 꼽는 경우가 많아, 시너지 적합도 대신 역할 밸런스(탱커/서포터)와 PVP 티어를 우선 반영했습니다.",
    wantsTank: true,
    wantsSupport: true,
    tierField: "tierPvp",
  },
];

export const CONTENT_TYPE_MAP: Record<ContentCategory, ContentTypeInfo> = Object.fromEntries(
  CONTENT_TYPES.map((c) => [c.id, c])
) as Record<ContentCategory, ContentTypeInfo>;
