"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { Counter } from "@/components/animations/Counter";
import { aboutImage, stats } from "@/data/content";

export function AboutSplit() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-stone py-28 md:py-40">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel>Nossa história</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-tight">
              <span className="block">
                <MaskReveal>Um forno aceso</MaskReveal>
              </span>
              <span className="block">
                <MaskReveal delay={0.1}>com um propósito</MaskReveal>
              </span>
              <span className="block italic text-caramel">
                <MaskReveal delay={0.2}>simples.</MaskReveal>
              </span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-coffee/75 md:text-lg">
              Começamos com uma vitrine pequena na esquina e a receita da avó. Hoje,
              alimentamos manhãs inteiras de famílias do bairro com pão de fermento natural,
              cafés selecionados e doces que ainda guardam nome de afeto.
            </p>
            <p className="mt-5 text-base leading-relaxed text-coffee/75">
              Cada receita aqui passou por dezenas de testes até virar tradição. E mesmo as
              tradicionais ainda recebem ajustes, porque a busca não termina.
            </p>

            <div className="mt-12 flex justify-start">
              <Button href="/sobre" variant="ghost" size="lg">
                Conhecer a casa
              </Button>
            </div>

            <ul className="mt-14 grid grid-cols-3 gap-6 border-t border-coffee/10 pt-10">
              {stats.map((s) => (
                <li key={s.label}>
                  <p className="font-display text-4xl tracking-tight text-coffee md:text-5xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-coffee/55">
                    {s.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
              whileInView={
                reduce ? undefined : { clipPath: "inset(0 0 0% 0)" }
              }
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-coffee/10 lg:aspect-[5/6]"
            >
              <Image
                src={aboutImage}
                alt="Padeiro chefe Lucas trabalhando na bancada com massa de fermentação natural"
                fill
                sizes="(min-width:1024px) 60vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-cream/90 p-5 backdrop-blur md:bottom-10 md:left-10 md:right-auto md:max-w-xs">
                <p className="font-display italic text-caramel">Lucas Andrade</p>
                <p className="mt-1 text-xs text-coffee/60">Padeiro-chefe & sócio</p>
                <p className="mt-3 text-sm leading-relaxed text-coffee/75">
                  &ldquo;A gente faz cada pão como se fosse para a nossa mesa. Porque,
                  no fim do dia, é mesmo.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
