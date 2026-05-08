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
            e suporte da Telex — do contrato curto ao de longo prazo.
          </p>
        </div>
        <div className="rent-cases">
          <div className="rent-card">
            <div className="head-row">
              <span className="visual">
                <Icon name="wrench" size={22} />
              </span>
            </div>
            <h4>Obras e canteiros de construção</h4>
            <p>
              Câmeras, sensores e cerca elétrica para canteiros, depósitos de material e
              estandes de venda. Instalado em 48 horas.
            </p>
            <ul>
              <li>contratos flexíveis sob medida</li>
              <li>monitoramento pelo celular</li>
              <li>desmobilização sem custo</li>
            </ul>
          </div>
          <div className="rent-card">
            <div className="head-row">
              <span className="visual">
                <Icon name="phone" size={22} />
              </span>
            </div>
            <h4>Eventos corporativos</h4>
            <p>
              Feiras, congressos, ativações e produções. Infraestrutura completa montada e
              desmontada por equipe própria.
            </p>
            <ul>
              <li>diária, fim de semana ou semana</li>
              <li>telefonia com ramais para a equipe</li>
              <li>câmeras de segurança com gravação</li>
            </ul>
          </div>
          <div className="rent-card">
            <div className="head-row">
              <span className="visual">
                <Icon name="building" size={22} />
              </span>
            </div>
            <h4>Locação comercial contínua</h4>
            <p>
              Lojas, escritórios, filiais e operações de longo prazo. Mais barato que comprar,
              com manutenção e substituição incluídas no contrato.
            </p>
            <ul>
              <li>contratos de longo prazo com condições especiais</li>
              <li>manutenção e troca de equipamento incluídas</li>
              <li>substituição imediata em falha</li>
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
