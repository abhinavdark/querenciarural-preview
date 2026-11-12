import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";
import { COMPANY } from "@/data/company";
import { PROPERTY_CATEGORIES } from "@/data/properties";

export function Footer() {
  return (
    <footer className="bg-[#165929] text-white border-t border-emerald-950">
      {/* Upper Footer: Brand, Categories & Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-56 h-14">
                <Image
                  src="/images/querencia-logo-white.svg"
                  alt="Querencia Rural"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-light">
              Agencia inmobiliaria de referencia en Galicia especializada en pazos históricos, casas solariegas de cantería, aldeas tradicionales y viñedos de la Ribeira Sacra. Más de 15 años de compromiso y seguridad jurídica.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-3.5 py-2 rounded-lg text-xs font-semibold shadow-xs transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Directo</span>
              </a>

              <Link
                href="/admin/demo"
                className="inline-flex items-center gap-1.5 bg-emerald-900/60 hover:bg-emerald-900 text-amber-200 border border-amber-300/30 px-3 py-2 rounded-lg text-xs font-medium transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>CRM Preview</span>
              </Link>
            </div>
          </div>

          {/* Property Categories Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-amber-200 border-b border-emerald-800/80 pb-2">
              Colección Rural
            </h4>
            <ul className="space-y-1 text-xs text-emerald-100/80">
              {PROPERTY_CATEGORIES.filter((c) => c.slug !== "todos").map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/propiedades?categoria=${cat.slug}`}
                    className="hover:text-white hover:underline transition-colors flex items-center justify-between py-1.5 min-h-[32px]"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-emerald-300/60 font-mono">
                      {cat.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-amber-200 border-b border-emerald-800/80 pb-2">
              Empresa
            </h4>
            <ul className="space-y-1 text-xs text-emerald-100/80">
              <li>
                <Link href="/sobre-nosotros" className="hover:text-white hover:underline block py-1.5 min-h-[32px]">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/propiedades" className="hover:text-white hover:underline block py-1.5 min-h-[32px]">
                  Catálogo Completo
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white hover:underline block py-1.5 min-h-[32px]">
                  Contacto y Asesoramiento
                </Link>
              </li>
              <li>
                <Link href="/aviso-legal" className="hover:text-white hover:underline block py-1.5 min-h-[32px]">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidad" className="hover:text-white hover:underline block py-1.5 min-h-[32px]">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="hover:text-white hover:underline block py-1.5 min-h-[32px]">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/admin/demo" className="text-amber-300 hover:underline font-medium block py-1.5 min-h-[32px]">
                  Demostración CRM Leads
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Verified Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-amber-200 border-b border-emerald-800/80 pb-2">
              Atención al Cliente
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-100/90">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">
                    {COMPANY.phoneFormatted}
                  </span>
                  <span className="text-[11px] text-emerald-200">
                    Atención directa y WhatsApp
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span className="break-all">{COMPANY.email}</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <span className="block">{COMPANY.address}</span>
                  <span className="block text-emerald-200">
                    {COMPANY.postalCode} {COMPANY.town} ({COMPANY.province})
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-emerald-800/80 text-[11px] text-emerald-200/70">
              <p>Titular: {COMPANY.legalOwner}</p>
              <p>N.I.F.: {COMPANY.cif}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Sub-Footer */}
      <div className="bg-[#0e3f1c] border-t border-emerald-900 py-6 text-xs text-emerald-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. Todos los derechos reservados. Diseño y experiencia digital independiente.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px]">
            <Link href="/aviso-legal" className="hover:text-white hover:underline py-1.5 px-2 inline-block">
              Aviso Legal
            </Link>
            <Link href="/politica-de-privacidad" className="hover:text-white hover:underline py-1.5 px-2 inline-block">
              Privacidad
            </Link>
            <Link href="/politica-de-cookies" className="hover:text-white hover:underline py-1.5 px-2 inline-block">
              Cookies
            </Link>
            <Link href="/admin/demo" className="hover:text-white text-amber-300 hover:underline py-1.5 px-2 inline-block font-medium">
              CRM Demo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
