import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Querencia Rural",
  description: "Información sobre el uso de cookies en el sitio web de Querencia Rural.",
};

export default function CookiesPage() {
  return (
    <div className="py-16 bg-[#FCFBF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 border-b border-gray-200 pb-4">
          Política de Cookies
        </h1>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed font-light">
          <p>
            Este sitio web utiliza cookies técnicas y analíticas necesarias para permitir la correcta navegación y comprender la interacción de los usuarios con nuestras propiedades publicadas.
          </p>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-4">
            ¿Qué son las cookies?
          </h2>
          <p>
            Una cookie es un pequeño archivo de texto que un sitio web almacena en su ordenador o dispositivo móvil cuando usted visita el sitio. Permite al sitio recordar sus acciones y preferencias durante un período de tiempo.
          </p>

          <h2 className="text-xl font-serif font-bold text-gray-900 pt-4">
            Tipos de cookies empleadas
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cookies técnicas necesarias:</strong> Imprescindibles para el funcionamiento y seguridad de la web.</li>
            <li><strong>Cookies de preferencias:</strong> Recuerdan filtros aplicados por el usuario.</li>
            <li><strong>Cookies de análisis estadístico:</strong> Nos permiten medir de forma anónima las visitas y rendimiento.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
