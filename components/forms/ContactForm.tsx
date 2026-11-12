"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare,
  ShieldCheck,
  Clock
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { PROPERTY_CATEGORIES, PROVINCES } from "@/data/properties";

interface ContactFormProps {
  defaultPropertyTitle?: string;
  defaultPropertyId?: string;
  isCompact?: boolean;
}

export function ContactForm({
  defaultPropertyTitle,
  defaultPropertyId,
  isCompact = false,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoPropiedad: defaultPropertyTitle || "Pazos y casas históricas",
    ubicacion: "Toda Galicia",
    presupuesto: "",
    mensaje: defaultPropertyTitle
      ? `Hola, estoy interesado en recibir información detallada sobre "${defaultPropertyTitle}".`
      : "",
    privacidad: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.nombre.trim()) {
      errs.nombre = "Por favor, introduce tu nombre completo.";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Introduce un correo electrónico válido.";
    }
    if (!formData.telefono.trim()) {
      errs.telefono = "Por favor, facilita un número de teléfono de contacto.";
    }
    if (!formData.mensaje.trim()) {
      errs.mensaje = "Escribe un breve mensaje indicando tus preferencias o dudas.";
    }
    if (!formData.privacidad) {
      errs.privacidad = "Debes aceptar la política de privacidad para enviar la solicitud.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend submission to CRM capture pipeline
    setTimeout(() => {
      // Store locally for demo review in /admin/demo
      try {
        const existing = JSON.parse(localStorage.getItem("qr_demo_leads") || "[]");
        const newLead = {
          id: `lead-web-${Date.now()}`,
          name: formData.nombre,
          email: formData.email,
          phone: formData.telefono,
          propertyId: defaultPropertyId || null,
          propertyTitle: formData.tipoPropiedad,
          budget: formData.presupuesto || "No especificado",
          budgetNum: parseInt(formData.presupuesto.replace(/\D/g, ""), 10) || 0,
          source: "Web Inquiry",
          status: "new",
          dateReceived: new Date().toISOString().split("T")[0],
          lastContact: new Date().toISOString().split("T")[0],
          nextFollowUp: new Date(Date.now() + 86400000).toISOString().split("T")[0],
          notes: [`Mensaje web: ${formData.mensaje}`],
          interactions: [
            {
              id: `int-${Date.now()}`,
              date: new Date().toISOString().split("T")[0],
              type: "email",
              author: "Sistema Web",
              notes: `Formulario de contacto recibido desde la web. Ubicación: ${formData.ubicacion}`,
            },
          ],
          priority: "alta",
          nationality: "No especificada",
          buyerType: "Inversor Particular",
        };
        localStorage.setItem("qr_demo_leads", JSON.stringify([newLead, ...existing]));
      } catch {
        // localStorage fallback
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-emerald-200 text-center space-y-4 shadow-sm">
        <div className="w-14 h-14 bg-emerald-50 text-[#165929] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-gray-900">
          Solicitud recibida correctamente
        </h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
          Muchas gracias, <strong className="text-gray-900">{formData.nombre}</strong>. Hemos registrado tu consulta en nuestro sistema de atención preferente.
        </p>
        <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs text-emerald-900 text-left max-w-md mx-auto space-y-1">
          <p className="font-semibold flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            Tiempo estimado de respuesta: Menos de 24 horas hábiles
          </p>
          <p className="text-emerald-700">
            Un asesor especializado de Querencia Rural se pondrá en contacto contigo al teléfono o email facilitado.
          </p>
        </div>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                nombre: "",
                email: "",
                telefono: "",
                tipoPropiedad: "Pazos y casas históricas",
                ubicacion: "Toda Galicia",
                presupuesto: "",
                mensaje: "",
                privacidad: false,
              });
            }}
            className="text-xs text-[#165929] font-semibold hover:underline"
          >
            Enviar otra consulta
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nombre */}
        <div>
          <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
            Nombre y Apellidos *
          </label>
          <input
            type="text"
            required
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            placeholder="Ej. Carmen Souto"
            className={`w-full px-3.5 py-2.5 text-sm bg-gray-50 border rounded-lg focus:bg-white focus:ring-1 focus:ring-[#165929] transition-all ${
              errors.nombre ? "border-red-500 bg-red-50/30" : "border-gray-200"
            }`}
          />
          {errors.nombre && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.nombre}
            </p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
            Teléfono de contacto *
          </label>
          <input
            type="tel"
            required
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
            placeholder="+34 600 000 000"
            className={`w-full px-3.5 py-2.5 text-sm bg-gray-50 border rounded-lg focus:bg-white focus:ring-1 focus:ring-[#165929] transition-all ${
              errors.telefono ? "border-red-500 bg-red-50/30" : "border-gray-200"
            }`}
          />
          {errors.telefono && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.telefono}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
          Correo electrónico *
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="tu.correo@ejemplo.com"
          className={`w-full px-3.5 py-2.5 text-sm bg-gray-50 border rounded-lg focus:bg-white focus:ring-1 focus:ring-[#165929] transition-all ${
            errors.email ? "border-red-500 bg-red-50/30" : "border-gray-200"
          }`}
        />
        {errors.email && (
          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.email}
          </p>
        )}
      </div>

      {!isCompact && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Tipo de propiedad */}
          <div>
            <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
              Tipo de Propiedad
            </label>
            <select
              value={formData.tipoPropiedad}
              onChange={(e) => setFormData({ ...formData, tipoPropiedad: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-[#165929] focus:ring-1 focus:ring-[#165929] transition-all"
            >
              {PROPERTY_CATEGORIES.filter((c) => c.slug !== "todos").map((cat) => (
                <option key={cat.slug} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Ubicación de interés */}
          <div>
            <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
              Ubicación de Interés
            </label>
            <select
              value={formData.ubicacion}
              onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-[#165929] focus:ring-1 focus:ring-[#165929] transition-all"
            >
              <option value="Toda Galicia">Toda Galicia</option>
              <option value="A Coruña y Comarca de Santiago">A Coruña / Santiago</option>
              <option value="Lugo y Ribeira Sacra Lucense">Lugo / Ribeira Sacra</option>
              <option value="Ourense y Allariz">Ourense / Allariz</option>
              <option value="Pontevedra y Rías Baixas">Pontevedra / Rías Baixas</option>
            </select>
          </div>
        </div>
      )}

      {/* Presupuesto aproximado */}
      {!isCompact && (
        <div>
          <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
            Presupuesto orientativo (opcional)
          </label>
          <input
            type="text"
            value={formData.presupuesto}
            onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value })}
            placeholder="Ej. Hasta 500.000 €"
            className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-[#165929] focus:ring-1 focus:ring-[#165929] transition-all"
          />
        </div>
      )}

      {/* Mensaje */}
      <div>
        <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
          Mensaje o Consulta *
        </label>
        <textarea
          required
          rows={isCompact ? 3 : 4}
          value={formData.mensaje}
          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
          placeholder="Describe qué características buscas, si deseas concertar una visita presencial o consultar documentación jurídica..."
          className={`w-full px-3.5 py-2.5 text-sm bg-gray-50 border rounded-lg focus:bg-white focus:ring-1 focus:ring-[#165929] transition-all ${
            errors.mensaje ? "border-red-500 bg-red-50/30" : "border-gray-200"
          }`}
        />
        {errors.mensaje && (
          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.mensaje}
          </p>
        )}
      </div>

      {/* Privacy consent checkbox */}
      <div>
        <label className="flex items-start gap-2.5 text-xs text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.privacidad}
            onChange={(e) => setFormData({ ...formData, privacidad: e.target.checked })}
            className="mt-0.5 rounded border-gray-300 text-[#165929] focus:ring-[#165929]"
          />
          <span>
            He leído y acepto la{" "}
            <Link
              href="/politica-de-privacidad"
              target="_blank"
              className="text-[#165929] font-semibold underline hover:text-[#0e3f1c]"
            >
              política de privacidad
            </Link>{" "}
            para el tratamiento de mis datos de contacto con fines informativos relativos a la consulta.
          </span>
        </label>
        {errors.privacidad && (
          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.privacidad}
          </p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#165929] hover:bg-[#0e3f1c] disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
      >
        {isSubmitting ? (
          <span>Enviando consulta...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Enviar consulta confidencial</span>
          </>
        )}
      </button>

      <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-gray-500">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
        <span>Garantía de confidencialidad y no cesión de datos a terceros</span>
      </div>
    </form>
  );
}
