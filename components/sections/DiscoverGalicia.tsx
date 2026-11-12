import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mountain, SunMedium, Sparkles, Compass } from "lucide-react";

export function DiscoverGalicia() {
  return (
    <section className="py-24 bg-[#165929] text-white relative overflow-hidden">
      {/* Decorative subtle texture / glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7B3812]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            EL VALOR DEL TERRITORIO
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2 mb-4 leading-tight">
            Descubrir Galicia: Patrimonio, Silencio y Calidad de Vida
          </h2>
          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-light">
            Galicia representa uno de los últimos refugios auténticos de Europa. Un paisaje milenario de cantería noble, ríos transparentes, robledales centenarios y viñedos en bancales que ofrece una forma de vida conectada con la belleza y la serenidad.
          </p>
        </div>

        {/* 3 Editorial Pillars with authentic imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1: Arquitectura Pétrea y Pazos */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs flex flex-col justify-between hover:bg-white/10 transition-colors">
            <div>
              <div className="relative h-56 rounded-xl overflow-hidden mb-5">
                <Image
                  src="https://querenciarural.com/wp-content/uploads/2025/11/pazo-de-andeade-3.jpg"
                  alt="Arquitectura en piedra de Galicia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#165929]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                  Piedra & Nobleza
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Arquitectura de Granito y Pazos Históricos
              </h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                El granito gallego labrado a mano ha resistido siglos de historia. Solainas con vistas al valle, capillas privadas consagradas, escudos nobiliarios esculpidos e imponentes hórreos que convierten cada casa en una obra de arte irrepetible.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-amber-200 flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Patrimonio arquitectónico protegido</span>
            </div>
          </div>

          {/* Pillar 2: Ribeira Sacra y Viticultura Heroica */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs flex flex-col justify-between hover:bg-white/10 transition-colors">
            <div>
              <div className="relative h-56 rounded-xl overflow-hidden mb-5">
                <Image
                  src="https://querenciarural.com/wp-content/uploads/2026/10/Captura-de-pantalla_28-10-2026_17146_.jpeg"
                  alt="Cañón del río Miño en Ribeira Sacra"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#7B3812]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                  Ribeira Sacra
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Cañones Fluviales y Bancales de Viñedo
              </h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                La Ribeira Sacra es uno de los paisajes culturales más sobrecogedores del continente. Sus laderas verticales sobre los ríos Miño y Sil, pobladas de viñedos de uva Mencía y monasterios románicos, ofrecen un clima privilegiado y serenidad absoluta.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-amber-200 flex items-center gap-1.5 font-medium">
              <Mountain className="w-3.5 h-3.5" />
              <span>Candidatura UNESCO Patrimonio Mundial</span>
            </div>
          </div>

          {/* Pillar 3: Aldeas Completas y Nuevos Proyectos de Vida */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs flex flex-col justify-between hover:bg-white/10 transition-colors">
            <div>
              <div className="relative h-56 rounded-xl overflow-hidden mb-5">
                <Image
                  src="https://querenciarural.com/wp-content/uploads/2026/10/Captura-de-pantalla_28-10-2026_17256_.jpeg"
                  alt="Aldea rural gallega a rehabilitar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#165929]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                  Aldeas & Retiros
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Aldeas Singulares y Proyectos de Futuro
              </h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                La posibilidad de adquirir aldeas o grupos de viviendas completas permite concebir proyectos turísticos, gastronómicos o comunidades residenciales sostenibles con total autonomía, agua de manantial propia y entorno natural privado.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-amber-200 flex items-center gap-1.5 font-medium">
              <Compass className="w-3.5 h-3.5" />
              <span>Privacidad y blindaje territorial</span>
            </div>
          </div>
        </div>

        {/* Galicia Fast Facts Strip */}
        <div className="bg-[#0e3f1c] border border-white/15 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
              <SunMedium className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-white">
                ¿Interesado en una ubicación o comarca específica?
              </h4>
              <p className="text-xs text-emerald-200">
                A Coruña · Lugo · Ourense · Pontevedra · Rías Baixas · Ribeira Sacra · Camino de Santiago
              </p>
            </div>
          </div>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-[#FFF8EB] hover:bg-white text-[#165929] px-6 py-2.5 rounded-lg text-xs font-bold transition-all shadow-sm shrink-0"
          >
            <span>Consultar disponibilidad comarcal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
