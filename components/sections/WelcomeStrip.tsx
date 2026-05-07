"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const sentence =
  "Acreditamos no tempo. No fermento que respira por 24 horas, no café que pinga em filtro, no pão que descansa antes de assar.";

export function WelcomeStrip() {
  const reduce = useReducedMotion();
  const words = sentence.split(" ");

  return (
    <section className="relative paper-noise overflow-hidden py-32 md:py-44">
      <Container size="narrow" className="text-center">
        <SectionLabel className="mx-auto justify-center">Nosso modo</SectionLabel>
        <p className="mt-10 font-display text-3xl leading-[1.18] tracking-tight text-coffee md:text-5xl lg:text-6xl">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={reduce ? false : { opacity: 0.15, y: 6 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {w}
              {i < words.length - 1 && " "}
            </motion.span>
          ))}
        </p>
        <p className="mx-auto mt-10 max-w-md text-base leading-relaxed text-coffee/65">
          Pequenas fornadas, atenção a cada detalhe e o respeito pelo que é simples e bem feito.
        </p>
      </Container>
    </section>
  );
}
