import { Marquee } from "@/components/animations/Marquee";

const phrases = [
  "Pão fresco todos os dias",
  "Café especial",
  "Fermentação natural",
  "Receitas autorais",
  "Atendimento desde 2010",
  "Ingredientes locais",
];

export function BrandMarquee() {
  return (
    <section className="border-y border-coffee/10 bg-cream py-8" aria-hidden>
      <Marquee
        items={phrases.map((p) => (
          <span
            key={p}
            className="font-display text-3xl tracking-tight text-coffee md:text-5xl"
          >
            {p}
          </span>
        ))}
      />
    </section>
  );
}
