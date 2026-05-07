"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface MaskRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "span" | "div";
}

export function MaskReveal({
  children,
  delay = 0,
  duration = 0.9,
  className,
  as = "span",
}: MaskRevealProps) {
  const reduce = useReducedMotion();
  const Tag = as === "div" ? motion.div : motion.span;

  return (
    <span className={`mask-line ${className ?? ""}`}>
      <Tag
        initial={reduce ? false : { y: "110%" }}
        whileInView={reduce ? undefined : { y: "0%" }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: "inline-block" }}
      >
        {children}
      </Tag>
    </span>
  );
}

interface MaskLinesProps {
  lines: string[];
  baseDelay?: number;
  stagger?: number;
  className?: string;
  lineClassName?: string;
}

export function MaskLines({
  lines,
  baseDelay = 0.05,
  stagger = 0.12,
  className,
  lineClassName,
}: MaskLinesProps) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className={`block ${lineClassName ?? ""}`}>
          <MaskReveal delay={baseDelay + i * stagger}>{line}</MaskReveal>
        </span>
      ))}
    </span>
  );
}
