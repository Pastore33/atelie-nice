import { ContactCTA, PageIntro, Photo } from "@/components/shared";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Sobre a Nice",
    "Conheça a experiência e o cuidado artesanal da Nice. Aproximadamente 36 anos de costura em Diadema.",
    "/sobre/",
  );
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="NOSSA ESSÊNCIA"
        title="Experiência nas mãos. Cuidado no olhar."
      >
        Por trás de uma peça bem-feita, existe alguém que conhece o valor de
        cada detalhe.
      </PageIntro>
      <section className="container split section about-story">
        <Photo index={1} />
        <div>
          <p className="eyebrow">PRAZER, NICE</p>
          <h2>
            A costura faz parte
            <br />
            da nossa história.
          </h2>
          <p>
            Com aproximadamente 36 anos de experiência, a Nice reúne
            conhecimento técnico e sensibilidade para transformar tecidos em
            peças bem-feitas.
          </p>
          <p>
            Antes conhecida como Confecção da Nice, a marca se apresenta agora
            como Ateliê Nice. O nome acompanha uma essência de sempre:
            qualidade, durabilidade e atenção a cada cliente.
          </p>
          <p>
            No Parque Real, em Diadema, o atendimento próximo permite entender o
            que você precisa, conversar sobre tecidos e medidas e encontrar o
            caminho para a sua peça.
          </p>
        </div>
      </section>
      <section className="quality section">
        <div className="container">
          <p className="eyebrow">NOSSO JEITO DE TRABALHAR</p>
          <h2>O que guia cada ponto.</h2>
          <div className="three-columns">
            {[
              [
                "Experiência artesanal",
                "Conhecimento em costura e técnicas feitas à mão, aplicados com atenção às necessidades de cada peça.",
              ],
              [
                "Escolhas cuidadosas",
                "Tecidos, medidas e detalhes são considerados em conjunto para alcançar conforto e bom caimento.",
              ],
              [
                "Acabamento e durabilidade",
                "O cuidado continua até a finalização, valorizando uma peça bem-feita e seu uso no dia a dia.",
              ],
            ].map(([title, text]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
