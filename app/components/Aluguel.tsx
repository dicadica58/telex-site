import Icon from "./Icon";

export default function Aluguel() {
  return (
    <section className="rent-section" id="aluguel">
      <div className="wrap">
        <div className="block-head">
          <h2>
            Infraestrutura completa <em>sem comprar equipamento</em>.
          </h2>
          <p className="sub">
            Câmeras, alarmes, sensores e telefonia por locação. Mesmo padrão de instalação, projeto
            e suporte da Telex em todos os tipos de contrato.
          </p>
        </div>
        <div className="rent-cases">
          <div className="rent-card">
            <div className="head-row">
              <span className="visual">
                <Icon name="store" size={22} />
              </span>
            </div>
            <h4>Locação comercial</h4>
            <p>
              Lojas, escritórios, franquias e filiais. Câmeras, alarmes e telefonia instalados
              sem entrada e sem investimento em equipamento. Manutenção e troca incluídas no contrato.
            </p>
            <ul>
              <li>contratos sem fidelidade ou de longo prazo</li>
              <li>monitoramento 24h pelo celular</li>
              <li>substituição imediata em caso de falha</li>
            </ul>
          </div>
          <div className="rent-card">
            <div className="head-row">
              <span className="visual">
                <Icon name="home" size={22} />
              </span>
            </div>
            <h4>Locação residencial</h4>
            <p>
              Casas, apartamentos e propriedades de alto padrão. Câmeras, sensores e cerca
              elétrica com instalação técnica e suporte direto. Sem custo de equipamento, só o serviço.
            </p>
            <ul>
              <li>visão das câmeras ao vivo no celular</li>
              <li>sensor de presença e cerca elétrica integrados</li>
              <li>suporte com técnico próprio, sem call center</li>
            </ul>
          </div>
          <div className="rent-card">
            <div className="head-row">
              <span className="visual">
                <Icon name="building" size={22} />
              </span>
            </div>
            <h4>Locação para condomínios</h4>
            <p>
              Portarias, áreas comuns e perímetro completo. CFTV, controle de acesso, interfonia
              e alarme num único contrato. Equipamento sempre atualizado, sem custo de troca quando
              a tecnologia muda.
            </p>
            <ul>
              <li>portaria remota e controle de acesso</li>
              <li>CFTV com gravação em nuvem</li>
              <li>interfonia integrada às unidades</li>
            </ul>
          </div>
        </div>
        <div className="rent-cta">
          <p>
            Conte o equipamento, prazo e local. Devolvemos uma{" "}
            <em>cotação em até 24 horas</em>.
          </p>
          <div className="cta-row">
            <a href="#contato" className="btn btn-amber">
              Quero alugar <span className="arr">→</span>
            </a>
            <a href="https://wa.me/5511998447268" className="btn btn-dark">
              Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
