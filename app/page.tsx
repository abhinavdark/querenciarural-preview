import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { CategoryShowcase } from "@/components/sections/CategoryShowcase";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { DiscoverGalicia } from "@/components/sections/DiscoverGalicia";
import { PersonalAssistanceCta } from "@/components/sections/PersonalAssistanceCta";
import { ContactForm } from "@/components/forms/ContactForm";
import { PROPERTIES, getFeaturedProperties } from "@/data/properties";
import { COMPANY } from "@/data/company";
import { ArrowRight, Phone, Mail, MapPin, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";

export default function HomePage() {
  const featuredProperties = getFeaturedProperties(10);

  return (
    <div className="space-y-0">
      {/* SECTION B: HERO */}
      <Hero />

      {/* SECTION C & D: PROPERTY SEARCH & FEATURED PROPERTIES */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
        <div className="text-center max-w-2xl mx-auto mt-12 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7B3812] uppercase tracking-widest bg-[#FFF8EB] px-3 py-1 rounded-full border border-[#ebd7b5] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#165929]" />
            <span>Selección Curada · Colección Principal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F2937]">
            Propiedades Destacadas
          </h2>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Una cuidada muestra de pazos históricos, aldeas a rehabilitar, casonas solariegas y viñedos de la Ribeira Sacra, seleccionados por su autenticidad y singularidad arquitectónica.
          </p>
        </div>

        {/* Interactive Property Grid with Live Search & Filtering */}
        <PropertyGrid initialProperties={PROPERTIES} limit={10} />

        <div className="text-center mt-12">
          <Link
            href="/propiedades"
            className="inline-flex items-center gap-2 bg-[#FFF8EB] hover:bg-white text-[#165929] border border-[#ebd7b5] hover:border-[#165929] px-7 py-3 rounded-xl font-semibold text-sm shadow-xs hover:shadow transition-all"
          >
            <span>Ver todas las propiedades en catálogo</span>
            <ArrowRight className="w-4 h-4 text-[#165929]" />
          </Link>
        </div>
      </section>

      {/* SECTION E: PROPERTY CATEGORIES */}
      <CategoryShowcase />

      {/* SECTION F: THE QUERENCIA RURAL EXPERIENCE */}
      <ExperienceSection />

      {/* SECTION G: DISCOVER GALICIA */}
      <DiscoverGalicia />

      {/* SECTION H: PERSONAL PROPERTY ASSISTANCE */}
      <PersonalAssistanceCta />

      {/* SECTION I: FINAL CONTACT SECTION */}
      <section id="contacto-home" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Information Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7B3812] uppercase tracking-widest bg-[#FFF8EB] px-3 py-1 rounded-full border border-[#ebd7b5]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#165929]" />
                <span>Atención Personalizada</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F2937] leading-tight">
                ¿Buscas una propiedad especial en Galicia?
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                Escríbenos o llámanos. Estaremos encantados de resolver todas tus dudas sobre precios, condiciones registrales, visitas presenciales o proyectos de rehabilitación sin ningún compromiso.
              </p>

              <div className="space-y-4 pt-4 border-t border-gray-100">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 hover:border-[#165929] hover:bg-emerald-50/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#165929] flex items-center justify-center group-hover:bg-[#165929] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block">
                      Teléfono directo
                    </span>
                    <span className="text-sm font-bold text-gray-900 group-hover:text-[#165929]">
                      {COMPANY.phoneFormatted}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 hover:border-[#165929] hover:bg-emerald-50/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#165929] flex items-center justify-center group-hover:bg-[#165929] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block">
                      Correo electrónico
                    </span>
                    <span className="text-sm font-bold text-gray-900 group-hover:text-[#165929]">
                      {COMPANY.email}
                    </span>
                  </div>
                </a>

                <a
                  href={COMPANY.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-emerald-300 bg-emerald-50/60 hover:bg-emerald-100/60 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-emerald-800 font-semibold block">
                      Canal prioritario
                    </span>
                    <span className="text-sm font-bold text-emerald-950">
                      Chatear por WhatsApp al instante
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 text-xs text-gray-600">
                  <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
                  <div>
                    <strong className="text-gray-900 block">Sede Central:</strong>
                    <span>{COMPANY.address}, {COMPANY.postalCode} {COMPANY.town} ({COMPANY.province})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7 bg-[#FCFBF8] p-6 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                Envíanos tu consulta patrimonial
              </h3>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                Rellena el siguiente formulario y un asesor senior te responderá con la máxima discreción y detalle.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
