"use client";

import { motion, useReducedMotion } from "framer-motion";
import { whatsappLink } from "@/lib/site";

export function WhatsAppButton() {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-110 md:bottom-10 md:right-10 md:h-16 md:w-16"
      initial={reduce ? false : { scale: 0, opacity: 0 }}
      animate={reduce ? undefined : { scale: 1, opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {!reduce && (
        <span
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40"
          aria-hidden
        />
      )}
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.13 1.6 5.93L0 24l6.4-1.69a11.86 11.86 0 0 0 5.62 1.43h.01c6.54 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.14-3.36-8.41zM12.04 21.6h-.01a9.71 9.71 0 0 1-4.95-1.36l-.36-.21-3.8 1 1.02-3.7-.24-.38a9.78 9.78 0 0 1-1.5-5.11c0-5.41 4.4-9.81 9.83-9.81a9.74 9.74 0 0 1 9.83 9.83c0 5.42-4.4 9.74-9.82 9.74zm5.65-7.31c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16s-.81 1-.99 1.21c-.18.21-.37.23-.68.08a8.66 8.66 0 0 1-2.55-1.57 9.5 9.5 0 0 1-1.76-2.18c-.18-.31-.02-.48.13-.63.14-.13.31-.34.46-.51.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.69-.96-2.32-.25-.6-.5-.52-.7-.53l-.6-.01c-.21 0-.55.08-.84.39s-1.1 1.07-1.1 2.61c0 1.55 1.13 3.04 1.29 3.25.16.21 2.21 3.36 5.36 4.71.75.32 1.34.51 1.79.66.75.24 1.43.21 1.97.13.6-.09 1.83-.75 2.09-1.46.26-.71.26-1.32.18-1.46-.08-.13-.28-.21-.59-.37z" />
      </svg>
    </motion.a>
  );
}
