import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CategoryItem {
  title: string;
  slug: string;
  image: string;
  description: string;
  count: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    title: "Pazos y Casas Históricas",
    slug: "pazos-y-casas-historicas",
    image: "https://querenciarural.com/wp-content/uploads/2025/11/pazo-de-andeade-15.jpg",
    description: "Palacetes señoriales, linajes nobiliarios, capillas privadas y fortalezas de los siglos XV al XVIII.",
    count: "Selección exclusiva",
  },
  {
    title: "Casas Rurales",
    slug: "casas-rurales",
    image: "https://querenciarural.com/wp-content/uploads/2026/10/IMG-20250725-WA0020.jpg",
    description: "Casonas solariegas de cantería, fincas con encanto, jardines autóctonos y retiros con alma.",
    count: "Catálogo activo",
  },
  {
    title: "Aldeas y Grupos de Viviendas",
    slug: "aldeas-y-grupos-de-viviendas",
    image: "https://querenciarural.com/wp-content/uploads/2026/10/Captura-de-pantalla_28-10-2026_17256_.jpeg",
    description: "Núcleos tradicionales completos de piedra sin intercalar, ideales para proyectos turísticos y coliving.",
    count: "Oportunidades únicas",
  },
  {
    title: "Viñedos y Bodegas",
    slug: "vinedos",
    image: "https://querenciarural.com/wp-content/uploads/2025/07/aiease_1751818356731-1.jpg",
    description: "Bodegas en bancales heroicos de la Ribeira Sacra, viñedos de Mencía y explotaciones enoturísticas.",
    count: "D.O. Ribeira Sacra",
  },
  {
    title: "Molinos Tradicionales",
    slug: "molinos",
    image: "https://querenciarural.com/wp-content/uploads/2025/01/Molino-neda-fachada-16.jpg",
    description: "Arquitectura hidráulica de piedra y pizarra al pie de cauces vivos con arboledas centenarias.",
    count: "Patrimonio fluvial",
  },
  {
    title: "Actividades Empresariales",
    slug: "actividades-empresariales",
    image: "https://querenciarural.com/wp-content/uploads/2026/10/WhatsApp-Image-2026-03-12-at-22.19.58-1.jpeg",
    description: "Fincas ecológicas certificadas CRAEGA, glampings y proyectos turísticos en rentabilidad.",
    count: "Negocios activos",
  },
];

export function CategoryShowcase() {
  return (
    <section className="py-20 bg-[#F4F1EA]/70 border-y border-[#ebd7b5]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7B3812]">
            Exploración por Tipología
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F2937] mt-2 mb-4">
            Categorías Singulares de Galicia
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Cada rincón de Galicia alberga tipologías arquitectónicas únicas. Descubre las categorías especializadas que conforman el catálogo de Querencia Rural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/propiedades?categoria=${cat.slug}`}
              className="group relative h-80 rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 block"
            >
              {/* Background Image */}
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300" />

              {/* Content Card */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  {cat.count}
                </span>

                <h3 className="font-serif text-2xl font-bold group-hover:text-amber-100 transition-colors mb-2">
                  {cat.title}
                </h3>

                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed mb-4 group-hover:text-white transition-colors">
                  {cat.description}
                </p>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 group-hover:text-amber-200 transition-colors">
                  <span>Ver propiedades</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
