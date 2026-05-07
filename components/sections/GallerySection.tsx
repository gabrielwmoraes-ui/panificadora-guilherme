"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { gallery } from "@/data/content";

const layout = [
  "col-span-2 row-span-2 aspect-square",
  "col-span-2 aspect-[4/3]",
  "col-span-2 aspect-[4/3]",
  "col-span-2 row-span-2 aspect-square",
  "col-span-2 aspect-[4/3]",
  "col-span-2 aspect-[4/3]",
  "col-span-2 aspect-[4/3]",
  "col-span-2 aspect-[4/3]",
  "col-span-2 aspect-[4/3]",
];

export function GallerySection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative py-28 md:py-40">
      <Container size="wide">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>A casa</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-tight">
            <span className="block">
              <MaskReveal>Pequenos detalhes</MaskReveal>
            </span>
            <span className="block italic text-caramel">
              <MaskReveal delay={0.1}>do dia a dia.</MaskReveal>
            </span>
          </h2>
        </div>

        <div className="mt-16 grid auto-rows-[140px] grid-cols-4 gap-3 md:auto-rows-[200px] md:grid-cols-6 md:gap-5">
          {gallery.slice(0, 9).map((src, i) => (
            <motion.figure
              key={src}
              initial={reduce ? false : { opacity: 0, y: 30, scale: 0.98 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{
                duration: 0.8,
                delay: (i % 4) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-2xl bg-stone ${layout[i] ?? "col-span-2 aspect-[4/3]"}`}
            >
              <Image
                src={src}
                alt="Cena do dia a dia da padaria"
                fill
                sizes="(min-width:768px) 33vw, 50vw"
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-coffee/0 transition-colors duration-500 group-hover:bg-coffee/15" />
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
