export default function Cases() {
  return (
    <section className="block" id="cases" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="block-head">
          <h2>
            Quem já contratou e <em>o que mudou depois</em>.
          </h2>
          <p className="sub">
            Indústria, comércio e condomínio. Três cases representativos do que entregamos no último
            ano.
          </p>
        </div>
        <div className="cases">
          <div className="case cs1">
            <div className="img">
              <span className="seg">Indústria</span>
              <span className="placeholder">foto da sala de rack</span>
            </div>
            <div className="body">
              <h4>Cabeamento estruturado Cat6A em planta industrial</h4>
              <div className="metric">
                <b>40%</b>
                <span>menos chamados de manutenção em 6 meses</span>
              </div>
              <div className="quote">
                &ldquo;Substituiu três fornecedores e a documentação ficou impecável. Auditoria
                passou sem ressalvas.&rdquo;
              </div>
              <div className="who">
                <span className="ph">RM</span>
                <div>
                  <b>Cliente placeholder</b>
                  <span>Gestor de TI, indústria, ABC</span>
                </div>
              </div>
            </div>
          </div>
          <div className="case cs2">
            <div className="img">
              <span className="seg">Condomínio</span>
              <span className="placeholder">foto da portaria</span>
            </div>
            <div className="body">
              <h4>Interfonia e vídeo porteiro em condomínio de 96 unidades</h4>
              <div className="metric">
                <b>96</b>
                <span>unidades migradas em 21 dias</span>
              </div>
              <div className="quote">
                &ldquo;Antes a gente abria 3 chamados por semana. Hoje abre 1 por mês e resolvem no
                mesmo dia.&rdquo;
              </div>
              <div className="who">
                <span className="ph">JS</span>
                <div>
                  <b>Cliente placeholder</b>
                  <span>Síndico, condomínio, Santo André</span>
                </div>
              </div>
            </div>
          </div>
          <div className="case cs3">
            <div className="img">
              <span className="seg">Comércio</span>
              <span className="placeholder">foto do CFTV</span>
            </div>
            <div className="body">
              <h4>CFTV em nuvem e alarme com foto verificação em 4 lojas</h4>
              <div className="metric">
                <b>0</b>
                <span>incidentes desde a instalação</span>
              </div>
              <div className="quote">
                &ldquo;Vejo as 4 lojas no celular. Foto verificação eliminou alarme falso à
                noite.&rdquo;
              </div>
              <div className="who">
                <span className="ph">EN</span>
                <div>
                  <b>Cliente placeholder</b>
                  <span>Gestora comercial, varejo, São Bernardo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
