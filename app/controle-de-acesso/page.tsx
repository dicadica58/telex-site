import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Controle de Acesso por Biometria e Cartão | Telex",
  description: "Catraca, leitor biométrico, cartão de proximidade e fechadura eletrônica para empresas. Histórico de acesso e integração com folha de ponto. Telex.",
};

export default function ControleDeAcessoPage() {
  return (
    <ServicePageLayout
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Serviços", href: "/servicos/seguranca" },
        { label: "Controle de Acesso" },
      ]}
      title="Controle de acesso por biometria, cartão e QR code"
      lead="Catraca, leitor biométrico, cartão de proximidade e fechadura eletrônica integrados num único sistema. Histórico completo de quem entrou, quando, e por onde, com integração com folha de ponto e relatórios sob medida. A Telex implanta controle de acesso em empresas, indústrias, condomínios e órgãos públicos em Santo André e no ABC paulista."
      problem={[
        "Controle de acesso virou requisito básico em qualquer empresa séria. Mas a maior parte dos sistemas instalados está desatualizada, isolada ou mal implantada. Catraca que registra entrada mas não fala com a folha de ponto. Leitor biométrico que falha em 1 em cada 5 leituras. Cartão de proximidade que pode ser clonado em 30 segundos. Fechadura eletrônica que para na primeira queda de luz.",
        "Sem dados confiáveis, controle de acesso vira teatro de segurança. A pessoa entra, mas o registro não é confiável. Auditoria reclama. RH desconfia. Síndico não consegue saber quem está no prédio em caso de emergência.",
      ]}
      solution={{
        intro: "A Telex implanta controle de acesso com tecnologia adequada pro ambiente: biometria de alta precisão pra empresa de tecnologia, cartão de proximidade com criptografia pra fluxo alto, QR code pra visitante, fechadura eletrônica com bateria de backup pra sala restrita. Tudo integrado, tudo registrado.",
        blocks: [
          { icon: "fingerprint", title: "Biometria, cartão ou QR code", description: "Cada ponto de acesso recebe a tecnologia adequada. Sala restrita: biometria. Entrada principal: cartão. Visitante: QR code temporário enviado por email. Cada acesso fica registrado com identidade, data, hora e local." },
          { icon: "clock", title: "Integração com folha de ponto", description: "O sistema fala diretamente com a folha de ponto, exporta relatório padrão da Receita Federal, registra horas trabalhadas com precisão. Sem dupla digitação, sem ajuste manual, sem risco de inconsistência." },
          { icon: "barchart3", title: "Relatórios sob medida", description: "Relatório de quem está no prédio agora. Histórico de acesso por colaborador. Tentativas de acesso negado. Permanência por área. Dados disponíveis pra auditoria, RH, segurança e compliance." },
        ],
      }}
      howItWorks="A Telex faz levantamento dos pontos de controle (entrada, recepção, áreas restritas, garagem, sala de servidor) e propõe a tecnologia adequada pra cada um. A integração com folha de ponto e ERP é planejada antes da instalação. O sistema é configurado, testado, e a equipe da empresa recebe treinamento pra usar e administrar."
      forWhom="Empresas a partir de 30 colaboradores. Indústrias com áreas restritas. Datacenter ou sala de TI com obrigação de registro. Condomínios residenciais e comerciais. Órgãos públicos e instituições com controle obrigatório. Escolas técnicas e universidades. Academias com fluxo alto. Qualquer ambiente que precisa de evidência de quem entrou e quando."
      faq={[
        { question: "Biometria é melhor que cartão?", answer: "Depende. Biometria não pode ser clonada nem emprestada, mas falha em alguns casos (dedo machucado, sujeira). Cartão é mais rápido em fluxo alto. A Telex recomenda a tecnologia certa pra cada ponto, e em ambientes críticos usa as duas combinadas (biometria + cartão)." },
        { question: "E se cair a internet?", answer: "O sistema funciona offline. Os dispositivos têm memória local que registra o acesso e sincroniza com a central quando a conexão volta." },
        { question: "Como funciona pra visitante?", answer: "QR code temporário enviado por email ou SMS, válido pelo tempo da visita. Após o uso, o código é invalidado automaticamente." },
        { question: "Integra com qualquer folha de ponto?", answer: "A Telex tem integração nativa com os principais sistemas (ADP, Senior, TOTVS, LG, Sankhya). Pra outros sistemas, geralmente é possível via API." },
        { question: "A fechadura eletrônica funciona se faltar luz?", answer: "Sim. A fechadura tem bateria interna com autonomia de horas a dias, dependendo do modelo. Em queda longa, é destravada com chave mecânica de backup." },
      ]}
      cta={{
        title: "Pronto pra começar?",
        subtitle: "Conte o cenário da sua empresa. A Telex devolve uma proposta em até 24 horas.",
        primary: { label: "Pedir orçamento de controle de acesso", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
        secondary: { label: "Falar com especialista no WhatsApp", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
      }}
    />
  );
}
