import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Fibra Óptica Empresarial com SLA Real | Telex",
  description: "Internet por fibra óptica dedicada para empresas com SLA escrito em contrato e redundância opcional. Telex em Santo André e ABC paulista.",
};

export default function FibraOpticaPage() {
  return (
    <ServicePageLayout
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Serviços", href: "/servicos/telecom" },
        { label: "Fibra Óptica Empresarial" },
      ]}
      title="Fibra óptica empresarial com SLA real e redundância"
      lead="Link dedicado de fibra com velocidade simétrica, SLA escrito em contrato e segundo link como contingência opcional. A Telex projeta e implanta a internet da sua empresa pensando em quem não pode ficar sem rede um único minuto. Operações críticas, indústria, comércio com PIX e escritórios distribuídos."
      problem={[
        "A maior parte das empresas usa o mesmo plano de internet residencial em escala maior. Velocidade alta no papel, mas compartilhada com o bairro inteiro. Em horário de pico, cai pra metade. O contrato não fala em SLA. Quando a internet cai, você liga, abre chamado, espera 4 horas. O técnico vem no dia seguinte. A operação para.",
        "Pior: tem um único link. Se cortar a fibra na rua, ou se o provedor sofrer um incidente, sua empresa fica fora do ar até ele resolver. Sem segundo caminho. Sem contingência.",
      ]}
      solution={{
        intro: "A Telex projeta a conectividade da empresa com link dedicado de fibra óptica, com SLA contratual, monitoramento 24 horas e redundância opcional. Internet que entrega o que promete, com responsabilidade escrita.",
        blocks: [
          { icon: "gauge", title: "Link dedicado com banda simétrica", description: "Velocidade igual no upload e no download. Sem compartilhamento com vizinhos. A banda contratada é entregue 100% durante 100% do tempo. Aplicações em nuvem, videoconferência, transferência de arquivos pesados, todas com a mesma fluidez." },
          { icon: "filesignature", title: "SLA escrito em contrato", description: "Acordo de nível de serviço com disponibilidade mensal mínima, tempo máximo de resposta a incidente e tempo máximo de resolução. Não cumprir o SLA gera desconto na fatura. O risco é nosso, não da operação do cliente." },
          { icon: "shieldcheck", title: "Redundância dual com failover automático", description: "Segundo link de provedora distinta, caminho físico independente, com chaveamento automático em caso de queda do principal. A operação não percebe a queda. O sistema continua online, e a equipe técnica é avisada pra investigar." },
        ],
      }}
      howItWorks="A Telex avalia o endereço, a infraestrutura disponível na rua e a malha de fibra dos provedores parceiros. Em alguns casos, é necessário trazer fibra nova até o prédio, e isso entra no projeto. A instalação inclui o roteador empresarial configurado, a documentação do enlace e o setup do monitoramento. A migração do link antigo é planejada pra acontecer sem interrupção da operação."
      forWhom="Empresas que dependem de sistemas em nuvem. ERPs hospedados. Comércio com TEF e PIX. Operações com videoconferência intensa. Indústrias com chão de fábrica conectado. Escritórios de advocacia, contabilidade, arquitetura. Qualquer operação que perde dinheiro a cada minuto offline."
      faq={[
        { question: "Quanto tempo demora pra instalar?", answer: "Se já tem fibra disponível na rua, em torno de 7 a 15 dias úteis. Se for necessário trazer fibra nova, depende do projeto civil, mas geralmente entre 30 e 60 dias." },
        { question: "Qual SLA vocês oferecem?", answer: "Disponibilidade mensal mínima de 99,5%, tempo de resposta a incidente em até 1 hora, tempo de resolução em até 8 horas. Tudo escrito em contrato com cláusula de desconto em caso de descumprimento." },
        { question: "E se a fibra principal cair?", answer: "Com redundância contratada, o segundo link assume automaticamente, sem perda de conexão. Sem redundância, a equipe técnica é acionada e o tempo de resolução começa a contar." },
        { question: "Posso usar com várias filiais?", answer: "Sim. A Telex faz projetos de WAN corporativa com VPN entre filiais, link dedicado em cada ponto e gerenciamento centralizado." },
        { question: "O roteador é meu ou alugado?", answer: "Depende do contrato. Pode ser comprado ou incluído na locação mensal, com manutenção e troca em caso de falha." },
      ]}
      cta={{
        title: "Pronto pra começar?",
        subtitle: "Conte o cenário da sua empresa. A Telex devolve uma proposta em até 24 horas.",
        primary: { label: "Pedir orçamento de fibra", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
        secondary: { label: "Falar com especialista no WhatsApp", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
      }}
    />
  );
}
