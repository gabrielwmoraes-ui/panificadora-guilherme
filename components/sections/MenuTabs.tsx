"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { allMenuItems, categories, type Category, type Diet } from "@/data/content";
import { formatBRL } from "@/lib/format";
import { cn } from "@/lib/cn";

const dietLabels: Record<Diet, string> = {
  vegano: "Vegano",
  "sem-gluten": "Sem glúten",
  "lactose-free": "Sem lactose",
  novo: "Novo",
};

export function MenuTabs() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<Category>("paes");
  const [diet, setDiet] = useState<Diet | "all">("all");

  const items = allMenuItems
    .filter((p) => p.category === active)
    .filter((p) => diet === "all" || p.diet?.includes(diet));

  return (
    <section className="pb-32">
      <Container>
        <div className="flex flex-col gap-6 border-b border-coffee/10 pb-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const isActive = c.id === active;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActive(c.id)}
                  className={cn(
                    "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                    isActive ? "text-cream" : "text-coffee/70 hover:text-coffee",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="menu-active"
                      className="absolute inset-0 rounded-full bg-coffee"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{c.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {(["all", "vegano", "sem-gluten"] as const).map((d) => {
              const isActive = diet === d;
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDiet(d)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 transition-colors",
                    isActive
                      ? "border-caramel bg-caramel text-cream"
                      : "border-coffee/15 text-coffee/70 hover:border-coffee/40",
                  )}
                >
                  {d === "all" ? "Todos" : dietLabels[d as Diet]}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${active}-${diet}`}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
            >
              {items.length === 0 && (
                <p className="col-span-full text-center text-coffee/60">
                  Nenhum item nesta combinação. Tente outro filtro.
                </p>
              )}
              {items.map((item, i) => (
                <motion.article
                  key={item.id}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-stone">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                    {item.diet?.map((d) => (
                      <span
                        key={d}
                        className="absolute left-3 top-3 mr-1 rounded-full bg-cream/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-coffee"
                      >
                        {dietLabels[d]}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl tracking-tight">
                        {item.name}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-coffee/65">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 font-display italic text-caramel-deep">
                      {formatBRL(item.price)}
                    </span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
