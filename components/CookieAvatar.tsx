import type { Cookie } from "@/lib/types";
import { GRADE_COLOR_VAR } from "@/lib/constants";
import SafeImage from "./SafeImage";

export default function CookieAvatar({
  cookie,
  size = 56,
  rounded = true,
}: {
  cookie: Cookie;
  size?: number;
  rounded?: boolean;
}) {
  return (
    <div
      className={`shrink-0 overflow-hidden border-2 border-border bg-bg-elevated-2 ${
        rounded ? "rounded-full" : "rounded-2xl"
      }`}
      style={{ width: size, height: size }}
    >
      <SafeImage
        src={cookie.image}
        alt={cookie.nameKr}
        className="h-full w-full object-cover"
        fallback={
          <div
            className="font-display flex h-full w-full items-center justify-center text-white"
            style={{ backgroundColor: GRADE_COLOR_VAR[cookie.grade], fontSize: size * 0.42 }}
          >
            {cookie.nameKr[0]}
          </div>
        }
      />
    </div>
  );
}
