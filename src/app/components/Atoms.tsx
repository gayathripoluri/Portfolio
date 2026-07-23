import type { ComponentType, ReactNode } from "react";

export function SectionLabel({ children, id }: { children: ReactNode; id: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 id={id} className="text-sm uppercase tracking-widest text-accent font-mono">
        {children}
      </h2>
      <div className="flex-1 h-px bg-border-subtle max-w-[160px]" />
    </div>
  );
}

export function TechTag({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs px-2 py-0.5 rounded-sm border border-accent-border bg-accent-background text-accent font-mono">
      {children}
    </span>
  );
}

export function CaseBlock({
  step,
  icon: Icon,
  label,
  emphasis = false,
  className,
  children,
}: {
  step: string;
  icon: ComponentType<{ size?: number }>;
  label: string;
  emphasis?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative h-full p-6 md:p-7 rounded-md border overflow-hidden ${
        emphasis ? "border-accent-border bg-accent-background" : "border-border-subtle bg-case-block-background"
      } ${className ?? ""}`}
    >
      <span
        aria-hidden="true"
        className="absolute top-2 right-3 text-4xl font-bold leading-none select-none text-border-subtle"
      >
        {step}
      </span>

      <div className="relative flex items-center gap-2.5 mb-3">
        <div
          className={`flex items-center justify-center w-7 h-7 rounded-sm shrink-0 ${
            emphasis ? "bg-accent text-accent-foreground" : "bg-accent-background text-accent"
          }`}
        >
          <Icon size={14} />
        </div>
        <span className="text-xs uppercase tracking-widest font-mono text-dimmer-foreground">{label}</span>
      </div>

      <p className="relative text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
