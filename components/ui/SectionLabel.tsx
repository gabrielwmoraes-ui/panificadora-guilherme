import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-caramel-deep",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-caramel-deep/60" />
      {children}
    </span>
  );
}
