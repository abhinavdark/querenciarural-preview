import Link from "next/link";
import { MessageSquare, Phone, Sparkles, Compass } from "lucide-react";
import { COMPANY } from "@/data/company";

export function PersonalAssistanceCta() {
  return (
    <section className="py-16 bg-[#FFF8EB] border-t border-[#ebd7b5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 bg-white border border-[#ebd7b5] px-3 py-1 rounded-full text-xs font-bold text-[#7B3812] uppercase tracking-wider mb-4 shadow-xs">
          <Compass className="w-3.5 h-3.5 text-[#165929]" />
          <span>Servicio de Personal Shopper Inmobiliario</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F2937] mb-4">
          ¿Todavía no has encontrado la propiedad que buscas?
        </h2>

        <p className="text-base text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
          Cuéntanos qué tienes en mente. Nuestro equipo puede ayudarte a encontrar una propiedad que se adapte a tus necesidades y preferencias, incluyendo oportunidades fuera de mercado (off-market) y fincas exclusivas no publicadas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contacto#formulario"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#165929] hover:bg-[#0e3f1c] text-white px-8 py-3.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Cuéntanos qué buscas</span>
          </Link>

          <a
            href={COMPANY.whatsappUrl("Hola, busco una propiedad con características específicas en Galicia y me gustaría solicitar su asesoramiento personalizado.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3.5 rounded-lg text-sm font-semibold shadow-xs hover:shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#7B3812]/30 hover:border-[#7B3812] text-[#7B3812] px-6 py-3.5 rounded-lg text-sm font-semibold transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Llamar al {COMPANY.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
