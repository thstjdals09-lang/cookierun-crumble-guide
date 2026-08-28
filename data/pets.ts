import type { Pet } from "@/lib/types";
import { PET_IMAGE_URLS, PET_IMAGE_SOURCE } from "./petImages";

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

const IMAGE_MATCH_CAVEAT =
  "이미지는 이름이 정확히 일치하는 문서를 찾지 못해 뜻이 가장 가까운 이름으로 매칭한 것입니다. 실제 게임 내 모습과 다를 수 있습니다.";

function flavor(text: string) {
  return `나무위키 도감 소개글: "${text}"`;
}

/**
 * 효과가 확인된 6종. pocketgamer.com의 크럼블 전용 펫 표(oslink.io 티어리스트로
 * 교차 확인)에서 동행 효과(장착시)와 상시 효과(보유시)를 구분해 가져왔습니다.
 */
const DETAILED: Pet[] = [
  {
    id: "마시멜로우 햄스터",
    nameKr: "마시멜로우 햄스터",
    grade: "SSR",
    companionEffect: "어둠 속성 아군 크리티컬 데미지 +14%",
    passiveEffect: "지원 역할 아군 크리티컬 저항 +0.20%",
  },
  {
    id: "배터리 멜로우",
    nameKr: "배터리 멜로우",
    grade: "SSR",
    companionEffect: "아군에게 연타(Rapid Fire) 시너지를 제공합니다.",
    notes:
      "2026-08-27 패치 신규 펫이라 아직 나무위키 도감이나 pocketgamer 펫 표에 정식 등재되지 않았습니다. 시너지 부여형 효과는 이 게임의 다른 모든 사례에서 예외 없이 동행 효과로 분류되어 있어 이 효과도 동행 효과일 가능성이 높지만, 확정된 출처는 아닙니다. 상시 효과와 이미지는 아직 확인되지 않았습니다.",
  },
  {
    id: "골드 드롭",
    nameKr: "골드 드롭",
    grade: "SSR",
    companionEffect: "아군 크리티컬 확률 +7%",
    passiveEffect: "지원 역할 크리티컬 확률 +0.20%",
  },
  {
    id: "핫도기",
    nameKr: "핫도기",
    companionEffect: "아군 스킬 증폭 +5%",
    passiveEffect: "잔디(초록) 속성 쿠키 공격력 +10",
  },
  {
    id: "포켓 스트로베리",
    nameKr: "포켓 스트로베리",
    companionEffect: "아군 피해 감소 +4%",
    passiveEffect: "차지 속성 쿠키 체력 +5",
  },
  {
    id: "껍질안벗긴마늘",
    nameKr: "껍질 안 벗긴 마늘",
    companionEffect: "아군 상태이상 저항 +10%",
    passiveEffect: "지원 역할 쿠키 공격력 +6",
  },
];

/**
 * 나무위키 "쿠키런: 크럼블/도감" 펫 그리드에서 확인된 나머지 펫들. 이 페이지에는
 * 등급이나 실제 게임 효과가 나와 있지 않아 효과 필드는 비워뒀고, 대신 문서에
 * 실려 있던 유머러스한 소개글이 있으면 notes에 그대로 옮겨왔습니다 (게임 효과가
 * 아니라 위키 편집자가 쓴 소개 문구입니다).
 */
