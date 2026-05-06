import Image from "next/image";

const partners = [
  { n: "direcional", label: "Direcional", seg: "Engenharia" },
  { n: "podpah", label: "Podpah", seg: "Entretenimento" },
  { n: "senai", label: "SENAI", seg: "Educação" },
  { n: "pmsp", label: "Polícia Militar SP", seg: "Órgão público" },
  { n: "sany", label: "Sany", seg: "Indústria" },
  { n: "wtc", label: "World Trade Center", seg: "Corporativo" },
  { n: "orcafascio", label: "OrcaFáscio", seg: "Tecnologia" },
  { n: "rottas", label: "Rottas", seg: "Construtora" },
  { n: "polemica", label: "Polêmica", seg: "Construtora" },
  { n: "atualcargas", label: "Atual Cargas", seg: "Logística" },
];

function PartnerCard({ p }: { p: (typeof partners)[number] }) {
  return (
    <div className="partner-card">
      <div className="ph-img">
        <Image src={`/logos/${p.n}.png`} alt={p.label} width={140} height={60} style={{ objectFit: "contain", maxHeight: 60, maxWidth: 140 }} />
      </div>
      <span className="name">{p.seg}</span>
    </div>
  );
}

export default function Proof() {
  return (
    <section className="proof">
      <div className="wrap">
        <div className="head">
          <h2>
            Quem confia <em>na Telex</em>
          </h2>
          <p>
            De construtoras e indústrias a órgãos públicos, varejo e produtoras. Diferentes
            segmentos, mesmo padrão de entrega.
          </p>
        </div>
      </div>
      <div className="marquee" aria-label="Parceiros e clientes">
        <div className="track">
          {partners.map((p, i) => (
            <PartnerCard p={p} key={`a${i}`} />
          ))}
          {partners.map((p, i) => (
            <PartnerCard p={p} key={`b${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
