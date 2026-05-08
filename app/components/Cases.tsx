import Image from "next/image";

const cases = [
  {
    id: "pmsp",
    category: "SEGURANÇA PÚBLICA",
    badge: "WI-FI 7 + CAT6",
    logo: "pmsp.png",
    logoAlt: "Polícia Militar de São Paulo",
    title: "Rede certificada e Wi-Fi 7 para batalhão administrativo",
    metricNumber: "80+",
    metricLabel: "PONTOS DE REDE CAT6 CERTIFICADOS",
    quote:
      "Placeholder: rede estável, switches gerenciáveis e cobertura Wi-Fi sem ponto cego. Operação crítica não pode parar.",
    clientName: "Cliente placeholder",
    clientRole: "Comando de comunicações, PMESP",
    initials: "PM",
  },
  {
    id: "senai",
    category: "EDUCAÇÃO",
    badge: "LABS + WI-FI 7",
    logo: "senai.png",
    logoAlt: "SENAI",
    title: "Cabeamento CAT6 e Wi-Fi 7 para laboratórios técnicos",
    metricNumber: "8",
    metricLabel: "LABORATÓRIOS COM REDE CERTIFICADA",
    quote:
      "Placeholder: cobertura uniforme em todos os laboratórios e desempenho consistente em horários de pico. Sala cheia, rede firme.",
    clientName: "Cliente placeholder",
    clientRole: "Coordenação de infraestrutura, SENAI",
    initials: "SN",
  },
  {
    id: "podpah",
    category: "PRODUÇÃO E MÍDIA",
    badge: "LINK DEDICADO + WI-FI 7",
    logo: "podpah.png",
    logoAlt: "Podpah",
    title: "Rede de alta performance para gravação e transmissão",
    metricNumber: "4",
    metricLabel: "ESTÚDIOS COM ZERO QUEDA REGISTRADA",
    quote:
      "Placeholder: link estável e baixa latência durante transmissão ao vivo. Equipe foca no conteúdo, a rede simplesmente funciona.",
    clientName: "Cliente placeholder",
    clientRole: "Diretoria de operações, Podpah",
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
