/**
 * 펫 이미지 URL 매핑. 나무위키 "쿠키런: 크럼블/도감" 펫 그리드에서 가져왔습니다
 * (54종 전체, 개별 URL마다 HTTP 200 + image/webp 응답 확인 완료).
 *
 * ⚠️ 이 사이트가 쓰는 6종의 펫 이름(예: "마시멜로우 햄스터")은 나무위키 문서의
 * 정확히 같은 이름을 찾지 못해, 뜻이 가장 가까운 이름(예: "마시멜로 햄찌")으로
 * 매칭했습니다. 실제로 같은 펫인지 완전히 확인되지는 않았습니다.
 */
export const PET_IMAGE_SOURCE = "나무위키 (i.namu.wiki)";

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

  "초코방울":
    "https://i.namu.wiki/i/sXYjgKBGksd0SV4YthEhOJ1hKPDXIT3zEFPXxizDa_gQPfTTA5QYQHnj_PLSn8fgjzJMYmu74Ou72eDHD5H8PA.webp",
  "치즈방울":
    "https://i.namu.wiki/i/DD9LcJpJcy6_iGNJsBGFbCfY41puDZF_4yshy4koOXGHvegX2J1Bz0aiSHOlYUbCpEc2qSfzUM4ZxjdzkL01JQ.webp",
  "갓난갓방울":
    "https://i.namu.wiki/i/IVnO4ff-sEEbDLH5v2l8MnBlpHOJh7XCWEJpv3tQyuip2iojke3Xc8GFT9HBg53e8-zOeUo8PDmT60m-WYGdxw.webp",
  "어린니":
    "https://i.namu.wiki/i/-E5RoP5X-zmAGuGg086CGiAcVtH3V4NMqoZktV4O635UQGrnyQMnBGYDWhrIyXJ5XjFlPa4eaJechRmKo0G4JQ.webp",
  "뭉치유니콘":
    "https://i.namu.wiki/i/9ERcwMybSOnksT-aCyZur_qfmqgKi4_iO_3lO_-6x7pihhjUboiOmWVdEFPnHNaulWnmcS_SfHwZwiSHiUvtig.webp",
  "복슬이람":
    "https://i.namu.wiki/i/BWKIfhfCS5aRJFlpHcjKSxFmfZu5gitc_y4FR5AUoLFVbSSPZjn1L2hGKBO149L7gn9Y5ifwduKDGEbj2UtI5w.webp",
  "크림티즈":
    "https://i.namu.wiki/i/CT-_DzlhcCAVIuRlBGC67YZOHfmMBV9oSvDrbgaSJdXu2U9AUWEger3vn-OsOZfzMzIx18Sho9cfFPdhCqAKBg.webp",
  "루돌프벨":
    "https://i.namu.wiki/i/6VKt__Gx84OHXHElMqgO9a41B53_UVYO9PPE6FPn9pNXE4MgQ21tYjHplxxgFrHR-O6gFQaPY6dXljSH473ZsQ.webp",
  "도토리 부엉이":
    "https://i.namu.wiki/i/lscmRagIxbljQ0lgrD7OX6DoRjGNcGgGWzKwOBsBabT-ru-VxqyjlIXVufRQby-_7q4yppSm1_-m1J6_NBPS-w.webp",
  "조수 테디":
    "https://i.namu.wiki/i/_9DIopJirRP0nk6lkvnBtk_wP6WgKehAE0aszzYycezTCYbqaLTuK9wV7iZrxmV1194FdMbaUSqeJ6OchsTY1A.webp",
  "열매사슴":
    "https://i.namu.wiki/i/q1g2lU6TiFQc7ySEguKalZyyTogDhE3TMeLehXmpHQ7LVDX6BLP-LUou25DceXGV9_SfMVS5yIpUKkQjJygm2Q.webp",
  "초코 왕방울":
    "https://i.namu.wiki/i/iVyG66qUzwiznbkEbXI2_CXM_d_wB-SFbCG8dEvlPQtBDyCTV8v3iWN6mJpnipi8sZ6VpqDlrvjGd9fxu_6NUQ.webp",
  "용의 꼬리":
    "https://i.namu.wiki/i/1CEu54wmaMJe0UwYk1SiPIEkRpjeglFmPS4SOKVLziXNNv-AyzLybTLKvdySYTm5nK285iKMiEUncCMopV7kQQ.webp",
  "브레인껌":
    "https://i.namu.wiki/i/6lvSmR_BUfBvMAD0qP4qkidgz-SnjnGZqDqXso1YSTOaLQGvFjPGARrupuh1iDsOCasRU1wPzJVHNhUVRvc-iQ.webp",
  "불꽃박쥐":
    "https://i.namu.wiki/i/2U-zagQu2r4u6tM0NK3auYH7vPfg6DyVmq6w3vLgX8IA_QWaRS-21m1Rb7O925h4U4YUjz4mDwtmMT_vv_ss0A.webp",
  "영혼 투구":
    "https://i.namu.wiki/i/wHhUGUfPdTfBJcNFh0tMQ5MmwsUrqQkcaukC773c9-I42TVZF1S9rz3iwviZgRxqumoN8_wqftw6jujXjWLE1g.webp",
  "꼬마유령":
    "https://i.namu.wiki/i/SK8acTAu_9IHT7QylWEwiiDhtSC7xF2Uj8swS7f98r4bGfFd-L4ssakavLNDNqZV8NNwyc2VVmkOWRSTZS7mYg.webp",
  "포켓딸기":
    "https://i.namu.wiki/i/1i6p4n_cFJkzGpSXIlOIoD7F8NfMakEFvKbSGgTkwkg_rp9F99DB1XgZ-x2jUzI8fpyEYo1HoEVMzM5tf-KMmA.webp",
  "어린쥐":
    "https://i.namu.wiki/i/2YorSOiQqRZkIvTldny7GTOqQd1-DHrI1J7kHkcLCAsy9Du_Pu-ar0aeRLErjGcx2IEPfiOSEq1ptv_wkyMIzw.webp",
  "토끼사과":
    "https://i.namu.wiki/i/d7fuNWuOcUMJ2pMhHUjcP8P-rrYnv8b3jdZXXlZAdohB65ynEVfnyVkU43PJEX2Gx8sbKvFYyRVJUlRX7nTGKA.webp",
  "사바나나 사자":
    "https://i.namu.wiki/i/uASCtdidaM8VSz0TIRzKSrwwToEU9L_pxqwbdtK96_bkKOBfm1LZK4rkqoofU6y-y-2kBPgYrTKSiBGyveOUJQ.webp",
  "천상의 별":
    "https://i.namu.wiki/i/voZakNfTnsLeLXkh7RbGBE_XRZ4qkZ11G2z5Rrmo6HRuZ-KeIjgZoF9M1hkvFcGK2PjOjRUAuq7n1zhlKfDLcg.webp",
  "황금방울":
    "https://i.namu.wiki/i/JH3aCyjZ0FEhFxQQkqqKeOy1laCzU_ZgcAt50Cd_SgR0TWbzq0XbFyjjH8qvhJTqnnGozDTwkR523seLhvkAig.webp",
  "안깐 마늘":
    "https://i.namu.wiki/i/9VQ7tlc72I0h5tg0VUsSWELskBeorz3T8xe3R7Y-2qYQuD7XHkopZz532Evqhncoro56uPDMx_Ls_dg4DylQPw.webp",
  "우유보틀 엔젤":
    "https://i.namu.wiki/i/qXYfutsgcYV9-T2dJUu7YvxrJTWdY7YNmpIDWa8gysYW4zIUv97g_6kqd145eyYZLCJcIMXIuVZAMIOrBmLN6w.webp",
  "화나구마":
    "https://i.namu.wiki/i/NFPfCvq8C3R8VRfWXnix-4dO25-u_CnB9_CCJMddrpkaWXcDy0W9Ut8OlIiV5maWcSnhvCaAEodIZ1dhYenBrg.webp",
  "인삼이라지":
    "https://i.namu.wiki/i/-k0lLxAFZy0h3s2l5IMcIHK3yxGFv5wIuympSidIG5aGaFqtrAsSvr4kp9YK9eoE3bi3g1y06sCl8QXJV3ewTw.webp",
  "아보카포":
    "https://i.namu.wiki/i/J1w717oIP0QcXQpD8xkXdb9ESFKacFjauE56VnMs3O-VYAj2-e_mRhqTwMnaVBvnkEVUyfL27JizuHtWNX6Q-w.webp",
  "조각레몬":
    "https://i.namu.wiki/i/dqdHdE_MSLc6JQOUkK87N5GwB8vpIHUVeY8IGgefdOI7IaipfTjwI3-lXA9s4J264NO4oBa9JHSFMrmnfw3UlQ.webp",
  "뽀글방울":
    "https://i.namu.wiki/i/rm-BZOKuuxY-I7Q-iVrrTuNHYzz02vRdUI4eCBBxb2vr3aajZz-8oXpOAr_UxKdmLOAjF-qlTp5KN8-sRtMIiA.webp",
  "와사비 문어":
    "https://i.namu.wiki/i/_zOiKi3GtcyRCAwBOOqCW_NsY8OWFSt9XEfInzVC96wANWGHr9vsNpv7U86zYvrf0tWHPTOU81gqGVMJgVrbbg.webp",
  "키위새(쿠키런)":
    "https://i.namu.wiki/i/LwvtKsKqWNJTGa23tOPMCq-Zx3vvddQOsL0Rd9B8C_UaUeVdaSpL0HETP2xkHeJUS_GgUn8IznddTouSp7hJRg.webp",
  "구름 펠리칸":
    "https://i.namu.wiki/i/Wp8AqKXwvyrrMCY33R1fRdmCxhXOdQJ9gyopnUqE-GV3mnlaK5IweyuFcuNOsjOFnifCyr3yxltUe59ModjJag.webp",
  "찹쌀 하프물범":
    "https://i.namu.wiki/i/ydNuuaP1p3jnrqu_jMsGni0By4AbituUk8Ov35GILuUmx39kR6OOIPgvwKWRKoIM8O8Q7E5ZZA074L3IF_3ZRw.webp",
  "꽃개구리":
    "https://i.namu.wiki/i/_0y9WrPgZ-HkkansT4vCea1LztnQpdoSpNwG1b4njxep0tR7riPu8KPfILhCH1PddoS9B_PVI7cyhkPG6kcK_g.webp",
  "당근케이크 토끼":
    "https://i.namu.wiki/i/K2g7ZKPc022YEXCe2vkIE_c7feMON1FyOFK3HZxf-w8ghbxJXqG0Q3aU4viAKN1p_twrQxqfPIy3hssF_UpqNg.webp",
  "핫도그도그":
    "https://i.namu.wiki/i/uWYcSwnsQbCBxu5gfmtnHfLpNt8vMxhN9vGQbk--b5RattzNMlnXl3cZl2as5Pv83orMZgkpgLOGGDqZLIWrPw.webp",
  "식빵아지":
    "https://i.namu.wiki/i/JFy3qFLzJzWhpTAPtSdbkudZjf5r4o3IigoxDPkgclZPfhre0_zzhK7GycqRTOObS0PdeiEZ0D7R4dXZ7hYv_w.webp",
  "통나무케이크(쿠키런)":
    "https://i.namu.wiki/i/EZQKcFOLl4BqzRupoaqrEmAIbDEnCPcSZe2TgMSRef_1qcg2uA6m3Tn5BIYOLxWWSV2-QzhgniQMbzQB4FtEQQ.webp",
  "마시멜로 햄찌":
    "https://i.namu.wiki/i/MN4oZeqEObQ58P-Nyngx7Xy7lbxjuiy43o8Jg3aYtI8bMyDu_wogPX_yeI3bB5VrpGzu1Uq4ZMs1ZDx1EFOLvA.webp",
  "달걀머리새":
    "https://i.namu.wiki/i/EoPsP6gWzx7LiJv0RPJO2Q9bPgsL6VpoVsgm_tmGhrHc5lWYBFpVebvA3FRGGZ8BLZ8Ap_Osz0yhbTd7Vrqg7Q.webp",
  "판다만두":
    "https://i.namu.wiki/i/8s15L_5bQ6aJZZTsEW2eYe9Tf69cjIaDiwHoXIW0TS_fI3LnYTLEl5iBIDU6DOm1IrmlXE5Vk-OZw3dG5h2qpg.webp",
  "생크림 모카커피":
    "https://i.namu.wiki/i/jr1xXHeMpOTwPflldVFAtrqCN85I2xhUC4OW6mRMxZyxx98eK50rZbL5LapwAGz3lxxi1czWPmqvAewNngsuGw.webp",
  "새콤달곰":
    "https://i.namu.wiki/i/LeFt3F1FVRu9MWBbX2B0X20m8vbxFRQFCuxyY7byMQ-92NQHvGMGpkBGBQvlSJUqvJxGhbTQCkQ47quJLKb2EA.webp",
  "얼음과자새":
    "https://i.namu.wiki/i/wyZ2o0GHarz1BD3gVGaOqrBMlMGE-9LviwxlRremRou5fRVHuSv4ZOE5_r89Pk77P7V10SbELRwNffaJQciivg.webp",
  "망고부리새":
    "https://i.namu.wiki/i/b94zfVVrqaahoYIe7aQtSRTKJNaIudYiR21DE8nEaqJfUVW5Tdvyfd-N9xr3puuYA6v6LKRTAnl9HQhX0R0yiw.webp",
  "파우치사우루스":
    "https://i.namu.wiki/i/TllcwHL9gzNG8Drzj78Xkwn6sVtGYbA-9Qj_MgTPXtcy_5X1Pk2RawtVwQfCM17DtQ0j1NmNl7DBMARj6mi-XQ.webp",
  "봉봉버드":
    "https://i.namu.wiki/i/1oKvUUj6UPcm8-ZGMbIM4UZwcYaykshwkguC2AQ7OuiSl7M-1mesdwwsG_AAUvFfzIT4JLNlpeQc8R7krhLrGw.webp",
  "앵앵베리버드":
    "https://i.namu.wiki/i/fGPAz7IvF-0OTyfu0Y-GfJe45GNVNK3ayxAS7q72US9Sc186rSFYBmvT85_XIeQmrr3tZAk3XkTZXhum8ILD3g.webp",
  "약과 찹사리":
    "https://i.namu.wiki/i/ITruwW6YCqwi2UKMekoRJ2x9m7Afm_dsy4hkOwkCTPFnNLxB5FnftSWVaN8OJ9ss_lWhmLIeSIRQFs1Cy58KmQ.webp",
  "털뭉치 멍뭉이":
    "https://i.namu.wiki/i/VCZYhCzu7Ya8aU4UybyFOVaDpuuLBzZoel7QKiDhHtjn9Y5X1l27hCw63AFletj5purS-_WpZTuRjjwMmnmg0w.webp",
  "치즈뭉치 고양이":
    "https://i.namu.wiki/i/vtvv01R8xOU-1o2tZqDorm73_t6DRMCs_BFVngBuJSkQ-Iww81em74C2aMFdL8Sca4uXljctCdN3qyfK1IQjTw.webp",
  "초코고양이 네로":
    "https://i.namu.wiki/i/aMCW5VgtwW2O1RB6Njr6RX25KYmM4N_Gm1RQB6zsfJ7YQeAlRYscHyS4epZsqGEWxKsxRkLwuSrvZA_ANb8-eA.webp",
  "치즈크럼블 고양이":
    "https://i.namu.wiki/i/EAKGsUyc_dGU9vnRnimQeqLK0mxIW5gZAA34Ee4X02m8ZB766-LNsUXcnven2GfRiEyqx9H5jUSgLN7in99TUg.webp",
};
