"use client";

import { FormEvent, useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import { SITE } from "@/lib/site";

const LEVEL_KEYS = ["levelBeginner", "levelStarter", "levelIntermediate", "levelAdvanced"] as const;
type LevelKey = (typeof LEVEL_KEYS)[number];

export function LeadForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState<{ nombre: string; email: string; telefono: string; nivel: LevelKey }>({
    nombre: "",
    email: "",
    telefono: "",
    nivel: "levelBeginner"
  });

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Solicitud de prueba gratis - ${form.nombre || "CBVEM"}`;
    const body = [
      `Nombre: ${form.nombre}`,
      `Email: ${form.email}`,
      `Teléfono: ${form.telefono}`,
      `Nivel: ${t(`leadForm.${form.nivel}`)}`
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="font-label-bold text-label-bold text-primary uppercase block">
          {t("leadForm.nameLabel")}
        </label>
        <input
          required
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          className="w-full bg-surface-bright border-outline-variant rounded-full px-6 py-4 focus:ring-secondary focus:border-secondary transition-all"
          placeholder={t("leadForm.namePlaceholder")}
          type="text"
        />
      </div>
      <div className="space-y-2">
        <label className="font-label-bold text-label-bold text-primary uppercase block">
          {t("leadForm.emailLabel")}
        </label>
        <input
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-surface-bright border-outline-variant rounded-full px-6 py-4 focus:ring-secondary focus:border-secondary transition-all"
          placeholder={t("leadForm.emailPlaceholder")}
          type="email"
        />
      </div>
      <div className="space-y-2">
        <label className="font-label-bold text-label-bold text-primary uppercase block">
          {t("leadForm.phoneLabel")}
        </label>
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
          {t("leadForm.levelLabel")}
        </label>
        <select
          value={form.nivel}
          onChange={(e) => setForm({ ...form, nivel: e.target.value as LevelKey })}
          className="w-full bg-surface-bright border-outline-variant rounded-full px-6 py-4 focus:ring-secondary focus:border-secondary transition-all appearance-none"
        >
          {LEVEL_KEYS.map((key) => (
            <option key={key} value={key}>
              {t(`leadForm.${key}`)}
            </option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2 pt-4">
        <button
          className="btn-shine w-full md:w-auto bg-secondary text-on-secondary font-label-bold text-label-bold px-12 py-5 rounded-[5px] transition-shadow shadow-xl hover:shadow-secondary/30 uppercase tracking-widest"
          type="submit"
        >
          {t("leadForm.submit")}
        </button>
      </div>
    </form>
  );
}
