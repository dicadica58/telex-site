import type { Metadata } from "next";
import { TopBar, Header } from "../../components/Header";
import Footer from "../../components/Footer";
import Icon from "../../components/Icon";

export const metadata: Metadata = {
  title: "Segurança Eletrônica | Telex",
  description:
    "CFTV, alarmes, cerca elétrica e controle de acesso. Projeto, instalação e manutenção sob um único contrato.",
};

const services = [
  {
    id: "cftv",
    icon: "camera",
    name: "Câmeras de monitoramento",
    description:
      "CFTV com gravação local ou em nuvem, visualização ao vivo no celular e analítico de imagem opcional.",
    bullets: [
      "resolução 4K nas câmeras críticas",
      "gravação com retenção de 30 a 90 dias",
      "alertas por movimento em áreas restritas",
    ],
  },
  {
    id: "alarme",
    icon: "bellring",
    name: "Sistemas de alarme",
    description:
      "Alarme com sensores de presença, abertura e quebra de vidro. Central monitorada e acionamento direto pelo aplicativo.",
    bullets: [
      "sensores sem fio com bateria de longa duração",
      "acionamento e desarme pelo celular",
      "histórico completo de eventos",
    ],
  },
  {
    id: "cerca",
    icon: "zap",
    name: "Cerca elétrica",
    description:
      "Perímetro com cerca elétrica de alta voltagem, integrada ao alarme e ao monitoramento.",
    bullets: [
      "laudo técnico e instalação dentro da norma",
      "sirene e disparo automático em corte do fio",
      "manutenção preventiva incluída no contrato",
    ],
  },
  {
    id: "acesso",
    icon: "keyround",
    name: "Controle de acesso",
    description:
      "Catraca, leitor biométrico, cartão de proximidade e fechadura eletrônica. Histórico de quem entrou, quando e por onde.",
    bullets: [
      "biometria, cartão ou QR code",
      "integração com folha de ponto",
      "relatórios de acesso por período",
    ],
  },
];

export default function SegurancaPage() {
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
              <span className="current">Segurança Eletrônica</span>
            </nav>
            <h1 className="page-title">Segurança Eletrônica</h1>
            <p className="page-subtitle">
              Proteção projetada e instalada pelo mesmo time que faz a manutenção. Câmeras, alarmes,
              controle de acesso e cerca elétrica num único contrato.
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
                Pedir orçamento de segurança <span className="arr">→</span>
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
