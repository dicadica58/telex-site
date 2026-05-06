const seals = [
  { b: "Intelbras", s: "revenda autorizada" },
  { b: "ABESE", s: "associada" },
  { b: "CREA e ART", s: "resp. técnico" },
  { b: "ANATEL", s: "homologação" },
  { b: "Furukawa", s: "parceria" },
  { b: "Hikvision", s: "parceria" },
];

export default function Selos() {
  return (
    <section className="seals">
      <div className="wrap">
        <div className="label">
          <b>Certificações</b> e parcerias técnicas
        </div>
        <div className="row">
          {seals.map((s, i) => (
            <div className="seal" key={i}>
              <b>{s.b}</b>
              <span>{s.s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
