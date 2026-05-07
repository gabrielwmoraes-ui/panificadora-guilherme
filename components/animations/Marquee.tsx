import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MarqueeProps {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
  separator?: ReactNode;
}

export function Marquee({
  items,
  className,
  itemClassName,
  separator,
}: MarqueeProps) {
  const sep = separator ?? <span className="mx-8 text-gold">✦</span>;
  const row = (
    <div className="flex shrink-0 items-center" aria-hidden>
      {items.map((it, i) => (
        <span key={i} className={cn("flex items-center", itemClassName)}>
          {it}
          {sep}
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}
