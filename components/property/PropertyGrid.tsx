"use client";

import { useState, useMemo } from "react";
import { Property } from "@/data/properties";
import { PropertyCard } from "./PropertyCard";
import { PropertyFilter, FilterState } from "@/components/search/PropertyFilter";
import { SearchX, RotateCcw } from "lucide-react";

interface PropertyGridProps {
  initialProperties: Property[];
  showFilter?: boolean;
  limit?: number;
  initialFilters?: Partial<FilterState>;
}

export function PropertyGrid({
  initialProperties,
  showFilter = true,
  limit,
  initialFilters,
}: PropertyGridProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: initialFilters?.category || "todos",
    province: initialFilters?.province || "Todas",
    minPrice: initialFilters?.minPrice || "",
    maxPrice: initialFilters?.maxPrice || "",
    query: initialFilters?.query || "",
  });

  const filtered = useMemo(() => {
    return initialProperties.filter((p) => {
      // Category filter
      if (filters.category !== "todos") {
        const matchesCategory =
          p.category.toLowerCase().includes(filters.category.replace(/-/g, " ")) ||
          p.allCategories.some((cat) =>
            cat.toLowerCase().includes(filters.category.replace(/-/g, " "))
          );
        if (!matchesCategory) return false;
      }

      // Province filter
      if (filters.province !== "Todas") {
        if (!p.province.toLowerCase().includes(filters.province.toLowerCase())) {
          return false;
        }
      }

      // Price filter
      if (filters.minPrice) {
        const min = parseInt(filters.minPrice, 10);
        if (p.price !== null && p.price < min) return false;
      }
      if (filters.maxPrice) {
        const max = parseInt(filters.maxPrice, 10);
        if (p.price !== null && p.price > max) return false;
      }

      // Query text search
      if (filters.query.trim()) {
        const q = filters.query.toLowerCase().trim();
        const haystack = `${p.title} ${p.commercialTitle} ${p.location} ${p.category} ${p.shortDescription} ${p.highlights.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      return true;
    });
  }, [initialProperties, filters]);

  const displayedProperties = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="space-y-8">
      {showFilter && (
        <PropertyFilter
          onFilterChange={setFilters}
          resultCount={filtered.length}
          initialFilters={filters}
        />
      )}

      {displayedProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProperties.map((prop, index) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              priority={index < 3}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl p-10 text-center border border-gray-200 max-w-lg mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-amber-50 text-[#7B3812] flex items-center justify-center mx-auto">
            <SearchX className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-bold text-gray-800">
            No se encontraron propiedades con estos filtros
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Intenta ampliar tu rango de búsqueda, seleccionar otra categoría o resetear los filtros para explorar todo nuestro catálogo verificado.
          </p>
          <button
            type="button"
            onClick={() =>
              setFilters({
                category: "todos",
                province: "Todas",
                minPrice: "",
                maxPrice: "",
                query: "",
              })
            }
            className="inline-flex items-center gap-2 bg-[#165929] hover:bg-[#0e3f1c] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Restablecer todos los filtros
          </button>
        </div>
      )}
    </div>
  );
}
