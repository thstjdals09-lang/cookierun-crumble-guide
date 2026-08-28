# 크럼블 도감

쿠키런: 크럼블(Cookie Run: Crumble)의 공개된 정보를 바탕으로 만든 PVE·PVP 통합 공략
웹사이트입니다. Next.js(App Router, 정적 export) + Tailwind CSS로 만들었고, `main` 브랜치에
push하면 GitHub Actions가 자동으로 빌드해 GitHub Pages에 배포합니다.

배포 주소: https://thstjdals09-lang.github.io/cookierun-crumble-guide/

## 현재 범위

**Phase 1** — 쿠키 도감(검색/등급/시너지 필터), 시너지 조합 계산기, 티어리스트(PVE/PVP 분리),
PVE·PVP 공략, 펫 도감(55종), 패치노트 타임라인.

**Phase 2 (진행 중)** — Supabase(Google 로그인) + `내 컬렉션` 페이지에서 보유 쿠키의
레벨·성급을 저장/조회. Next.js 정적 export를 유지한 채 브라우저에서 Supabase 클라이언트
SDK로 직접 인증·DB 접근을 하므로 별도 서버 없이 GitHub Pages 배포 파이프라인 그대로 씁니다.
DB는 `cookie_progress` 테이블 하나(사용자별 row-level security로 본인 데이터만 접근 가능).

추천 엔진(조합·상성·펫 포함)과 커뮤니티 기능은 Phase 3으로 남아 있습니다.

## 개발

```bash
npm install
npm run dev
```

Supabase 연동을 로컬에서 테스트하려면 `.env.local`에 다음을 설정하세요 (git에는 커밋되지
않습니다):

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

GitHub Actions 배포 빌드는 같은 값을 저장소 Variables(`NEXT_PUBLIC_SUPABASE_URL`,
`NEXT_PUBLIC_SUPABASE_ANON_KEY`)에서 읽습니다.

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
