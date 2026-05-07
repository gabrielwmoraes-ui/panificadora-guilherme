"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/", label: "Início" },
  { href: "/cardapio", label: "Cardápio" },
  { href: "/sobre", label: "Sobre" },
  { href: "/encomendas", label: "Encomendas" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Páginas onde o hero é escuro: o header sobre ele deve ter texto claro até scrollar.
  const overDarkHero = pathname === "/";
  const onLight = scrolled || !overDarkHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "backdrop-blur-md bg-cream/85 border-b border-coffee/10"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between md:h-24">
          <Link
            href="/"
            className={cn(
              "font-display text-2xl tracking-tight transition-colors duration-500 md:text-3xl",
              onLight ? "text-coffee" : "text-cream",
            )}
            aria-label="Meu Café — início"
          >
            Meu{" "}
            <span
              className={cn(
                "italic transition-colors duration-500",
                onLight ? "text-caramel" : "text-gold",
              )}
            >
              Café
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-500",
                    onLight
                      ? active
                        ? "text-coffee"
                        : "text-coffee/70 hover:text-coffee"
                      : active
                        ? "text-cream"
                        : "text-cream/70 hover:text-cream",
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-px",
                        onLight ? "bg-caramel" : "bg-gold",
                      )}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 md:hidden",
              onLight
                ? "border-coffee/20 text-coffee"
                : "border-cream/30 text-cream",
            )}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <Container>
              <nav
                aria-label="Mobile"
                className="my-2 flex flex-col rounded-2xl bg-cream/95 p-3 shadow-lg ring-1 ring-coffee/10 backdrop-blur"
              >
                {nav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-xl px-4 py-3 font-display text-2xl tracking-tight",
                        active ? "text-coffee" : "text-coffee/60",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
