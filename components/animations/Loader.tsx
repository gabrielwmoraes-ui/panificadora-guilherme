"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(() => !!reduce);

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, [reduce]);

  if (done) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-coffee text-cream"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 1, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      aria-hidden
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{
          opacity: 1,
          scale: [0.96, 1.02, 1],
        }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <p className="font-display text-3xl tracking-tight md:text-5xl">
          Meu <span className="italic text-gold">Café</span>
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-cream/60">
          Padaria · Café
        </p>
      </motion.div>
    </motion.div>
  );
}
