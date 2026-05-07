import type { Metadata } from "next";
import Image from "next/image";
import { Cake, Coffee, Users, Calendar, MapPin, Clock, Navigation } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { OrderForm } from "@/components/sections/OrderForm";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Encomendas",
  description:
    "Encomendas de bolos personalizados, kits de café da manhã, mesas de doces e coffee breaks corporativos. Solicite um orçamento e retire na Meu Coffe.",
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
    text: "Cestas montadas com pão, café especial e doces frescos. Retirada agendada na manhã que você escolher.",
  },
  {
    icon: <Users size={22} />,
    title: "Coffee break corporativo",
    text: "Para empresas e eventos. Cardápio escalonado conforme o número de pessoas e a duração do evento.",
  },
  {
    icon: <Calendar size={22} />,
    title: "Eventos & cerimônias",
    text: "Mesa de doces, brunch de casamento, comemorações. A casa monta tudo com você.",
  },
];

export default function EncomendasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Encomendas"
        title="Para os dias"
        italic="que pedem mais."
        description="Encomendamos com 48h de antecedência mínima. Solicite um orçamento, combine os detalhes e retire diretamente no balcão da casa, no horário marcado."
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
              Preencha o formulário com os detalhes do que você imagina e a gente volta em
              até 24 horas com um orçamento personalizado e propostas de cardápio.
            </p>
            <ul className="mt-10 space-y-3 text-sm text-coffee/65">
              <li>· Confirmação por WhatsApp</li>
              <li>· Pagamento no balcão na retirada</li>
              <li>· Retirada agendada na loja</li>
            </ul>

            <div className="mt-12 rounded-3xl border border-coffee/15 bg-cream p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-caramel-deep">
                Onde você retira
              </p>
              <p className="mt-4 font-display text-2xl leading-tight tracking-tight text-coffee">
                Meu <span className="italic text-caramel">Coffe</span>
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-caramel" />
                  <div>
                    <p className="text-coffee">{site.address.street}</p>
                    <p className="text-coffee/60">
                      {site.address.neighborhood} · {site.address.city} — {site.address.state}
                    </p>
                    <p className="text-coffee/60">CEP {site.address.zip}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={16} className="mt-0.5 shrink-0 text-caramel" />
                  <div>
                    <p className="text-coffee">Seg a Sex · 6h às 20h</p>
                    <p className="text-coffee/60">Sáb · 7h às 20h · Dom · 7h às 14h</p>
                  </div>
                </div>
              </div>

              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-coffee px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-coffee-soft"
              >
                <Navigation size={14} /> Traçar rota
              </a>
            </div>
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
            {[
              "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=900&q=80",
            ].map((src) => (
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
