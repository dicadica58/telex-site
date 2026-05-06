import Icon from "./Icon";

const cells = [
  {
    ic: "doc",
    h: "Projeto documentado",
    p: "Memorial, planta, ART e laudo entregues em PDF.",
    t: "todos os contratos",
    cls: "w1",
  },
  {
    ic: "badge",
    h: "Garantia escrita",
    p: "12 meses para serviço e prazo de fabricante para equipamento.",
    t: "política pública",
    cls: "w2",
  },
  {
    ic: "clock",
    h: "SLA de 24 horas",
    p: "Resposta em 24 horas úteis para solicitações de manutenção.",
    t: "contrato de manutenção",
    cls: "w3",
  },
  {
    ic: "shield",
    h: "Revenda autorizada Intelbras",
    p: "Equipamentos originais com suporte direto do fabricante.",
    t: "selo oficial",
    cls: "w4",
  },
  {
    ic: "team",
    h: "Equipe própria",
    p: "Sem terceirização. Quem atendeu instala e quem instalou dá manutenção.",
    t: "15 técnicos CLT",
    cls: "w5",
  },
  {
    ic: "wrench",
    h: "Ciclo completo",
    p: "Instalação, manutenção e assistência técnica disponíveis para todos os serviços.",
    t: "transversal",
    cls: "w6",
  },
];

export default function PorQue() {
  return (
    <section className="block" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="block-head">
          <h2>
            Por que escolher a Telex. <em>Provas, não promessas.</em>
          </h2>
        </div>
        <div className="why">
          {cells.map((c, i) => (
            <div className={`why-cell ${c.cls}`} key={i}>
              <span className="ic">
                <Icon name={c.ic} size={22} />
              </span>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
              <span className="tag">{c.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
