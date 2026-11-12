import { Metadata } from "next";
import { PROPERTIES, PROPERTY_CATEGORIES } from "@/data/properties";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { Sparkles, MapPin, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Catálogo de Propiedades Rústicas y Pazos en Galicia | Querencia Rural",
  description:
    "Explore nuestra cuidada selección de pazos históricos, aldeas completas, casas de cantería y viñedos en venta en Galicia con precio y características verificadas.",
};

interface PropiedadesPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PropiedadesPage({ searchParams }: PropiedadesPageProps) {
  const resolvedParams = await searchParams;
  const initialCategory = typeof resolvedParams.categoria === "string" ? resolvedParams.categoria : "todos";
  const initialProvince = typeof resolvedParams.provincia === "string" ? resolvedParams.provincia : "Todas";

  return (
    <div className="py-12 bg-[#FCFBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7B3812] uppercase tracking-widest bg-[#FFF8EB] px-3.5 py-1.5 rounded-full border border-[#ebd7b5] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#165929]" />
            <span>Catálogo Completo y Verificado</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1F2937] tracking-tight">
            Propiedades Singulares en Galicia
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Pazos de los siglos XV al XVIII, aldeas completas con vistas al río Miño, molinos tradicionales y explotaciones vinícolas en Ribeira Sacra.
          </p>
        </div>

        {/* Property Grid with Interactive Filters */}
        <PropertyGrid
          initialProperties={PROPERTIES}
          initialFilters={{
            category: initialCategory,
            province: initialProvince,
          }}
        />
      </div>
    </div>
  );
}
