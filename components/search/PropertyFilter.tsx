"use client";

import { useState, useId } from "react";
import { Search, RotateCcw, SlidersHorizontal, MapPin, Home, Euro } from "lucide-react";
import { PROPERTY_CATEGORIES, PROVINCES } from "@/data/properties";

export interface FilterState {
  category: string;
  province: string;
  minPrice: string;
  maxPrice: string;
  query: string;
}

interface PropertyFilterProps {
  onFilterChange: (filters: FilterState) => void;
  resultCount?: number;
  initialFilters?: Partial<FilterState>;
}

export function PropertyFilter({
  onFilterChange,
  resultCount,
  initialFilters,
}: PropertyFilterProps) {
  const categoryId = useId();
  const provinceId = useId();
  const minPriceId = useId();
  const maxPriceId = useId();
  const queryId = useId();

  const [category, setCategory] = useState(initialFilters?.category || "todos");
  const [province, setProvince] = useState(initialFilters?.province || "Todas");
  const [minPrice, setMinPrice] = useState(initialFilters?.minPrice || "");
  const [maxPrice, setMaxPrice] = useState(initialFilters?.maxPrice || "");
  const [query, setQuery] = useState(initialFilters?.query || "");

  const handleApply = (newCat?: string) => {
    onFilterChange({
      category: newCat !== undefined ? newCat : category,
      province,
      minPrice,
      maxPrice,
      query,
    });
  };

  const handleReset = () => {
    setCategory("todos");
    setProvince("Todas");
    setMinPrice("");
    setMaxPrice("");
    setQuery("");
    onFilterChange({
      category: "todos",
      province: "Todas",
      minPrice: "",
      maxPrice: "",
      query: "",
    });
  };

  const hasActiveFilters =
    category !== "todos" ||
    province !== "Todas" ||
    minPrice !== "" ||
    maxPrice !== "" ||
    query !== "";

  return (
    <div className="bg-white rounded-xl shadow-md border border-[#E5E7EB] p-5 sm:p-7 -mt-8 sm:-mt-12 relative z-20 max-w-7xl mx-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleApply();
        }}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Text Search */}
          <div className="lg:col-span-1">
            <label
              htmlFor="filter-search-input"
              className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5"
            >
              Palabra clave
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="filter-search-input"
                name="query"
                type="text"
                aria-label="Buscar propiedades por palabra clave"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ej. Pazo, Ribeira Sacra..."
                className="w-full pl-9 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-[#165929] focus:ring-1 focus:ring-[#165929] transition-all"
              />
            </div>
          </div>

          {/* Property Type / Category */}
          <div className="lg:col-span-1">
            <label
              htmlFor="filter-category-select"
              className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5"
            >
              Tipo de propiedad
            </label>
            <div className="relative">
              <Home className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <select
                id="filter-category-select"
                name="category"
                aria-label="Filtrar por tipo de propiedad"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-[#165929] focus:ring-1 focus:ring-[#165929] transition-all appearance-none text-[#1F2937]"
              >
                {PROPERTY_CATEGORIES.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Location / Province */}
          <div className="lg:col-span-1">
            <label
              htmlFor="filter-province-select"
              className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5"
            >
              Provincia
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <select
                id="filter-province-select"
                name="province"
                aria-label="Filtrar por provincia de Galicia"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-[#165929] focus:ring-1 focus:ring-[#165929] transition-all appearance-none text-[#1F2937]"
              >
                {PROVINCES.map((prov) => (
                  <option key={prov} value={prov}>
                    {prov === "Todas" ? "Toda Galicia" : prov}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div className="lg:col-span-1">
            <label
              htmlFor="filter-price-select"
              className="block text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-1.5"
            >
              Presupuesto máx.
            </label>
            <div className="relative">
              <Euro className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <select
                id="filter-price-select"
                name="maxPrice"
                aria-label="Filtrar por presupuesto máximo"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-[#165929] focus:ring-1 focus:ring-[#165929] transition-all appearance-none text-[#1F2937]"
              >
                <option value="">Cualquier precio</option>
                <option value="100000">Hasta 100.000 €</option>
                <option value="300000">Hasta 300.000 €</option>
                <option value="500000">Hasta 500.000 €</option>
                <option value="1000000">Hasta 1.000.000 €</option>
                <option value="2500000">Hasta 2.500.000 €</option>
              </select>
            </div>
          </div>

          {/* Action Button */}
          <div className="lg:col-span-1 flex items-end gap-2">
            <button
              type="submit"
              className="w-full bg-[#165929] hover:bg-[#0e3f1c] text-white font-semibold py-2.5 px-4 rounded-lg text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Buscar</span>
            </button>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleReset}
                title="Limpiar filtros"
                className="p-2.5 text-gray-500 hover:text-red-700 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors"
                aria-label="Restablecer filtros"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills & Results Counter */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-gray-500 mr-1 font-medium hidden sm:inline">
              Filtro rápido:
            </span>
            {PROPERTY_CATEGORIES.map((cat) => {
              const isActive = category === cat.slug;
              return (
                <button
                  type="button"
                  key={cat.slug}
                  onClick={() => {
                    const nextCat = isActive ? "todos" : cat.slug;
                    setCategory(nextCat);
                    handleApply(nextCat);
                  }}
                  className={`text-xs min-h-[38px] px-3.5 py-1.5 rounded-full transition-all cursor-pointer inline-flex items-center justify-center ${
                    isActive
                      ? "bg-[#165929] text-white font-semibold shadow-xs"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {resultCount !== undefined && (
            <div className="text-xs font-semibold text-[#165929] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
              {resultCount} {resultCount === 1 ? "propiedad encontrada" : "propiedades encontradas"}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
