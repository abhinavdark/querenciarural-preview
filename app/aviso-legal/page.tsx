import { Metadata } from "next";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Aviso Legal | Querencia Rural",
  description: "Aviso legal e información identificativa de Querencia Rural conforme al artículo 10 de la LSSICE.",
};

export default function AvisoLegalPage() {
  return (
    <div className="py-16 bg-[#FCFBF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 border-b border-gray-200 pb-4">
          Aviso Legal
        </h1>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed font-light">
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), a continuación se detallan los datos identificativos de la empresa:
          </p>

          <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-2 text-xs sm:text-sm">
            <p><strong>Nombre Comercial:</strong> {COMPANY.name}</p>
            <p><strong>Titular / Representante Legal:</strong> {COMPANY.legalOwner}</p>
            <p><strong>Domicilio Social:</strong> {COMPANY.address}, {COMPANY.postalCode} {COMPANY.town} ({COMPANY.province})</p>
            <p><strong>CIF / NIF:</strong> {COMPANY.cif}</p>
            <p><strong>Teléfono:</strong> {COMPANY.phoneFormatted}</p>
            <p><strong>Correo Electrónico:</strong> {COMPANY.email}</p>
          </div>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-4">
            Condiciones Generales de Uso
          </h2>
          <p>
            Las presentes Condiciones Generales regulan el uso (incluyendo el mero acceso) de las páginas integrantes del sitio web de Querencia Rural, incluidos los contenidos y servicios puestos a disposición en ellas. Toda persona que acceda a este sitio web acepta someterse a las Condiciones Generales vigentes en cada momento.
          </p>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-4">
            Propiedad Intelectual e Industrial
          </h2>
          <p>
            Todos los contenidos del sitio web, entendiendo por estos a título meramente enunciativo los textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Querencia Rural o de terceros sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente.
          </p>
        </div>
      </div>
    </div>
  );
}
