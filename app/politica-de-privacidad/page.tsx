import { Metadata } from "next";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Política de Privacidad | Querencia Rural",
  description: "Información sobre el tratamiento de datos personales conforme al Reglamento General de Protección de Datos (RGPD UE 2016/679).",
};

export default function PrivacidadPage() {
  return (
    <div className="py-16 bg-[#FCFBF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 border-b border-gray-200 pb-4">
          Política de Privacidad
        </h1>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed font-light">
          <p>
            En Querencia Rural nos comprometemos a asegurar que su información personal se encuentre protegida y no se utilice de forma indebida. Al facilitarnos sus datos personales y utilizar nuestro sitio web, entendemos que ha leído y comprendido los términos relacionados con la información de protección de datos personales que se exponen a continuación.
          </p>

          <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-2 text-xs sm:text-sm">
            <p><strong>Responsable del Tratamiento:</strong> {COMPANY.legalOwner} ({COMPANY.name})</p>
            <p><strong>CIF / NIF:</strong> {COMPANY.cif}</p>
            <p><strong>Dirección:</strong> {COMPANY.address}, {COMPANY.postalCode} {COMPANY.town} ({COMPANY.province})</p>
            <p><strong>Contacto Protección de Datos:</strong> {COMPANY.email}</p>
          </div>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-4">
            Finalidad del Tratamiento
          </h2>
          <p>
            Tratamos la información que nos facilitan las personas interesadas con el fin de gestionar la solicitud de información realizada a través de los formularios del sitio web, tramitar consultas sobre inmuebles rústicos y prestar los servicios de intermediación inmobiliaria solicitados.
          </p>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-4">
            Legitimación y Derechos
          </h2>
          <p>
            La base legal para el tratamiento de sus datos es el consentimiento explícito manifestado al rellenar y enviar los formularios de contacto. En cualquier momento puede ejercer sus derechos de acceso, rectificación, supresión, limitación y oposición dirigiéndose a nuestro correo electrónico: {COMPANY.email}.
          </p>
        </div>
      </div>
    </div>
  );
}
