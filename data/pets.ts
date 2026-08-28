import type { Pet } from "@/lib/types";

export interface PetSystemNote {
  title: string;
  body: string;
}

export const PET_SYSTEM_NOTES: PetSystemNote[] = [
  {
    title: "펫은 두 가지 효과를 가집니다",
    body: "동행 효과(Companion Effect)는 파티에 펫을 실제로 장착(최대 3마리)했을 때만 발동하는 실전투 보너스입니다. 반면 상시 효과(Standard Pet Effect)는 펫을 보유만 해도 모든 쿠키에 자동 적용되는 보너스라서, 전투에 데려가지 않는 펫이라도 해금해 둘 가치가 있습니다.",
  },
  {
    title: "펫 해금은 자동이 아닙니다",
    body: "계정 퀘스트 39개 달성과 스테이지 1-14 클리어를 마쳐야 펫 가챠가 열립니다. 완전 방치형으로 진행해도 펫 시스템만큼은 능동적인 진행이 필요합니다.",
  },
  {
    title: "등급 체계는 쿠키와 비슷합니다",
    body: "C < U < R < SR < SSR 순으로, 쿠키와 같은 5단계 체계를 씁니다. 다만 쿠키의 TSSR에 대응하는 최상위 펫 등급이 있는지는 확인되지 않았습니다.",
  },
];

/**
 * 출시 시점 펫은 총 54종으로 알려져 있으나, 개별 효과가 문서화된 펫은 이 중
 * 일부입니다. 나머지는 계속 조사 중입니다.
 */
export const PETS: Pet[] = [
  {
    id: "마시멜로우 햄스터",
    nameKr: "마시멜로우 햄스터",
    grade: "SSR",
    effect: "어둠 속성 아군 크리티컬 데미지 +14%, 지원 역할 아군 크리티컬 저항 +0.20%",
  },
  {
    id: "배터리 멜로우",
    nameKr: "배터리 멜로우",
    grade: "SSR",
    effect: "아군에게 연타(Rapid Fire) 시너지를 제공합니다.",
    notes: "2026-08-27 패치 신규 펫.",
  },
  {
    id: "골드 드롭",
    nameKr: "골드 드롭",
    grade: "SSR",
    effect: "효과 상세 조사 중",
  },
  {
    id: "핫도기",
    nameKr: "핫도기",
    effect: "스킬 증폭 +5%",
  },
  {
    id: "포켓 스트로베리",
    nameKr: "포켓 스트로베리",
    effect: "피해 감소 +4%",
  },
  {
    id: "껍질안벗긴마늘",
    nameKr: "껍질 안 벗긴 마늘",
    effect: "아군 상태이상 저항 +10%",
  },
];
