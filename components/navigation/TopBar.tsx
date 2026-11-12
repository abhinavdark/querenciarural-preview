import Link from "next/link";
import { Phone, Mail, MessageSquare, Award, Shield } from "lucide-react";
import { COMPANY } from "@/data/company";

export function TopBar() {
  return (
    <div className="bg-[#165929] text-white/95 text-xs border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-1.5 font-medium text-emerald-100">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            +15 Años de especialización rural en Galicia
          </span>
          <span className="text-white/40">|</span>
          <a
            href={`tel:${COMPANY.phone}`}
            className="inline-flex items-center gap-1.5 hover:text-amber-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-200" />
            <span>{COMPANY.phoneFormatted}</span>
          </a>
          <span className="text-white/40">|</span>
          <a
            href={`mailto:${COMPANY.email}`}
            className="inline-flex items-center gap-1.5 hover:text-amber-200 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-200" />
            <span>{COMPANY.email}</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={COMPANY.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-emerald-800/80 hover:bg-emerald-700/80 px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors text-emerald-100"
          >
            <MessageSquare className="w-3 h-3 text-emerald-300" />
            WhatsApp Directo
          </a>
          <Link
            href="/admin/demo"
            className="inline-flex items-center gap-1 text-[11px] text-amber-200/90 hover:text-amber-100 font-medium hover:underline"
          >
            <Shield className="w-3 h-3 text-amber-300" />
            CRM Lead Preview
          </Link>
        </div>
      </div>
    </div>
  );
}
