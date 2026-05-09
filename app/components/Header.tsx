"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const serviceLinks = [
  { label: "Telecom e Conectividade", href: "/servicos/telecom" },
  { label: "Segurança Eletrônica", href: "/servicos/seguranca" },
  { label: "Comunicação Condominial", href: "/servicos/condominios" },
];

export function Header() {
  const pathname = usePathname();
  const isServicos = pathname.startsWith("/servicos");
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="header">
      <div className="wrap">
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
        <nav className="nav">
          <div
            className="nav-dropdown-wrap"
            ref={dropRef}
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button
              className={`nav-link${isServicos ? " nav-active" : ""}`}
              onClick={() => setDropOpen((v) => !v)}
              aria-expanded={dropOpen}
              aria-haspopup="true"
              type="button"
            >
              Serviços
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="chevron">
                <path d="M2.5 3.5L5 6.5L7.5 3.5" />
              </svg>
            </button>
            <div className={`nav-dropdown${dropOpen ? " open" : ""}`}>
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`nav-dropdown-item${pathname === s.href ? " active" : ""}`}
                  onClick={() => setDropOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <a href="/#aluguel" className="rent">Aluguel</a>
          <a href="/#cases">Cases</a>
          <a href="/#cobertura">Cobertura</a>
          <a href="/#contato">Contato</a>
        </nav>
        <div className="cta-row">
          <a href="https://wa.me/5511998447268" className="btn btn-ghost">
            <Icon name="wpp" size={16} /> WhatsApp
          </a>
          <a href="/#contato" className="btn btn-primary">
            Pedir orçamento <span className="arr">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
