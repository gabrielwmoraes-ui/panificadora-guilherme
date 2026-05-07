"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { team } from "@/data/content";

export function TeamGrid() {
  const reduce = useReducedMotion();

  return (
    <section className="py-28 md:py-40">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel>A equipe</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-tight">
            <MaskReveal>Quem segura</MaskReveal>
            <span className="block italic text-caramel">
              <MaskReveal delay={0.1}>o balcão.</MaskReveal>
            </span>
          </h2>
          <p className="mt-8 text-base leading-relaxed text-coffee/70 md:text-lg">
            Pessoas com nome, com história, e com cuidado nas mãos. A casa só funciona porque
            elas chegam cedo todos os dias.
          </p>
        </div>

        <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.figure
              key={m.name}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-stone">
                <Image
                  src={m.photo}
                  alt={`${m.name}, ${m.role}`}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-5">
                <p className="font-display text-2xl tracking-tight">{m.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-caramel-deep">
                  {m.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-coffee/65">{m.bio}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
