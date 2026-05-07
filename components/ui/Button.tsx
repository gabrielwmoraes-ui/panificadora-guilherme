"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ComponentProps, MouseEvent, ReactNode, useRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  magnetic?: boolean;
  children: ReactNode;
  className?: string;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-coffee text-cream hover:bg-coffee-soft border border-coffee",
  secondary:
    "bg-terracotta text-cream hover:bg-[#9a4732] border border-terracotta",
  ghost:
    "bg-transparent text-coffee hover:bg-coffee/5 border border-coffee/20",
  dark: "bg-cream text-coffee hover:bg-stone border border-cream",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

function useMagnetic(enabled: boolean) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  const ref = useRef<HTMLElement | null>(null);

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!enabled || reduce) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    x.set(dx * 12);
    y.set(dy * 8);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, sx, sy, onMouseMove, onMouseLeave };
}

type AnchorProps = BaseProps & ComponentProps<typeof Link> & { href: string };
type ButtonProps = BaseProps & ComponentProps<"button"> & { href?: undefined };

export function Button(props: AnchorProps | ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    magnetic = true,
    className,
    children,
    ...rest
  } = props;
  const reduce = useReducedMotion();
  const { sx, sy, onMouseMove, onMouseLeave } = useMagnetic(magnetic);

  const motionProps = magnetic && !reduce
    ? { style: { x: sx, y: sy }, onMouseMove, onMouseLeave }
    : {};

  const cls = cn(baseClasses, styles[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorProps;
    return (
      <motion.span {...motionProps} className="inline-block">
        <Link href={href} className={cls} {...anchorRest}>
          {children}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.span {...motionProps} className="inline-block">
      <button className={cls} {...(rest as ComponentProps<"button">)}>
        {children}
      </button>
    </motion.span>
  );
}
