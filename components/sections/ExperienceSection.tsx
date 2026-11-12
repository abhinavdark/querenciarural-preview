import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Compass, 
  FileText, 
  Coins, 
  Hammer, 
  KeyRound, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";
import { COMPANY } from "@/data/company";

const ICONS_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#165929]" />,
  Compass: <Compass className="w-5 h-5 text-[#165929]" />,
  FileText: <FileText className="w-5 h-5 text-[#165929]" />,
  Coins: <Coins className="w-5 h-5 text-[#165929]" />,
  Hammer: <Hammer className="w-5 h-5 text-[#165929]" />,
  KeyRound: <KeyRound className="w-5 h-5 text-[#165929]" />,
};

export function ExperienceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-[#FFF8EB] border border-[#ebd7b5] px-3 py-1 rounded-full text-xs font-bold text-[#7B3812] uppercase tracking-wider mb-4">
              <span>+15 AÑOS DE TRAYECTORIA CONSOLIDADA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F2937] leading-tight mb-5">
              Por qué elegir a Querencia Rural para adquirir patrimonio en Galicia
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              La compra de una propiedad rural en Galicia —ya sea un pazo con escudos nobiliarios, una aldea a rehabilitar o un viñedo en pendiente— requiere algo más que una transacción inmobiliaria convencional: exige un conocimiento minucioso de la legislación rústica, catastro, patrimonio histórico y arquitectura de cantería.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#FBF9F5] p-6 sm:p-8 rounded-2xl border border-[#ebd7b5]/60 relative">
            <span className="text-xs font-bold text-[#165929] uppercase tracking-widest block mb-2">
              Nuestra Misión
            </span>
            <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed font-serif">
              &quot;En Querencia Rural, nuestra experiencia, compromiso y dedicación son nuestra mejor carta de presentación. Nos apasiona el mundo rural y trabajamos para que cada cliente encuentre su lugar perfecto en él.&quot;
            </p>
            <div className="mt-4 pt-4 border-t border-gray-200/80 flex items-center justify-between text-xs text-gray-500">
              <span className="font-semibold text-gray-800">Marcos O. Fernández Vergara</span>
              <span>Dirección General · Ames, Galicia</span>
            </div>
          </div>
        </div>

        {/* 6 Services Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {COMPANY.services.map((svc) => (
            <div
              key={svc.title}
              className="p-6 rounded-xl border border-gray-200/90 bg-[#FCFBF8] hover:border-[#165929]/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                  {ICONS_MAP[svc.icon] || <CheckCircle2 className="w-5 h-5 text-[#165929]" />}
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                  {svc.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {svc.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-semibold text-[#165929] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Servicio garantizado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Press Mentions & Media Coverage */}
        <div className="bg-[#FFF8EB] border border-[#ebd7b5] rounded-2xl p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#7B3812]">
                Cobertura en Medios de Comunicación
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                Querencia Rural en la Prensa y Televisión Gallega
              </h3>
            </div>
            <span className="text-xs text-gray-500">
              Reportajes verificados sobre el mercado rural
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {COMPANY.pressMentions.map((pm) => (
              <a
                key={pm.media}
                href={pm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-5 rounded-xl border border-[#ebd7b5]/80 hover:border-[#165929] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#7B3812] font-bold mb-2">
                    <span>{pm.media}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#165929] transition-colors" />
                  </div>
                  <p className="text-xs text-gray-800 font-medium leading-snug group-hover:text-[#165929] transition-colors line-clamp-3">
                    {pm.headline}
                  </p>
                </div>
                <div className="mt-4 pt-2 text-[11px] text-gray-400">
                  {pm.date}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
