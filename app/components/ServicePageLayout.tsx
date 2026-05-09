import { Fragment } from "react";
import { TopBar, Header } from "./Header";
import Footer from "./Footer";
import Icon from "./Icon";
import FaqAccordion from "./FaqAccordion";
import Link from "next/link";

export type ServicePageProps = {
  breadcrumb: { label: string; href?: string }[];
  title: string;
  lead: string;
  problem: string[];
  solution: {
    intro: string;
    blocks: { icon: string; title: string; description: string }[];
  };
  howItWorks: string;
  forWhom: string;
  faq: { question: string; answer: string }[];
  cta: {
    title: string;
    subtitle: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
};

export default function ServicePageLayout({
  breadcrumb,
  title,
  lead,
  problem,
  solution,
  howItWorks,
  forWhom,
  faq,
  cta,
}: ServicePageProps) {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="sp-hero">
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
            <h1 className="sp-title">{title}</h1>
            <p className="sp-lead">{lead}</p>
          </div>
        </section>

        <section className="sp-problem">
          <div className="wrap">
            <h2>O problema</h2>
            {problem.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="sp-solution">
          <div className="wrap">
            <h2>A solução</h2>
            <p className="sp-solution-intro">{solution.intro}</p>
            <div className="sp-solution-blocks">
              {solution.blocks.map((block, i) => (
                <div key={i} className="sp-solution-block">
                  <div className="sp-solution-icon">
                    <Icon name={block.icon} size={24} />
                  </div>
                  <div>
                    <h3>{block.title}</h3>
                    <p>{block.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sp-how">
          <div className="wrap">
            <h2>Como funciona</h2>
            <p>{howItWorks}</p>
          </div>
        </section>

        <section className="sp-whom">
          <div className="wrap">
            <h2>Para quem é</h2>
            <p>{forWhom}</p>
          </div>
        </section>

        <section className="sp-faq">
          <div className="wrap">
            <h2>Perguntas frequentes</h2>
            <FaqAccordion items={faq} />
          </div>
        </section>

        <section className="sp-cta">
          <div className="wrap">
            <h3>{cta.title}</h3>
            <p>{cta.subtitle}</p>
            <div className="cta-buttons">
              <a href={cta.primary.href} className="btn btn-amber">
                {cta.primary.label} <span className="arr">→</span>
              </a>
              <a href={cta.secondary.href} className="btn btn-ghost-light">
                {cta.secondary.label}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
