"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { products } from "@/data/content";

export function FeaturedProducts() {
  const reduce = useReducedMotion();
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="relative py-28 md:py-40">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Da vitrine</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-tight">
              <span className="block">
                <MaskReveal>Os preferidos</MaskReveal>
              </span>
              <span className="block italic text-caramel">
                <MaskReveal delay={0.1}>da casa.</MaskReveal>
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-coffee/70">
            Receitas que saem do forno todos os dias, em pequenas fornadas. Cardápio completo
            no link ao lado.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <motion.article
              key={p.id}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col"
            >
              <Link
                href="/cardapio"
                className="block overflow-hidden rounded-3xl bg-stone"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {p.diet?.includes("novo") && (
                    <span className="absolute left-4 top-4 rounded-full bg-terracotta px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cream">
                      Novo
                    </span>
                  )}
                  {p.diet?.includes("vegano") && (
                    <span className="absolute right-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-coffee">
                      Vegano
                    </span>
                  )}
                </div>
              </Link>

              <div className="mt-6">
                <h3 className="font-display text-2xl tracking-tight">{p.name}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-coffee/65">
                  {p.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Button href="/cardapio" variant="primary" size="lg">
            Ver cardápio <ArrowUpRight size={18} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
