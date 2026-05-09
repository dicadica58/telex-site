import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Manutenção de Redes e CFTV Recorrente | Telex",
  description: "Contrato de manutenção mensal para CFTV, alarmes, rede e telefonia. Atendimento prioritário, manutenção preventiva e troca incluída. Telex.",
};

export default function ManutencaoPage() {
  return (
    <ServicePageLayout
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Serviços", href: "/servicos/telecom" },
        { label: "Manutenção Recorrente" },
      ]}
      title="Manutenção recorrente que evita o problema antes da operação parar"
      lead="Contrato mensal de manutenção pra CFTV, alarme, rede de computadores, telefonia e Wi-Fi. Visitas técnicas preventivas, atendimento prioritário em incidente e substituição de equipamento incluída. Sua empresa em Santo André e no ABC com infraestrutura sempre operando, sem custo surpresa."
      problem={[
        "Sistema de CFTV, alarme e rede só dá problema quando você mais precisa. Câmera para de gravar uma semana antes do furto. Alarme falha no feriado prolongado. Switch de rede reinicia no dia da auditoria. Telefone do cliente importante chama no ramal errado. E quando você liga pro fornecedor que instalou, ou ele sumiu, ou cobra hora técnica avulsa, ou demora 3 dias pra atender.",
        "Empresa que depende de tecnologia precisa de quem responda rápido. Mas chamado avulso é caro, imprevisível e quase nunca preventivo. Você só age depois do problema, e geralmente o problema já causou prejuízo.",
      ]}
      solution={{
        intro: "A Telex oferece contratos de manutenção recorrente que incluem visita técnica preventiva mensal, atendimento prioritário em caso de incidente e substituição de equipamento dentro do escopo. Custo mensal previsível, infraestrutura estável.",
        blocks: [
          { icon: "calendarcheck", title: "Visita preventiva mensal", description: "A equipe técnica vai à empresa todo mês, verifica gravação das câmeras, testa sensores do alarme, audita os logs do switch, mede a banda da internet e revisa o estado dos equipamentos. Problemas são detectados antes de virarem incidente." },
          { icon: "headphones", title: "Atendimento prioritário 24 horas", description: "Cliente com contrato de manutenção tem fila de atendimento separada. Chamado entra na frente. Técnico vai à empresa em horário acordado, sem hora extra escondida na fatura. Suporte por WhatsApp, telefone ou portal." },
          { icon: "wrench", title: "Substituição de equipamento incluída", description: "Câmera queimou, switch falhou, central de alarme parou. Dentro do escopo do contrato, a Telex substitui sem cobrar equipamento. O contrato é dimensionado pra cobrir a vida útil esperada do parque instalado." },
        ],
      }}
      howItWorks="A Telex faz auditoria inicial do parque instalado: lista de equipamentos, idade, fabricante, situação atual. Com base nisso, monta um contrato dimensionado pro tamanho da operação e pelo SLA desejado. Mensalidade fixa, escopo claro, sem letra miúda. A primeira visita preventiva é agendada na semana seguinte à assinatura."
      forWhom="Empresas que já têm CFTV, alarme, rede ou telefonia instalados, mas estão sem fornecedor de manutenção. Empresas que dependem de TI mas não têm equipe interna pra cuidar disso. Comércios que abrem cedo e não podem ter sistema parado. Indústrias com chão de fábrica conectado. Síndicos que querem um único fornecedor responsável pelo prédio."
      faq={[
        { question: "Vocês fazem manutenção em equipamento instalado por outra empresa?", answer: "Sim. A Telex faz auditoria inicial, identifica o que dá pra manter, o que precisa ser substituído e monta o contrato com transparência." },
        { question: "Tem fidelidade?", answer: "Contratos têm prazo mínimo de 6 meses pra dar tempo da operação estabilizar. Após esse período, sem fidelidade." },
        { question: "Quantas visitas preventivas por mês?", answer: "Padrão é uma visita mensal, mas pode ser semanal ou quinzenal pra operações maiores. Tudo definido no contrato." },
        { question: "E se o equipamento estiver muito velho pra manter?", answer: "A auditoria inicial avalia isso. Se algum item está fora da vida útil, a Telex apresenta proposta de substituição, com a opção de comprar ou alugar." },
        { question: "Suporte só em horário comercial?", answer: "Padrão sim, com atendimento de emergência 24 horas pros sistemas críticos (CFTV, alarme). Operações que precisam de cobertura 24x7 contratam o adicional." },
      ]}
      cta={{
        title: "Pronto pra começar?",
        subtitle: "Conte o cenário da sua empresa. A Telex devolve uma proposta em até 24 horas.",
        primary: { label: "Pedir orçamento de manutenção", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
        secondary: { label: "Falar com gestor de contas no WhatsApp", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
      }}
    />
  );
}
