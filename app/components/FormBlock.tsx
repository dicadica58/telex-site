"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function FormBlock() {
  const [services, setServices] = useState({
    telecom: false,
    seg: false,
    cond: false,
    rent: false,
    outro: false,
  });

  const toggle = (k: keyof typeof services) =>
    setServices((s) => ({ ...s, [k]: !s[k] }));

  return (
    <section className="form-section" id="contato">
      <div className="wrap">
        <div className="form-grid">
          <div className="left">
            <h2>
              Conte o seu problema. <em>A gente resolve.</em>
            </h2>
            <p>
              Sem compromisso. Visita técnica gratuita em qualquer cidade da nossa cobertura.
              Atendimento de Seg a Sex 8h às 18h e Sáb 8h às 13h.
            </p>
            <div className="promise">
              <div className="row">
                <span className="ix">1</span>
                <div>
                  <b>Resposta em 24 horas úteis</b>
                  <span>nosso especialista entra em contato para agendar a visita.</span>
                </div>
              </div>
              <div className="row">
                <span className="ix">2</span>
                <div>
                  <b>Visita técnica gratuita</b>
                  <span>análise no local sem custo e sem compromisso de fechamento.</span>
                </div>
              </div>
              <div className="row">
                <span className="ix">3</span>
                <div>
                  <b>Proposta escrita com ART</b>
                  <span>memorial, escopo, cronograma e responsabilidade técnica.</span>
                </div>
              </div>
            </div>
          </div>
          <form className="form-card" onSubmit={(e) => e.preventDefault()}>
            <div className="formhead">
              <h3>Pedir um orçamento</h3>
              <p>Leva menos de 1 minuto. Volto pra você no mesmo dia útil.</p>
            </div>
            <div className="field-grid">
              <div className="field full">
                <label>Como podemos te chamar?</label>
                <input type="text" placeholder="Seu nome" />
              </div>
              <div className="field">
                <label>WhatsApp ou telefone</label>
                <input type="tel" placeholder="(11) 9 0000 0000" />
              </div>
              <div className="field full">
                <label>Do que você precisa? <span className="opt">opcional</span></label>
                <div className="chips">
                  <span
                    className="chip"
                    data-on={String(services.telecom)}
                    onClick={() => toggle("telecom")}
                  >
                    Telecom e Conectividade
                  </span>
                  <span
                    className="chip teal"
                    data-on={String(services.seg)}
                    onClick={() => toggle("seg")}
                  >
                    Segurança Eletrônica
                  </span>
                  <span
                    className="chip magenta"
                    data-on={String(services.cond)}
                    onClick={() => toggle("cond")}
                  >
                    Comunicação Condominial
                  </span>
                  <span
                    className="chip amber"
                    data-on={String(services.rent)}
                    onClick={() => toggle("rent")}
                  >
                    Aluguel de Equipamentos
                  </span>
                  <span
                    className="chip"
                    data-on={String(services.outro)}
                    onClick={() => toggle("outro")}
                  >
                    Outro
                  </span>
                </div>
              </div>
              <div className="field full">
                <label>
                  Quer adicionar algum detalhe? <span className="opt">opcional</span>
                </label>
                <textarea placeholder="Conte rapidamente o que precisa, prazo, particularidades, equipamentos existentes."></textarea>
              </div>
            </div>
            <div className="actions">
              <span className="legal">
                Ao enviar, você concorda com a nossa política de privacidade. Não compartilhamos
                seus dados.
              </span>
              <button type="submit" className="btn btn-primary">
                <Icon name="send" size={14} /> Enviar e receber resposta em 24h
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
