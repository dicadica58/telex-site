import Image from "next/image";

const clients = [
  { name: "Polícia Militar de São Paulo", file: "pmsp.png" },
  { name: "SENAI", file: "senai.png" },
  { name: "Direcional Engenharia", file: "direcional.png" },
  { name: "SANY", file: "sany.png" },
  { name: "Atual Cargas", file: "atualcargas.png" },
  { name: "Rottas Construtora", file: "rottas.png" },
  { name: "Polêmica Construtora", file: "polemica.png" },
  { name: "World Trade Center", file: "wtc.png" },
  { name: "Orçafascio", file: "orcafascio.png" },
  { name: "Podpah", file: "podpah.png" },
];

export default function Proof() {
  return (
    <section className="proof">
      <div className="wrap">
        <div className="head">
          <h2>
            Quem confia <em>na Telex</em>
          </h2>
          <p>Construtoras, indústrias, órgãos públicos, varejo e produtoras.</p>
        </div>
      </div>
      <div className="marquee" role="region" aria-label="Clientes da Telex">
        <div className="track">
          {clients.map((c, i) => (
            <Image
              key={`a${i}`}
              src={`/clients/${c.file}`}
              alt={c.name}
              width={200}
              height={48}
              className="marquee-logo"
              style={{ height: 48, width: "auto" }}
            />
          ))}
          {clients.map((c, i) => (
            <Image
              key={`b${i}`}
              src={`/clients/${c.file}`}
              alt={c.name}
              width={200}
              height={48}
              className="marquee-logo"
              style={{ height: 48, width: "auto" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
