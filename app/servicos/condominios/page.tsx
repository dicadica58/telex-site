import type { Metadata } from "next";
import { TopBar, Header } from "../../components/Header";
import Footer from "../../components/Footer";
import Icon from "../../components/Icon";

export const metadata: Metadata = {
  title: "Comunicação Condominial | Telex",
  description:
    "Interfonia, vídeo porteiro e portaria remota para condomínios. Tecnologia em um único contrato.",
};

const services = [
  {
    id: "interfonia",
    icon: "phonecall",
    name: "Interfonia coletiva",
    description:
      "Sistema de interfonia que conecta portaria e unidades, com chamada por número de apartamento e qualidade digital de voz.",
    bullets: [
      "instalação sem quebra ou obra extensa",
      "troca da central antiga sem descarte",
      "manutenção 24h em contrato",
    ],
  },
  {
    id: "video-porteiro",
    icon: "video",
    name: "Vídeo porteiro",
    description:
      "Imagem da portaria visível dentro de cada apartamento. Visitante identificado antes da liberação.",
    bullets: [
      "câmera com visão noturna",
      "tela colorida na unidade",
      "histórico de chamadas",
    ],
  },
  {
    id: "app-morador",
    icon: "smartphone",
    name: "Interfone no celular do morador",
    description:
      "Chamada da portaria direto no aplicativo do morador. Útil para quem mora sozinho, viaja ou tem segunda residência.",
    bullets: [
      "app no celular substitui o aparelho fixo",
      "liberação remota com vídeo",
      "sem custo adicional por morador",
    ],
  },
];

export default function CondominiosPage() {
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
              <span className="current">Comunicação Condominial</span>
            </nav>
            <h1 className="page-title">Comunicação Condominial</h1>
            <p className="page-subtitle">
              Interfonia, vídeo porteiro e portaria remota num único contrato. Tecnologia que
              substitui o porteiro físico sem perder controle nem perder gente conhecida na entrada.
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
                Pedir orçamento para condomínio <span className="arr">→</span>
              </a>
              <a href="https://wa.me/551149927089" className="btn btn-ghost-light">
                Falar com síndico responsável
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
