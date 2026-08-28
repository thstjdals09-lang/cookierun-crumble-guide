import type { PatchNote } from "@/lib/types";

export default function PatchNoteTimeline({ notes }: { notes: PatchNote[] }) {
  if (notes.length === 0) {
    return (
      <p className="py-10 text-center text-sm text-ink-faint">
        아직 정리된 패치노트가 없습니다. 곧 채워질 예정입니다.
      </p>
    );
  }

  return (
    <ol className="relative border-l border-border pl-6">
      {notes.map((n) => (
        <li key={n.version} className="mb-8 last:mb-0">
          <div className="absolute -ml-[29px] mt-1.5 h-3 w-3 rounded-full border-2 border-bg bg-gold" />
          <p className="mb-0.5 text-xs font-semibold text-gold-light">
            {n.date} · {n.version}
          </p>
          <h3 className="mb-1.5 font-display text-lg font-bold text-ink">{n.title}</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-ink-soft">
            {n.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
