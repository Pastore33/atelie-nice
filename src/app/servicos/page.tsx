import { ContactCTA, PageIntro, Photo } from "@/components/shared";
import { services } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Serviços de costura",
    "Uniformes escolares e profissionais, roupas sob medida, ajustes e reformas em Diadema.",
    "/servicos/",
  );
export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="FEITO PARA A SUA ROTINA"
        title="Costura para vestir bem."
      >
        Cada necessidade tem suas medidas. Cada peça merece o mesmo cuidado.
      </PageIntro>
      <div className="container service-details">
        {services.map((s, i) => (
          <section id={s.id} key={s.id} className="split service-detail">
            <Photo index={i < 2 ? 2 : i === 2 ? 3 : 0} />
            <div>
              <p className="eyebrow">SERVIÇO 0{i + 1}</p>
              <h2>{s.title}</h2>
              <p>{s.description}</p>
              <p>{s.detail}</p>
              <a
                className="button"
                target="_blank"
                rel="noreferrer"
                href={whatsappUrl(
                  `Olá, Nice! Gostaria de um orçamento para ${s.title.toLowerCase()}.`,
                )}
              >
                Pedir orçamento deste serviço
              </a>
            </div>
          </section>
        ))}
      </div>
      <ContactCTA />
    </>
  );
}
