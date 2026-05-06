import Image from "next/image";

const clients = [
  { name: "Polícia Militar de São Paulo", file: "pmsp.png", featured: true },
  { name: "SENAI", file: "senai.png" },
  { name: "Direcional Engenharia", file: "direcional.png" },
  { name: "SANY", file: "sany.png" },
  { name: "Atual Cargas", file: "atualcargas.png" },
  { name: "Rottas Construtora", file: "rottas.png" },
  { name: "Polêmica Construtora", file: "polemica.png" },
  { name: "World Trade Center", file: "wtc.png" },
  { name: "Podpah", file: "podpah.png", featured: true },
];

export default function Proof() {
  return (
    <section className="proof-section">
      <div className="wrap">
        <h2>
          Quem confia <span className="accent">na Telex</span>
        </h2>
        <p>Construtoras, indústrias, órgãos públicos, varejo e produtoras.</p>
      </div>
      <div className="proof-marquee" role="region" aria-label="Clientes da Telex">
        <div className="proof-track">
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className={`marquee-item${client.featured ? " marquee-item-featured" : ""}`}>
              <Image
                src={`/clients/${client.file}`}
                alt={client.name}
                width={200}
                height={48}
                className="logo-img"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
