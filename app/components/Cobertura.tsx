const cities = [
  ["Santo André", "mesmo dia"],
  ["São Caetano", "24h"],
  ["São Bernardo", "24h"],
  ["Mauá", "24h"],
  ["Diadema", "24h"],
  ["Ribeirão Pires", "48h"],
  ["São Paulo Capital", "24h"],
  ["Rio Grande da Serra", "48h"],
];

const mapPoints = [
  { x: 235, y: 200, n: "Santo André", lg: true, c: "oklch(38% 0.14 245)" },
  { x: 285, y: 175, n: "S. Caetano", lg: false, c: "oklch(58% 0.13 195)" },
  { x: 175, y: 225, n: "S. Bernardo", lg: false, c: "oklch(58% 0.13 195)" },
  { x: 300, y: 225, n: "Mauá", lg: false, c: "oklch(56% 0.18 340)" },
  { x: 215, y: 250, n: "Diadema", lg: false, c: "oklch(56% 0.18 340)" },
  { x: 355, y: 255, n: "Rib. Pires", lg: false, c: "oklch(70% 0.16 65)" },
  { x: 160, y: 120, n: "São Paulo", lg: false, c: "oklch(58% 0.14 155)" },
  { x: 355, y: 300, n: "R. G. Serra", lg: false, c: "oklch(70% 0.16 65)" },
];

export default function Cobertura() {
  return (
    <section className="block" id="cobertura">
      <div className="wrap">
        <div className="coverage">
          <div className="info">
            <h3>
              Sede em Santo André,
              <br />
              <em>cobertura em todo o ABC e Capital.</em>
            </h3>
            <p>
              Atendimento técnico em até 24 horas úteis nas cidades destacadas. Demanda fora da
              cobertura sob consulta. Atendemos todo o estado de SP para projetos de maior porte.
            </p>
            <div className="cities">
              <div className="city head">
                <b>Cidade</b>
                <span>SLA</span>
              </div>
              <div className="city head">
                <b>Cidade</b>
                <span>SLA</span>
              </div>
              {cities.map((c, i) => (
                <div className="city" key={i}>
                  <b>{c[0]}</b>
                  <span>{c[1]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="map" aria-label="Mapa cobertura ABC">
            <svg viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
              <defs>
                <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="oklch(82% 0.02 245)" />
                </pattern>
              </defs>
              <rect width="500" height="400" fill="url(#dots)" />
              <path
                d="M 90 80 L 200 60 L 320 90 L 410 140 L 430 240 L 380 330 L 250 360 L 130 340 L 70 260 L 80 160 Z"
                fill="#fff"
                stroke="oklch(38% 0.14 245)"
                strokeWidth="1.5"
                opacity="0.92"
              />
              {mapPoints.map((c, i) => (
                <g key={i}>
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={c.lg ? 10 : 6}
                    fill={c.c}
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  {c.lg && <circle cx={c.x} cy={c.y} r="3.5" fill="#fff" />}
                  <text
                    x={c.x + (c.lg ? 14 : 11)}
                    y={c.y + 4}
                    fontFamily="JetBrains Mono, monospace"
                    fontSize={c.lg ? 13 : 11}
                    fill="oklch(20% 0.015 250)"
                    fontWeight={c.lg ? 700 : 500}
                  >
                    {c.n}
                  </text>
                </g>
              ))}
              <circle
                cx="235"
                cy="200"
                r="120"
                fill="none"
                stroke="oklch(38% 0.14 245)"
                strokeWidth="1"
                strokeDasharray="3 4"
                opacity="0.5"
              />
              <text
                x="20"
                y="385"
                fontFamily="JetBrains Mono, monospace"
                fontSize="10"
                fill="oklch(50% 0.01 240)"
                letterSpacing="0.1em"
              >
                REGIÃO ABC E GRANDE SP
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
