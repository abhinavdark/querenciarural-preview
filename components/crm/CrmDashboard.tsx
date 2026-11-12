"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { 
  Users, 
  UserCheck, 
  Calendar, 
  TrendingUp, 
  Award, 
  Search, 
  Filter, 
  Plus, 
  ShieldAlert, 
  Database, 
  ExternalLink,
  MessageSquare,
  Phone,
  Mail,
  Edit3,
  Clock,
  ArrowRight,
  CheckCircle2,
  X,
  FileCode,
  Sparkles
} from "lucide-react";
import { 
  Lead, 
  LeadStatus, 
  LEAD_STAGES, 
  INITIAL_DEMO_LEADS, 
  SUPABASE_SQL_SCHEMA 
} from "@/data/crm";
import { PROPERTIES } from "@/data/properties";

export function CrmDashboard() {
  const [leads, setLeads] = useState<Lead[]>(INITIAL_DEMO_LEADS);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<"pipeline" | "table" | "schema">("pipeline");
  const [newNote, setNewNote] = useState("");
  const [copiedSchema, setCopiedSchema] = useState(false);

  // Load any submitted web leads from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("qr_demo_leads");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge avoiding duplicates
          const ids = new Set(INITIAL_DEMO_LEADS.map((l) => l.id));
          const fresh = parsed.filter((l: Lead) => !ids.has(l.id));
          setLeads([...fresh, ...INITIAL_DEMO_LEADS]);
        }
      }
    } catch {
      // fallback
    }
  }, []);

  // Calculate metrics
  const metrics = useMemo(() => {
    const total = leads.length;
    const newCount = leads.filter((l) => l.status === "new").length;
    const contacted = leads.filter((l) => l.status === "contacted").length;
    const qualified = leads.filter((l) => l.status === "qualified").length;
    const viewing = leads.filter((l) => l.status === "viewing_scheduled").length;
    const negotiation = leads.filter((l) => l.status === "negotiation").length;
    const won = leads.filter((l) => l.status === "won").length;
    const lost = leads.filter((l) => l.status === "lost").length;

    const totalPipelineValue = leads
      .filter((l) => l.status !== "lost")
      .reduce((acc, l) => acc + (l.budgetNum || 0), 0);

    return { total, newCount, contacted, qualified, viewing, negotiation, won, lost, totalPipelineValue };
  }, [leads]);

  // Filtered leads
  const filteredLeads = useMemo(() => {
    return leads.filter((l) => {
      if (statusFilter !== "all" && l.status !== statusFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const text = `${l.name} ${l.email} ${l.phone} ${l.propertyTitle} ${l.nationality}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });
  }, [leads, statusFilter, searchQuery]);

  // Handle status change
  const handleStatusChange = (leadId: string, newStatus: LeadStatus) => {
    setLeads((prev) =>
      prev.map((l) => {
        if (l.id === leadId) {
          const updated: Lead = {
            ...l,
            status: newStatus,
            lastContact: new Date().toISOString().split("T")[0],
            interactions: [
              {
                id: `int-${Date.now()}`,
                date: new Date().toISOString().split("T")[0],
                type: "note",
                author: "Asesor Demo",
                notes: `Estado actualizado a "${LEAD_STAGES.find((s) => s.id === newStatus)?.label}"`,
              },
              ...l.interactions,
            ],
          };
          if (selectedLead?.id === leadId) setSelectedLead(updated);
          return updated;
        }
        return l;
      })
    );
  };

  // Handle adding interaction note
  const handleAddNote = (leadId: string) => {
    if (!newNote.trim()) return;
    setLeads((prev) =>
      prev.map((l) => {
        if (l.id === leadId) {
          const updated: Lead = {
            ...l,
            lastContact: new Date().toISOString().split("T")[0],
            notes: [newNote, ...l.notes],
            interactions: [
              {
                id: `int-${Date.now()}`,
                date: new Date().toISOString().split("T")[0],
                type: "note",
                author: "Asesor Comercial",
                notes: newNote,
              },
              ...l.interactions,
            ],
          };
          if (selectedLead?.id === leadId) setSelectedLead(updated);
          return updated;
        }
        return l;
      })
    );
    setNewNote("");
  };

  const handleCopySchema = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCHEMA);
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Demo Notice Banner */}
      <div className="bg-amber-500/10 border-l-4 border-amber-600 p-4 sm:p-5 rounded-r-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-950">
            <span className="font-bold uppercase tracking-wider block text-amber-900 text-[11px] mb-0.5">
              Entorno de demostración interactivo
            </span>
            Este panel CRM ilustra la arquitectura de gestión de compradores de alto patrimonio para Querencia Rural. Los datos mostrados son de muestra y pueden interactuar libremente en el navegador.
          </div>
        </div>
        <button
          type="button"
          onClick={() => setActiveTab("schema")}
          className="shrink-0 inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
        >
          <Database className="w-3.5 h-3.5" />
          <span>Ver Esquema SQL Supabase</span>
        </button>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
        <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-gray-200 shadow-xs">
          <span className="text-[10px] uppercase font-bold text-gray-500 block">Total Leads</span>
          <span className="text-2xl font-serif font-bold text-gray-900">{metrics.total}</span>
        </div>
        <div className="bg-blue-50/60 p-3.5 sm:p-4 rounded-xl border border-blue-200 shadow-xs">
          <span className="text-[10px] uppercase font-bold text-blue-700 block">Nuevos</span>
          <span className="text-2xl font-serif font-bold text-blue-900">{metrics.newCount}</span>
        </div>
        <div className="bg-amber-50/60 p-3.5 sm:p-4 rounded-xl border border-amber-200 shadow-xs">
          <span className="text-[10px] uppercase font-bold text-amber-700 block">Contactados</span>
          <span className="text-2xl font-serif font-bold text-amber-900">{metrics.contacted}</span>
        </div>
        <div className="bg-emerald-50/60 p-3.5 sm:p-4 rounded-xl border border-emerald-200 shadow-xs">
          <span className="text-[10px] uppercase font-bold text-emerald-700 block">Cualificados</span>
          <span className="text-2xl font-serif font-bold text-emerald-900">{metrics.qualified}</span>
        </div>
        <div className="bg-purple-50/60 p-3.5 sm:p-4 rounded-xl border border-purple-200 shadow-xs">
          <span className="text-[10px] uppercase font-bold text-purple-700 block">Visitas</span>
          <span className="text-2xl font-serif font-bold text-purple-900">{metrics.viewing}</span>
        </div>
        <div className="bg-fuchsia-50/60 p-3.5 sm:p-4 rounded-xl border border-fuchsia-200 shadow-xs">
          <span className="text-[10px] uppercase font-bold text-fuchsia-700 block">Negociación</span>
          <span className="text-2xl font-serif font-bold text-fuchsia-900">{metrics.negotiation}</span>
        </div>
        <div className="bg-green-100 p-3.5 sm:p-4 rounded-xl border border-green-300 shadow-xs">
          <span className="text-[10px] uppercase font-bold text-green-800 block">Cerrados</span>
          <span className="text-2xl font-serif font-bold text-green-950">{metrics.won}</span>
        </div>
        <div className="bg-gray-100 p-3.5 sm:p-4 rounded-xl border border-gray-200 shadow-xs">
          <span className="text-[10px] uppercase font-bold text-gray-600 block">Descartados</span>
          <span className="text-2xl font-serif font-bold text-gray-700">{metrics.lost}</span>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("pipeline")}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === "pipeline"
                ? "bg-[#165929] text-white shadow-xs"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Tablero Pipeline Kanban
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("table")}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === "table"
                ? "bg-[#165929] text-white shadow-xs"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Listado Completo ({filteredLeads.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("schema")}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === "schema"
                ? "bg-[#165929] text-white shadow-xs"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Arquitectura & Supabase SQL
          </button>
        </div>

        {/* Search bar inside dashboard */}
        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por comprador o pazo..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#165929]"
            />
          </div>
        </div>
      </div>

      {/* TAB 1: PIPELINE KANBAN VIEW */}
      {activeTab === "pipeline" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 overflow-x-auto pb-4">
          {LEAD_STAGES.map((stage) => {
            const stageLeads = filteredLeads.filter((l) => l.status === stage.id);
            return (
              <div
                key={stage.id}
                className="bg-[#F8F9FA] rounded-xl p-3 border border-gray-200 flex flex-col min-h-[480px]"
              >
                {/* Column Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: stage.color }}
                    />
                    <h4 className="text-xs font-bold text-gray-800">{stage.label}</h4>
                  </div>
                  <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded-full border border-gray-200 text-gray-600">
                    {stageLeads.length}
                  </span>
                </div>

                {/* Cards List */}
                <div className="space-y-3 flex-1 overflow-y-auto">
                  {stageLeads.map((lead) => (
                    <div
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className="bg-white p-3.5 rounded-lg border border-gray-200 hover:border-[#165929] hover:shadow-md transition-all cursor-pointer space-y-2 group"
                    >
                      <div className="flex items-start justify-between gap-1">
                        <span className="text-xs font-bold text-gray-900 group-hover:text-[#165929] transition-colors leading-tight">
                          {lead.name}
                        </span>
                        <span className="text-[10px] font-mono text-gray-400">
                          {lead.nationality}
                        </span>
                      </div>

                      <p className="text-[11px] text-gray-600 line-clamp-1 font-serif">
                        {lead.propertyTitle}
                      </p>

                      <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10px]">
                        <span className="font-semibold text-gray-900">{lead.budget}</span>
                        <span className="text-gray-400">{lead.lastContact}</span>
                      </div>
                    </div>
                  ))}

                  {stageLeads.length === 0 && (
                    <div className="h-24 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-[11px] text-gray-400">
                      Sin oportunidades
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 2: DETAILED TABLE VIEW */}
      {activeTab === "table" && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-700">
              <thead className="bg-gray-50 border-b border-gray-200 text-[11px] font-bold uppercase text-gray-500 tracking-wider">
                <tr>
                  <th className="py-3 px-4">Comprador</th>
                  <th className="py-3 px-4">Propiedad de Interés</th>
                  <th className="py-3 px-4">Presupuesto</th>
                  <th className="py-3 px-4">Origen</th>
                  <th className="py-3 px-4">Estado</th>
                  <th className="py-3 px-4">Último Contacto</th>
                  <th className="py-3 px-4 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredLeads.map((lead) => {
                  const stage = LEAD_STAGES.find((s) => s.id === lead.status);
                  return (
                    <tr
                      key={lead.id}
                      className="hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => setSelectedLead(lead)}
                    >
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-gray-900">{lead.name}</div>
                        <div className="text-[11px] text-gray-500">{lead.email} · {lead.phone}</div>
                      </td>
                      <td className="py-3.5 px-4 font-serif text-gray-800 max-w-xs truncate">
                        {lead.propertyTitle}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-gray-900">
                        {lead.budget}
                      </td>
                      <td className="py-3.5 px-4 text-gray-500">
                        {lead.source}
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${stage?.badgeClass}`}
                        >
                          {stage?.label}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-gray-500 font-mono text-[11px]">
                        {lead.lastContact}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLead(lead);
                          }}
                          className="text-[#165929] hover:underline font-semibold text-xs"
                        >
                          Ver detalle
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: SUPABASE INTEGRATION REQUIREMENTS & SQL SCHEMA */}
      {activeTab === "schema" && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
            <div>
              <h3 className="font-serif text-xl font-bold text-gray-900">
                Esquema de Base de Datos PostgreSQL / Supabase
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Estructura lista para producción para almacenar propiedades, leads y el historial de interacciones con Row Level Security (RLS).
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopySchema}
              className="inline-flex items-center gap-2 bg-[#165929] hover:bg-[#0e3f1c] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
            >
              <FileCode className="w-4 h-4" />
              <span>{copiedSchema ? "¡Esquema Copiado!" : "Copiar SQL para Supabase"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-4 text-xs text-gray-700">
              <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[11px]">
                Requisitos de Conexión de Producción:
              </h4>
              <ul className="space-y-2 list-disc pl-4 text-gray-600">
                <li>Crear un proyecto en <strong>Supabase</strong> (Región eu-west Madrid o Frankfurt).</li>
                <li>Ejecutar este script en el <strong>SQL Editor</strong> de Supabase.</li>
                <li>Configurar las variables de entorno en el hosting:
                  <code className="block bg-gray-100 p-2 rounded mt-1 font-mono text-[11px]">
                    NEXT_PUBLIC_SUPABASE_URL=...<br />
                    NEXT_PUBLIC_SUPABASE_ANON_KEY=...
                  </code>
                </li>
                <li>Habilitar autenticación por email para asesores autorizados de Querencia Rural.</li>
                <li>Políticas RLS aseguran que solo personal autenticado pueda ver información de compradores.</li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-gray-900 text-gray-100 p-4 rounded-xl font-mono text-xs overflow-x-auto max-h-96">
                <pre>{SUPABASE_SQL_SCHEMA}</pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LEAD DETAIL MODAL / DRAWER */}
      {selectedLead && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-gray-200">
              <div>
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest block">
                  Expediente de Comprador · ID: {selectedLead.id}
                </span>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mt-1">
                  {selectedLead.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {selectedLead.buyerType} · {selectedLead.nationality}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions (WhatsApp, Teléfono, Email) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={`tel:${selectedLead.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#165929]" />
                <span>{selectedLead.phone}</span>
              </a>
              <a
                href={`mailto:${selectedLead.email}`}
                className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-[#165929]" />
                <span className="truncate">{selectedLead.email}</span>
              </a>
              <a
                href={`https://wa.me/${selectedLead.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Status Switcher */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                Fase del Pipeline Actual:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {LEAD_STAGES.map((st) => (
                  <button
                    type="button"
                    key={st.id}
                    onClick={() => handleStatusChange(selectedLead.id, st.id)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                      selectedLead.status === st.id
                        ? "bg-[#165929] text-white shadow-xs"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Property and Financial Profile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl border border-gray-200 bg-white">
                <span className="font-bold text-gray-500 uppercase tracking-wider block text-[10px] mb-1">
                  Propiedad Solicitada
                </span>
                <p className="font-serif font-bold text-gray-900 text-sm">
                  {selectedLead.propertyTitle}
                </p>
                <span className="text-gray-500 block mt-1">Origen: {selectedLead.source}</span>
              </div>

              <div className="p-4 rounded-xl border border-gray-200 bg-white">
                <span className="font-bold text-gray-500 uppercase tracking-wider block text-[10px] mb-1">
                  Presupuesto Indicado
                </span>
                <p className="font-bold text-[#165929] text-base">
                  {selectedLead.budget}
                </p>
                <span className="text-gray-500 block mt-1">
                  Próximo seguimiento: {selectedLead.nextFollowUp}
                </span>
              </div>
            </div>

            {/* Interaction History & Notes */}
            <div className="space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-gray-700">
                Historial de Gestiones y Notas Internas
              </h4>

              <div className="space-y-2 max-h-48 overflow-y-auto">
                {selectedLead.interactions.map((it) => (
                  <div
                    key={it.id}
                    className="p-3 rounded-lg bg-gray-50 border border-gray-200 text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between text-gray-500 text-[11px]">
                      <span className="font-semibold text-gray-800">{it.author}</span>
                      <span>{it.date}</span>
                    </div>
                    <p className="text-gray-700">{it.notes}</p>
                  </div>
                ))}
              </div>

              {/* Add Note Form */}
              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Añadir nota de llamada o visita..."
                  className="flex-1 px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#165929]"
                />
                <button
                  type="button"
                  onClick={() => handleAddNote(selectedLead.id)}
                  className="bg-[#165929] hover:bg-[#0e3f1c] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
