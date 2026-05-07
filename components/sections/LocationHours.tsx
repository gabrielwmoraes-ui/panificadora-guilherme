"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { Button } from "@/components/ui/Button";
import { site, whatsappLink } from "@/lib/site";

function getOpenStatus() {
  if (typeof window === "undefined") return null;
  const now = new Date();
  const dow = now.getDay();
  const today = site.hours.find((h) => h.dow === dow);
  if (!today) return null;
  const [oh, om] = today.open.split(":").map(Number);
  const [ch, cm] = today.close.split(":").map(Number);
  const cur = now.getHours() * 60 + now.getMinutes();
  const open = oh * 60 + om;
  const close = ch * 60 + cm;
  if (cur >= open && cur < close) {
    return { open: true, label: "Aberto agora", until: today.close };
  }
  if (cur < open) {
    return { open: false, label: "Fechado", next: today.open };
  }
  const tomorrow = site.hours.find((h) => h.dow === (dow + 1) % 7);
  return { open: false, label: "Fechado", next: tomorrow?.open ?? "06:00" };
}

export function LocationHours() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<ReturnType<typeof getOpenStatus>>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus(getOpenStatus());
    const i = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative py-28 md:py-40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <motion.div
              initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
              whileInView={reduce ? undefined : { clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-stone md:aspect-[4/3]"
            >
              <iframe
                src={site.address.embedUrl}
                title="Mapa da localização da Meu Coffe"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <SectionLabel>Visite-nos</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-tight">
              <MaskReveal>Estamos te</MaskReveal>
              <span className="block italic text-caramel">
                <MaskReveal delay={0.1}>esperando.</MaskReveal>
              </span>
            </h2>

            {status && (
              <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-stone px-5 py-3">
                <span
                  className={`relative flex h-2.5 w-2.5 ${status.open ? "" : ""}`}
                  aria-hidden
                >
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      status.open ? "animate-ping bg-emerald-500" : ""
                    }`}
                  />
                  <span
                    className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                      status.open ? "bg-emerald-600" : "bg-terracotta"
                    }`}
                  />
                </span>
                <span className="text-sm font-medium text-coffee">
                  {status.label}
                  {status.open && status.until && (
                    <span className="text-coffee/60"> · até as {status.until}</span>
                  )}
                  {!status.open && status.next && (
                    <span className="text-coffee/60"> · abre às {status.next}</span>
                  )}
                </span>
              </div>
            )}

            <div className="mt-10 space-y-7">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 shrink-0 text-caramel" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-coffee/55">Endereço</p>
                  <p className="mt-1 text-base text-coffee">{site.address.full}</p>
                  <a
                    className="mt-2 inline-flex items-center gap-1.5 text-sm text-caramel-deep underline-offset-4 hover:underline"
                    href={site.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation size={14} /> Traçar rota no Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 shrink-0 text-caramel" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-coffee/55">Telefone</p>
                  <a className="mt-1 block text-base text-coffee" href={`tel:${site.phoneTel}`}>
                    {site.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle className="mt-1 shrink-0 text-caramel" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-coffee/55">WhatsApp</p>
                  <a
                    className="mt-1 block text-base text-coffee"
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Faça seu pedido
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-stone p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-coffee/55">Horários</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between border-b border-coffee/10 pb-2">
                    <span className="text-coffee/80">{h.day}</span>
                    <span className="font-medium text-coffee">
                      {h.open} – {h.close}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={whatsappLink()} variant="primary" size="lg">
                Pedir pelo WhatsApp
              </Button>
              <Button href={site.address.mapsUrl} variant="ghost" size="lg" magnetic={false}>
                Como chegar
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
