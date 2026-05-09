import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Interfonia, Vídeo Porteiro e Portaria Remota | Telex",
  description: "Interfonia coletiva, vídeo porteiro e interfone no celular do morador. Sistema integrado para condomínios em Santo André e ABC paulista.",
};

export default function ComunicacaoCondominioPage() {
  return (
    <ServicePageLayout
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Serviços", href: "/servicos/condominios" },
        { label: "Comunicação Condominial" },
      ]}
      title="Interfonia, vídeo porteiro e portaria remota num único sistema"
      lead="Sistema integrado de comunicação condominial: interfonia coletiva entre portaria e unidades, vídeo porteiro com tela colorida, interfone no celular do morador e portaria remota com vídeo. Tudo num único contrato, com manutenção 24 horas. A Telex atende condomínios em Santo André e no ABC paulista."
      problem={[
        "Comunicação condominial costuma ser uma colcha de retalhos. Interfonia analógica antiga que ninguém entende mais. Vídeo porteiro instalado por fornecedor diferente, sem integração. Morador novo que não consegue receber visita porque o aparelho não funciona. Portaria que liga pra quem não está em casa porque o morador esqueceu de avisar que ia viajar.",
        "Em condomínio com muitas unidades, isso vira problema operacional. Visitante esperando 10 minutos no portão. Morador frustrado. Síndico recebendo reclamação. Porteiro perdendo tempo com ligação errada.",
      ]}
      solution={{
        intro: "A Telex integra todos os sistemas de comunicação condominial num único projeto técnico, com sub-sistemas que conversam entre si. Interfonia coletiva moderna, vídeo porteiro com app pro celular, e portaria remota pra condomínio sem porteiro presencial.",
        blocks: [
          { icon: "phonecall", title: "Interfonia coletiva moderna", description: "Substituição da central antiga por sistema digital que funciona com infraestrutura existente. Sem quebra de parede, sem obra extensa. Qualidade de voz superior, identificação por número de apartamento, manutenção 24 horas." },
          { icon: "video", title: "Vídeo porteiro com tela colorida e app", description: "Câmera na portaria, tela colorida em cada unidade, e o mesmo vídeo disponível no aplicativo do celular do morador. Visitante identificado antes da liberação, mesmo se o morador estiver fora." },
          { icon: "smartphone", title: "Interfone no celular do morador", description: "O aplicativo do celular substitui o aparelho fixo. Morador atende a portaria de qualquer lugar do mundo. Libera entrada de visitante mesmo viajando. Útil pra quem mora sozinho, pra segunda residência, pra casa de praia." },
        ],
      }}
      howItWorks="A Telex faz visita técnica no condomínio, levanta o estado da infraestrutura existente (interfonia antiga, vídeo porteiro, cabeamento) e apresenta projeto de modernização. A migração é planejada pra acontecer sem deixar o condomínio sem comunicação um único dia. Após instalação, os moradores recebem treinamento pra usar o aplicativo, e o síndico tem ponto de contato dedicado pra suporte."
      forWhom="Condomínios residenciais com 20 a 500 unidades. Loteamentos fechados. Edifícios mistos com comércio térreo. Condomínios comerciais. Síndico que quer modernizar a portaria sem grande obra. Construtora que entrega novo empreendimento e quer fornecedor consolidado pra entregar a comunicação pronta."
      faq={[
        { question: "Substituir o sistema antigo dá obra grande?", answer: "Não. A maior parte dos sistemas é trocada usando infraestrutura existente. Só substitui central, aparelhos e configura. Sem quebrar parede." },
        { question: "O morador velho que não tem celular vai conseguir usar?", answer: "Sim. O aparelho fixo continua funcionando normalmente. O aplicativo é uma camada extra, não substitui o aparelho." },
        { question: "E se o aplicativo travar quando a visita chega?", answer: "A portaria tem opções de fallback: ligação pro aparelho fixo se o app não atender, mensagem registrada se ninguém atender. O sistema é desenhado pra não deixar visitante na rua." },
        { question: "Funciona em condomínio com vários blocos?", answer: "Sim. O sistema é integrado entre blocos, e o morador pode chamar de qualquer apartamento pra qualquer outro do condomínio." },
        { question: "Quem paga a manutenção?", answer: "Está incluída no contrato de locação ou de manutenção recorrente. Manutenção corretiva 24 horas, sem custo extra dentro do escopo." },
      ]}
      cta={{
        title: "Pronto pra começar?",
        subtitle: "Conte o cenário do seu condomínio. A Telex devolve uma proposta em até 24 horas.",
        primary: { label: "Pedir orçamento de comunicação condominial", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
        secondary: { label: "Falar com especialista no WhatsApp", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
      }}
    />
  );
}
