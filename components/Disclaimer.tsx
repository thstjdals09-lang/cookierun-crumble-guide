export default function Disclaimer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 rounded-2xl border border-border bg-accent-soft px-4 py-3 text-sm text-ink-soft">
      {children}
    </div>
  );
}
