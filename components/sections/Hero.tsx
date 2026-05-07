"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { site } from "@/lib/site";
import { heroImage } from "@/data/content";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.05, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-coffee text-cream"
      aria-label="Apresentação"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Pão de fermentação natural saindo do forno, com a crosta dourada e quente"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.55] saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee/70 via-coffee/55 to-coffee/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,transparent_0%,rgba(43,24,16,0.4)_70%)]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex h-full items-end pb-16 md:pb-24">
        <Container className="w-full">
          <div className="max-w-4xl">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-xs uppercase tracking-[0.32em] text-gold"
            >
              <span className="mr-3 inline-block h-px w-10 align-middle bg-gold/70" />
              {site.tagline} · Desde {site.foundedYear}
            </motion.p>

            <h1 className="font-display font-medium leading-[0.95] tracking-tight text-cream drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
              <span className="block text-[clamp(3rem,9vw,7.5rem)] text-cream">
                <MaskReveal delay={1.5}>Pão fresco,</MaskReveal>
              </span>
              <span className="block text-[clamp(3rem,9vw,7.5rem)] italic text-gold">
                <MaskReveal delay={1.7}>café de</MaskReveal>
              </span>
              <span className="block text-[clamp(3rem,9vw,7.5rem)] text-cream">
                <MaskReveal delay={1.9}>verdade.</MaskReveal>
              </span>
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg"
            >
              Fermentação lenta, ingredientes vivos, atendimento que lembra o seu nome.
              Uma padaria de bairro feita para o ritmo das coisas boas.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button href="/cardapio" variant="dark" size="lg">
                Ver cardápio
              </Button>
              <Button href="/contato" variant="ghost" size="lg" className="border-cream/30 text-cream hover:bg-cream/10">
                Como chegar
              </Button>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 md:flex"
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Role para baixo</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
}
