"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { timeline } from "@/data/content";

export function Timeline() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-stone py-28 md:py-40">
      <Container>
        <div className="text-center">
          <SectionLabel className="mx-auto justify-center">Linha do tempo</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-tight">
            <MaskReveal>15 anos</MaskReveal>
            <span className="block italic text-caramel">
              <MaskReveal delay={0.1}>de fornadas.</MaskReveal>
            </span>
          </h2>
        </div>

        <ol className="mt-20 space-y-20">
          {timeline.map((e, i) => (
            <motion.li
              key={e.year}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`grid items-center gap-10 md:grid-cols-12 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-6">
                <motion.div
                  initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
                  whileInView={reduce ? undefined : { clipPath: "inset(0 0 0% 0)" }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-stone-warm"
                >
                  <Image
                    src={e.image}
                    alt={`${e.year} — ${e.title}`}
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="md:col-span-6">
                <p className="font-display text-7xl italic leading-none text-caramel md:text-8xl">
                  {e.year}
                </p>
                <h3 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
                  {e.title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-coffee/70">
                  {e.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
