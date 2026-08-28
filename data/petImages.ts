/**
 * 펫 이미지 URL 매핑. 나무위키 "쿠키런: 크럼블/도감" 펫 목록에서 가져왔습니다.
 * ⚠️ 주의: 이 사이트가 쓰는 펫 이름(예: "마시멜로우 햄스터")과 정확히 일치하는
 * 나무위키 문서를 찾지 못해, 뜻이 가장 가까운 이름(예: "마시멜로 햄찌")의
 * 이미지로 매칭했습니다. 같은 펫의 표기 차이인지 실제로 다른 펫인지 완전히
 * 확인되지 않았으니, 실제 게임 화면과 비교 확인이 필요합니다.
 */
export const PET_IMAGE_SOURCE = "나무위키 (i.namu.wiki, 이름 매칭 미확정)";

export const PET_IMAGE_URLS: Record<string, string> = {
  "마시멜로우 햄스터":
    "https://i.namu.wiki/i/MN4oZeqEObQ58P-Nyngx7Xy7lbxjuiy43o8Jg3aYtI8bMyDu_wogPX_yeI3bB5VrpGzu1Uq4ZMs1ZDx1EFOLvA.webp",
  "골드 드롭":
    "https://i.namu.wiki/i/JH3aCyjZ0FEhFxQQkqqKeOy1laCzU_ZgcAt50Cd_SgR0TWbzq0XbFyjjH8qvhJTqnnGozDTwkR523seLhvkAig.webp",
  "핫도기":
    "https://i.namu.wiki/i/uWYcSwnsQbCBxu5gfmtnHfLpNt8vMxhN9vGQbk--b5RattzNMlnXl3cZl2as5Pv83orMZgkpgLOGGDqZLIWrPw.webp",
  "포켓 스트로베리":
    "https://i.namu.wiki/i/1i6p4n_cFJkzGpSXIlOIoD7F8NfMakEFvKbSGgTkwkg_rp9F99DB1XgZ-x2jUzI8fpyEYo1HoEVMzM5tf-KMmA.webp",
  "껍질 안 벗긴 마늘":
    "https://i.namu.wiki/i/9VQ7tlc72I0h5tg0VUsSWELskBeorz3T8xe3R7Y-2qYQuD7XHkopZz532Evqhncoro56uPDMx_Ls_dg4DylQPw.webp",
};
