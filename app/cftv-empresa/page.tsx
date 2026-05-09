import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "CFTV para Empresas em Santo André e ABC | Telex",
  description: "Câmeras de monitoramento para empresas com gravação em nuvem, 4K e visualização ao vivo no celular. Instalação técnica e suporte direto da Telex.",
};

export default function CftvEmpresaPage() {
  return (
    <ServicePageLayout
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Serviços", href: "/servicos/seguranca" },
        { label: "CFTV para Empresas" },
      ]}
      title="Sistema de CFTV para empresas com monitoramento ao vivo"
      lead="Câmeras profissionais com gravação em nuvem e visualização remota pelo celular. A Telex projeta, instala e mantém o sistema de CFTV da sua empresa em Santo André e em todo o ABC paulista, do ponto comercial à filial industrial. Sem custo de hardware quando contratado por locação."
      problem={[
        "A maioria das empresas só descobre o problema do CFTV quando precisa rever uma gravação e percebe que a câmera está gravando há semanas em qualidade ruim, com ângulo errado, ou nem está gravando. Equipamento barato instalado por eletricista vira um falso senso de segurança. Quando o incidente acontece, a imagem não serve nem pra investigação nem pra perícia.",
        "Outro problema comum é o sistema isolado. Câmeras gravam num DVR antigo na sala do contador, sem acesso remoto. Se o gestor está fora da empresa, não consegue ver o que está acontecendo. Em caso de furto do próprio DVR, a gravação vai junto.",
      ]}
      solution={{
        intro: "A Telex instala câmeras profissionais com resolução adequada ao ambiente, ângulo calculado por planta baixa e gravação em nuvem ou local com redundância. Cada câmera é dimensionada pelo objetivo: identificação de pessoa, leitura de placa, controle de área aberta ou monitoramento de processo industrial.",
        blocks: [
          { icon: "smartphone", title: "Visualização remota pelo celular", description: "O gestor acompanha em tempo real pelo aplicativo, com qualidade e fluidez. Histórico de gravação acessível de qualquer lugar. Permissões configuráveis por usuário, ideal para empresas com vários sócios ou gestores." },
          { icon: "cloud", title: "Gravação em nuvem com retenção configurável", description: "30, 60 ou 90 dias de gravação em nuvem com criptografia. Mesmo se o equipamento físico for danificado ou furtado, a gravação fica preservada. Sem necessidade de manutenção de servidor próprio." },
          { icon: "eye", title: "Análise inteligente de eventos", description: "Configuração de alertas por movimento em áreas restritas, detecção de pessoa em horário não comercial e contagem de acesso. A central recebe a notificação no celular antes de qualquer outra ação." },
        ],
      }}
      howItWorks="A Telex visita a empresa, levanta os pontos críticos com o gestor e entrega um projeto técnico com a posição de cada câmera, modelo recomendado e tipo de gravação. A instalação é feita por equipe própria, com cabeamento dimensionado pra suportar a transmissão sem perda de qualidade. Após a instalação, o sistema é configurado com o gestor presente, e a equipe de suporte fica disponível pra ajustes nos primeiros 30 dias."
      forWhom="Empresas a partir de 50 metros quadrados com qualquer porta de acesso. Comércio com fluxo de clientes. Indústria com pátio externo. Escritório administrativo com sala de servidores ou cofre. Postos de combustíveis, autopeças, lojas de conveniência. Qualquer operação que precise de evidência audiovisual em caso de incidente ou auditoria."
      faq={[
        { question: "Quantas câmeras minha empresa precisa?", answer: "Depende do tamanho do imóvel, dos pontos de acesso e do objetivo (identificação, vigilância geral, registro de processo). Numa visita técnica de 30 minutos, a Telex levanta isso e te entrega o projeto sem custo." },
        { question: "A gravação fica salva por quanto tempo?", answer: "Configurável entre 30, 60 e 90 dias. Para empresas que precisam manter gravação por mais tempo (auditoria, compliance), tem a opção de retenção estendida com custo proporcional." },
        { question: "Funciona em ambiente externo?", answer: "Sim. As câmeras externas têm proteção contra chuva, sol e impacto, com visão noturna por infravermelho. A instalação considera ângulo, alcance e proteção contra vandalismo." },
        { question: "Posso ver as câmeras pelo celular?", answer: "Sim, em qualquer lugar com internet. O aplicativo mostra ao vivo e permite revisar gravações com busca por data e horário." },
        { question: "E se eu quiser expandir o sistema depois?", answer: "A infraestrutura é dimensionada pra crescer. Adicionar câmeras é só conectar e configurar, sem refazer cabeamento." },
      ]}
      cta={{
        title: "Pronto pra começar?",
        subtitle: "Conte o cenário da sua empresa. A Telex devolve uma proposta em até 24 horas.",
        primary: { label: "Pedir orçamento de CFTV", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
        secondary: { label: "Falar com especialista no WhatsApp", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
      }}
    />
  );
}
