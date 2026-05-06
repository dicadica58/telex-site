import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Telex Telecomunicações — Telecom, Segurança Eletrônica e Aluguel de Equipamentos",
  description:
    "Telecom e segurança eletrônica com um só fornecedor para empresas, comércio e condomínios em São Paulo. Cabeamento, internet por fibra, câmeras, alarmes, telefonia digital e aluguel de equipamentos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
