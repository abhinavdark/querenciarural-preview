import { MetadataRoute } from "next";
import { PROPERTIES } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://querenciarural.com";

  const staticRoutes = [
    "",
    "/propiedades",
    "/sobre-nosotros",
    "/contacto",
    "/aviso-legal",
    "/politica-de-privacidad",
    "/politica-de-cookies",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const propertyRoutes = PROPERTIES.map((property) => ({
    url: `${baseUrl}/propiedades/${property.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...propertyRoutes];
}
