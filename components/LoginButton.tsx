"use client";

import { useAuth } from "./AuthProvider";

export default function LoginButton() {
  const { user, loading, signInWithGoogle, signOut } = useAuth();

  if (loading) {
    return <div className="h-8 w-20 animate-pulse rounded-full bg-accent-soft" />;
  }

  if (user) {
    return (
      <div className="flex items-center gap-2">
        {user.user_metadata?.avatar_url ? (
          // eslint-disable-next-line @next/next/no-img-element -- Google profile photo, external host
          <img
            src={user.user_metadata.avatar_url}
            alt={user.user_metadata?.name ?? "프로필"}
            className="h-7 w-7 rounded-full border-2 border-border"
            referrerPolicy="no-referrer"
          />
        ) : null}
        <button
          onClick={() => signOut()}
          className="rounded-full border-2 border-border px-3 py-1.5 text-xs font-bold text-ink-soft transition-all hover:scale-105 hover:border-accent hover:text-accent-dark"
        >
          로그아웃
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signInWithGoogle()}
      className="rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-white transition-all hover:scale-105 hover:shadow-[var(--shadow-accent)]"
    >
      Google 로그인
    </button>
  );
}
