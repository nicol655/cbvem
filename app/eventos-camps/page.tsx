import type { Metadata } from "next";

import { NewsletterForm } from "@/components/NewsletterForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { asset } from "@/lib/asset";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Camps y Eventos | CBVEM",
  description:
    "Camps intensivos y clínics de beach volley con entrenadores de élite en la costa del Maresme."
};

export default function EventosCampsPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-24 overflow-x-hidden">
        {/* Hero */}
        <header className="max-w-container-max mx-auto px-gutter py-section-mobile md:py-section-desktop text-center relative">
          <div className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-bold text-label-bold mb-6">
            EXPERIENCIAS PREMIUM
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase max-w-4xl mx-auto">
            CAMPS INTENSIVOS Y CLÍNICS
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6">
            Perfecciona tu técnica con entrenadores de élite en el entorno exclusivo de la costa del
            Maresme.
          </p>
        </header>

        {/* Featured camp */}
        <section className="max-w-container-max mx-auto px-gutter mb-section-mobile md:mb-section-desktop">
          <div className="bg-surface-container-lowest rounded-lg ambient-shadow overflow-hidden flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-3/5 relative min-h-[300px] lg:min-h-[400px]">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="Entrenamiento de alto rendimiento al atardecer"
                src={asset("/images/camp-featured.jpg")}
              />
              <div className="absolute top-6 left-6 bg-error text-on-primary px-4 py-2 rounded-full font-label-bold text-label-bold animate-pulse">
                ÚLTIMAS 5 PLAZAS
              </div>
            </div>
            <div className="lg:w-2/5 p-10 lg:p-12 flex flex-col justify-center">
              <h2 className="font-headline-md text-headline-md text-primary mb-4 uppercase">
                SUMMER PRO CAMP 2024
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-secondary">calendar_today</span>
                <span className="font-label-bold text-label-bold text-on-surface">15 - 22 DE JULIO</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                7 días de inmersión total con doble sesión diaria, análisis de vídeo personalizado y
                preparación física específica para arena.
              </p>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="font-headline-lg text-headline-lg-mobile text-secondary">450€</span>
                <span className="font-body-md text-body-md text-outline">/ semana</span>
              </div>
              <a
                href={whatsappHref('Hola CBVEM, quiero solicitar admisión al "Summer Pro Camp 2024".')}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-primary py-4 rounded-full text-on-primary font-label-bold text-label-bold hover:bg-secondary transition-colors duration-300"
              >
                SOLICITAR ADMISIÓN
              </a>
            </div>
          </div>
        </section>

        {/* Upcoming clinics */}
        <section className="bg-surface-container-low py-section-mobile md:py-section-desktop">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <h2 className="font-headline-md text-headline-md text-primary uppercase">PRÓXIMOS CLÍNICS</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Sesiones intensivas con estrellas internacionales
                </p>
              </div>
              <a
                className="text-secondary font-label-bold text-label-bold border-b-2 border-secondary hover:opacity-70 transition-opacity"
                href={whatsappHref("Hola CBVEM, quiero ver el calendario completo de clínics.")}
                target="_blank"
                rel="noreferrer"
              >
                VER CALENDARIO COMPLETO
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Clinic 1 */}
              <div className="bg-surface-container-lowest p-8 rounded-lg ambient-shadow relative overflow-hidden group flex flex-col">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-bold text-label-bold">
                    TÉCNICA DE ATAQUE
                  </span>
                  <span className="material-symbols-outlined text-secondary">sports_volleyball</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">CLÍNIC CON JOAN FRANCESC</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  Domina el &lsquo;cut shot&rsquo; y la potencia en red con el campeón nacional.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div>
                    <p className="font-label-bold text-[10px] text-outline uppercase tracking-wider">
                      PRECIO SOCIOS
                    </p>
                    <p className="font-headline-md text-secondary">65€</p>
                  </div>
                  <span className="bg-error text-on-primary px-3 py-1 rounded font-label-bold text-[10px]">
                    ÚLTIMAS PLAZAS
                  </span>
                </div>
              </div>

              {/* Clinic 2 */}
              <div className="bg-surface-container-lowest p-8 rounded-lg ambient-shadow relative overflow-hidden group flex flex-col">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-bold text-label-bold">
                    DEFENSA AVANZADA
                  </span>
                  <span className="material-symbols-outlined fill text-secondary">shield</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">BRAZILIAN DEFENSIVE STYLE</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  Aprende la lectura de juego y posicionamiento de la escuela brasileña.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div>
                    <p className="font-label-bold text-[10px] text-outline uppercase tracking-wider">FECHA</p>
                    <p className="font-headline-md text-primary">05 AGO</p>
                  </div>
                  <a
                    href={whatsappHref('Hola CBVEM, quiero info del clínic "Brazilian Defensive Style" (05 AGO).')}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-surface-container-highest p-3 rounded-full hover:bg-secondary-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Clinic 3 */}
              <div className="bg-surface-container-lowest p-8 rounded-lg ambient-shadow relative overflow-hidden group flex flex-col">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-bold text-label-bold">
                    CAMP JUVENIL
                  </span>
                  <span className="material-symbols-outlined text-secondary">groups</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">ACADEMY WEEKEND</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  Fin de semana intensivo para jóvenes promesas (14-18 años).
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div>
                    <p className="font-label-bold text-[10px] text-outline uppercase tracking-wider">PRECIO</p>
                    <p className="font-headline-md text-secondary">120€</p>
                  </div>
                  <span className="font-label-bold text-label-bold text-primary">INSCRIPCIÓN ABIERTA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why our camps */}
        <section className="py-section-mobile md:py-section-desktop overflow-hidden relative">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            <div className="relative">
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-64 h-64 bg-secondary rounded-full opacity-10 blur-3xl" />
              <div className="relative z-10 border-l-4 border-secondary pl-8 md:pl-12">
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-8">
                  POR QUÉ NUESTROS CAMPS
                </h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary">verified_user</span>
                    <div>
                      <h4 className="font-label-bold text-label-bold text-primary">RATIO REDUCIDO</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Máximo 6 alumnos por pista para garantizar atención técnica individualizada.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary">videocam</span>
                    <div>
                      <h4 className="font-label-bold text-label-bold text-primary">VÍDEO ANÁLISIS</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Sesiones grabadas para corregir gestos técnicos en tiempo real.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary">hotel</span>
                    <div>
                      <h4 className="font-label-bold text-label-bold text-primary">EXPERIENCIA COMPLETA</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Opción de alojamiento premium y restauración saludable incluida.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary-container rounded-lg rotate-3 -z-10 opacity-10" />
              <img
                className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                alt="Entrenador explicando táctica al grupo"
                src={asset("/images/camp-editorial.jpg")}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-container text-on-primary py-section-mobile md:py-section-desktop relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary opacity-5 pointer-events-none -rotate-12 translate-x-1/4" />
          <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
            <h2 className="font-headline-md text-headline-md mb-4 uppercase">
              ¿QUIERES SER EL PRIMERO EN SABERLO?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl mx-auto mb-10 opacity-80">
              Suscríbete para recibir notificaciones exclusivas sobre nuevos Camps, Clínics y ofertas
              de &ldquo;Last Minute&rdquo;.
            </p>
            <NewsletterForm
              variant="dark"
              layout="inline"
              placeholder="TU CORREO ELECTRÓNICO"
              buttonLabel="UNIRME A LA LISTA"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
