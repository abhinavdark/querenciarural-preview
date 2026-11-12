"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare, ChevronDown } from "lucide-react";
import { COMPANY } from "@/data/company";
import { TopBar } from "./TopBar";

const NAV_LINKS = [
  { label: "Propiedades", href: "/propiedades" },
  { label: "Pazos", href: "/propiedades?categoria=pazos-y-casas-historicas" },
  { label: "Casas Rurales", href: "/propiedades?categoria=casas-rurales" },
  { label: "Aldeas", href: "/propiedades?categoria=aldeas-y-grupos-de-viviendas" },
  { label: "Viñedos", href: "/propiedades?categoria=vinedos" },
  { label: "Molinos", href: "/propiedades?categoria=molinos" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <TopBar />

      <nav
        aria-label="Navegación principal"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFF8EB]/95 backdrop-blur-md shadow-sm border-b border-[#ebd7b5]/80 py-3"
            : "bg-[#FFF8EB] border-b border-[#7B3812]/20 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#165929] rounded"
            >
              <div className="relative w-44 h-12 sm:w-56 sm:h-14">
                <Image
                  src="/images/querencia-logo.svg"
                  alt="Querencia Rural"
                  fill
                  priority
                  className="object-contain object-left group-hover:opacity-90 transition-opacity"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                      isActive
                        ? "text-[#165929]"
                        : "text-[#2A332C] hover:text-[#165929]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#165929] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={COMPANY.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#165929] hover:bg-[#0e3f1c] text-white text-xs font-semibold px-4 py-2.5 rounded shadow-sm hover:shadow transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contactar</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${COMPANY.phone}`}
                className="p-2 text-[#165929] hover:bg-[#ebd7b5]/50 rounded-full"
                aria-label="Llamar a Querencia Rural"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#165929] hover:bg-[#ebd7b5]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#165929]"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-[#7B3812]/15 bg-[#FFF8EB] animate-fadeIn">
            <div className="px-4 pt-3 pb-6 space-y-1">
              <div className="py-2 text-xs font-bold uppercase tracking-wider text-[#7B3812] px-3">
                Colección de Propiedades
              </div>
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`block px-3 py-2.5 text-base font-semibold rounded-md transition-colors ${
                      isActive
                        ? "bg-[#165929] text-white"
                        : "text-[#2A332C] hover:bg-[#ebd7b5]/40 hover:text-[#165929]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-[#7B3812]/15 mt-3 space-y-2">
                <Link
                  href="/admin/demo"
                  className="block px-3 py-2 text-sm font-medium text-amber-900 bg-amber-50 rounded-md border border-amber-200"
                >
                  🛡️ Panel Asesores / CRM Demo
                </Link>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={COMPANY.whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center inline-flex items-center justify-center gap-2 bg-[#165929] text-white font-semibold py-2.5 rounded text-sm shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Consultar por WhatsApp
                  </a>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="w-full text-center inline-flex items-center justify-center gap-2 border border-[#165929] text-[#165929] font-semibold py-2.5 rounded text-sm hover:bg-[#165929]/5"
                  >
                    <Phone className="w-4 h-4" />
                    Llamar al {COMPANY.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
