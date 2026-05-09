import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Locação de CFTV e Alarme para Casas e Apartamentos | Telex",
  description: "Câmeras, alarmes e cerca elétrica em locação para residências de alto padrão. Instalação técnica, manutenção e suporte sem custo extra. Telex.",
};

export default function LocacaoResidencialPage() {
  return (
    <ServicePageLayout
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Aluguel", href: "/#aluguel" },
        { label: "Locação Residencial" },
      ]}
      title="Locação de segurança eletrônica para residências de alto padrão"
      lead="Câmeras, alarmes, sensores e cerca elétrica em locação mensal pra casas, apartamentos e propriedades de alto padrão. Instalação técnica, manutenção e suporte direto da Telex. Sem custo de equipamento, só o serviço. Atendimento em Santo André e no ABC paulista."
      problem={[
        "Quem investe em casa de alto padrão geralmente cuida da segurança como projeto. Mas cuidar da segurança como projeto é caro: câmera profissional, central de alarme corporativa, cerca elétrica certificada, sensores de qualidade, infraestrutura pra integrar tudo. O investimento facilmente passa dos R$ 30 mil. E depois disso vem a manutenção. Câmera que falha. Sensor de presença com bateria pra trocar. Cerca elétrica com fio rompido pelo galho da árvore.",
        "Cada problema vira um chamado, uma hora técnica, um deslocamento. E o pior: quem fica responsável é o morador, no horário do morador, com o tempo do morador.",
      ]}
      solution={{
        intro: "A Telex faz instalação residencial com padrão técnico de empresa, mas em modelo de locação. O equipamento é da Telex, a manutenção é da Telex, o suporte é da Telex. O morador paga uma mensalidade e tem o sistema sempre operando, sempre atualizado.",
        blocks: [
          { icon: "award", title: "Padrão profissional em residência", description: "Câmera com resolução real (não a do papel), instalação por equipe técnica, cabeamento adequado, central de alarme corporativa, cerca elétrica com laudo. Mesma qualidade que a Telex entrega em empresa, na sua casa." },
          { icon: "messagecircle", title: "Suporte direto, sem call center", description: "Você tem o WhatsApp do gestor de conta. Suporte direto com a equipe técnica que conhece sua casa. Sem URA, sem espera, sem repetir o problema 3 vezes." },
          { icon: "wrench", title: "Manutenção e troca sem custo extra", description: "Sensor descalibrado, câmera com problema, central que parou: a Telex resolve dentro do contrato. Sem cobrança de hora técnica. Sem visita avulsa." },
        ],
      }}
      howItWorks="A Telex visita a residência, levanta os pontos críticos (entradas, áreas externas, garagem, áreas internas com objeto de valor) e apresenta projeto técnico com a posição de cada câmera, sensor e elemento de cerca elétrica. Após aprovação, a instalação é feita por equipe técnica com cuidado especial em ambiente residencial (limpeza, horários, comunicação com o morador)."
      forWhom="Casas em condomínios fechados. Apartamentos de cobertura. Sítios e propriedades rurais com casa principal. Casas em bairro nobre. Residências com obra de arte, vinho, joia ou outros itens de valor. Famílias que viajam com frequência e querem visualização remota. Quem prefere um único fornecedor responsável pela segurança da residência."
      faq={[
        { question: "A instalação faz furo na parede?", answer: "A equipe técnica busca a melhor passagem com mínimo impacto visual. Em casas com forro, o cabo passa pelo forro. Em ambiente sem forro, a equipe usa eletroduto aparente discreto ou propõe a passagem por dentro da parede com pequeno reparo de pintura." },
        { question: "Posso ver as câmeras quando viajo?", answer: "Sim, pelo aplicativo no celular, em qualquer lugar com internet." },
        { question: "E se o morador apertar o botão de pânico do alarme?", answer: "Acionamento direto na central, com aviso pra contatos cadastrados. Em pacotes com monitoramento profissional, a central aciona equipe especializada (parceira) imediatamente." },
        { question: "Trabalhar com cerca elétrica é seguro?", answer: "A cerca elétrica é instalada por técnico habilitado, com laudo de conformidade. O choque é não-letal e dimensionado pela norma técnica. Crianças e animais domésticos são considerados no projeto." },
        { question: "E quando eu mudar de casa?", answer: "A Telex desinstala e reinstala no novo endereço, dentro do contrato." },
      ]}
      cta={{
        title: "Pronto pra começar?",
        subtitle: "Conte o cenário da sua residência. A Telex devolve uma proposta em até 24 horas.",
        primary: { label: "Pedir orçamento residencial", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
        secondary: { label: "Falar com consultor no WhatsApp", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
      }}
    />
  );
}
