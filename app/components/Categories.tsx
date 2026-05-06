import Icon from "./Icon";

export default function Categories() {
  return (
    <section className="block" id="servicos">
      <div className="wrap">
        <div className="block-head">
          <h2>
            Toda a infraestrutura da sua operação <em>em quatro frentes</em>.
          </h2>
          <p className="sub">
            Antes precisava de dois fornecedores. Agora não. A fusão com a CiTecnologia consolida
            nove serviços e o aluguel de equipamentos sob uma só marca.
          </p>
        </div>
        <div className="cats">
          <div className="cat c1">
            <span className="glyph">
              <Icon name="network" size={24} />
            </span>
            <h3>
              Telecom e<br />
              Conectividade
            </h3>
            <ul>
              <li>
                <span>Rede de computadores</span>
                <span className="arr">→</span>
              </li>
              <li>
                <span>Internet por fibra óptica</span>
                <span className="arr">→</span>
              </li>
              <li>
                <span>Telefonia digital e em nuvem</span>
                <span className="arr">→</span>
              </li>
            </ul>
            <span className="more">Ver categoria ↗</span>
          </div>
          <div className="cat c2">
            <span className="glyph">
              <Icon name="shield" size={24} />
            </span>
            <h3>
              Segurança<br />
              Eletrônica
            </h3>
            <ul>
              <li>
                <span>Câmeras de monitoramento</span>
                <span className="arr">→</span>
              </li>
              <li>
                <span>Sistemas de alarme</span>
                <span className="arr">→</span>
              </li>
              <li>
                <span>Cerca elétrica</span>
                <span className="arr">→</span>
              </li>
              <li>
                <span>Controle de acesso</span>
                <span className="arr">→</span>
              </li>
            </ul>
            <span className="more">Ver categoria ↗</span>
          </div>
          <div className="cat c3">
            <span className="glyph">
              <Icon name="building" size={24} />
            </span>
            <h3>
              Comunicação<br />
              Condominial
            </h3>
            <ul>
              <li>
                <span>Interfonia coletiva</span>
                <span className="arr">→</span>
              </li>
              <li>
                <span>Vídeo porteiro</span>
                <span className="arr">→</span>
              </li>
              <li>
                <span>Interfone no celular do morador</span>
                <span className="arr">→</span>
              </li>
            </ul>
            <span className="more">Ver categoria ↗</span>
          </div>
          <div className="cat c4">
            <span className="new-pill">Novo</span>
            <span className="glyph">
              <Icon name="rent" size={24} />
            </span>
            <h3>
              Aluguel de<br />
              Equipamentos
            </h3>
            <ul>
              <li>
                <span>Câmeras temporárias</span>
                <span className="arr">→</span>
              </li>
              <li>
                <span>Alarmes e sensores</span>
                <span className="arr">→</span>
              </li>
              <li>
                <span>Telefonia para eventos</span>
                <span className="arr">→</span>
              </li>
            </ul>
            <span className="more">Conhecer locação ↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
