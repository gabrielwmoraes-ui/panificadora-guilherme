import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { AboutSplit } from "@/components/sections/AboutSplit";
import { Timeline } from "@/components/sections/Timeline";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "Conheça a história da Meu Coffe, a equipe por trás do balcão, nossa filosofia de fermentação natural e os 15 anos no bairro. Padaria artesanal feita com cuidado.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Quem somos"
        title="Uma padaria"
        italic="que respira tempo."
        description="Começamos com uma vitrine pequena na esquina e a receita da avó. Hoje, alimentamos as manhãs do bairro com pão, café e a calma das coisas bem feitas."
      />
      <AboutSplit />
      <Timeline />
      <TeamGrid />
      <FinalCTA />
    </>
  );
}
