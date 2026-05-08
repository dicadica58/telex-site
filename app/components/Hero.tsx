import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="hero">
      <div className="grid-bg"></div>
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="wrap">
        <div className="copy">
          <h1>
            <span className="strike">A concorrência instala.</span>
            <br />
            A Telex <em>planeja</em>, <em>executa</em>, <em>documenta</em> e <em>garante</em>.
          </h1>
          <p className="lede">
            Telecom e segurança eletrônica com um só fornecedor para empresas, comércio e
            condomínios em São Paulo. Cabeamento, internet por fibra, câmeras, alarmes, telefonia
            digital e aluguel de equipamentos.
          </p>
          <div className="cta-row">
            <a href="#contato" className="btn btn-primary">
              Pedir orçamento <span className="arr">→</span>
            </a>
            <a href="#servicos" className="btn btn-ghost">
              Ver todos os serviços
            </a>
          </div>
          <div className="meta-strip">
            <div>
              <b>15+</b>
              <span>anos de mercado</span>
            </div>
            <div>
              <b>800+</b>
              <span>instalações</span>
            </div>
            <div>
              <b>50+</b>
              <span>condomínios</span>
            </div>
            <div>
              <b>24h úteis</b>
              <span>SLA atendimento</span>
            </div>
          </div>
        </div>
        <aside className="hero-card" aria-label="Como trabalhamos">
          <h3>Como trabalhamos</h3>
          <div className="step">
            <span className="n">01</span>
            <div className="body">
              <b>Análise</b>
              <span>Visita técnica e levantamento de escopo no local.</span>
            </div>
          </div>
          <div className="step">
            <span className="n">02</span>
            <div className="body">
              <b>Projeto e orçamento</b>
              <span>Escopo escrito, ART, cronograma e proposta.</span>
            </div>
          </div>
          <div className="step">
            <span className="n">03</span>
            <div className="body">
              <b>Execução</b>
              <span>Equipe própria, instalação certificada, documentação entregue.</span>
            </div>
          </div>
          <div className="step">
            <span className="n">04</span>
            <div className="body">
              <b>Garantia</b>
              <span>Manutenção e assistência técnica continuada.</span>
            </div>
          </div>
          <div className="foot">
            <span className="ok">Garantia escrita em todos os contratos</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
