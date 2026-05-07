"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Check, Send, Upload } from "lucide-react";
import { cn } from "@/lib/cn";

const schema = z.object({
  name: z.string().min(2, "Conta seu nome"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "Telefone obrigatório para encomendas"),
  type: z.string().min(1, "Selecione o tipo"),
  date: z.string().min(1, "Quando você precisa?"),
  people: z.string().optional(),
  details: z.string().min(10, "Conta um pouco mais sobre o pedido"),
});

type FormData = z.infer<typeof schema>;

const types = [
  "Bolo de aniversário",
  "Kit café da manhã",
  "Mesa de doces",
  "Coffee break corporativo",
  "Casamento / cerimônia",
  "Outro",
];

export function OrderForm() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const [file, setFile] = useState<File | null>(null);
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
        <h3 className="mt-6 font-display text-3xl tracking-tight">
          Pedido recebido com cuidado.
        </h3>
        <p className="mt-3 text-coffee/70">
          Vamos avaliar e voltar pelo WhatsApp em até 24 horas com um orçamento e
          combinar a retirada na loja.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nome" error={errors.name?.message}>
          <input {...register("name")} className={inputCls(!!errors.name)} placeholder="Seu nome completo" />
        </Field>
        <Field label="Telefone" error={errors.phone?.message}>
          <input
            type="tel"
            {...register("phone")}
            className={inputCls(!!errors.phone)}
            placeholder="(11) 99999-9999"
          />
        </Field>
      </div>

      <Field label="Email" error={errors.email?.message}>
        <input
          type="email"
          {...register("email")}
          className={inputCls(!!errors.email)}
          placeholder="seu@email.com"
        />
      </Field>

      <div className="grid gap-5 md:grid-cols-3">
        <Field label="Tipo de encomenda" error={errors.type?.message}>
          <select {...register("type")} className={inputCls(!!errors.type)} defaultValue="">
            <option value="" disabled>
              Selecione...
            </option>
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Data da retirada" error={errors.date?.message}>
          <input type="date" {...register("date")} className={inputCls(!!errors.date)} />
        </Field>
        <Field label="Pessoas (aprox.)">
          <input
            type="number"
            min={1}
            {...register("people")}
            className={inputCls(false)}
            placeholder="20"
          />
        </Field>
      </div>

      <Field label="Detalhes" error={errors.details?.message}>
        <textarea
          rows={5}
          {...register("details")}
          className={cn(inputCls(!!errors.details), "min-h-[140px] resize-y")}
          placeholder="Descreva sabores, restrições, estética desejada e qualquer referência."
        />
      </Field>

      <div>
        <span className="mb-2 block text-xs uppercase tracking-[0.22em] text-coffee/60">
          Imagem de referência (opcional)
        </span>
        <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-coffee/20 bg-cream px-4 py-4 transition-colors hover:border-caramel hover:bg-stone">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coffee text-cream">
            <Upload size={16} />
          </span>
          <span className="text-sm">
            {file ? (
              <span className="text-coffee">{file.name}</span>
            ) : (
              <span className="text-coffee/60">Arraste ou clique para anexar</span>
            )}
          </span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-coffee px-8 text-cream transition-colors hover:bg-coffee-soft disabled:opacity-60"
      >
        <Send size={16} />
        {isSubmitting ? "Enviando..." : "Solicitar orçamento"}
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
