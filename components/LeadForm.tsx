"use client";

import { FormEvent, useState } from "react";

import { SITE } from "@/lib/site";

const INITIAL = { nombre: "", email: "", telefono: "", nivel: "Principiante (Cero)" };

export function LeadForm() {
  const [form, setForm] = useState(INITIAL);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Solicitud de prueba gratis - ${form.nombre || "CBVEM"}`;
    const body = [
      `Nombre: ${form.nombre}`,
      `Email: ${form.email}`,
      `Teléfono: ${form.telefono}`,
      `Nivel: ${form.nivel}`
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="font-label-bold text-label-bold text-primary uppercase block">
          Nombre Completo
        </label>
        <input
          required
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          className="w-full bg-surface-bright border-outline-variant rounded-full px-6 py-4 focus:ring-secondary focus:border-secondary transition-all"
          placeholder="Ej. Marc Rovira"
          type="text"
        />
      </div>
      <div className="space-y-2">
        <label className="font-label-bold text-label-bold text-primary uppercase block">Email</label>
        <input
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-surface-bright border-outline-variant rounded-full px-6 py-4 focus:ring-secondary focus:border-secondary transition-all"
          placeholder="hola@ejemplo.com"
          type="email"
        />
      </div>
      <div className="space-y-2">
        <label className="font-label-bold text-label-bold text-primary uppercase block">Teléfono</label>
        <input
          value={form.telefono}
          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          className="w-full bg-surface-bright border-outline-variant rounded-full px-6 py-4 focus:ring-secondary focus:border-secondary transition-all"
          placeholder="+34 600 000 000"
          type="tel"
        />
      </div>
      <div className="space-y-2">
        <label className="font-label-bold text-label-bold text-primary uppercase block">
          Selector de Nivel
        </label>
        <select
          value={form.nivel}
          onChange={(e) => setForm({ ...form, nivel: e.target.value })}
          className="w-full bg-surface-bright border-outline-variant rounded-full px-6 py-4 focus:ring-secondary focus:border-secondary transition-all appearance-none"
        >
          <option>Principiante (Cero)</option>
          <option>Iniciación (Sé jugar)</option>
          <option>Intermedio</option>
          <option>Avanzado / Pro</option>
        </select>
      </div>
      <div className="md:col-span-2 pt-4">
        <button
          className="w-full md:w-auto bg-secondary text-on-secondary font-label-bold text-label-bold px-12 py-5 rounded-full hover:scale-105 transition-all shadow-xl hover:shadow-secondary/30 uppercase tracking-widest"
          type="submit"
        >
          Enviar solicitud
        </button>
      </div>
    </form>
  );
}
