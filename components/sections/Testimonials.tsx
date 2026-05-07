"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { testimonials } from "@/data/content";

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-stone py-28 md:py-40">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Quem já passou</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-tight">
            <MaskReveal>Boas histórias</MaskReveal>
            <span className="block italic text-caramel">
              <MaskReveal delay={0.1}>passam por aqui.</MaskReveal>
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-full flex-col rounded-3xl bg-cream p-8 shadow-[0_2px_24px_rgba(43,24,16,0.06)] md:p-10"
            >
              <div className="flex items-center gap-1 text-gold" aria-label={`${t.rating} estrelas`}>
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-display text-xl leading-snug text-coffee/90 md:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="relative h-12 w-12 overflow-hidden rounded-full bg-stone-warm">
                  <Image src={t.avatar} alt="" fill sizes="48px" className="object-cover" />
                </span>
                <span>
                  <span className="block font-medium text-coffee">{t.name}</span>
                  <span className="block text-xs text-coffee/55">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
