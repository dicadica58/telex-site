import { Fragment } from "react";
import { TopBar, Header } from "./Header";
import Footer from "./Footer";
import Icon from "./Icon";
import Link from "next/link";

type HubCard = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export type HubPageProps = {
  breadcrumb: { label: string; href?: string }[];
  title: string;
  lead: string;
  cards: HubCard[];
  whyTelex: string;
  cta: { label: string; href: string };
};

export default function HubPageLayout({
  breadcrumb,
  title,
  lead,
  cards,
  whyTelex,
  cta,
}: HubPageProps) {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="hub-hero">
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Navegação">
              {breadcrumb.map((item, i) => (
                <Fragment key={i}>
                  {i > 0 && <span className="sep">›</span>}
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    <span className="current">{item.label}</span>
                  )}
                </Fragment>
              ))}
            </nav>
            <h1 className="hub-title">{title}</h1>
            <p className="hub-lead">{lead}</p>
          </div>
        </section>

        <section className="hub-grid-section">
          <div className="wrap">
            <div className="hub-grid">
              {cards.map((card, i) => (
                <Link key={i} href={card.href} className="hub-card">
                  <div className="hub-card-icon">
                    <Icon name={card.icon} size={24} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <span className="hub-card-link">Saiba mais →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="hub-why">
          <div className="wrap">
            <h2>Por que a Telex</h2>
            <p>{whyTelex}</p>
          </div>
        </section>

        <section className="hub-cta">
          <div className="wrap">
            <h3>Pronto pra começar?</h3>
            <div className="cta-buttons">
              <a href={cta.href} className="btn btn-amber">
                {cta.label} <span className="arr">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
