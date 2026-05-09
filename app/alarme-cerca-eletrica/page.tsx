import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Alarme Empresarial e Cerca Elétrica em SP | Telex",
  description: "Sistema de alarme com sensores, central monitorada e cerca elétrica certificada para empresas, condomínios e residências. Telex em Santo André.",
};

export default function AlarmeCercaPage() {
  return (
    <ServicePageLayout
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Serviços", href: "/servicos/seguranca" },
        { label: "Alarme e Cerca Elétrica" },
      ]}
      title="Alarme empresarial e cerca elétrica integrados num único sistema"
      lead="Sensores de presença, abertura, quebra de vidro e barreira por infravermelho integrados a cerca elétrica de alta voltagem com laudo técnico. Acionamento e desarme pelo celular, central monitorada e histórico completo de eventos. A Telex protege empresas, condomínios e residências em Santo André e no ABC paulista."
      problem={[
        "Alarme isolado é vulnerável. A pessoa pula o muro, chega na porta, e nesse momento o alarme só vai disparar quando ela abrir. Um minuto a mais e ela já está dentro. Cerca elétrica isolada também é vulnerável: se cortarem o fio, ela para de funcionar e ninguém é avisado.",
        "A integração entre alarme e cerca elétrica resolve isso. Tentou pular, a cerca dispara e o alarme sabe disso. Cortou o fio da cerca, o alarme dispara também. Os dois sistemas conversam, e qualquer movimento suspeito gera resposta imediata.",
        "Outro problema é o sistema antigo isolado, sem celular, sem app, sem histórico. Você só sabe que aconteceu alguma coisa quando chega no local. Sem visualização, sem evidência, sem registro pra investigar.",
      ]}
      solution={{
        intro: "A Telex projeta o sistema de alarme integrado à cerca elétrica, com sensores dimensionados pelo ambiente, central monitorada e tudo integrado ao celular do gestor ou morador. Sistema moderno, com histórico, com evidência e com responsabilidade.",
        blocks: [
          { icon: "radar", title: "Sensores dimensionados pelo ambiente", description: "Sensor de presença em corredor de passagem, sensor de abertura em porta e janela, sensor de quebra de vidro em vitrine, barreira infravermelha em portão. Cada sensor escolhido pelo ponto crítico real, não por padrão genérico." },
          { icon: "zap", title: "Cerca elétrica integrada com laudo", description: "Cerca elétrica de alta voltagem (não-letal), instalada dentro da norma, com laudo técnico assinado. Integração com o alarme: corte do fio, tentativa de pulo ou aproximação anormal aciona o disparo." },
          { icon: "smartphone", title: "Acionamento e desarme pelo celular", description: "Pelo aplicativo, o gestor arma e desarma o sistema, recebe alerta de evento, vê o histórico completo, controla quem tem acesso. Sem código no teclado, sem chave física esquecida, sem confusão." },
        ],
      }}
      howItWorks="A Telex faz visita técnica no imóvel, identifica pontos vulneráveis (acesso, perímetro, área interna com objeto de valor) e apresenta projeto com posição de cada sensor, especificação da cerca elétrica e localização da central. A instalação é feita por equipe técnica habilitada, com teste de cada sensor e laudo de cerca elétrica entregue ao cliente."
      forWhom="Empresas com pátio externo ou estoque. Indústrias em região afastada. Lojas com vitrine na rua. Condomínios residenciais e comerciais. Residências de alto padrão. Galpões logísticos. Postos de combustível. Qualquer operação que precisa de proteção perimetral integrada à proteção interna."
      faq={[
        { question: "A cerca elétrica é perigosa pra crianças e animais?", answer: "A cerca é dimensionada pra causar choque não-letal, dentro da norma técnica brasileira. O dimensionamento considera contato eventual de criança ou animal doméstico. Mesmo assim, a instalação é planejada pra ficar fora do alcance natural." },
        { question: "Quanto tempo dura a bateria do sensor?", answer: "Sensores sem fio têm bateria de longa duração, em torno de 3 a 5 anos. A central avisa quando a bateria está baixa, com tempo pra trocar antes de falhar." },
        { question: "O sistema funciona se faltar luz?", answer: "Sim. A central tem bateria interna que mantém o sistema operando por 12 a 24 horas, dependendo do dimensionamento. Sensores sem fio têm bateria própria." },
        { question: "A monitoração 24h é própria ou terceirizada?", answer: "A monitoração profissional é feita por central parceira especializada, com ART, com histórico, com responsabilidade técnica. A Telex coordena a integração e responde pelo sistema instalado." },
        { question: "Posso só locar o equipamento sem monitoramento?", answer: "Sim. O sistema funciona com acionamento e desarme pelo proprietário, sem monitoramento profissional. O alerta vai pro celular cadastrado." },
      ]}
      cta={{
        title: "Pronto pra começar?",
        subtitle: "Conte o cenário da sua empresa. A Telex devolve uma proposta em até 24 horas.",
        primary: { label: "Pedir orçamento de alarme e cerca", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
        secondary: { label: "Falar com especialista no WhatsApp", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
      }}
    />
  );
}
