import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { LocationHours } from "@/components/sections/LocationHours";
import { ContactForm } from "@/components/sections/ContactForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Meu Coffe: WhatsApp, telefone, email e formulário. Tire dúvidas, faça encomendas, marque eventos. Padaria artesanal e cafeteria.",
  alternates: { canonical: "/contato" },
};

const tiles = [
  {
    icon: <Phone size={22} />,
    label: "Telefone",
    value: site.phone,
    href: `tel:${site.phoneTel}`,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.13 1.6 5.93L0 24l6.4-1.69a11.86 11.86 0 0 0 5.62 1.43h.01c6.54 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.14-3.36-8.41z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Fala com a gente",
    href: whatsappLink(),
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: <MapPin size={22} />,
    label: "Visitar",
    value: site.address.full,
    href: site.address.mapsUrl,
  },
];

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Manda um"
        italic="bom dia."
        description="Pelo canal que for melhor pra você. A gente responde no horário comercial — fora dele, recebe um abraço pela manhã seguinte."
      />

      <Container className="grid gap-4 pb-20 md:grid-cols-4">
        {tiles.map((t) => (
          <a
            key={t.label}
            href={t.href}
            target={t.href.startsWith("http") ? "_blank" : undefined}
            rel={t.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group relative flex flex-col gap-3 rounded-3xl border border-coffee/10 bg-cream p-7 transition-colors hover:border-coffee/30 hover:bg-stone"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-coffee text-cream transition-transform duration-500 group-hover:scale-110">
              {t.icon}
            </span>
            <span className="text-xs uppercase tracking-[0.22em] text-coffee/55">
              {t.label}
            </span>
            <span className="font-display text-xl tracking-tight">{t.value}</span>
          </a>
        ))}
      </Container>

      <LocationHours />

      <section className="bg-stone py-28 md:py-36">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>Mensagem direta</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
              Escreva para a casa.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-coffee/70">
              Para encomendas, dúvidas, parcerias ou só pra dizer oi. A gente lê todas as
              mensagens.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="py-28 md:py-36">
        <Container size="narrow">
          <SectionLabel className="justify-center">Perguntas frequentes</SectionLabel>
          <h2 className="mt-6 text-center font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
            O que perguntam por aqui.
          </h2>
          <div className="mt-14">
            <FaqAccordion />
          </div>
        </Container>
      </section>
    </>
  );
}
