import type { Metadata } from "next";
import Image from "next/image";
import { Cake, Coffee, Users, Calendar } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { OrderForm } from "@/components/sections/OrderForm";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { gallery } from "@/data/content";

export const metadata: Metadata = {
  title: "Encomendas",
  description:
    "Encomendas de bolos personalizados, kits de café da manhã, mesas de doces e coffee breaks corporativos. Solicite um orçamento na Meu Coffe.",
  alternates: { canonical: "/encomendas" },
};

const types = [
  {
    icon: <Cake size={22} />,
    title: "Bolos personalizados",
    text: "Aniversários, casamentos, eventos especiais. Receitas autorais e estética que conta sua história.",
  },
  {
    icon: <Coffee size={22} />,
    title: "Kits de café da manhã",
    text: "Cestas montadas com pão, café especial, doces frescos. Entregas em domicílio na manhã que você escolher.",
  },
  {
    icon: <Users size={22} />,
    title: "Coffee break corporativo",
    text: "Para empresas e eventos. Cardápio escalonado conforme o número de pessoas e a duração do evento.",
  },
  {
    icon: <Calendar size={22} />,
    title: "Eventos & cerimônias",
    text: "Mesa de doces, brunch de casamento, brunchs comemorativos. A casa vai até onde for preciso.",
  },
];

export default function EncomendasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Encomendas"
        title="Para os dias"
        italic="que pedem mais."
        description="Encomendamos com 48h de antecedência mínima. Quanto mais detalhes você nos der, melhor. A gente cuida do resto."
      />

      <section className="pb-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {types.map((t) => (
              <article
                key={t.title}
                className="rounded-3xl border border-coffee/10 bg-cream p-7 transition-colors hover:border-coffee/30 hover:bg-stone"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-coffee text-cream">
                  {t.icon}
                </span>
                <h3 className="mt-6 font-display text-2xl tracking-tight">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-coffee/65">{t.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-stone py-28 md:py-36">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>Solicite</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
              Conta pra gente.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-coffee/70">
              Preencha o formulário com os detalhes e a gente volta em até 24 horas com um
              orçamento personalizado e propostas de cardápio.
            </p>
            <ul className="mt-10 space-y-3 text-sm text-coffee/65">
              <li>· Confirmação por WhatsApp</li>
              <li>· Pagamento em até 4x sem juros</li>
              <li>· Entregamos em raio de 15 km</li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <OrderForm />
          </div>
        </Container>
      </section>

      <section className="py-28 md:py-36">
        <Container>
          <SectionLabel className="justify-center">Galeria</SectionLabel>
          <h2 className="mt-6 text-center font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
            Encomendas anteriores.
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {gallery.slice(0, 6).map((src) => (
              <figure
                key={src}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-stone"
              >
                <Image
                  src={src}
                  alt="Encomenda anterior"
                  fill
                  sizes="(min-width:768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
