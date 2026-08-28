export default function Disclaimer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 rounded-xl border border-border bg-gold-soft px-4 py-3 text-sm text-ink-soft">
      {children}
    </div>
  );
}
