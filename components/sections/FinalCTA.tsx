"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { ctaImage } from "@/data/content";
import { whatsappLink } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-coffee text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <ParallaxImage
          src={ctaImage}
          alt=""
          fill
          sizes="100vw"
          intensity={0.2}
          containerClassName="absolute inset-0"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-coffee/70 via-coffee/85 to-coffee" />

      <Container className="relative z-10 py-32 md:py-44">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-gold">
            <span className="mr-3 inline-block h-px w-10 align-middle bg-gold/70" />
            Te esperamos
          </p>
          <h2 className="mt-8 font-display text-[clamp(3rem,9vw,7rem)] leading-[0.95] tracking-tight">
            <span className="block">
              <MaskReveal>Venha sentir</MaskReveal>
            </span>
            <span className="block italic text-gold">
              <MaskReveal delay={0.1}>o aroma.</MaskReveal>
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
            O pão é melhor quando ainda é manhã. O café é melhor quando alguém te diz bom dia.
            A casa fica melhor quando você chega.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button href="/contato" variant="dark" size="lg">
              Como chegar
            </Button>
            <Button
              href={whatsappLink()}
              variant="ghost"
              size="lg"
              className="border-cream/30 text-cream hover:bg-cream/10"
            >
              Tirar uma dúvida
            </Button>
          </div>
        </div>
      </Container>

      {/* Decorative image */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 hidden h-72 w-72 rotate-12 overflow-hidden rounded-full md:block">
        <Image
          src={ctaImage}
          alt=""
          fill
          sizes="288px"
          className="object-cover opacity-40"
        />
      </div>
    </section>
  );
}
