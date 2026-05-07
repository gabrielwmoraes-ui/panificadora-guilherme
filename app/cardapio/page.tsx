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
        title="O que está"
        italic="saindo do forno."
        description="Tudo o que servimos hoje, organizado por categoria. As fornadas começam às 6h e se renovam ao longo do dia. Itens com restrição alimentar marcados."
      />
      <MenuTabs />
      <BrandMarquee />
    </>
  );
}
