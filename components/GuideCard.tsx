import type { GuideEntry } from "@/lib/types";

export default function GuideCard({ guide }: { guide: GuideEntry }) {
  return (
    <div className="card-surface mb-3 rounded-3xl p-5">
      <h3 className="mb-1.5 font-display text-lg font-bold text-ink">{guide.title}</h3>
      <div className="mb-2 flex flex-wrap gap-1.5">
        {guide.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-accent-soft px-2 py-0.5 text-[0.7rem] font-bold text-accent-dark"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="mb-2 text-sm text-ink-soft">{guide.summary}</p>
      {guide.points.length > 0 && (
        <ul className="list-disc space-y-1 pl-5 text-sm text-ink-soft">
          {guide.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
