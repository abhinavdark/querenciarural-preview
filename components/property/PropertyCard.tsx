import Link from "next/link";
import Image from "next/image";
import { MapPin, Maximize2, Bed, Bath, ArrowUpRight, Sparkles } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden border border-[#E5E7EB] hover:border-[#165929]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Property Image Container */}
      <Link
        href={`/propiedades/${property.slug}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-gray-100"
      >
        <Image
          src={property.mainImage}
          alt={property.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-60 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-[#165929]/90 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded shadow-xs">
            {property.category}
          </span>
        </div>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between z-10">
          <div>
            {property.previousPrice && (
              <span className="text-white/70 line-through text-xs font-medium block">
                {property.previousPrice}
              </span>
            )}
            <span className="text-white font-serif font-bold text-xl drop-shadow-sm">
              {property.priceDisplay}
            </span>
          </div>

          <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#165929] group-hover:text-white transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </Link>

      {/* Property Details */}
      <div className="p-5 flex flex-col flex-1">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
          <MapPin className="w-3.5 h-3.5 text-[#165929] shrink-0" />
          <span className="truncate font-medium">{property.location}</span>
        </div>

        {/* Commercial Title */}
        <h3 className="font-serif text-lg font-bold text-[#1F2937] group-hover:text-[#165929] transition-colors line-clamp-2 mb-2 leading-snug">
          <Link href={`/propiedades/${property.slug}`}>
            {property.commercialTitle || property.title}
          </Link>
        </h3>

        {/* Short Editorial Summary */}
        <p className="text-xs text-gray-600 line-clamp-2 mb-4 leading-relaxed flex-1">
          {property.shortDescription}
        </p>

        {/* Specs Badges */}
        <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs text-gray-600">
          {property.builtArea && (
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span className="truncate">{property.builtArea}</span>
            </div>
          )}

          {property.landArea && (
            <div className="flex items-center gap-1.5 col-span-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="truncate text-[11px]">{property.landArea}</span>
            </div>
          )}

          {property.bedrooms && (
            <div className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span>{property.bedrooms} dorms.</span>
            </div>
          )}

          {property.bathrooms && (
            <div className="flex items-center gap-1.5">
              <Bath className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span>{property.bathrooms} baños</span>
            </div>
          )}
        </div>

        {/* Action Link */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[#7B3812]">
            Ver ficha y fotografías
          </span>
          <span className="text-[#165929] text-xs font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Explorar →
          </span>
        </div>
      </div>
    </article>
  );
}
