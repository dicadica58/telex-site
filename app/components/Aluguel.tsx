import Icon from "./Icon";

export default function Aluguel() {
  return (
    <section className="rent-section" id="aluguel">
      <div className="wrap">
        <div className="block-head">
          <h2>
            Precisa de infraestrutura agora e <em>só por enquanto</em>?
          </h2>
          <p className="sub">
            Câmeras, alarmes, sensores e telefonia para locação. Mesmo padrão de instalação, projeto
            e suporte da Telex, sem precisar comprar equipamento.
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
              Câmeras, sensores e cerca elétrica temporária para canteiros, depósitos de material e
              estandes de venda. Instalado em 48 horas.
            </p>
            <ul>
              <li>locação a partir de 30 dias</li>
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
              <li>câmeras temporárias com gravação</li>
            </ul>
          </div>
          <div className="rent-card">
            <div className="head-row">
              <span className="visual">
                <Icon name="building" size={22} />
              </span>
            </div>
            <h4>Locação comercial e sazonalidade</h4>
            <p>
              Lojas pop-up, escritórios temporários, projetos de 3 a 12 meses, expansões em teste.
              Mais barato que comprar e a Telex retira no fim do contrato.
            </p>
            <ul>
              <li>flexível de 3 a 24 meses</li>
              <li>migração simples para instalação fixa</li>
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
