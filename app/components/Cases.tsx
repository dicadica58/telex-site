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
      "A rede não cai e o Wi-Fi cobre o batalhão inteiro sem ponto cego. Antes a gente perdia tempo reiniciando equipamento — hoje a operação roda 24h sem intervenção.",
    clientName: "Cap. R. Mendonça",
    clientRole: "Comando de comunicações, PMESP",
    initials: "RM",
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
      "Oito laboratórios com 40 alunos cada funcionando ao mesmo tempo sem lentidão. O semestre começou e a rede já estava certificada e pronta.",
    clientName: "Anderson Souza",
    clientRole: "Diretor, SENAI",
    initials: "AS",
  },
  {
    id: "podpah",
    category: "PRODUÇÃO E MÍDIA",
    badge: "LINK DEDICADO + WI-FI 7",
    logo: "podpah.png",
    logoAlt: "Podpah",
    title: "Rede de alta performance para gravação e transmissão",
    metricNumber: "4",
    metricLabel: "ESTÚDIOS COM LINK DEDICADO E WI-FI 7",
    quote:
      "Desde que a Telex assumiu a rede, a estabilidade mudou de patamar. O link aguenta transmissão ao vivo sem engasgar e a equipe parou de se preocupar com internet.",
    clientName: "Vertão",
    clientRole: "Diretor de tecnologia, Podpah",
    initials: "VT",
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
