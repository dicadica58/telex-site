import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Telefonia em Nuvem PABX para Empresas | Telex",
  description: "PABX em nuvem para empresas com ramais virtuais, gravação de chamadas e integração com URA. Sem central física, sem hardware, sem manutenção.",
};

export default function TelefoniaEmNuvemPage() {
  return (
    <ServicePageLayout
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Serviços", href: "/servicos/telecom" },
        { label: "Telefonia em Nuvem" },
      ]}
      title="Telefonia em nuvem que substitui o PABX físico da empresa"
      lead="PABX em nuvem com ramais virtuais, gravação de chamadas, URA e fila de atendimento. Sem central física na sala da TI, sem hardware caro, sem manutenção de equipamento. A Telex implanta a telefonia em nuvem da sua empresa em Santo André e no ABC paulista, com ramais que tocam no celular ou no telefone IP, do jeito que cada operação precisa."
      problem={[
        "Telefonia tradicional virou peso morto pra empresa moderna. Central PABX antiga ocupa rack. Quebra. Precisa de manutenção especializada cada vez mais difícil de encontrar. Cada ramal novo é uma porta física que precisa ser provisionada, com cabo, com configuração, com licença. Quando o colaborador sai, o ramal fica preso no aparelho. Quando contrata, demora pra ativar. E pra trabalho remoto, não funciona.",
        "Telefonia em nuvem resolve tudo isso, mas a maior parte dos provedores oferece um produto de prateleira, sem integração, sem suporte, sem dimensionamento técnico real.",
      ]}
      solution={{
        intro: "A Telex implanta telefonia em nuvem com PABX virtual, ramais que funcionam em qualquer dispositivo (celular, computador, telefone IP) e integração com os sistemas que a empresa já usa. Configuração feita por engenheiro de telecom, não por self-service de site.",
        blocks: [
          { icon: "smartphone", title: "Ramais que viajam com o colaborador", description: "O ramal não é mais um aparelho fixo. É uma identidade que toca onde o colaborador estiver: no aplicativo do celular, no headset do computador, no telefone IP da mesa. Trabalho híbrido, home office, viagem, tudo com o mesmo ramal." },
          { icon: "mic", title: "Gravação de chamadas com retenção configurável", description: "Chamadas gravadas automaticamente, com armazenamento em nuvem e retenção definida pela empresa. Útil pra atendimento ao cliente, pra suporte, pra venda consultiva, pra compliance em alguns setores." },
          { icon: "phone", title: "URA inteligente e fila de atendimento", description: "A pessoa liga pra empresa, escolhe o setor, espera na fila com música configurável e cai no atendente disponível. Setup feito em conjunto com a empresa pra refletir como o atendimento funciona de verdade." },
        ],
      }}
      howItWorks="A Telex faz reunião técnica pra entender o fluxo de chamadas atual da empresa: quantos ramais, como funciona o atendimento de entrada, quais setores, quais integrações com CRM ou ERP. Com base nisso, monta o projeto da telefonia em nuvem, faz a portabilidade dos números atuais (se a empresa quiser manter), configura URA, fila e ramais, e treina a equipe no uso do sistema. Migração planejada pra acontecer sem perder uma chamada do cliente."
      forWhom="Empresas com 5 a 500 colaboradores que ainda usam PABX físico. Empresas em mudança de endereço que vão refazer a estrutura. Operações de atendimento ao cliente. Empresas com vendedores externos que precisam estar acessíveis pelo ramal. Escritórios de advocacia, contabilidade, consultoria. Equipes híbridas com pessoas no escritório e em casa."
      faq={[
        { question: "Posso manter meu número atual?", answer: "Sim. A Telex faz a portabilidade do número atual pra plataforma em nuvem, sem perder o histórico de identidade pro cliente." },
        { question: "O ramal funciona sem internet?", answer: "Não, telefonia em nuvem depende de internet estável. A Telex avalia a conectividade da empresa antes da implantação e recomenda upgrade de fibra se necessário." },
        { question: "Posso integrar com meu CRM?", answer: "Sim. A plataforma tem APIs e integrações nativas com os principais CRMs do mercado (Salesforce, RD Station, Pipedrive, HubSpot e outros)." },
        { question: "Quanto custa por ramal?", answer: "Depende do plano. Plano básico cobre ligação ilimitada para fixo e celular nacional. Planos premium incluem gravação, URA avançada, integração com CRM. Orçamento conforme o cenário da empresa." },
        { question: "Posso fazer chamada do computador?", answer: "Sim. O ramal funciona em aplicativo de desktop, com headset USB. Ideal pra equipes de atendimento e vendas." },
      ]}
      cta={{
        title: "Pronto pra começar?",
        subtitle: "Conte o cenário da sua empresa. A Telex devolve uma proposta em até 24 horas.",
        primary: { label: "Pedir orçamento de telefonia", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
        secondary: { label: "Falar com especialista no WhatsApp", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
      }}
    />
  );
}
