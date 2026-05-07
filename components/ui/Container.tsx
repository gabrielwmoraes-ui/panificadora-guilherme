import { ReactNode, ElementType } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: "default" | "wide" | "narrow";
}

export function Container({
  children,
  className,
  as: Tag = "div",
  size = "default",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 md:px-10",
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-[88rem]",
        size === "narrow" && "max-w-3xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
