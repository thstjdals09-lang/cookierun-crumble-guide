export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center text-xs text-ink-faint sm:px-6">
        <p className="mb-2">
          이 사이트는 나무위키, CrumbleHub, crumbleguides.com 등 공개된 커뮤니티 정보를 정리한
          팬메이드 비공식 가이드입니다. Devsisters, 쿠키런: 크럼블과 공식적인 관계가 없습니다.
        </p>
        <p>© {new Date().getFullYear()} 크럼블 도감 · 실제 게임 밸런스 패치에 따라 정보가 달라질 수 있습니다.</p>
      </div>
    </footer>
  );
}
