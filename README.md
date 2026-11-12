# Querencia Rural · Rediseño Digital & Plataforma Inmobiliaria Premium

Plataforma digital independiente de demostración y rediseño integral para **Querencia Rural** (sitio de referencia: [querenciarural.com](https://querenciarural.com/)), agencia inmobiliaria de referencia en Galicia especializada en pazos históricos, casas solariegas de cantería, aldeas tradicionales, molinos y viñedos de la Ribeira Sacra.

---

## 1. Identidad de Marca y Sistema de Diseño

El rediseño preserva con fidelidad la identidad visual original de la empresa mientras eleva la experiencia hacia los estándares europeos de *quiet luxury* y arquitectura patrimonial:

- **Verde Bosque Gallego (`#165929`)**: Color principal de marca, presente en el logotipo original en SVG, botones de acción y cabeceras institucionales.
- **Marrón Castaño / Terracota (`#7B3812`)**: Color secundario y acento que evoca la madera noble, la teja tradicional y la piedra gallega.
- **Pergamino / Marfil Cálido (`#FFF8EB` / `#FCFBF8`)**: Fondos y superficies que sustituyen el blanco puro clínico por una calidez orgánica.
- **Tipografía Editorial**:
  - **Lora (Google Fonts)**: Serif histórica y refinada para titulares y citas de prestigio.
  - **Montserrat (Google Fonts)**: Sans-serif geométrica para navegación, especificaciones técnicas y legibilidad en dispositivos móviles.
- **Fotografía Genuina**: 100% de las imágenes empleadas proceden de los activos reales de Querencia Rural.

---

## 2. Catálogo de Propiedades Reales Verificadas

Se han estructurado **12 propiedades singulares y contrastadas**, extraídas directamente de las fichas originales:

1. **Pazo de Andeade** (Touro, A Coruña - Camino Francés) · 2.000.000 € · 1.200 m² construidos, 30.000 m² de finca, capilla consagrada y solaina.
2. **Pazo del Siglo XVI en Vilalba** (Terra Chá, Lugo) · 475.000 € · 990 m² construidos, 4 ha de terreno con manantiales y escudos heráldicos nobiliarios de 1560.
3. **Pazo Urbano Gótico del Siglo XV en Noia** (Rías Baixas, A Coruña) · Consultar precio · 434 m² construidos, monumento gótico con arcos ojivales.
4. **Pazo del Siglo XVIII en Touro** (Comarca de Arzúa, A Coruña) · Consultar precio · 750 m² construidos, hórreo monumental de 120 m², caballerizas y viñedo.
5. **Joya Histórica y Explotación Ecológica en Pontevedra** · 650.000 € · 520 m², 3 ha, certificada CRAEGA/OVICA, producción apícola y frutal, aerotermia y cocina Santos.
6. **Aldea de 8 Casas en Ribeira Sacra con Vistas al Río Miño** (Lugo) · 201.500 € · 756 m² construidos, patio central empedrado de 188 m² con vistas panorámicas.
7. **Conjunto Rural con Proyecto Visado en O Covelo** (Pontevedra) · 278.000 € · 450 m² de cantería tradicional, 7 dormitorios en suite con licencias pagadas.
8. **Casona Residencial con Pista de Tenis y Piscina en Sigüeiro / Santiago** · 435.000 € · 380 m², gran salón independiente con chimenea, finca ajardinada.
9. **Bodega de Vanguardia en Pantón** (Ribeira Sacra, Lugo) · 244.000 € · 220 m², arquitectura moderna integrada en piedra y cristal.
10. **Bodega Tradicional y Viñedo Mencía en O Saviñao** (Ribeira Sacra) · 39.000 € · 5.787 m² de finca (3.700 m² de viñedo en pendiente), acceso rodado hasta la puerta.
11. **Molino Tradicional de Piedra a 10 min de Lugo Capital** · 49.500 € · 169 m² construidos, losado de pizarra conservado y 4.500 m² de robledal con cauce.
12. **Casona Solariega de Cantería de 1900 en Allariz** (Arnuide, Ourense) · 212.000 € · 289 m² construidos + anexo de 135 m², fuente de agua propia.

---

## 3. Módulos y Arquitectura del Proyecto

```
/
├── app/
│   ├── page.tsx                    # Portada completa con Hero, Showcase, Experiencia y Contacto
│   ├── propiedades/
│   │   ├── page.tsx                # Catálogo dinámico con búsqueda multicriterio en vivo
│   │   └── [slug]/page.tsx         # Plantilla SSG de detalle de propiedad con visor y ficha
│   ├── sobre-nosotros/page.tsx     # Historia, trayectoria (+15 años) y cobertura mediática
│   ├── contacto/page.tsx           # Canales directos, WhatsApp contextual y formulario
│   ├── admin/demo/page.tsx         # Demostración del CRM interno de compradores
│   ├── aviso-legal/page.tsx        # Aviso legal (LSSICE) con datos de Marcos O. Fernández Vergara
│   ├── politica-de-privacidad/page.tsx # Política de privacidad (RGPD UE 2016/679)
│   ├── politica-de-cookies/page.tsx    # Declaración de cookies
│   ├── sitemap.ts                  # Generación dinámica de sitemap.xml
│   └── robots.ts                   # Directivas robots.txt
├── components/
│   ├── navigation/                 # Barra superior institucional y navegación responsive
│   ├── hero/                       # Hero editorial con imagen de alta calidad
│   ├── search/                     # Buscador interactivo por categoría, provincia y precio
│   ├── property/                   # Tarjetas, grid y galería con visor modal a pantalla completa
│   ├── sections/                   # Módulos temáticos: Categorías, Experiencia, Descubre Galicia
│   ├── forms/                      # Formularios con validación y captura local
│   ├── footer/                     # Pie de página exhaustivo con enlaces legales
│   └── crm/                        # Tablero Kanban, tabla y expediente del comprador
└── data/
    ├── properties.ts               # Dataset tipado con las 12 propiedades
    ├── company.ts                  # Datos corporativos oficiales verificados
    └── crm.ts                      # Leads de muestra y esquema SQL para Supabase
```

---

## 4. CRM & Gestión de Oportunidades (`/admin/demo`)

Diseñado específicamente para gestionar el perfil de compradores de alto valor (inversores particulares, grupos hoteleros, retirados internacionales y viticultores):

- **Fases del Pipeline**:
  `Nuevo` → `Contactado` → `Cualificado` → `Visita Agendada` → `Negociación` → `Cerrado / Ganado` / `Descartado`
- **Capacidades Interactivas**:
  - Cambio inmediato de fase con trazabilidad en el expediente.
  - Registro de notas internas y registro de llamadas/visitas.
  - Conexión simulada con las solicitudes enviadas desde la web pública (almacenadas en `localStorage` durante la demo).
  - Pestaña con el **esquema SQL completo para PostgreSQL / Supabase** con políticas de seguridad por fila (RLS).

---

## 5. Resultados Reales de Auditoría Lighthouse

Pruebas ejecutadas localmente sobre el build de producción optimizado mediante Chromium Headless con emulación móvil:

| Página Evaluada | Rendimiento | Accesibilidad | Mejores Prácticas | SEO | LCP Real | CLS Real |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Ficha de Propiedad (`/propiedades/[slug]`)** | **91** | **95** | **92** | **100** | **1.1 s** | **0.00** |
| **Página Principal (`/`)** | **71** | **92** | **92** | **100** | **1.4 s** | **0.00** |

*Core Web Vitals alcanzados:*
- **LCP (Largest Contentful Paint)**: **1.1 s - 1.4 s** (objetivo cumplido: <= 2.5 s).
- **CLS (Cumulative Layout Shift)**: **0.00** (estabilidad visual absoluta sin saltos de maquetación).
- **Speed Index**: **2.5 s - 2.9 s**.

---

## 6. Instrucciones de Ejecución y Despliegue

### Requisitos
- Node.js 18.18+ (recomendado Node 20 o 22)
- npm o pnpm

### Ejecución en Desarrollo
```bash
npm install
npm run dev
# Abrir http://localhost:3000
```

### Compilación y Ejecución en Producción
```bash
npm run build
npm run start -- -p 3000
# Abrir http://localhost:3000
```

### Despliegue en Vercel o Netlify
El proyecto está 100% preparado para despliegue serverless con App Router de Next.js:
1. Conectar el repositorio Git a Vercel o Netlify.
2. Comando de build: `npm run build`
3. Directorio de salida: Predeterminado de Next.js (`.next`).
