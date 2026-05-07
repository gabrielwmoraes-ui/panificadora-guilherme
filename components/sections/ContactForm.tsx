"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Check, Send } from "lucide-react";
import { cn } from "@/lib/cn";

const schema = z.object({
  name: z.string().min(2, "Conta pra gente seu nome"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  message: z.string().min(10, "Escreva pelo menos algumas linhas"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 700));
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.96 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
        className="rounded-3xl bg-stone p-10 text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-caramel text-cream">
          <Check size={24} />
        </div>
        <h3 className="mt-6 font-display text-3xl tracking-tight">Mensagem recebida.</h3>
        <p className="mt-3 text-coffee/70">
          Vamos te responder em breve. Para urgências, fala com a gente no WhatsApp.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <Field label="Nome" error={errors.name?.message}>
        <input
          {...register("name")}
          className={inputCls(!!errors.name)}
          placeholder="Como podemos te chamar"
          autoComplete="name"
        />
      </Field>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            {...register("email")}
            className={inputCls(!!errors.email)}
            placeholder="seu@email.com"
            autoComplete="email"
          />
        </Field>
        <Field label="Telefone (opcional)" error={errors.phone?.message}>
          <input
            type="tel"
            {...register("phone")}
            className={inputCls(false)}
            placeholder="(11) 99999-9999"
            autoComplete="tel"
          />
        </Field>
      </div>
      <Field label="Mensagem" error={errors.message?.message}>
        <textarea
          rows={5}
          {...register("message")}
          className={cn(inputCls(!!errors.message), "min-h-[140px] resize-y")}
          placeholder="Pedido, dúvida, encomenda, ou só um oi."
        />
      </Field>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-coffee px-8 text-cream transition-colors hover:bg-coffee-soft disabled:opacity-60"
      >
        <Send size={16} />
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.22em] text-coffee/60">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-terracotta">{error}</span>}
    </label>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full rounded-2xl border bg-cream px-4 py-3.5 text-base text-coffee placeholder:text-coffee/40 transition-colors focus:outline-none focus:ring-2 focus:ring-gold",
    hasError ? "border-terracotta" : "border-coffee/15 focus:border-coffee",
  );
}
