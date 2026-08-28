# 크럼블 도감

쿠키런: 크럼블(Cookie Run: Crumble)의 공개된 정보를 바탕으로 만든 PVE·PVP 통합 공략
웹사이트입니다. Next.js(App Router, 정적 export) + Tailwind CSS로 만들었고, `main` 브랜치에
push하면 GitHub Actions가 자동으로 빌드해 GitHub Pages에 배포합니다.

배포 주소: https://thstjdals09-lang.github.io/cookierun-crumble-guide/

## 현재 범위 (Phase 1)

- 쿠키 도감 (검색/등급/시너지 필터)
- 시너지 조합 계산기 (5슬롯 팀 빌더 + 시너지 발동 시각화)
- 티어리스트 (PVE 스테이지 기준 / PVP 아레나 기준 분리)
- PVE 공략 (스테이지·보스 벽 구간, 일일 던전, 임플란트 타워)
- PVP 공략 (아레나 시스템, 메타 조합)
- 펫 도감
- 패치노트 타임라인

로그인, 캐릭터 레벨/성급 저장, 조합·상성·펫 추천 엔진, 커뮤니티 기능은 다음 단계에서
추가될 예정입니다 (Next.js 정적 export + Supabase 클라이언트 SDK로, 별도 서버 없이
이 GitHub Pages 배포 파이프라인을 그대로 유지할 계획입니다).

## 개발

```bash
npm install
npm run dev
```

## 빌드 / 배포

```bash
npm run build        # 로컬 미리보기용 (basePath 없음)
GITHUB_PAGES=true npm run build   # GitHub Pages 배포와 동일한 빌드 (basePath 적용)
```

`main`에 push하면 `.github/workflows/deploy.yml`이 자동으로 위 배포용 빌드를 실행하고
GitHub Pages에 올립니다.

## 데이터 출처

나무위키, 데브시스터즈 공식 보도자료, CrumbleHub, crumbleguides.com, 게임메카(국민트리),
디시인사이드 쿠키런 크럼블 갤러리 등 공개된 정보를 교차 확인해 `data/` 아래에 정리했습니다.
소스마다 편차가 있거나 확인되지 않은 정보는 각 데이터 항목의 `sourceNote`와 페이지 상단
안내문에 표시했습니다. 이 사이트는 Devsisters와 공식적인 관계가 없는 팬메이드 자료입니다.

## 레거시

`legacy-static/`에는 이번 Next.js 마이그레이션 이전에 만들어졌던 바닐라 HTML/CSS/JS
프로토타입이 보관되어 있습니다 (더 이상 배포되지 않으며, 참고용으로만 남겨둡니다).
