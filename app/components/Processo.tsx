export default function Processo() {
  return (
    <section className="block">
      <div className="wrap">
        <div className="block-head">
          <h2>
            Análise, orçamento e execução. <em>Documentado em cada etapa.</em>
          </h2>
          <p className="sub">
            A tese da Telex tem prova física: ART, escopo escrito, cronograma e laudos. Você não
            precisa acreditar na palavra, está no PDF do projeto.
          </p>
        </div>
        <div className="process">
          <div className="proc-card p1">
            <div className="nrow">
              <span className="n">01</span>
              <span className="lbl">Análise</span>
            </div>
            <h4>Visita técnica e levantamento</h4>
            <p>
              Especialista vai ao local, mede o ambiente, conversa com gestor ou síndico e levanta
              escopo real.
            </p>
            <ul className="delivers">
              <li>Visita técnica</li>
              <li>Diagnóstico do existente</li>
              <li>Mapeamento de necessidades</li>
            </ul>
          </div>
          <div className="proc-card p2">
            <div className="nrow">
              <span className="n">02</span>
              <span className="lbl">Projeto e orçamento</span>
            </div>
            <h4>Escopo escrito com ART</h4>
            <p>
              Documentação técnica completa, ART do responsável, cronograma e proposta comercial
              fechada.
            </p>
            <ul className="delivers">
              <li>Memorial descritivo</li>
              <li>ART CREA emitida</li>
              <li>Cronograma e proposta com NF</li>
            </ul>
          </div>
          <div className="proc-card p3">
            <div className="nrow">
              <span className="n">03</span>
              <span className="lbl">Execução</span>
            </div>
            <h4>Instalação e entrega documentada</h4>
            <p>
              Equipe própria, instalação certificada, dossiê fotográfico de entrega e garantia
              escrita ativada.
            </p>
            <ul className="delivers">
              <li>Equipe própria, sem terceiros</li>
              <li>Certificação de cabeamento</li>
              <li>Dossiê fotográfico e garantia</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
