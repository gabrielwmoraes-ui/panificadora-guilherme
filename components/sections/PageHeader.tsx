import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MaskReveal } from "@/components/animations/MaskReveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  italic?: string;
  description?: ReactNode;
}

export function PageHeader({ eyebrow, title, italic, description }: PageHeaderProps) {
  return (
    <section className="relative pt-40 pb-16 md:pt-52 md:pb-24">
      <Container>
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7rem)] leading-[0.95] tracking-tight">
          <span className="block">
            <MaskReveal>{title}</MaskReveal>
          </span>
          {italic && (
            <span className="block italic text-caramel">
              <MaskReveal delay={0.1}>{italic}</MaskReveal>
            </span>
          )}
        </h1>
        {description && (
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-coffee/70 md:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
