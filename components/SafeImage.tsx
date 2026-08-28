"use client";

import { useState, type ReactNode } from "react";

/**
 * Renders a hotlinked external image (game portraits we don't control or
 * re-host) and falls back to `fallback` if `src` is missing or fails to
 * load. Plain <img>, not next/image — these come from third-party hosts we
 * have no control over, so build-time optimization/domain allowlisting
 * would only add failure modes.
 */
export default function SafeImage({
  src,
  alt,
  className,
  fallback,
}: {
  src?: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
}) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) return <>{fallback}</>;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- external hotlinked art, not a local asset
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setErrored(true)}
    />
  );
}
