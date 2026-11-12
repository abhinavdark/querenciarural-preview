import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  PROPERTIES, 
  getPropertyBySlug, 
  getRelatedProperties 
} from "@/data/properties";
import { COMPANY } from "@/data/company";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertyCard } from "@/components/property/PropertyCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { 
  MapPin, 
  Maximize2, 
  Bed, 
  Bath, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  ExternalLink,
  ChevronRight,
  FileCheck2,
  Landmark,
  Share2
} from "lucide-react";

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROPERTIES.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Propiedad no encontrada | Querencia Rural",
    };
  }

  return {
    title: `${property.commercialTitle || property.title} | Querencia Rural`,
    description: property.shortDescription,
    openGraph: {
      title: `${property.commercialTitle || property.title} - ${property.location}`,
      description: property.shortDescription,
      images: [{ url: property.mainImage, width: 1200, height: 630 }],
    },
  };
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const related = getRelatedProperties(property.id, property.category, 3);

  const whatsappMessage = `Hola, estoy interesado en la propiedad "${property.commercialTitle || property.title}" (${property.location}, Ref: ${property.id}). ¿Podrían facilitarme más detalles o concertar una visita?`;

  return (
    <div className="bg-[#FCFBF8] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Ruta de navegación" className="flex items-center gap-2 text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#165929] transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <Link href="/propiedades" className="hover:text-[#165929] transition-colors">
            Propiedades
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="text-gray-900 font-medium truncate max-w-xs">
            {property.commercialTitle || property.title}
          </span>
        </nav>

        {/* Title & Price Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-gray-200">
          <div className="space-y-2.5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#165929] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded">
                {property.category}
              </span>
              <span className="bg-amber-100 text-amber-900 text-[11px] font-semibold px-2.5 py-1 rounded">
                Ref. ID: {property.id}
              </span>
              {property.yearBuilt && (
                <span className="text-xs text-gray-500 font-medium">
                  Construcción: {property.yearBuilt}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#1F2937] leading-tight">
              {property.commercialTitle || property.title}
            </h1>

            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-[#165929] shrink-0" />
              <span>{property.location}</span>
              {property.distanceToCenter && (
                <span className="text-gray-400 hidden sm:inline">
                  · {property.distanceToCenter}
                </span>
              )}
            </div>
          </div>

          {/* Price & Quick Contact Actions */}
          <div className="lg:text-right space-y-2 shrink-0">
            <span className="text-xs text-gray-500 block uppercase tracking-wider font-semibold">
              Precio de Venta
            </span>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-[#165929]">
              {property.priceDisplay}
            </div>
            {property.previousPrice && (
              <span className="text-xs text-gray-400 line-through block">
                Precio anterior: {property.previousPrice}
              </span>
            )}
          </div>
        </div>

        {/* Responsive Gallery with Full Lightbox */}
        <PropertyGallery images={property.gallery} title={property.commercialTitle || property.title} />

        {/* Two-Column Layout: Details vs Inquiry Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6">
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Key Specs Matrix */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {property.builtArea && (
                <div className="p-3 bg-gray-50 rounded-xl">
                  <Maximize2 className="w-5 h-5 text-[#165929] mx-auto mb-1" />
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider block">Construidos</span>
                  <span className="font-serif text-base font-bold text-gray-900">{property.builtArea}</span>
                </div>
              )}

              {property.landArea && (
                <div className="p-3 bg-gray-50 rounded-xl">
                  <Landmark className="w-5 h-5 text-[#7B3812] mx-auto mb-1" />
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider block">Parcela</span>
                  <span className="font-serif text-base font-bold text-gray-900">{property.landArea}</span>
                </div>
              )}

              {property.bedrooms !== null && (
                <div className="p-3 bg-gray-50 rounded-xl">
                  <Bed className="w-5 h-5 text-gray-700 mx-auto mb-1" />
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider block">Dormitorios</span>
                  <span className="font-serif text-base font-bold text-gray-900">{property.bedrooms}</span>
                </div>
              )}

              {property.bathrooms !== null && (
                <div className="p-3 bg-gray-50 rounded-xl">
                  <Bath className="w-5 h-5 text-gray-700 mx-auto mb-1" />
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider block">Baños</span>
                  <span className="font-serif text-base font-bold text-gray-900">{property.bathrooms}</span>
                </div>
              )}
            </div>

            {/* Highlights List */}
            {property.highlights && property.highlights.length > 0 && (
              <div className="bg-[#FFF8EB] border border-[#ebd7b5] p-6 sm:p-8 rounded-2xl space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#7B3812] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#165929]" />
                  <span>Características Singulares y Valores Patrimoniales</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-800">
                  {property.highlights.map((hl) => (
                    <li key={hl} className="flex items-start gap-2.5">
                      <FileCheck2 className="w-4 h-4 text-[#165929] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Full Verified Description */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-gray-900">
                Memoria Descriptiva
              </h2>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-light">
                {property.fullDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {property.condition && (
                <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-600">
                  <span className="font-bold text-gray-900">Estado de conservación:</span>
                  <span>{property.condition}</span>
                </div>
              )}
            </div>

            {/* Legal Security Guarantee Badge */}
            <div className="bg-emerald-50/70 border border-emerald-200 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#165929] shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-950">
                  <strong className="block font-bold text-sm text-emerald-900 mb-0.5">
                    Garantía Jurídica y Registral Querencia Rural
                  </strong>
                  Esta propiedad ha sido verificada documentalmente en Catastro y Registro de la Propiedad. Asesoramos en deslindes, licencias, segregaciones y transmisión con total transparencia notarial.
                </div>
              </div>
              <a
                href={COMPANY.whatsappUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Pedir Documentación</span>
              </a>
            </div>

            {/* Source Attribution */}
            <div className="text-xs text-gray-500 flex items-center gap-2 pt-2">
              <span>Referencia oficial:</span>
              <a
                href={property.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#165929] hover:underline inline-flex items-center gap-1 font-medium"
              >
                <span>Ficha en Querencia Rural original</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Sticky Sidebar Form (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Direct Inquiry Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-md space-y-5">
              <div>
                <span className="text-[11px] font-bold text-[#7B3812] uppercase tracking-wider block mb-1">
                  Atención Directa
                </span>
                <h3 className="font-serif text-xl font-bold text-gray-900">
                  Solicitar información o visita
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  Atendemos directamente a compradores e inversores privados.
                </p>
              </div>

              {/* Direct Buttons */}
              <div className="space-y-2.5">
                <a
                  href={COMPANY.whatsappUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold py-3 px-4 rounded-xl text-xs shadow-xs transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar por WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 border border-[#165929] hover:bg-emerald-50 text-[#165929] font-semibold py-2.5 px-4 rounded-xl text-xs transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Llamar al {COMPANY.phoneFormatted}</span>
                </a>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <ContactForm
                  defaultPropertyTitle={property.commercialTitle || property.title}
                  defaultPropertyId={property.id}
                  isCompact={true}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {related.length > 0 && (
          <div className="pt-16 border-t border-gray-200 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#7B3812] uppercase tracking-wider block">
                  Recomendaciones
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F2937] mt-1">
                  Otras Propiedades en {property.category}
                </h3>
              </div>
              <Link
                href="/propiedades"
                className="text-xs font-semibold text-[#165929] hover:underline"
              >
                Ver todo el catálogo →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
