"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function CookiesBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("mc-cookies")) {
        const t = setTimeout(() => setShow(true), 1800);
        return () => clearTimeout(t);
      }
    } catch {}
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("mc-cookies", "1");
    } catch {}
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-label="Aviso de cookies"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-24 z-40 rounded-2xl bg-coffee text-cream shadow-2xl md:left-10 md:right-auto md:max-w-md"
        >
          <div className="flex items-start gap-4 p-5">
            <p className="text-sm leading-relaxed text-cream/80">
              Usamos cookies para entender como você navega no site e melhorar a experiência.
            </p>
            <button
              onClick={accept}
              className="shrink-0 rounded-full bg-gold px-4 py-2 text-xs font-medium text-coffee transition-colors hover:bg-cream"
            >
              Entendi
            </button>
            <button
              onClick={accept}
              aria-label="Fechar"
              className="text-cream/60 transition-colors hover:text-cream"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
