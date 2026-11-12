import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, ShieldCheck, MapPin, Award } from "lucide-react";
import { COMPANY } from "@/data/company";

export function Hero() {
  return (
    <section className="relative bg-[#165929] text-white overflow-hidden">
      {/* Background Hero Image with refined gradient treatment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-pazo.jpg"
          alt="Pazo señorial gallego en Querencia Rural"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Editorial gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3419]/95 via-[#0d3419]/80 to-[#0d3419]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d3419] via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
        <div className="max-w-3xl">
          {/* Authentic Heritage Tag */}
          <div className="inline-flex items-center gap-2 bg-[#FFF8EB]/15 backdrop-blur-md border border-[#FFF8EB]/30 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider text-amber-200 mb-6">
            <Award className="w-4 h-4 text-amber-300" />
            <span>AGENCIA PATRIMONIAL RURAL · GALICIA</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-6">
            {COMPANY.heroHeadline}
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-lg sm:text-xl text-emerald-50/90 font-light leading-relaxed max-w-2xl mb-10">
            {COMPANY.heroSubtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <Link
              href="/propiedades"
              className="inline-flex items-center justify-center gap-2.5 bg-[#FFF8EB] hover:bg-white text-[#165929] px-7 py-3.5 rounded font-semibold text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <span>Explorar propiedades</span>
              <ArrowRight className="w-4 h-4 text-[#165929]" />
            </Link>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/60 hover:border-white px-7 py-3.5 rounded font-semibold text-sm transition-all"
            >
              <span>Contactar con nosotros</span>
            </Link>
          </div>

          {/* Trust Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/15">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-white/10 text-amber-300 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-white leading-none">
                  15 Años
                </p>
                <p className="text-xs text-emerald-100/80 mt-1">
                  Experiencia consolidada en compraventa rural
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-white/10 text-amber-300 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-white leading-none">
                  Seguridad Jurídica
                </p>
                <p className="text-xs text-emerald-100/80 mt-1">
                  Revisión notarial, catastral y de herencias
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-white/10 text-amber-300 shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-white leading-none">
                  Galicia Integral
                </p>
                <p className="text-xs text-emerald-100/80 mt-1">
                  Pazos, Ribeira Sacra, viñedos y aldeas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
