import type { Metadata } from "next";
import HubPageLayout from "../../components/HubPageLayout";

export const metadata: Metadata = {
  title: "Segurança Eletrônica Empresarial | Telex",
  description: "CFTV, alarme, cerca elétrica e controle de acesso para empresas, condomínios e residências. Projeto, instalação e manutenção sob um único contrato.",
};

export default function SegurancaHubPage() {
  return (
    <HubPageLayout
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Serviços" },
        { label: "Segurança Eletrônica" },
      ]}
      title="Segurança Eletrônica Empresarial e Residencial"
      lead="Proteção projetada e instalada pelo mesmo time que faz a manutenção. CFTV, alarmes, cerca elétrica e controle de acesso integrados num único contrato. A Telex atende empresas, condomínios e residências em Santo André e em todo o ABC paulista."
      cards={[
        { icon: "camera", title: "CFTV para empresas", description: "Câmeras profissionais com gravação em nuvem e visualização remota.", href: "/cftv-empresa" },
        { icon: "bellring", title: "Alarme e cerca elétrica", description: "Sensores integrados, central monitorada e cerca elétrica com laudo.", href: "/alarme-cerca-eletrica" },
        { icon: "fingerprint", title: "Controle de acesso", description: "Biometria, cartão e QR code com integração à folha de ponto.", href: "/controle-de-acesso" },
        { icon: "wrench", title: "Manutenção recorrente", description: "Contrato mensal com visitas preventivas e atendimento prioritário.", href: "/manutencao" },
      ]}
      whyTelex="Tecnologia adequada pra cada ponto, sem equipamento de prateleira. Câmeras com resolução real, sensores dimensionados pelo ambiente, cerca elétrica com laudo técnico. Suporte 24 horas pros sistemas críticos."
      cta={{ label: "Falar com especialista em segurança", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" }}
    />
  );
}
