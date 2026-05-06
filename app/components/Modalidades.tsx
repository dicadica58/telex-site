import Icon from "./Icon";

const items = [
  "Alarmes",
  "Câmeras de monitoramento",
  "Cerca elétrica",
  "Interfonia",
  "Vídeo porteiro",
  "Controle de acesso",
  "Telefonia digital",
  "Rede de computadores",
  "Internet por fibra",
];

const modes = [
  { h: "Instalação", ic: "install", cls: "m1" },
  { h: "Manutenção", ic: "tools", cls: "m2" },
  { h: "Assistência Técnica", ic: "lifebuoy", cls: "m3" },
];

export default function Modalidades() {
  return (
    <section className="block">
      <div className="wrap">
        <div className="block-head">
          <h2>
            Não fazemos só instalação. <em>Fazemos o ciclo todo.</em>
          </h2>
          <p className="sub">
            Cada um dos nove serviços está disponível nas três modalidades. Você contrata um
            fornecedor único para o ciclo completo.
          </p>
        </div>
        <div className="modes">
          {modes.map((m, i) => (
            <div className={`mode ${m.cls}`} key={i}>
              <div className="head">
                <h4>{m.h}</h4>
                <span className="ic">
                  <Icon name={m.ic} size={18} />
                </span>
              </div>
              <ul>
                {items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
              <div className="foot">
                <a className="btn btn-ghost" href="#contato">
                  Solicitar {m.h.toLowerCase()} <span className="arr">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