const ROSTER_ONLY: Pet[] = [
  { id: "초코방울", nameKr: "초코방울", notes: flavor("펫 도감의 1번 자리에 이 둘보다 더 어울리는 존재가 있을까? 펫계의 아담과 이브이다...") },
  { id: "치즈방울", nameKr: "치즈방울", notes: flavor("펫 도감의 1번 자리에 이 둘보다 더 어울리는 존재가 있을까? 펫계의 아담과 이브이다...") },
  { id: "갓난갓방울", nameKr: "갓난갓방울", notes: flavor("크럼블에서 데뷔한 아기 펫들이다...") },
  { id: "어린니", nameKr: "어린니", notes: flavor("크럼블에서 데뷔한 아기 펫들이다...") },
  { id: "뭉치유니콘", nameKr: "뭉치유니콘" },
  { id: "복슬이람", nameKr: "복슬이람", notes: flavor("털을 만지다 보면... 어제는 크림티즈 안에서 7년 전 잃어버린 머리띠를 찾았다...") },
  { id: "크림티즈", nameKr: "크림티즈", notes: flavor("털을 만지다 보면... 어제는 크림티즈 안에서 7년 전 잃어버린 머리띠를 찾았다...") },
  { id: "루돌프벨", nameKr: "루돌프벨" },
  { id: "도토리 부엉이", nameKr: "도토리 부엉이" },
  { id: "조수 테디", nameKr: "조수 테디" },
  { id: "열매사슴", nameKr: "열매사슴", notes: flavor("어떤 펫들은 옆에서 함께 뛰는 것을 넘어서 대단한 능력을 보여준다...") },
  { id: "초코 왕방울", nameKr: "초코 왕방울", notes: flavor("어떤 펫들은 옆에서 함께 뛰는 것을 넘어서 대단한 능력을 보여준다...") },
  { id: "용의 꼬리", nameKr: "용의 꼬리" },
  { id: "브레인껌", nameKr: "브레인껌" },
  { id: "불꽃박쥐", nameKr: "불꽃박쥐" },
  { id: "영혼 투구", nameKr: "영혼 투구", notes: flavor("도감 분류 작업을 하던 중… 난감한 상황이 발생했다...") },
  { id: "꼬마유령", nameKr: "꼬마유령", notes: flavor("도감 분류 작업을 하던 중… 난감한 상황이 발생했다...") },
  { id: "어린쥐", nameKr: "어린쥐" },
  { id: "토끼사과", nameKr: "토끼사과", notes: flavor("공통적으로 포크를 보면 급격히 소심해지는 경향이 있다...") },
  { id: "사바나나 사자", nameKr: "사바나나 사자", notes: flavor("공통적으로 포크를 보면 급격히 소심해지는 경향이 있다...") },
  { id: "천상의 별", nameKr: "천상의 별", notes: flavor("역시 뭐니 뭐니 해도 반짝이는 것을 보면 기분이 좋아진다...") },
  { id: "우유보틀 엔젤", nameKr: "우유보틀 엔젤" },
  { id: "화나구마", nameKr: "화나구마" },
  { id: "인삼이라지", nameKr: "인삼이라지", notes: flavor("함께 싸우거나 달리면 몸이 세 배로 좋아질 것 같다...") },
  { id: "아보카포", nameKr: "아보카포", notes: flavor("함께 싸우거나 달리면 몸이 세 배로 좋아질 것 같다...") },
  { id: "조각레몬", nameKr: "조각레몬" },
  { id: "뽀글방울", nameKr: "뽀글방울" },
  { id: "와사비 문어", nameKr: "와사비 문어", notes: flavor("머리가 동그란 친구들을 모았다. 이 도감의 행운 번호는 2143이다...") },
  { id: "키위새(쿠키런)", nameKr: "키위새(쿠키런)", notes: flavor("머리가 동그란 친구들을 모았다. 이 도감의 행운 번호는 2143이다...") },
  { id: "구름 펠리칸", nameKr: "구름 펠리칸" },
  { id: "찹쌀 하프물범", nameKr: "찹쌀 하프물범", notes: flavor("물가에 가면 더욱 신이 나는 펫들이다...") },
  { id: "꽃개구리", nameKr: "꽃개구리", notes: flavor("물가에 가면 더욱 신이 나는 펫들이다...") },
  { id: "당근케이크 토끼", nameKr: "당근케이크 토끼" },
  { id: "식빵아지", nameKr: "식빵아지", notes: flavor("고소한 빵 냄새를 따라가다 보면 이 펫들을 만날 수 있다...") },
  { id: "통나무케이크(쿠키런)", nameKr: "통나무케이크(쿠키런)", notes: flavor("고소한 빵 냄새를 따라가다 보면 이 펫들을 만날 수 있다...") },
  { id: "달걀머리새", nameKr: "달걀머리새" },
  { id: "판다만두", nameKr: "판다만두" },
  { id: "생크림 모카커피", nameKr: "생크림 모카커피", notes: flavor("달콤한 향기를 좋아한다면 이 펫들을 추천한다...") },
  { id: "새콤달곰", nameKr: "새콤달곰", notes: flavor("달콤한 향기를 좋아한다면 이 펫들을 추천한다...") },
  { id: "얼음과자새", nameKr: "얼음과자새" },
  { id: "망고부리새", nameKr: "망고부리새" },
  { id: "파우치사우루스", nameKr: "파우치사우루스" },
  { id: "봉봉버드", nameKr: "봉봉버드", notes: flavor("쿠키들이 열심히 달릴 때, 그 뒤에서 함께 날아 주는 소중한 친구들이 있다...") },
  { id: "앵앵베리버드", nameKr: "앵앵베리버드", notes: flavor("쿠키들이 열심히 달릴 때, 그 뒤에서 함께 날아 주는 소중한 친구들이 있다...") },
  { id: "약과 찹사리", nameKr: "약과 찹사리" },
  { id: "털뭉치 멍뭉이", nameKr: "털뭉치 멍뭉이" },
  { id: "치즈뭉치 고양이", nameKr: "치즈뭉치 고양이" },
  { id: "초코고양이 네로", nameKr: "초코고양이 네로", notes: flavor("펫계의 영원한 라이벌. 아쉽게도 도감이 5칸이라 3 대 2이니...") },
  { id: "치즈크럼블 고양이", nameKr: "치즈크럼블 고양이", notes: flavor("펫계의 영원한 라이벌. 아쉽게도 도감이 5칸이라 3 대 2이니...") },
];

const PETS_RAW: Pet[] = [...DETAILED, ...ROSTER_ONLY];

export const PETS: Pet[] = PETS_RAW.map((p) => {
  const image = PET_IMAGE_URLS[p.nameKr];
  if (!image) return p;
  const needsCaveat = DETAILED.some((d) => d.id === p.id);
  return {
    ...p,
    image,
    imageSource: PET_IMAGE_SOURCE,
    notes: needsCaveat ? (p.notes ? `${p.notes} ${IMAGE_MATCH_CAVEAT}` : IMAGE_MATCH_CAVEAT) : p.notes,
  };
});
