"use client";

import { FormEvent, useState } from "react";
import { Check } from "lucide-react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-cream">
        <Check size={16} className="text-gold" /> Pronto! Em breve você recebe novidades.
      </p>
    );
  }

  return (
    <form className="mt-5 flex gap-2" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">Email</label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="seu@email.com"
        className="h-11 flex-1 rounded-full border border-cream/20 bg-transparent px-4 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
      />
      <button
        type="submit"
        className="h-11 rounded-full bg-gold px-5 text-sm font-medium text-coffee transition-colors hover:bg-cream"
      >
        Assinar
      </button>
    </form>
  );
}
