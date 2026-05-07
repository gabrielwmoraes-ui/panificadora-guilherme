"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function Counter({
  to,
  duration = 2,
  suffix = "",
  prefix = "",
}: CounterProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const value = useMotionValue(reduce ? to : 0);
  const display = useTransform(value, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(value, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, to, duration, value, reduce]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
