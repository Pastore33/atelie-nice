import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { ContactCTA, Photo, ServiceCards } from "@/components/shared";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Costura artesanal em Diadema",
    "Uniformes, roupas sob medida, ajustes e reformas no Parque Real, Diadema. Conheça o Ateliê Nice e solicite um orçamento.",
    "/",
  );
export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-line" /> ATELIÊ DE COSTURA EM DIADEMA
          </p>
          <h1>
            A arte de costurar,
            <br />o cuidado em
            <br />
            <em>cada detalhe.</em>
          </h1>
          <p className="lead">
            Há aproximadamente 36 anos, transformando tecidos em peças que
            vestem bem e acompanham a sua história.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/orcamento/">
              Solicitar orçamento <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link className="text-link" href="/servicos/">
              Conheça nossos serviços
            </Link>
          </div>
          <p className="hero-note">Feito com atenção. Pensado para você.</p>
        </div>
        <div className="hero-visual">
          <Photo index={0} priority />
          <div className="experience">
            <strong>36</strong>
            <span>
              anos de experiência
              <br />
              em cada ponto
            </span>
            <small>APROXIMADAMENTE</small>
          </div>
          <span className="image-label">
            MÃOS QUE CRIAM. DETALHES QUE IMPORTAM.
          </span>
        </div>
      </section>
      <div className="values-strip">
        <div className="container">
          <span>Costura artesanal</span>
          <span>Atendimento personalizado</span>
          <span>Acabamento cuidadoso</span>
          <span>Diadema · São Paulo</span>
        </div>
      </div>
      <section className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">O QUE FAZEMOS</p>
            <h2>
              Um cuidado para
              <br />
              cada necessidade.
            </h2>
          </div>
          <p>
            Do uniforme do dia a dia à peça feita para você, cada trabalho
            recebe a mesma atenção.
          </p>
        </div>
        <ServiceCards />
      </section>
      <section className="quality section">
        <div className="container split">
          <Photo index={3} />
          <div>
            <p className="eyebrow">A DIFERENÇA ESTÁ NO FAZER</p>
            <h2>
              Bem-feito, do primeiro
              <br />
              corte ao último ponto.
            </h2>
            <p>
              A escolha dos tecidos, a atenção às medidas e o acabamento fazem
              parte de uma peça que merece durar. Aqui, a experiência encontra o
              cuidado artesanal.
            </p>
            <ul className="check-list">
              {[
                "Tecidos escolhidos com atenção",
                "Medidas e caimento pensados para você",
                "Técnicas artesanais, inclusive feitas à mão",
              ].map((t) => (
                <li key={t}>
                  <Check size={18} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <Link className="text-link" href="/sobre/">
              Conheça nosso jeito de costurar{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="container section split about-preview">
        <div>
          <p className="eyebrow">PRAZER, NICE</p>
          <h2>
            Uma vida dedicada
            <br />à costura.
          </h2>
          <p>
            Você talvez já conheça a Confecção da Nice. Agora, como Ateliê Nice,
            o cuidado continua em cada tecido, cada medida e cada conversa.
          </p>
          <p>
            São aproximadamente 36 anos de experiência e um jeito próximo de
            atender, aqui no Parque Real, em Diadema.
          </p>
          <Link className="text-link" href="/sobre/">
            Conheça a Nice <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="portrait-frame">
          <Photo index={1} />
          <span>Experiência que se vê. Cuidado que se sente.</span>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
