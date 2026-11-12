import type { Metadata, Viewport } from "next";
import { Lora, Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/footer/Footer";

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  themeColor: "#165929",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Querencia Rural | Pazos Históricos, Casas Rurales y Propiedades Únicas en Galicia",
  description:
    "Agencia inmobiliaria premium especializada en pazos históricos, casas de cantería, aldeas y viñedos en Galicia. 15 años de experiencia y máximas garantías jurídicas.",
  metadataBase: new URL("https://querenciarural.com"),
  keywords: [
    "Pazos en Galicia",
    "Comprar pazo en Galicia",
    "Casas rurales Galicia",
    "Propiedades históricas Galicia",
    "Aldeas en venta Galicia",
    "Viñedos Ribeira Sacra",
    "Querencia Rural",
  ],
  authors: [{ name: "Querencia Rural", url: "https://querenciarural.com" }],
  openGraph: {
    title: "Querencia Rural | Pazos y Propiedades Únicas en Galicia",
    description:
      "Descubre nuestra cuidada selección de pazos históricos, aldeas tradicionales y viñedos singulares en Galicia.",
    url: "https://querenciarural.com",
    siteName: "Querencia Rural",
    images: [
      {
        url: "https://querenciarural.com/wp-content/uploads/2024/07/imagen-redes-querencia.jpg",
        width: 1200,
        height: 630,
        alt: "Querencia Rural - Patrimonio Inmobiliario Gallego",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Querencia Rural | Inmobiliaria Rural de Referencia en Galicia",
    description:
      "Pazos históricos, casas rurales de cantería y propiedades singulares en Galicia.",
    images: [
      "https://querenciarural.com/wp-content/uploads/2024/07/imagen-redes-querencia.jpg",
    ],
  },
  icons: {
    icon: "/images/querencia-logo.svg",
    apple: "/images/querencia-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Querencia Rural",
    image: "https://querenciarural.com/wp-content/uploads/2024/07/imagen-redes-querencia.jpg",
    "@id": "https://querenciarural.com/#organization",
    url: "https://querenciarural.com",
    telephone: "+34621042607",
    email: "querenciaruralgerencia@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Caino Novo nº 2, 2º H",
      addressLocality: "Bertamiráns, Ames",
      postalCode: "15220",
      addressRegion: "A Coruña",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "42.8622",
      longitude: "-8.6508",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    priceRange: "€€€€",
  };

  return (
    <html lang="es" className={`${lora.variable} ${montserrat.variable} antialiased scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://querenciarural.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://querenciarural.com" />
        <link
          rel="preload"
          as="image"
          href="/images/hero-pazo-mobile-480.webp"
          media="(max-width: 640px)"
          type="image/webp"
          // @ts-expect-error fetchPriority supported in HTML5
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero-pazo.webp"
          media="(min-width: 641px)"
          type="image/webp"
          // @ts-expect-error fetchPriority supported in HTML5
          fetchpriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FCFBF8] text-[#1c241e]">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
