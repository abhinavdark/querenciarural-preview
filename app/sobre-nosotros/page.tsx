import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Award, 
  ShieldCheck, 
  Compass, 
  FileText, 
  Coins, 
  Hammer, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ExternalLink,
  ArrowRight
} from "lucide-react";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Sobre Nosotros | 15 Años de Especialización Inmobiliaria en Galicia | Querencia Rural",
  description:
    "Conozca la historia, misión y equipo de Querencia Rural. Más de 15 años acompañando a compradores en la adquisición y rehabilitación de pazos y propiedades rústicas en Galicia.",
};

export default function SobreNosotrosPage() {
  return (
    <div className="bg-[#FCFBF8] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Story Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-[#FFF8EB] border border-[#ebd7b5] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#7B3812] uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#165929]" />
              <span>NUESTRA TRAYECTORIA PATRIMONIAL</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1F2937] leading-tight">
              15 Años de Pasión por el Mundo Rural Gallego
            </h1>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
              <p>
                En <strong>Querencia Rural</strong>, nuestra historia se remonta a una experiencia consolidada de <strong>más de 15 años dedicados en exclusiva</strong> a la compra y venta de propiedades rurales, pazos señoriales y fincas patrimoniales en Galicia.
              </p>
              <p>
                A lo largo de estos años, hemos acumulado un profundo conocimiento del territorio y del sector, permitiéndonos comprender y manejar con destreza todos los aspectos del proceso de compraventa: desde la búsqueda inicial y el estudio histórico de la propiedad hasta la formalización ante notario, asegurando siempre las <strong>máximas garantías jurídicas y registrales</strong>.
              </p>
              <p>
                Nuestra misión es trasladar este valioso conocimiento al comprador nacional e internacional, aportando un valor añadido en cada operación mediante una atención cercana, discreta y transparente.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-gray-600">
              <div className="flex items-center gap-2 font-semibold text-gray-900">
                <CheckCircle2 className="w-4 h-4 text-[#165929]" />
                <span>Titular: {COMPANY.legalOwner}</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-gray-900">
                <CheckCircle2 className="w-4 h-4 text-[#165929]" />
                <span>CIF: {COMPANY.cif}</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-gray-900">
                <CheckCircle2 className="w-4 h-4 text-[#165929]" />
                <span>Sede: Bertamiráns, Ames (A Coruña)</span>
              </div>
            </div>
          </div>

          {/* Visual Editorial Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <Image
                src="https://querenciarural.com/wp-content/uploads/2025/11/pazo-de-andeade-15.jpg"
                alt="Pazo gallego gestionado por Querencia Rural"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                <p className="font-serif text-base font-bold">Patrimonio Histórico de Galicia</p>
                <p className="text-white/80 mt-1">Conectamos compradores con propiedades singulares con alma y arraigo.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Services Detailed Breakdown */}
        <div className="space-y-8 pt-8 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7B3812]">
              SERVICIOS INTEGRALES
            </span>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mt-1">
              Cómo Acompañamos a Nuestros Clientes
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Facilitamos cada paso para que la experiencia de adquirir y restaurar una propiedad en Galicia sea fluida y segura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY.services.map((svc) => (
              <div
                key={svc.title}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:border-[#165929] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#165929] flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {svc.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-[#165929] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Máxima solvencia técnica</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media & Press Recognition Section */}
        <div className="bg-[#FFF8EB] border border-[#ebd7b5] rounded-2xl p-8 sm:p-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#7B3812] uppercase tracking-wider block">
                Presencia Mediática
              </span>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mt-1">
                Querencia Rural en los Medios
              </h3>
            </div>
            <p className="text-xs text-gray-600 max-w-sm">
              Artículos y entrevistas en los principales medios de comunicación sobre el auge de los pazos y propiedades rústicas en Galicia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPANY.pressMentions.map((pm) => (
              <a
                key={pm.media}
                href={pm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl border border-[#ebd7b5] hover:border-[#165929] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#7B3812] font-bold mb-2">
                    <span>{pm.media}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#165929] transition-colors" />
                  </div>
                  <p className="text-xs sm:text-sm font-serif font-bold text-gray-900 group-hover:text-[#165929] transition-colors leading-snug">
                    {pm.headline}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-400">
                  {pm.date}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Final CTA Strip */}
        <div className="bg-[#165929] text-white rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold max-w-2xl mx-auto">
            ¿Deseas iniciar la búsqueda de tu propiedad en Galicia?
          </h2>
          <p className="text-sm text-emerald-100 max-w-xl mx-auto font-light leading-relaxed">
            Nuestro equipo analizará tus criterios de ubicación, presupuesto e intenciones de uso para presentarte las mejores alternativas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contacto"
              className="w-full sm:w-auto bg-[#FFF8EB] hover:bg-white text-[#165929] px-7 py-3 rounded-xl font-semibold text-sm transition-all shadow-sm"
            >
              Contactar con Marcos Fernández
            </Link>
            <Link
              href="/propiedades"
              className="w-full sm:w-auto border border-white/60 hover:border-white text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all"
            >
              Explorar propiedades disponibles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
