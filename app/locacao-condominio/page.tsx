import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Locação de CFTV, Interfonia e Portaria para Condomínio | Telex",
  description: "Sistema completo para condomínios em locação: CFTV, interfonia, vídeo porteiro, controle de acesso e alarme. Mensalidade única, sem investimento.",
};

export default function LocacaoCondominioPage() {
  return (
    <ServicePageLayout
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Serviços", href: "/servicos/condominios" },
        { label: "Locação para Condomínio" },
      ]}
      title="Locação de CFTV, interfonia e portaria para condomínios"
      lead="Sistema completo de segurança e comunicação condominial em modelo de locação. CFTV, interfonia, vídeo porteiro, controle de acesso e alarme numa única mensalidade. A Telex atende condomínios residenciais e comerciais em Santo André e em todo o ABC paulista, com manutenção e troca de equipamento incluídos no contrato."
      problem={[
        "Síndico que aprova investimento alto em segurança fica de cabelo branco. A assembleia leva meses pra aprovar a verba. Quando aprova, o orçamento já está desatualizado. Depois da instalação, vem a manutenção, que ninguém previu, e o rateio extra no condomínio.",
        "Outro problema é o equipamento que envelhece. CFTV instalado em 2018 já está obsoleto. Interfonia analógica antiga está sem peça de reposição. Cerca elétrica precisa de manutenção todo ano. E cada item desses gera nova assembleia, novo rateio, novo desgaste do síndico com os condôminos.",
        "Locação resolve a maior parte disso. Custo previsível, equipamento sempre atualizado, sem rateio surpresa.",
      ]}
      solution={{
        intro: "A Telex monta o sistema integrado de segurança e comunicação do condomínio em locação mensal. Toda a infraestrutura, instalação, manutenção e troca de equipamento numa única mensalidade aprovada pela assembleia uma vez.",
        blocks: [
          { icon: "package", title: "Pacote completo numa mensalidade", description: "CFTV, interfonia, vídeo porteiro, controle de acesso e alarme num único contrato. Síndico não precisa lidar com 4 fornecedores diferentes. Manutenção, troca e suporte centralizados." },
          { icon: "sparkles", title: "Equipamento sempre atualizado", description: "Tecnologia avançou? A Telex troca o equipamento durante o contrato, sem custo extra pro condomínio. Câmera 4K, fechadura inteligente, app de morador, tudo dentro do escopo de evolução tecnológica do contrato." },
          { icon: "piggybank", title: "Sem rateio surpresa", description: "A mensalidade é fixa e previsível. Sem chamada de capital pra repor equipamento queimado. Sem orçamento extra pra peça que saiu de linha. Sem assembleia urgente pra aprovar manutenção corretiva." },
        ],
      }}
      howItWorks="A Telex faz visita técnica no condomínio, levanta as áreas críticas (portaria, garagem, área comum, perímetro) e apresenta projeto completo pra apreciação da assembleia. Após aprovação, a instalação é planejada pra acontecer com o mínimo impacto na rotina dos moradores. O síndico tem ponto de contato dedicado pra acompanhar."
      forWhom="Condomínios residenciais com 30 a 500 unidades. Condomínios comerciais e empresariais. Loteamentos fechados. Edifícios mistos com unidades comerciais e residenciais. Síndicos profissionais que gerenciam várias administrações. Construtoras que entregam empreendimento e precisam de fornecedor consolidado pro pós-obra."
      faq={[
        { question: "Quanto tempo dura a instalação?", answer: "Depende do tamanho do condomínio. Edifício de 50 unidades: cerca de 2 semanas. Loteamento de 200 casas: 6 a 8 semanas. Tudo planejado pra não interromper a entrada e saída de moradores." },
        { question: "Vocês trocam o sistema antigo aos poucos ou de uma vez?", answer: "Pode ser feito em fases. A Telex apresenta projeto de migração que respeita orçamento da assembleia e prioridades do síndico." },
        { question: "O morador precisa instalar app?", answer: "Pra recursos avançados (interfone no celular, abertura remota de portão, vídeo da portaria) sim. Pros recursos básicos não, o sistema funciona pelos aparelhos físicos da unidade." },
        { question: "Quem paga manutenção?", answer: "Está incluída na mensalidade. Sem custo adicional dentro do escopo do contrato." },
        { question: "E quando troca o síndico?", answer: "A Telex tem ponto de contato profissional que continua atendendo o condomínio independente da troca de gestão. A documentação técnica está sempre atualizada." },
      ]}
      cta={{
        title: "Pronto pra começar?",
        subtitle: "Conte o cenário do seu condomínio. A Telex devolve uma proposta em até 24 horas.",
        primary: { label: "Pedir orçamento para condomínio", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
        secondary: { label: "Falar com especialista em condomínios", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
      }}
    />
  );
}
