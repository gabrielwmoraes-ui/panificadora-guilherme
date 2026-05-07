import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { MenuTabs } from "@/components/sections/MenuTabs";
import { BrandMarquee } from "@/components/sections/BrandMarquee";

export const metadata: Metadata = {
  title: "Cardápio",
  description:
    "Cardápio completo da Meu Coffe: pães de fermentação natural, doces, salgados, cafés especiais, bebidas e almoço executivo. Opções veganas e sem glúten.",
  alternates: { canonical: "/cardapio" },
};

export default function CardapioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cardápio"
        title="Os que mais"
        italic="saem da casa."
        description="Uma seleção dos preferidos do balcão, organizados por categoria. Para preços, disponibilidade do dia e encomendas, fala com a gente pelo WhatsApp."
      />
      <MenuTabs />
      <BrandMarquee />
    </>
  );
}
