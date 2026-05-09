import type { Metadata } from "next";
import { TopBar, Header } from "../../components/Header";
import Footer from "../../components/Footer";
import Icon from "../../components/Icon";

export const metadata: Metadata = {
  title: "Telecom e Conectividade | Telex",
  description:
    "Rede, internet por fibra, telefonia em nuvem e Wi-Fi corporativo. Projeto, instalação e suporte da Telex.",
};

const services = [
  {
    id: "rede",
    icon: "network",
    name: "Rede de computadores",
    description:
      "Cabeamento estruturado CAT6 e CAT6A com certificação ponto a ponto, switches gerenciáveis e racks organizados por padrão técnico.",
    bullets: [
      "certificação de cada ponto após instalação",
      "switches com gerenciamento remoto",
      "documentação técnica entregue ao cliente",
    ],
  },
  {
    id: "fibra",
    icon: "cable",
    name: "Internet por fibra óptica",
    description:
      "Link dedicado e link compartilhado com SLA real. Redundância opcional para operações que não admitem queda.",
    bullets: [
      "SLA escrito em contrato",
      "segundo link como contingência",
      "acompanhamento de banda em tempo real",
    ],
  },
  {
    id: "telefonia",
    icon: "phone",
    name: "Telefonia digital e em nuvem",
    description:
      "PABX em nuvem, ramais virtuais e gravação de chamadas. Sem central física, sem manutenção de hardware.",
    bullets: [
      "ramais no celular do colaborador",
      "gravação de chamadas com retenção configurável",
      "integração com URA e fila de atendimento",
    ],
  },
  {
    id: "wifi",
    icon: "wifi",
    name: "Wi-Fi corporativo Ubiquiti",
    description:
      "Wi-Fi 7 com cobertura uniforme, roaming sem perda de pacote e gerenciamento centralizado.",
    bullets: [
      "dimensionamento por densidade de dispositivos",
      "rede separada para visitantes",
      "relatórios de uso por área",
    ],
  },
];

export default function TelecomPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="page-hero">
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Navegação">
              <a href="/">Início</a>
              <span className="sep">/</span>
              <span>Serviços</span>
              <span className="sep">/</span>
              <span className="current">Telecom e Conectividade</span>
            </nav>
            <h1 className="page-title">Telecom e Conectividade</h1>
            <p className="page-subtitle">
              A base que sua operação não percebe quando funciona, e percebe demais quando para.
              Rede, internet e telefonia projetadas, instaladas e mantidas pela mesma equipe.
            </p>
          </div>
        </section>

        <section className="services-list">
          <div className="wrap">
            {services.map((s) => (
              <article key={s.id} className="service-row">
                <div className="service-icon">
                  <Icon name={s.icon} size={28} />
                </div>
                <div className="service-content">
                  <h2 className="service-name">{s.name}</h2>
                  <p className="service-desc">{s.description}</p>
                  <ul className="service-bullets">
                    {s.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="page-cta">
          <div className="wrap">
            <h3>Pronto pra um orçamento?</h3>
            <p>Conte o cenário do seu negócio. A gente devolve uma proposta em até 24 horas.</p>
            <div className="cta-buttons">
              <a href="https://wa.me/551149927089" className="btn btn-amber">
                Pedir orçamento de telecom <span className="arr">→</span>
              </a>
              <a href="https://wa.me/551149927089" className="btn btn-ghost-light">
                Falar com especialista no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
