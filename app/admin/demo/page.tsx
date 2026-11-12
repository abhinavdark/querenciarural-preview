import { Metadata } from "next";
import { CrmDashboard } from "@/components/crm/CrmDashboard";
import { ShieldCheck, Sparkles, Database, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "CRM Leads & Pipeline Demo | Querencia Rural Galicia",
  description:
    "Demostración interactiva del sistema CRM y gestión de compradores de alto valor patrimonial para Querencia Rural.",
};

export default function CrmDemoPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Dashboard Title Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-[#165929] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                Querencia Rural Back-Office
              </span>
              <span className="bg-amber-100 text-amber-900 text-[11px] font-semibold px-2.5 py-1 rounded border border-amber-200">
                Preview de Demostración
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mt-2">
              Panel de Gestión de Oportunidades y Compradores (CRM)
            </h1>
            <p className="text-xs text-gray-600 mt-1">
              Visualización y seguimiento del ciclo de vida de los interesados en pazos, aldeas y bodegas en Galicia.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-xs font-bold text-gray-800 block">Marcos O. Fernández</span>
              <span className="text-[11px] text-gray-500">Administrador / Asesor Senior</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#165929] text-white flex items-center justify-center font-bold text-sm">
              MF
            </div>
          </div>
        </div>

        {/* CRM Dashboard Client Component */}
        <CrmDashboard />
      </div>
    </div>
  );
}
