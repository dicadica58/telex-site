import Link from "next/link";
import Icon from "./Icon";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="top">
            <div className="brand">
              <Link href="/" className="logo-mark">
                <span className="equals" aria-hidden="true">
                  <span></span>
                  <span></span>
                </span>
                <span className="wm">
                  <b>TELEX</b>
                  <small>Telecomunicações</small>
                </span>
              </Link>
              <p>
                Telecom, segurança eletrônica e aluguel de equipamentos. Infraestrutura completa
                para empresas, comércio e condomínios em Santo André, ABC e Grande SP.
              </p>
              <p
                className="mono"
                style={{ marginTop: 14, fontSize: 12, color: "oklch(70% 0.01 250)" }}
              >
                Rua Paranapanema, 317
                <br />
                Vila Alzira, Santo André, SP
              </p>
            </div>
            <div className="col-services">
              <h5>Serviços</h5>
              <div className="services-cols">
                <ul>
                  <li><Link href="/cabeamento-estruturado">Rede de computadores</Link></li>
                  <li><Link href="/fibra-optica-empresarial">Internet por fibra</Link></li>
                  <li><Link href="/telefonia-em-nuvem">Telefonia digital</Link></li>
                  <li><Link href="/cftv-empresa">Câmeras de monitoramento</Link></li>
                  <li><Link href="/alarme-cerca-eletrica">Alarmes</Link></li>
                </ul>
                <ul>
                  <li><Link href="/alarme-cerca-eletrica">Cerca elétrica</Link></li>
                  <li><Link href="/controle-de-acesso">Controle de acesso</Link></li>
                  <li><Link href="/comunicacao-condominio">Interfonia</Link></li>
                  <li><Link href="/comunicacao-condominio">Vídeo porteiro</Link></li>
                  <li>
                    <Link href="/locacao-comercial" style={{ color: "oklch(80% 0.08 75)" }}>
                      Aluguel de equip. ↗
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h5>Empresa</h5>
              <ul>
                <li><a href="#">Sobre a Telex</a></li>
                <li><a href="/#cases">Cases e clientes</a></li>
                <li><a href="/#cobertura">Cobertura</a></li>
                <li><a href="#">Trabalhe conosco</a></li>
                <li><a href="#">Política de privacidade</a></li>
              </ul>
            </div>
            <div>
              <h5>Contato</h5>
              <ul>
                <li><a href="tel:+551126777246" className="mono">(11) 2677 7246</a></li>
                <li>
                  <a href="https://wa.me/5511998447268" className="mono">
                    (11) 99844 7268 WhatsApp
                  </a>
                </li>
                <li><a href="mailto:contato@telextelecom.com.br">contato@telextelecom.com.br</a></li>
                <li style={{ marginTop: 8 }}>
                  <a href="#" className="mono" style={{ fontSize: 12, opacity: 0.7 }}>
                    Instagram ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom">
            <span>© 2026 Telex Telecomunicações. Todos os direitos reservados.</span>
            <span>J L Rodrigues Telecomunicações LTDA – CNPJ 50.805.312/0001-40 – Rua Paranapanema, 317 – Vila Alzira – Santo André/SP</span>
          </div>
        </div>
      </footer>
      <a href="https://wa.me/5511998447268" className="fab" aria-label="WhatsApp">
        <Icon name="wpp" size={28} />
      </a>
    </>
  );
}
