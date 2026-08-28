/**
 * 쿠키 초상화 이미지 URL 매핑. 나무위키 "쿠키런: 크럼블/쿠키", "/도감" 문서에
 * 실려 있는 공개 이미지를 그대로 링크(hotlink)합니다 — 다운로드해 재호스팅하지
 * 않았습니다. 각 URL은 이 데이터를 만들 때 개별적으로 HTTP 200 응답을
 * 확인했지만, 원본 문서가 바뀌면 깨질 수 있습니다 (그 경우 자동으로 이니셜
 * 배지로 대체됩니다 — CookieAvatar/SafeImage 참고).
 *
 * 깜짝쿠키는 나무위키에 별도 문서가 없어 이미지를 찾지 못했습니다.
 */
export const COOKIE_IMAGE_SOURCE = "나무위키 (i.namu.wiki)";

export const COOKIE_IMAGE_URLS: Record<string, string> = {
  "바람궁수 쿠키":
    "https://i.namu.wiki/i/ngehc-uCf1SdKz11Gqv33hZI15OXozTe_AbhSdY8OWuOewuYXmSPwA80zg4_4AsyffzFn8dI78eRDJD0mKfbeQ.webp",
  "오븐방랑자 쿠키":
    "https://i.namu.wiki/i/Vq7kN1-BPjHmp6uXSKS-5Y-BTuNtN3smSCI1ezqMKvlUw7vYXNH1ZY9IaSRu6XRw7xMPu8bH6qXDg3Q-VbXBdA.webp",
  "브라이트시커 쿠키":
    "https://i.namu.wiki/i/4qFfX1uNSpFjU0w90Bq2oynZFE7oLqn6qNN9dlkK6yHTPzoIMICLfaCcZda0x_sk3kaYlAPgw7y3end2JDgOWw.webp",
  "비겁한 쿠키":
    "https://i.namu.wiki/i/HGfOx8_PmNlkMuV1g3Z-esSM3eGMXpuvfrzQD2uXrcvXi0HBxREBWBnwiRvvdRjVxQzmCUseOZDKBpERcorO7QJ1ubbTsuTxH_ntJOHml_IYBIJ_P1Gv8QgNcmLgPW14qr0QxZX-T2gZy_rRQLQBrg.webp",

  "전갈맛 쿠키":
    "https://i.namu.wiki/i/gRn1V7rIkBd-rcJaNcNGyE0ZGflLfaG4RHEOC3eiJX0UqaN3L1fZbyngFI9PRAELnyPzM0POxXscNc_tM6CKhg.webp",
  "다크초코 쿠키":
    "https://i.namu.wiki/i/4RQoYqnzmyKC4KzlelRQ2WC6ggiUOgVpKhrh6cI4gkBapv5vzPBQCa84h4noNddCvPl_wxvu-gh-GuP24WiIAQ.webp",
  "뱀파이어맛 쿠키":
    "https://i.namu.wiki/i/vzmKITf04azLR1X8zfzu628FKKnHrvTNEN3t9Pa_TA7fvolUwMEPNJa8mrp4hYCQJFbb6jWN4twX1oSFA0kx6g.webp",
  "소아과 의사 우유맛 쿠키":
    "https://i.namu.wiki/i/oG9gecKzlJzDQyJ-2ncvcJdtngPwddmWBfRhmjftwUj6i0g6u5lfz_1tSnChCCQ8iqkQv7pYELnAUvH6vYSBAA.webp",
  "이름 모를 케이크 들개":
    "https://i.namu.wiki/i/LVh9KmPYrNVhdmbFB1zayiAQvFZheV0a5USVbj8C_ycGH2Cgx5xqwgYmmZaKnj_Hg09I7F5EohFhwTQETq95DA.webp",
  "석류맛 쿠키":
    "https://i.namu.wiki/i/byvdz4gAemG4AO8mLn3Pzj9mEj81Czm6zG7F6vgd2d9YkfcReZkg89EJAITa99vwm_QLraitFXHrLMlDbSucHQ.webp",
  "메론소다맛 쿠키":
    "https://i.namu.wiki/i/c9oOeuuRefzNhIODgm7i_JBDW1P8RByB-RiRxo0tpHgkQhpMR_xvREbmbxtl15mF4M1BJOo-OVYdlZnL-5eGYw.webp",
  "피겨여왕맛 쿠키":
    "https://i.namu.wiki/i/mdTvLkthgtMhQiVGTTEgWYOdl2Ig80h8QtJOEIUvGNga77W331ev4Ya7bRCbxsro9Jiwq_E_3jqJLxSx8rgIiQ.webp",
  "딸기쇼트케이크맛 쿠키":
    "https://i.namu.wiki/i/CJLgTowTBTFpSfxzahkSX7p9Ixd3S0IHgheZ7Mhv-liItCjssxW2EvP6F7nHKaStbJh9Pe2t9DQ1gvung8TN7CssMEDh2aybC86rpdgyonrcGPMJTSRI3tWh6uwXGrY9PhdPdmVgauOZVjvrIlbodw.webp",
  "밀키웨이맛 쿠키":
    "https://i.namu.wiki/i/JPt5DpIqlh5K91D2B9yzdY56WdLoyKBZ4RaPWmkdlQgpcT50EDOeo-s336sYGZyjS23Z8N-ANK84-I78rh_ppg.webp",
  "에스프레소맛 쿠키":
    "https://i.namu.wiki/i/DsYOdciJmE6s1okEMteGRnSuG8vLiMKUMgUXB0wxA5Rn_8dFjLuWkuWjiDR71h_QG8D-HgIoqok2cXSi07JSNg.webp",
  "치약초코 쿠키":
    "https://i.namu.wiki/i/9rIyzqPt5F-vg7aHj_b1SrETDH0x8OHuNnEZaYKv5utYa_wZXa1zE085OVVN5T8QpPTjsJtIvdmdeseAl-EFgA.webp",
  "피노누아맛 쿠키":
    "https://i.namu.wiki/i/a76XnBmUKL2OvCC0aHULblN3y4lU5TPMYfvrwJ_cHI8jpjhmUynYTriEC7wAXKfFAMRTjQrb3i3v4Hgtc9PX5g.webp",
  "실론나이트 쿠키":
    "https://i.namu.wiki/i/6IpUnDImL8CPA0rKiLHKUdKsd3puMnvRnA6fgoeAQYo-MRX6umGJRzHic5Va9N3kePMgmkSvhW684FFxD2lwxw.webp",
  "데빌스투스 쿠키":
    "https://i.namu.wiki/i/c-Asz5yoeixGc2nMZDVtlktSCL56SNsAPRgvbXgllaaJPbm1CT7e68Eo3OSS4I1LFdKIRVwpW7SBCzQn6FY9hEnZ44XLxPx3pkyni81PXr6nrioUMrMSXRw4YmXrz4LB272KZxhUBJxu1sqcgIp29g.webp",
  "트위즐젤리맛 쿠키":
    "https://i.namu.wiki/i/oHqNsM2JSq_I528fCrnuPIgEOg-35UeezQ_ypyU5f_QMK6OmxZyk59ge0SJP1ofeJ6AkIQn-YLSxGfzWMBBnDw.webp",
  "슈크림맛 쿠키":
    "https://i.namu.wiki/i/S9PpbVhFnS9GychfSFP516aMoEiPr5ZtvxjKphfgvmo8Wnrsv0su6ZI-plghzh3LhbLBCZkzftIJYO3txEJA6g.webp",
  "이온맛 쿠키로봇":
    "https://i.namu.wiki/i/9RabVO6Wy2Rwpqlv-R1ntEnBQUPgB2lkak5oEWr7baarmGJxYxtTqc5FYRRJ8xrH5n_CNwfLiHGWuYYQlwctYQ.webp",
  "마들렌맛 쿠키":
    "https://i.namu.wiki/i/0nQS94w-olr8PNBoKyJidlCp7L3a1lw8ecqar88Y6TOt9-dEWug5cIeSVuaZ-0t8MWgUBsQhcziJ2U4ZjNCLNw.webp",
  "딸기크레페맛 쿠키":
    "https://i.namu.wiki/i/qbKf8jLrSUG8nI5ttvq_FPF3gUznnJl6Bj6pnQIWCy7Gom4EWMwo_t4F8XpRiVxD7dguFmup3dcjj_zj6wbaFg.webp",
  "찰스":
    "https://i.namu.wiki/i/3ZXN-TMHJUmnJmp0zMDLqmIEbATVjvenNcxvzJyHONyt7IKz6kba8vUSaSxVbSOVzyCb26BQHtajuyrFRgESDg.webp",
  "크림소다맛 쿠키":
    "https://i.namu.wiki/i/LsQu_LE3t-5hDy1FTemHAC936trP3EQwsEHlmdvcNLlM8hlpBlWn2JSptDOl-bQlckqB0GJUFJhgtDsWySgk7g.webp",
  "도넛행성 에일리언 도넛킹":
    "https://i.namu.wiki/i/jBTkkZchET23H6-0wLGZ0mP3QTy9F5uDFhDyiGWMc2B-L493eB1_5GVGz_LWlnQTFVpLK5U2B-pJWXEHdsFsuQ.webp",
  "쿨링민트맛 쿠키":
    "https://i.namu.wiki/i/pSGnVQwGm8G56h_lmN-Trhg4-uJa0UJuy0gmcdTNKwdypa2Grduniet_PeOlvVCFhmIu6DN-FaYCEiihhAwYNjJva9vIOfUHfBEiNsZYeVi6mUdCvjPxAuhykOi18P8o24-gsi5SCOzg5NDOB3hjqg.webp",

  "허브맛 쿠키":
    "https://i.namu.wiki/i/QMSp_U3CbfpDEwuOk5ppQYAEp90MVP2E0QGfo4dwChDJggRMYGY5R6YHkkDhQgBzwkA8sKs4a1PhmXHCqL93jw.webp",
  "정글전사 쿠키":
    "https://i.namu.wiki/i/UWeA1KBP7jdnVEWW0SreqHw8kXUjwbiSRkfuz9QRtdEQpDV9KKpRKL5IJIkk-9Jpo3DufNVMVR8In0U5AH8T7g.webp",
  "호밀맛 쿠키":
    "https://i.namu.wiki/i/OQRVadNiBg8zBVqRBVgE5wO4f4xdt2PrveTSwCZjY8Qjy08HCFtId8JyomJ1Fh4DS1T2wfG0MgszA6xivvCVKQ.webp",
  "마카롱맛 쿠키":
    "https://i.namu.wiki/i/pv163kx2RQJZoZw645WCQAVorZ3vWfUX2_o3E_YbZEsc4Qiunreoo7MFJIH2sFlagoOyGmrp29wgNoB2L8bRJA.webp",
  "라임맛 쿠키":
    "https://i.namu.wiki/i/8XbpLAmC_ZJo2Dyv7lsK3_QA_Cvqq6ufcIHoojB3XGnfCrNMA7ctGDuq_RjFxxbhg72k5RLDkeVKlm4vBrJkig.webp",
  "팬케이크맛 쿠키":
    "https://i.namu.wiki/i/FX2ykeTU6ITaCZP77XmY1Tw0aqPH4XAiCcI4jZYw46qO5Q9pP8-5nYG4IE0IYyzEoiqDQcVFxgd5kPUw6MQ1lQ.webp",
  "감초맛 쿠키":
    "https://i.namu.wiki/i/Iez-2087EqPTnGNg6e3JPo1fmgZTSVdTdwNCLJEWlUjoYsCpibWFyaUhzo_RG3H_seYqQ7BIXYCbVWWb2vsIEg.webp",
  "팝콘맛 쿠키":
    "https://i.namu.wiki/i/Q1_aoajNlSLO4wwUd8P35i5h6APsVd7AXjG7XUfaneY3QooWFg5hWdR2Hdl9CKd5m3nX1BuznPufQ2gkzlkWPw.webp",
  "닥터 와사비 쿠키":
    "https://i.namu.wiki/i/Rnhyxpi9z8Sv3wR-wv4sWMuW_sfS7Q9ESHB6jYqrMvxDJUknjwHrEVTDWpo5tMn5H0fwf3A9pADpxLd_JYRsY71Zeq9Y1XlXBNnh6l7XVRN5svY955SuGukg6BsnauDygUqTqL7yE6jswEiJ__AMag.webp",
  "복숭아맛 쿠키":
    "https://i.namu.wiki/i/RByZjvU8NNXl4MIl3InzNRVI7-lHP2XstRWsENpfkM3jyL4umMObWfHYWvPCw9FBHYULV4GjJXPhuQjhCEOgFw.webp",
  "오렌지맛 쿠키":
    "https://i.namu.wiki/i/2PhUQ_2ZJuccsMqZjeLniZrvJDKVDH2dU4YWy64JZZdUthtUnKJMAwbQiakcNiMQ9X4OcEbMPCuWfqku2EH5HQ.webp",
  "락스타맛 쿠키":
    "https://i.namu.wiki/i/IZxEpGsT2Lem_CToaY_R7_r7DB7Soh9wGPEX4Kkva3SjF9zwYl6aXBJUm3DQnXEY59SglNOb0H3oLEmepNwO5w.webp",
  "레몬맛 쿠키":
    "https://i.namu.wiki/i/E26FmCOA1Ti-gfu6Sl0i98zJy2u-BvArIvkplVeChqnnvNqVEe1JTXc73BigeOKkrFuSbpN-P-hkNovXXjBs7Q.webp",
  "닥터 뼈다귀 쿠키":
    "https://i.namu.wiki/i/AIkup_x5kxCjIBcdrKU0wYNba7h1jAHR7SiFUpafqZzgV2y9Up_A44u7cIC5cHL7hgaO_nXnyaoMtFJgy418TKrKZnjvKfc1o-QfLKPyaWTn5WwqCuLqeXMro4DukilHtQy13VD2XSBA_R_-GdwlHA.webp",
  "위치베리맛 쿠키":
    "https://i.namu.wiki/i/ITDAi5_xE4xS6zDEL8m5ISbF2se0eqZ1IA_Co5wdxXqWYx2SLasublrGFKSwyu7sE9ZtxQw2YhqfVZKN6n1lAQ.webp",

  "치즈케이크맛 쿠키":
    "https://i.namu.wiki/i/0vsyZkjn7D6yo8xPjTx2oUvKx0a4Iad-fXxGyDSVWSTtaJggarcgkSseHajPBDtEfcdq3isRSjofykNlk-qn1I4NVuFN3aqLMw2xrlKra8VUNu6Fq_7IPSjLEaphi_AlaDH0WaV9QAB6X6qqpxMTkg.webp",
  "포도넝쿨맛 쿠키":
    "https://i.namu.wiki/i/aCErvRkl2p5ocT8mQaXAnr11mi0sTHyweQumqOfzyN0FebiejUPe5-oUsPmRJw1Jc4OIqcPQVRnYQ7Yeb3Rmow.webp",
  "블랙베리맛 쿠키":
    "https://i.namu.wiki/i/TC8-um7vr3HLnCq1vDcfM2ifDWG4BEdjinzgH60rsFVg1lAbNc5yE5uOVoojS0h3QQRxibHFF6M9BY30H5NG2A.webp",
  "연금술사맛 쿠키":
    "https://i.namu.wiki/i/IrcuVvdefCDqiSIJoFkdeeNfuRZq-y2Mq2YVbm0G1qXcM42GHiECwVU4ieJgdmLReldwyYYcEoRXcyjUb8N1hw.webp",
  "라일락맛 쿠키":
    "https://i.namu.wiki/i/8nBYRaK0JqAo-h13YPg3s0O4jJVLhtRW2RnBk1kg-FxM9Gi6-sqgRzLdjgdufWm9AmNtZf4VEP6AenKq3gdDqA.webp",
  "에일리언 도넛 쿠키":
    "https://i.namu.wiki/i/n-JWPyaKGuo-sNg2tVWfCGU4dL-o4Pg7SZuaT36Rz_fSDpq2rkcJjt-xVKvGDP71AD3B1sjNO-eCnQytyYkOAahVFCEP6N8Uqar7YC4JzTxsrchWJ0B3cufCojjPzsDU5pkdXF_x9BZy0IiwSp7ejw.webp",
  "독버섯맛 쿠키":
    "https://i.namu.wiki/i/uD3wq-l9ryXZfQurehkNF6G9oUEAo1R-3fXSYs2gdre6Zu4KgDdprubExTLx7RVYSilynBR6JKrgE_m7O5RtuA.webp",
  "체리맛 쿠키":
    "https://i.namu.wiki/i/4LNhDfa6wpbSwRbwG6BmdjhEwc3Nd39x8QJK7vgDFYdy4vSV3e1ocFiQfbIsPqZ_gtERTKJlxoe7yR0wSExgsw.webp",
  "코코아맛 쿠키":
    "https://i.namu.wiki/i/bDF7XOFX7NjFaCTpcWRWt5ahgoHeeXFs_B7M9gPH_ETuSeLwm3Fo1Kr1c99lauo0jJubQnoNAZluWhKixFfGrQ.webp",
  "요거트베리맛 쿠키":
    "https://i.namu.wiki/i/RiYR2T2oGl8zQUg_Ul86NezRe5DUy17KjMsinCB3Wh_qmI3Lhy071A1PvifDH_cNmOONw5-5rAQt4HKDkLQSX2VNiEu9fFnkOZYmKjCGkcVwSDaXi-TJcirbc1e775h0cWHB0c3LDi8oYS7Ssea34A.webp",
  "다크체리맛 쿠키":
    "https://i.namu.wiki/i/JP6GXgXhx43t8aUk-wmzga5eMQzATjBofNG35CoMlR6GGD4RWoVf5MVt9D1tAl5tXlM8QpelynG-3YFEWmhumg.webp",
  "일꾼 곰젤리":
    "https://i.namu.wiki/i/ipjfZZl6v4QtGxfHMwW40md4hgtCf7euOuuJ5W2lli43fny9Ah9DM-jXhD71C-Pkh9YfNSh-RqJRJH12gqiu9Q.webp",

  "악마맛 쿠키":
    "https://i.namu.wiki/i/FByR3ul5dIXCy6GPm6HlMavH2sRUttPiCJXB4GX0vJfb_KegUFmT2RmjPVQkj96-I0zGdPhYaos-zac5wQimPg.webp",
  "탐험가맛 쿠키":
    "https://i.namu.wiki/i/s1gYmj4zFI816OpXIC1GFBlh3uG77S6JokihwJSsca5O4rczWcA8hM-CSnnmv3mw6O3B4CV4NgtcPSI2IHiZ-g.webp",
  "치어리더맛 쿠키":
    "https://i.namu.wiki/i/v7sMfvqOXmwnHHmjrQOtMNxMGpCEXP3iVJfxSZaYXooEkwJKaYkhajn0Pl-M7X0luuBze9lqO5Tj63mWXt55Mg.webp",
  "커피맛 쿠키":
    "https://i.namu.wiki/i/HAh03Bx_TP5gKmCDn-JPkgqTg2sTahlziVRYbjiYCnLHWFUQ1-_0wms836ELcYMrMhePDZiV1bAER9Qgpz6wLw.webp",
  "좀비맛 쿠키":
    "https://i.namu.wiki/i/aYwvDJbwnu5OwZsnHuMrBnaMjb10n27XyDxPqStzbEoc5bwrsp5Var7NjiWxvyNylnSCt7nSYvHBYZzewKk0Bg.webp",
  "공주맛 쿠키":
    "https://i.namu.wiki/i/h2pXJtzxBLV3HoloHIySwmo3-A7VTgvAC4d4pR6w6YJN6l3ri8xnChFFzBz1wg7MQnruvCPaqKIoqIplnlHo2w.webp",
  "용사맛 쿠키":
    "https://i.namu.wiki/i/t2D2poLLGipDsIhP0BtkuAgYArTMgZBJihBxLRCdcVh-mm5wPXfbOA3viwXnN45bG377MwR4Gk_Dbr_NnkKwKw.webp",
  "천사맛 쿠키":
    "https://i.namu.wiki/i/8RTUIu7S3U1rS1NCLBNZcOK6SkmV5WSZClVBVmcodBQ_ldqhMzv4VGI0vToxn83_5_5HI96QaL1_GS-Kyd18aA.webp",
  "버블껌맛 쿠키":
    "https://i.namu.wiki/i/s7L6yMvtgOC_bOhl7n_Gv6hgKnFp5dDTkXVZwhRDCx0Xs4RAF3xCbTzm11iedmBWXWBorX0NTvo6bjBC8iMTCw.webp",
  "홍고추맛 쿠키":
    "https://i.namu.wiki/i/Zi02t47YjMgi9U_YTcZ0bj5SN_3zd6h9AsrEd3VjEhGZoFev5eWlALpfIGaLzH9ymv4Vx7GtS4WNPU9Y7rtlpQ.webp",
  "양파맛 쿠키":
    "https://i.namu.wiki/i/-7wTOYAF2ofquELLAxniz2ndyT7fw9-jJE9804ygWhWiEvl_JnNSJ3wVrDBlHTip5FdIfKB2EzOt8GRXDPi6eg.webp",

  "명랑한 쿠키":
    "https://i.namu.wiki/i/EquhND5CMuN1YVO-hsdugZBkMhOie0_5_iRwgevoYTS6NEHpHocVfMF97WbhVTSwBzq8e2tzGBuOWCpOtIDnfw.webp",
  "딸기맛 쿠키":
    "https://i.namu.wiki/i/s1NQK9CiNgS8q369To7TcC0X4Bqxj1OARHWw77-oM_npcboqdD5IJmPGY3VZhBBQcT_mpPctmVYutgMNXrOLYA.webp",
  "근육맛 쿠키":
    "https://i.namu.wiki/i/L_cMCkO3pgpdS0_wvRbJ6agRninjODNBataIXQaWPl0hL8UqoJ-Gr1QNQRH9B0YcXfIRBjDSztxYOUZwZ0c0Iw.webp",
  "닌자맛 쿠키":
    "https://i.namu.wiki/i/uc2TNfFiaOV_ez5izfgvdyAyGLhIPPEv9XWzrtiag98WxQ2_xzSdgng3IZCO6c3vWY5haUuXPi2JcPllrD2Hlg.webp",
  "마법사맛 쿠키":
    "https://i.namu.wiki/i/k0fimDZAv-JEtXqrTD6lo4VGl_gsseOEF-J0sugMcarOy6f3HcTsEf26os83vW5zsK8VzF-q12rsnWFtDPs2ig.webp",
  "보더맛 쿠키":
    "https://i.namu.wiki/i/UzW1dVLkAMr9R6mZbxqmkeuUeMQAZaTjKMYl-6_FmYdSZOKOanbJZbLvTAzRK3DkM-Na_DaQdfMlsUqIvDF5zw.webp",
  "용감한 쿠키":
    "https://i.namu.wiki/i/T0FLq_5AlCWJDnJN-SZE84JOuinE0ikBbBNAQyUGqjBL509x7Tqtnu7FvbP-pbyShuX-DQ0DGZssbY_uGKo5MA.webp",
  "블루베리 새":
    "https://i.namu.wiki/i/s-871YU9hmuYwgwNZDcQ_DS0_gd0EyQUr1tzw_bYE1ZGPnxymI-l9_y5tqeGTvc1dUdNb8vv8vgRMGDTzqASBA.webp",
  "설탕노움":
    "https://i.namu.wiki/i/gx8okzM953fAJX06i0zxN0TwSOnsFKc_fG15KHQTc2YP7QGuC7eqDaC0agJj8GshCKA7Wny5a8OhGmbwAeEung.webp",
};
