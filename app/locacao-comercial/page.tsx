import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Locação de CFTV e Alarme para Empresas | Telex",
  description: "Câmeras, alarmes e telefonia por locação para lojas, escritórios e franquias. Sem investimento em equipamento, manutenção incluída. Telex em SP.",
};

export default function LocacaoComercialPage() {
  return (
    <ServicePageLayout
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Aluguel", href: "/#aluguel" },
        { label: "Locação Comercial" },
      ]}
      title="Locação de CFTV, alarme e telefonia para empresas"
      lead="Câmeras, alarmes, sensores e telefonia em contrato de locação mensal. Sem investimento em equipamento, sem custo de troca, com manutenção e suporte incluídos. A Telex atende lojas, escritórios, franquias e filiais em Santo André e no ABC paulista, do contrato de curto prazo ao de longo prazo."
      problem={[
        "Comprar equipamento de segurança é uma decisão de capital que muita empresa deveria pensar duas vezes. CFTV, alarme e telefonia são sistemas que envelhecem rápido. A câmera 4K que você comprou hoje vira padrão básico em 3 anos. O DVR que parecia de ponta vai virar legado. O telefone IP que custou caro vai precisar de licença nova.",
        "Quando o equipamento é seu, a manutenção também é. A troca também. A obsolescência também. E pior: na hora de expandir uma filial, ou de mudar de endereço, todo o investimento sai do bolso de novo.",
        "Pra empresas em crescimento, em fase de teste de novo ponto, ou pra franquias que abrem rápido, locação faz mais sentido financeiro do que CAPEX.",
      ]}
      solution={{
        intro: "A Telex monta o sistema completo de segurança e telefonia da empresa em modelo de locação. Equipamento, instalação técnica, configuração, manutenção e suporte numa única mensalidade. Sem entrada, sem investimento inicial, sem dor de cabeça com obsolescência.",
        blocks: [
          { icon: "trendingup", title: "Sem investimento de capital", description: "A empresa paga uma mensalidade fixa que inclui equipamento, instalação e suporte. Sem desembolso inicial. O caixa fica livre pra investir no negócio principal." },
          { icon: "refreshcw", title: "Manutenção e troca incluídas", description: "Equipamento parou de funcionar, ficou desatualizado ou o modelo saiu de linha? A Telex troca dentro do contrato, sem custo adicional. Você sempre opera com tecnologia atual." },
          { icon: "filetext", title: "Contratos sob medida", description: "Curto prazo pra teste de loja em shopping. Médio prazo pra ponto comercial estabelecido. Longo prazo pra matriz com várias filiais. Cada contrato é dimensionado pelo cenário, sem letra miúda." },
        ],
      }}
      howItWorks="A Telex visita o ponto comercial, levanta os requisitos do gestor (CFTV, alarme, telefonia, controle de acesso), apresenta o projeto técnico e a proposta de locação com prazo, mensalidade e escopo. Após o aceite, a instalação é agendada e o sistema entra em operação. Suporte e manutenção começam imediatamente."
      forWhom="Lojas em shopping com prazo de contrato definido. Escritórios em coworking ou em endereço temporário. Franquias que abrem várias unidades em sequência. Empresas em crescimento que ainda não têm escala pra investir em ativo. Negócios que querem migrar de modelo CAPEX pra OPEX. Empresas familiares que preferem custo previsível."
      faq={[
        { question: "Posso comprar o equipamento depois?", answer: "Sim. Em contratos de longo prazo tem cláusula de aquisição com valor residual reduzido após determinado período." },
        { question: "E se eu mudar de endereço?", answer: "A Telex desinstala no endereço antigo e reinstala no novo, dentro do contrato vigente, sem custo adicional dentro da mesma região metropolitana." },
        { question: "Tem fidelidade?", answer: "Depende do contrato. Curto prazo (até 12 meses) sem fidelidade. Médio e longo prazo têm prazo mínimo proporcional ao desconto na mensalidade." },
        { question: "A manutenção tem limite?", answer: "Não tem limite de chamado por incidente legítimo. Manutenção em equipamento danificado por uso indevido é avaliada caso a caso." },
        { question: "O que acontece no fim do contrato?", answer: "Você pode renovar com upgrade de tecnologia, contratar a aquisição do parque ou devolver o equipamento e encerrar." },
      ]}
      cta={{
        title: "Pronto pra começar?",
        subtitle: "Conte o cenário da sua empresa. A Telex devolve uma proposta em até 24 horas.",
        primary: { label: "Pedir orçamento de locação comercial", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
        secondary: { label: "Falar com consultor no WhatsApp", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
      }}
    />
  );
}
