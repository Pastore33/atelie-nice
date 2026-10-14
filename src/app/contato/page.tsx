import { MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/shared";
import { business } from "@/lib/data";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Contato e localização",
    "Encontre o Ateliê Nice na Rua João Paulo, 141, Parque Real, Diadema. Atendimento presencial, por telefone e WhatsApp.",
    "/contato/",
  );
export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="PERTO DE VOCÊ" title="Nos encontramos em Diadema.">
        No Parque Real, um atendimento acolhedor para conversar sobre a sua
        próxima peça.
      </PageIntro>
      <section className="container contact-grid section">
        <div className="contact-card">
          <MapPin size={32} aria-hidden="true" />
          <h2>Venha ao ateliê</h2>
          <address>{business.address}</address>
          <p>
            Atendimento presencial. Entre em contato para combinar sua visita.
          </p>
          <a
            className="text-link"
            href={business.maps}
            target="_blank"
            rel="noreferrer"
          >
            Ver localização no Google Maps <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="contact-card">
          <MessageCircle size={32} aria-hidden="true" />
          <h2>Vamos conversar</h2>
          <p>
            Solicitações por telefone e WhatsApp. Conte sua ideia e tire suas
            dúvidas diretamente com a Nice.
          </p>
          <a
            className="button"
            href={business.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Abrir WhatsApp
          </a>
          <a className="phone-link" href={business.tel}>
            <Phone size={18} />
            {business.phone}
          </a>
        </div>
      </section>
      <section className="container visit-note">
        <h2>Já sabe o que precisa?</h2>
        <p>Organize as informações do seu pedido em nosso formulário.</p>
        <Link href="/orcamento/" className="text-link">
          Solicitar orçamento <ArrowUpRight size={18} />
        </Link>
      </section>
    </>
  );
}
