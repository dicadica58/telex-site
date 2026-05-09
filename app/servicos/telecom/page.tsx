import type { Metadata } from "next";
import HubPageLayout from "../../components/HubPageLayout";

export const metadata: Metadata = {
  title: "Telecom e Conectividade Empresarial | Telex",
  description: "Cabeamento estruturado, fibra óptica, telefonia em nuvem e Wi-Fi corporativo. A infraestrutura de TI da sua empresa em um único fornecedor.",
};

export default function TelecomHubPage() {
  return (
    <HubPageLayout
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Serviços" },
        { label: "Telecom e Conectividade" },
      ]}
      title="Telecom e Conectividade Empresarial"
      lead="A base que sua operação não percebe quando funciona, e percebe demais quando para. A Telex projeta, instala e mantém a infraestrutura de telecom da sua empresa em Santo André e no ABC paulista, com a mesma equipe técnica do início ao fim do contrato."
      cards={[
        { icon: "cable", title: "Cabeamento estruturado", description: "Rede física CAT6 e CAT6A com certificação ponto a ponto e documentação técnica.", href: "/cabeamento-estruturado" },
        { icon: "globe", title: "Fibra óptica empresarial", description: "Link dedicado com SLA escrito em contrato e redundância opcional.", href: "/fibra-optica-empresarial" },
        { icon: "phone", title: "Telefonia em nuvem", description: "PABX virtual com ramais que tocam em qualquer dispositivo.", href: "/telefonia-em-nuvem" },
        { icon: "wrench", title: "Manutenção recorrente", description: "Contrato mensal com visitas preventivas e atendimento prioritário.", href: "/manutencao" },
      ]}
      whyTelex="Equipe técnica própria, sem terceirizar instalação. Documentação completa entregue ao cliente. SLA escrito em contrato pros serviços críticos. Atendimento direto com gestor de conta, sem call center."
      cta={{ label: "Falar com especialista de telecom", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" }}
    />
  );
}
