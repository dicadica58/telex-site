import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Cabeamento Estruturado CAT6 e CAT6A em SP | Telex",
  description: "Cabeamento estruturado certificado CAT6 e CAT6A para empresas. Projeto, instalação, certificação e documentação técnica. Telex em Santo André e ABC.",
};

export default function CabeamentoEstruturadoPage() {
  return (
    <ServicePageLayout
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Serviços", href: "/servicos/telecom" },
        { label: "Cabeamento Estruturado" },
      ]}
      title="Cabeamento estruturado certificado pra empresas que dependem de rede"
      lead="Rede física projetada pra durar 15 anos, com certificação ponto a ponto e documentação técnica completa. A Telex faz cabeamento estruturado CAT6 e CAT6A em empresas, indústrias, escolas e prédios comerciais em Santo André e em todo o ABC paulista. Cada ponto certificado, cada rack documentado."
      problem={[
        "Cabeamento mal feito é um dos problemas mais caros que existem em TI, e o mais difícil de descobrir. A rede funciona, mas com lentidão intermitente. Telefonia tem chiado. Câmera reseta sozinha. Switch reinicia toda terça. O suporte de TI gasta horas tentando achar o problema no software, no servidor, no provedor, e no fim a causa é cabo CAT5 antigo, ponto sem certificação, ou rack montado sem padrão técnico.",
        "Pior: quando precisa expandir, ninguém sabe qual cabo vai pra onde. Não tem documentação. A planta é uma rede de cabos no forro que cresceu organicamente nos últimos 10 anos. Adicionar uma estação de trabalho vira um projeto de uma semana.",
      ]}
      solution={{
        intro: "A Telex faz cabeamento estruturado pelo padrão técnico adequado pra cada operação: CAT6 para empresas comerciais e administrativas, CAT6A para ambientes industriais ou que precisam de Power over Ethernet de alta potência. Toda a malha é certificada com aparelho profissional após a instalação, e cada ponto recebe etiqueta única com seu identificador no rack.",
        blocks: [
          { icon: "checkcircle", title: "Certificação ponto a ponto", description: "Cada cabo é testado em todos os pares, em todas as frequências, com relatório técnico assinado. Atenuação, NEXT, return loss, propagation delay. Se algum ponto não passa no teste, é refeito. Sem ponto certificado pela palavra, todos vão pelo aparelho." },
          { icon: "server", title: "Racks organizados por padrão técnico", description: "Patch panel separado por função (rede, telefonia, câmeras), guias horizontais e verticais, identificação de cada porta, organizadores de cabo internos. Quem abre o rack na manutenção encontra tudo claro. Quem expande não desconecta nada por engano." },
          { icon: "filetext", title: "Documentação técnica entregue ao cliente", description: "Planta com posição de cada ponto, lista de identificação de patch panel, mapa de switches, registro do que cada porta atende. A documentação fica com você. Se algum dia trocar de fornecedor, ele já recebe o sistema mapeado." },
        ],
      }}
      howItWorks="A Telex faz visita técnica com planta baixa em mãos e levanta os pontos com você: estação de trabalho, telefone IP, ponto de acesso Wi-Fi, câmera, equipamento de impressão, ponto futuro pra expansão. O projeto considera a categoria adequada, o caminho do cabo, a divisão de circuitos e o crescimento previsto pros próximos cinco anos. A instalação é feita por equipe própria, com horário negociado pra não impactar a operação."
      forWhom="Empresas em obra ou reforma. Mudança pra novo endereço. Implantação de TI numa empresa que cresceu sem planejamento. Indústria com expansão de pavilhão. Escola técnica ou escritório que vai aumentar o quadro. Qualquer operação a partir de 8 estações de trabalho que precisa de uma rede que dure."
      faq={[
        { question: "Qual a diferença entre CAT6 e CAT6A?", answer: "CAT6 suporta velocidades até 1 Gbps com folga e até 10 Gbps em distâncias curtas. CAT6A suporta 10 Gbps em qualquer distância dentro do padrão. Pra empresa comercial CAT6 atende. Pra indústria, datacenter ou ambiente com Power over Ethernet de alta potência (câmeras 4K, access points Wi-Fi 6/7), CAT6A é o caminho certo." },
        { question: "Quanto tempo dura uma instalação?", answer: "Depende do tamanho. Empresa com 20 pontos: 2 a 3 dias. Empresa com 100 pontos: 1 a 2 semanas. Tudo planejado pra não parar a operação no horário comercial." },
        { question: "Vocês fazem só a instalação ou também o projeto?", answer: "Os dois. O projeto vem antes da instalação e fica documentado. Se você já tem projeto feito por outro engenheiro, a Telex executa e certifica." },
        { question: "Já tenho cabeamento, vocês refazem só os pontos com problema?", answer: "Sim. A Telex faz auditoria do cabeamento existente, identifica os pontos com problema e refaz só o que precisa, certificando o que ficar." },
        { question: "A documentação fica em qual formato?", answer: "Planta em PDF e arquivo CAD, lista de pontos em planilha, fotos do rack antes e depois. Tudo entregue digital pra você arquivar com a documentação da empresa." },
      ]}
      cta={{
        title: "Pronto pra começar?",
        subtitle: "Conte o cenário da sua empresa. A Telex devolve uma proposta em até 24 horas.",
        primary: { label: "Pedir orçamento de cabeamento", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
        secondary: { label: "Falar com engenheiro responsável", href: "https://wa.me/551149927089?text=Oi%2C%20quero%20pedir%20um%20or%C3%A7amento" },
      }}
    />
  );
}
