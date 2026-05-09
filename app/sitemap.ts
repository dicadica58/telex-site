import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://telex-telecom.vercel.app";

  const staticPages = [
    "",
    "/servicos/telecom",
    "/servicos/seguranca",
    "/servicos/condominios",
    "/cftv-empresa",
    "/cabeamento-estruturado",
    "/fibra-optica-empresarial",
    "/manutencao",
    "/locacao-comercial",
    "/locacao-condominio",
    "/locacao-residencial",
    "/telefonia-em-nuvem",
    "/alarme-cerca-eletrica",
    "/controle-de-acesso",
    "/comunicacao-condominio",
  ];

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.startsWith("/servicos/") ? 0.8 : 0.7,
  }));
}
