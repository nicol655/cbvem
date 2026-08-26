"use client";

import { FormEvent, useState } from "react";

import { SITE } from "@/lib/site";

type NewsletterFormProps = {
  variant?: "light" | "dark";
  layout?: "stacked" | "inline";
  buttonLabel?: string;
  placeholder?: string;
};

export function NewsletterForm({
  variant = "light",
  layout = "stacked",
  buttonLabel = "Suscribirme",
  placeholder = "Tu email"
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = "Alta en la comunidad CBVEM";
    const body = `Quiero recibir novedades de CBVEM.\nEmail: ${email}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  const inputClass =
    variant === "dark"
      ? "flex-grow bg-white/10 border-white/20 text-white placeholder-white/60 rounded-full px-8 py-4 focus:ring-secondary focus:border-secondary transition-all"
      : "w-full bg-white border-outline-variant rounded-full px-6 py-4 font-label-bold text-label-bold focus:ring-secondary focus:border-secondary transition-all";

  const buttonClass =
    variant === "dark"
      ? "bg-secondary text-on-primary py-4 px-10 rounded-full font-label-bold text-label-bold hover:scale-105 transition-transform whitespace-nowrap"
      : "w-full bg-primary text-on-primary rounded-full px-6 py-4 font-label-bold text-label-bold hover:bg-secondary transition-all uppercase tracking-widest";

  return (
    <form
      onSubmit={onSubmit}
      className={layout === "inline" ? "flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" : "flex flex-col gap-4"}
    >
      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClass}
        placeholder={placeholder}
      />
      <button type="submit" className={buttonClass}>
        {buttonLabel}
      </button>
    </form>
  );
}
