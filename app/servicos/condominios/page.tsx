import type { Metadata } from "next";
import HubPageLayout from "../../components/HubPageLayout";

export const metadata: Metadata = {
  title: "Soluções para Condomínios | CFTV, Interfonia e Portaria | Telex",
  description: "Pacote completo para condomínios: CFTV, interfonia, vídeo porteiro, controle de acesso e alarme. Mensalidade única, sem investimento de capital.",
};

export default function CondominiosHubPage() {
  return (
    <HubPageLayout
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Serviços" },
        { label: "Comunicação Condominial" },
      ]}
      title="Soluções Completas para Condomínios"
      lead="Tudo que um condomínio precisa pra modernizar segurança e comunicação num único contrato. CFTV, interfonia, vídeo porteiro, controle de acesso e alarme com manutenção e troca de equipamento incluídas. Síndico com um ponto de contato responsável pelo prédio inteiro."
      cards={[
        { icon: "phonecall", title: "Comunicação condominial", description: "Interfonia, vídeo porteiro e interfone no celular do morador.", href: "/comunicacao-condominio" },
        { icon: "building2", title: "Locação para condomínio", description: "Sistema completo em locação mensal, sem investimento de capital.", href: "/locacao-condominio" },
        { icon: "fingerprint", title: "Controle de acesso", description: "Biometria, cartão e QR code com histórico completo de acesso.", href: "/controle-de-acesso" },
      ]}
      whyTelex="Mensalidade fixa aprovada pela assembleia uma vez. Sem rateio surpresa pra repor equipamento. Modernização planejada em fases pra respeitar orçamento. Ponto de contato profissional que continua atendendo o condomínio mesmo na troca de síndico."
      cta={{ label: "Falar com especialista em condomínios", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" }}
    />
  );
}
