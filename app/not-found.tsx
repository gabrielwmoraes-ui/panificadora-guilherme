import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-32">
      <Container size="narrow" className="text-center">
        <p className="font-display text-[clamp(6rem,18vw,12rem)] leading-none tracking-tight text-coffee">
          4<span className="italic text-caramel">0</span>4
        </p>
        <h1 className="mt-2 font-display text-3xl tracking-tight md:text-5xl">
          O pão queimou.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-coffee/70">
          Esta página saiu do forno errado e não está mais disponível. Mas tem fornada nova
          esperando por você na nossa página inicial.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button href="/" variant="primary" size="lg">
            Voltar ao início
          </Button>
          <Button href="/cardapio" variant="ghost" size="lg" magnetic={false}>
            Ver cardápio
          </Button>
        </div>
      </Container>
    </section>
  );
}

export const metadata = {
  title: "Página não encontrada",
};
