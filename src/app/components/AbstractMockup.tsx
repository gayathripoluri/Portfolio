const scoreBars = [40, 65, 90, 55, 78, 100, 60, 82];

export function AbstractMockup({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative rounded-[6px] border border-border-subtle bg-background-alt overflow-hidden ${className ?? ""}`}
    >
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border-subtle bg-card">
        <span className="w-2 h-2 rounded-full bg-dimmest-foreground" />
        <span className="w-2 h-2 rounded-full bg-dimmest-foreground" />
        <span className="w-2 h-2 rounded-full bg-dimmest-foreground" />
        <div className="ml-3 h-4 flex-1 max-w-[180px] rounded-sm bg-background" />
      </div>

      <div className="p-5 grid grid-cols-[64px_1fr] gap-4">
        <div className="space-y-2.5 pt-1">
          <div className="h-2 w-full rounded-full bg-accent-background" />
          <div className="h-2 w-3/4 rounded-full bg-border-subtle" />
          <div className="h-2 w-full rounded-full bg-border-subtle" />
          <div className="h-2 w-2/3 rounded-full bg-border-subtle" />
          <div className="h-2 w-full rounded-full bg-border-subtle" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-3 w-28 rounded-full bg-foreground/10" />
            <div className="h-5 w-14 rounded-full border border-accent-border bg-accent-background" />
          </div>

          <div className="flex items-end gap-1.5 h-20">
            {scoreBars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-accent"
                style={{ height: `${h}%`, opacity: 0.3 + (h / 100) * 0.7 }}
              />
            ))}
          </div>

          <div className="space-y-2">
            <div className="h-2 w-full rounded-full bg-border-subtle" />
            <div className="h-2 w-5/6 rounded-full bg-border-subtle" />
            <div className="h-2 w-2/3 rounded-full bg-border-subtle" />
          </div>
        </div>
      </div>
    </div>
  );
}
