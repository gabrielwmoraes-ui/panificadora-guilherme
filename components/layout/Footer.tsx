import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { site, whatsappLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 bg-coffee text-cream">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-12 md:gap-10 md:py-28">
          <div className="md:col-span-4">
            <p className="font-display text-4xl tracking-tight">
              Meu <span className="italic text-gold">Coffe</span>
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
              {site.description}
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-cream hover:text-coffee"
              >
                <InstagramIcon />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-cream hover:text-coffee"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                  <path d="M20.52 3.48A11.94 11.94 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.08.55 4.13 1.6 5.93L0 24l6.4-1.69a11.86 11.86 0 0 0 5.62 1.43h.01c6.54 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.14-3.36-8.41zM12.04 21.6h-.01a9.71 9.71 0 0 1-4.95-1.36l-.36-.21-3.8 1 1.02-3.7-.24-.38a9.78 9.78 0 0 1-1.5-5.11c0-5.41 4.4-9.81 9.83-9.81a9.74 9.74 0 0 1 9.83 9.83c0 5.42-4.4 9.74-9.82 9.74zm5.65-7.31c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16s-.81 1-.99 1.21c-.18.21-.37.23-.68.08a8.66 8.66 0 0 1-2.55-1.57 9.5 9.5 0 0 1-1.76-2.18c-.18-.31-.02-.48.13-.63.14-.13.31-.34.46-.51.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.69-.96-2.32-.25-.6-.5-.52-.7-.53l-.6-.01c-.21 0-.55.08-.84.39s-1.1 1.07-1.1 2.61c0 1.55 1.13 3.04 1.29 3.25.16.21 2.21 3.36 5.36 4.71.75.32 1.34.51 1.79.66.75.24 1.43.21 1.97.13.6-.09 1.83-.75 2.09-1.46.26-.71.26-1.32.18-1.46-.08-.13-.28-.21-.59-.37z" />
                </svg>
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:bg-cream hover:text-coffee"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Navegação
            </p>
            <ul className="mt-5 space-y-3 text-sm text-cream/85">
              <li><Link className="transition-colors hover:text-cream" href="/">Início</Link></li>
              <li><Link className="transition-colors hover:text-cream" href="/cardapio">Cardápio</Link></li>
              <li><Link className="transition-colors hover:text-cream" href="/sobre">Sobre nós</Link></li>
              <li><Link className="transition-colors hover:text-cream" href="/encomendas">Encomendas</Link></li>
              <li><Link className="transition-colors hover:text-cream" href="/contato">Contato</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Visite-nos
            </p>
            <ul className="mt-5 space-y-4 text-sm text-cream/85">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{site.address.full}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                <a className="transition-colors hover:text-cream" href={`tel:${site.phoneTel}`}>
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <a className="transition-colors hover:text-cream" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Receba o aroma
            </p>
            <p className="mt-5 text-sm leading-relaxed text-cream/70">
              Novidades do forno, lançamentos de receita e convites para eventos. Sem spam.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-cream/10 py-8 text-xs text-cream/50 md:flex-row md:items-center">
          <p>© {year} Meu Coffe. Feito com fermento e carinho.</p>
          <p>
            Padaria · Café especial · {site.address.city} — {site.address.state}
          </p>
        </div>
      </Container>
    </footer>
  );
}
