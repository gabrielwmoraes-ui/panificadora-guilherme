"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/cn";

interface ParallaxImageProps extends Omit<ImageProps, "placeholder"> {
  containerClassName?: string;
  intensity?: number;
}

export function ParallaxImage({
  containerClassName,
  intensity = 0.15,
  className,
  alt,
  ...imageProps
}: ParallaxImageProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : [`${-intensity * 50}%`, `${intensity * 50}%`],
  );

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <motion.div style={{ y }} className="absolute inset-[-10%]">
        <Image
          alt={alt}
          {...imageProps}
          className={cn("h-full w-full object-cover", className)}
        />
      </motion.div>
    </div>
  );
}
