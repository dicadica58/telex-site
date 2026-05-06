import Icon from "./Icon";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="left">
          <span className="dot"></span>
          <span className="mono">Atendimento Seg a Sex 8h às 18h, Sáb 8h às 13h</span>
          <span className="mono">Santo André, ABC e Grande SP</span>
        </div>
        <div className="right">
          <a href="tel:+551126777246" className="mono">(11) 2677 7246</a>
          <a href="mailto:contato@telextelecom.com.br" className="mono" style={{ opacity: 0.75 }}>
            contato@telextelecom.com.br
          </a>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <a href="#" className="logo-mark">
          <span className="equals" aria-hidden="true">
            <span></span>
            <span></span>
          </span>
          <span className="wm">
            <b>TELEX</b>
            <small>Telecomunicações</small>
          </span>
        </a>
        <nav className="nav">
          <a href="#servicos">Serviços</a>
          <a href="#aluguel" className="rent">Aluguel</a>
          <a href="#cases">Cases</a>
          <a href="#cobertura">Cobertura</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="cta-row">
          <a href="https://wa.me/5511998447268" className="btn btn-ghost">
            <Icon name="wpp" size={16} /> WhatsApp
          </a>
          <a href="#contato" className="btn btn-primary">
            Pedir orçamento <span className="arr">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
