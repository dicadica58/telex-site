import Image from "next/image";

const cases = [
  {
    id: "pmsp",
    category: "SEGURANÇA PÚBLICA",
    badge: "UPTIME 99.97%",
    logo: "pmsp.png",
    logoAlt: "Polícia Militar de São Paulo",
    title: "Rede de telecom com redundância para batalhão",
    metricNumber: "99.97%",
    metricLabel: "DE UPTIME NO ÚLTIMO ANO",
    quote:
      "Placeholder: depoimento sobre disponibilidade da rede em operações críticas e suporte 24/7.",
    clientName: "Cliente placeholder",
    clientRole: "Cmt. de comunicações, PMESP",
    initials: "PM",
  },
  {
    id: "senai",
    category: "EDUCAÇÃO",
    badge: "12 UNIDADES",
    logo: "senai.png",
    logoAlt: "SENAI",
    title: "Cabeamento estruturado em 12 unidades de ensino",
    metricNumber: "12",
    metricLabel: "UNIDADES PADRONIZADAS EM 90 DIAS",
    quote:
      "Placeholder: depoimento sobre padronização entre unidades e laboratórios prontos pro semestre letivo.",
    clientName: "Cliente placeholder",
    clientRole: "Coord. de infraestrutura, SENAI",
    initials: "SN",
  },
  {
    id: "podpah",
    category: "MÍDIA",
    badge: "ZERO QUEDA",
    logo: "podpah.png",
    logoAlt: "Podpah",
    title: "Link dedicado para gravações ao vivo de podcast",
    metricNumber: "0",
    metricLabel: "QUEDAS DURANTE GRAVAÇÕES",
    quote:
      "Placeholder: depoimento sobre estabilidade da banda em transmissão ao vivo, sem corte ou latência.",
    clientName: "Cliente placeholder",
    clientRole: "Diretor de operações, Podpah",
    initials: "PD",
  },
];

export default function Cases() {
  return (
    <section className="block" id="cases" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="block-head">
          <h2>
            Quem já contratou e <em>o que mudou depois</em>.
          </h2>
          <p className="sub">
            Segurança pública, educação e mídia. Três cases que pediram disponibilidade real.
          </p>
        </div>
        <div className="cases-grid">
          {cases.map((c) => (
            <article key={c.id} className="case-card">
              <div className="case-card-top">
                <div className="case-card-meta">
                  <span className="case-tag">{c.category}</span>
                  <span className="case-badge">{c.badge}</span>
                </div>
                <div className="case-logo-wrap">
                  <Image
                    src={`/clients/${c.logo}`}
                    alt={c.logoAlt}
                    width={200}
                    height={110}
                    className="case-logo"
                    unoptimized
                  />
                </div>
              </div>
              <div className="case-card-body">
                <h3 className="case-title">{c.title}</h3>
                <div className="case-metric">
                  <div className="case-metric-number">{c.metricNumber}</div>
                  <div className="case-metric-label">{c.metricLabel}</div>
                </div>
                <blockquote className="case-quote">{c.quote}</blockquote>
                <div className="case-attribution">
                  <div className="case-avatar">{c.initials}</div>
                  <div>
                    <div className="case-client-name">{c.clientName}</div>
                    <div className="case-client-role">{c.clientRole}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
