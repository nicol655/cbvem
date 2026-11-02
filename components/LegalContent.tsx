"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { getLegalContent } from "@/lib/content";
import { LEGAL } from "@/lib/site";
import type { LegalSlug } from "@/types/content";

// Replaces {owner}, {email}, ... with the values configured in LEGAL (lib/site.ts).
function fill(text: string): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in LEGAL ? LEGAL[key as keyof typeof LEGAL] : match
  );
}

function Paragraphs({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <>
      {items.map((text) => (
        <p key={text} className="font-body-md text-body-md text-on-surface-variant">
          {fill(text)}
        </p>
      ))}
    </>
  );
}

export function LegalContent({ slug }: { slug: LegalSlug }) {
  const { locale } = useLanguage();
  const content = getLegalContent(locale);
  const doc = content[slug];

  return (
    <>
      <SiteNav transparentVariant="dark" />
      <main className="pt-32 md:pt-40 pb-section-mobile md:pb-section-desktop">
        <article className="max-w-3xl mx-auto px-gutter">
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-3">
            {doc.title}
          </h1>
          <p className="font-label-bold text-[12px] uppercase tracking-widest text-outline mb-12">
            {content.lastUpdatedLabel}: {LEGAL.lastUpdated}
          </p>

          <div className="space-y-10">
            {doc.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="font-headline-md text-headline-md text-primary uppercase">{section.heading}</h2>
                <Paragraphs items={section.paragraphs} />
                {section.items && (
                  <ol className="list-[lower-alpha] pl-6 space-y-2 font-body-md text-body-md text-on-surface-variant">
                    {section.items.map((item) => (
                      <li key={item}>{fill(item)}</li>
                    ))}
                  </ol>
                )}
                {section.table && (
                  <div className="overflow-x-auto rounded-[5px] border border-outline-variant/40">
                    <table className="w-full min-w-[600px] text-left text-[14px]">
                      <thead className="bg-surface-container text-primary font-label-bold">
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header} className="px-4 py-3">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="text-on-surface-variant">
                        {section.table.rows.map((row) => (
                          <tr key={row[0]} className="border-t border-outline-variant/40">
                            {row.map((cell, index) => (
                              <td key={index} className={`px-4 py-3 align-top ${index === 0 ? "font-mono text-[13px]" : ""}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                <Paragraphs items={section.after} />
              </section>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
