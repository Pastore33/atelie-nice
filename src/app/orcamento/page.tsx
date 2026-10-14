import { PageIntro } from "@/components/shared";
import { QuoteForm } from "@/components/quote-form";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Solicitar orçamento",
    "Solicite seu orçamento para uniformes, roupas sob medida ou ajustes ao Ateliê Nice pelo WhatsApp.",
    "/orcamento/",
  );
export default function QuotePage() {
  return (
    <>
      <PageIntro
        eyebrow="O PRIMEIRO PONTO É A CONVERSA"
        title="Vamos pensar na sua peça?"
      >
        Conte o que você precisa. Vamos preparar uma mensagem para você
        conversar diretamente com a Nice.
      </PageIntro>
      <section className="container quote-layout section">
        <QuoteForm />
        <aside>
          <p className="eyebrow">UM ATENDIMENTO PRÓXIMO</p>
          <h2>
            Seu pedido,
            <br />
            com atenção.
          </h2>
          <p>
            Quanto mais detalhes sobre a peça ou o serviço, melhor podemos
            entender sua necessidade.
          </p>
          <ol className="steps">
            <li>
              <strong>Conte sua ideia</strong>
              <p>Selecione o serviço e descreva o que precisa.</p>
            </li>
            <li>
              <strong>Converse com a Nice</strong>
              <p>Confira a mensagem e envie pelo WhatsApp.</p>
            </li>
            <li>
              <strong>Combine os detalhes</strong>
              <p>
                Medidas, tecidos, valores e prazos serão conversados no
                atendimento.
              </p>
            </li>
          </ol>
        </aside>
      </section>
    </>
  );
}
