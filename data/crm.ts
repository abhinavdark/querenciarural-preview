export type LeadStatus = 
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'viewing_scheduled'
  | 'negotiation'
  | 'won'
  | 'lost';

export interface LeadInteraction {
  id: string;
  date: string;
  type: 'call' | 'email' | 'whatsapp' | 'meeting' | 'note';
  author: string;
  notes: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertyId: string | null;
  propertyTitle: string;
  budget: string;
  budgetNum: number;
  source: 'Web Inquiry' | 'WhatsApp Direct' | 'Portal Inmobiliario' | 'Referral' | 'Exclusiva Off-Market';
  status: LeadStatus;
  dateReceived: string;
  lastContact: string;
  nextFollowUp: string;
  notes: string[];
  interactions: LeadInteraction[];
  priority: 'alta' | 'media' | 'baja';
  nationality: string;
  buyerType: 'Inversor Particular' | 'Grupo Hotelero / Turístico' | 'Retiro Internacional' | 'Bodeguero / Agrario';
}

export const LEAD_STAGES: { id: LeadStatus; label: string; color: string; badgeClass: string }[] = [
  { id: 'new', label: 'Nuevo', color: '#2563EB', badgeClass: 'bg-blue-50 text-blue-700 border-blue-200' },
  { id: 'contacted', label: 'Contactado', color: '#D97706', badgeClass: 'bg-amber-50 text-amber-700 border-amber-200' },
  { id: 'qualified', label: 'Cualificado', color: '#165929', badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { id: 'viewing_scheduled', label: 'Visita Agendada', color: '#7C3AED', badgeClass: 'bg-purple-50 text-purple-700 border-purple-200' },
  { id: 'negotiation', label: 'Negociación', color: '#C026D3', badgeClass: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200' },
  { id: 'won', label: 'Cerrado / Ganado', color: '#059669', badgeClass: 'bg-green-100 text-green-800 border-green-300' },
  { id: 'lost', label: 'Descartado / Perdido', color: '#6B7280', badgeClass: 'bg-gray-100 text-gray-600 border-gray-200' }
];

export const INITIAL_DEMO_LEADS: Lead[] = [
  {
    id: 'lead-001',
    name: 'Jean-Luc de Montmirail',
    email: 'jluc.montmirail@patrimoine-europe.fr',
    phone: '+33 6 12 84 92 11',
    propertyId: '5153',
    propertyTitle: 'Pazo de Andeade - Monumento Histórico en el Camino Francés',
    budget: '2.000.000 € - 2.500.000 €',
    budgetNum: 2200000,
    source: 'Web Inquiry',
    status: 'negotiation',
    dateReceived: '2026-10-29',
    lastContact: '2026-11-10',
    nextFollowUp: '2026-11-14',
    priority: 'alta',
    nationality: 'Francia',
    buyerType: 'Inversor Particular',
    notes: [
      'Interesado en establecer residencia señorial y conservar la capilla.',
      'Ha revisado notas registrales y catastro a través de su abogado en Madrid.',
      'Borrador de carta de intenciones (LOI) remitido el 8 de noviembre.'
    ],
    interactions: [
      { id: 'int-1', date: '2026-10-29', type: 'email', author: 'Sistema Web', notes: 'Solicitud web recibida con interés específico en Pazo de Andeade.' },
      { id: 'int-2', date: '2026-10-31', type: 'call', author: 'Marcos Fernández', notes: 'Llamada telefónica en francés/español. Perfil validado con alta solvencia.' },
      { id: 'int-3', date: '2026-11-06', type: 'meeting', author: 'Marcos Fernández', notes: 'Visita presencial al pazo y reunión con arquitecto de rehabilitación histórica.' }
    ]
  },
  {
    id: 'lead-002',
    name: 'Henrik Lindqvist',
    email: 'henrik.lindqvist@nordic-retreats.se',
    phone: '+46 70 891 2234',
    propertyId: '7359',
    propertyTitle: 'Aldea Histórica de 8 Casas de Piedra con Vistas al Río Miño',
    budget: '350.000 € - 500.000 €',
    budgetNum: 400000,
    source: 'Portal Inmobiliario',
    status: 'viewing_scheduled',
    dateReceived: '2026-11-02',
    lastContact: '2026-11-09',
    nextFollowUp: '2026-11-15',
    priority: 'alta',
    nationality: 'Suecia',
    buyerType: 'Grupo Hotelero / Turístico',
    notes: [
      'Busca aldea completa en Ribeira Sacra para proyecto de coliving y centro de retiro.',
      'Vuelo confirmado a Santiago para visita física el 15 de noviembre.'
    ],
    interactions: [
      { id: 'int-4', date: '2026-11-02', type: 'whatsapp', author: 'Sistema Web', notes: 'Contacto inicial solicitando fotos de accesos y estado de tejados.' },
      { id: 'int-5', date: '2026-11-09', type: 'call', author: 'Marcos Fernández', notes: 'Cerrada fecha de visita técnica con empresa de obra local.' }
    ]
  },
  {
    id: 'lead-003',
    name: 'Dra. Carmen Varela Salgado',
    email: 'carmen.varela@clinica-salgado.es',
    phone: '+34 609 881 204',
    propertyId: '608',
    propertyTitle: 'Pazo del Siglo XVI con 4 Hectáreas y Escudos Nobiliarios en Vilalba',
    budget: '500.000 €',
    budgetNum: 500000,
    source: 'WhatsApp Direct',
    status: 'qualified',
    dateReceived: '2026-11-04',
    lastContact: '2026-11-10',
    nextFollowUp: '2026-11-13',
    priority: 'alta',
    nationality: 'España (Galicia)',
    buyerType: 'Inversor Particular',
    notes: [
      'Originaria de Vilalba, reside en Madrid y busca recuperar patrimonio histórico.',
      'Fondos propios disponibles sin necesidad de hipoteca bancaria.'
    ],
    interactions: [
      { id: 'int-6', date: '2026-11-04', type: 'whatsapp', author: 'Marcos Fernández', notes: 'Solicitud de informe heráldico y planos catastrales.' }
    ]
  },
  {
    id: 'lead-004',
    name: 'Bernhard & Helga Weber',
    email: 'weber.wine.invest@munich-gmbh.de',
    phone: '+49 89 2381 440',
    propertyId: '4315',
    propertyTitle: 'Bodega de Diseño Arquitectónico en Pantón - Ribeira Sacra',
    budget: '300.000 €',
    budgetNum: 300000,
    source: 'Web Inquiry',
    status: 'contacted',
    dateReceived: '2026-11-07',
    lastContact: '2026-11-08',
    nextFollowUp: '2026-11-12',
    priority: 'media',
    nationality: 'Alemania',
    buyerType: 'Bodeguero / Agrario',
    notes: [
      'Propietarios de bodega en Mosela, buscan satélite boutique en D.O. Ribeira Sacra.'
    ],
    interactions: [
      { id: 'int-7', date: '2026-11-07', type: 'email', author: 'Sistema Web', notes: 'Formulario web recibido pidiendo capacidad en litros y derechos de plantación.' }
    ]
  },
  {
    id: 'lead-005',
    name: 'Santiago Méndez Otero',
    email: 'smendez@capitalgalicia.gal',
    phone: '+34 630 119 455',
    propertyId: '100',
    propertyTitle: 'Pazo Urbano Gótico del Siglo XV en Noia - Rías Baixas',
    budget: 'Consultar precio / 800.000 € aprox',
    budgetNum: 800000,
    source: 'Exclusiva Off-Market',
    status: 'new',
    dateReceived: '2026-11-11',
    lastContact: '2026-11-11',
    nextFollowUp: '2026-11-12',
    priority: 'alta',
    nationality: 'España (Galicia)',
    buyerType: 'Grupo Hotelero / Turístico',
    notes: [
      'Interesado en adquirir para boutique hotel con encanto de 12 habitaciones.'
    ],
    interactions: [
      { id: 'int-8', date: '2026-11-11', type: 'email', author: 'Sistema Web', notes: 'Inscripción de interés recibida a través del portal.' }
    ]
  },
  {
    id: 'lead-006',
    name: 'Patricia & Thomas Bell',
    email: 'thomas.bell@uk-edinburgh.co.uk',
    phone: '+44 7700 900123',
    propertyId: '3000',
    propertyTitle: 'Molino Tradicional de Piedra y Pizarra con 4.500 m² de Parcela en Lugo',
    budget: '60.000 €',
    budgetNum: 60000,
    source: 'Web Inquiry',
    status: 'won',
    dateReceived: '2026-09-18',
    lastContact: '2026-10-24',
    nextFollowUp: '2026-11-20',
    priority: 'media',
    nationality: 'Reino Unido',
    buyerType: 'Retiro Internacional',
    notes: [
      'Escriturado y formalizado en notaría de Lugo con plenas garantías jurídicas.'
    ],
    interactions: [
      { id: 'int-9', date: '2026-10-24', type: 'meeting', author: 'Marcos Fernández', notes: 'Firma de escritura pública ante notario. Operación cerrada con éxito.' }
    ]
  }
];

export const SUPABASE_SQL_SCHEMA = `-- QUERENCIA RURAL CRM & LEAD CAPTURE SCHEMA FOR POSTGRESQL / SUPABASE
CREATE TABLE IF NOT EXISTS public.properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  location TEXT NOT NULL,
  province TEXT NOT NULL,
  price NUMERIC,
  price_display TEXT NOT NULL,
  built_area TEXT,
  land_area TEXT,
  short_description TEXT,
  main_image TEXT,
  gallery TEXT[] DEFAULT '{}',
  original_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TYPE lead_status_enum AS ENUM (
  'new',
  'contacted',
  'qualified',
  'viewing_scheduled',
  'negotiation',
  'won',
  'lost'
);

CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  property_id TEXT,
  property_title TEXT,
  budget TEXT,
  budget_num NUMERIC,
  source TEXT DEFAULT 'Web Inquiry',
  status lead_status_enum DEFAULT 'new',
  priority TEXT DEFAULT 'media',
  nationality TEXT,
  buyer_type TEXT,
  notes JSONB DEFAULT '[]'::jsonb,
  privacy_accepted BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  last_contact_at TIMESTAMPTZ DEFAULT now(),
  next_follow_up_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS public.lead_interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
  author TEXT NOT NULL,
  type TEXT NOT NULL,
  notes TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
`;
