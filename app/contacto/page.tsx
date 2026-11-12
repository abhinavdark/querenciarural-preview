import { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY } from "@/data/company";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Atención Personalizada Querencia Rural Galicia",
  description:
    "Póngase en contacto con Querencia Rural para información sobre pazos, casas rústicas, aldeas y viñedos en Galicia. Teléfono: +34 621 042 607.",
};

export default function ContactoPage() {
  return (
    <div className="bg-[#FCFBF8] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-[#FFF8EB] border border-[#ebd7b5] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#7B3812] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#165929]" />
            <span>CANAL DIRECTO CON NUESTROS ASESORES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1F2937]">
            Contactar con Querencia Rural
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Escríbenos o llámanos, estaremos encantados de responder a todas tus dudas sin ningún tipo de compromiso.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs space-y-6">
              <h2 className="font-serif text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">
                Datos de Contacto Directo
              </h2>

              <div className="space-y-5 text-xs sm:text-sm">
                {/* Telephone */}
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-gray-50 hover:bg-emerald-50/50 hover:border-[#165929] border border-transparent transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#165929] flex items-center justify-center shrink-0 group-hover:bg-[#165929] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-gray-500 block">
                      Teléfono y Atención Inmediata
                    </span>
                    <span className="text-sm font-bold text-gray-900 group-hover:text-[#165929]">
                      {COMPANY.phoneFormatted}
                    </span>
                    <span className="text-xs text-gray-500 block mt-0.5">
                      Lunes a Viernes · 09:00 - 19:00 h
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-gray-50 hover:bg-emerald-50/50 hover:border-[#165929] border border-transparent transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#165929] flex items-center justify-center shrink-0 group-hover:bg-[#165929] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-gray-500 block">
                      Correo Electrónico
                    </span>
                    <span className="text-sm font-bold text-gray-900 group-hover:text-[#165929] break-all">
                      {COMPANY.email}
                    </span>
                    <span className="text-xs text-gray-500 block mt-0.5">
                      Respuesta en menos de 24 horas
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={COMPANY.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-emerald-50/60 hover:bg-emerald-100/60 border border-emerald-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-emerald-800 block">
                      WhatsApp Oficial
                    </span>
                    <span className="text-sm font-bold text-emerald-950">
                      Abrir conversación directa
                    </span>
                    <span className="text-xs text-emerald-700 block mt-0.5">
                      Envío de planos, fotos y ubicaciones
                    </span>
                  </div>
                </a>

                {/* Physical Location */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-gray-200 text-gray-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-gray-700">
                    <span className="text-[11px] uppercase font-bold text-gray-500 block">
                      Domicilio Social y Operativo
                    </span>
                    <p className="font-semibold text-gray-900 mt-0.5">
                      {COMPANY.address}
                    </p>
                    <p>{COMPANY.postalCode} {COMPANY.town} ({COMPANY.province})</p>
                  </div>
                </div>
              </div>

              {/* Legal Verification Box */}
              <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 space-y-1 bg-amber-50/40 p-4 rounded-xl border border-amber-100">
                <p className="font-semibold text-gray-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#165929]" />
                  <span>Identificación Legal de la Empresa</span>
                </p>
                <p>Titular comercial: {COMPANY.legalOwner}</p>
                <p>N.I.F. / CIF: {COMPANY.cif}</p>
                <p>Registro conforme a LSSICE y RGPD (UE 2016/679)</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div id="formulario" className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-6">
            <div>
              <span className="text-[11px] font-bold text-[#7B3812] uppercase tracking-wider block mb-1">
                Formulario de Consulta
              </span>
              <h2 className="font-serif text-2xl font-bold text-gray-900">
                Envíanos tu Mensaje
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Indícanos qué tipo de propiedad te interesa o el motivo de tu consulta. Te responderemos a la mayor brevedad.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
