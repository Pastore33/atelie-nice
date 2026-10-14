import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Scissors,
  Ruler,
  Shirt,
  GraduationCap,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { business, photos, services } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";
export function Photo({
  index,
  className = "",
  priority = false,
}: {
  index: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      {...photos[index]}
      className={`photo ${className}`}
      sizes="(max-width: 760px) 100vw, 50vw"
      priority={priority}
    />
  );
}
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lead">{children}</p>
    </section>
  );
}
export function ServiceCards() {
  const icons = [GraduationCap, Shirt, Ruler, Scissors];
  return (
    <div className="service-grid">
      {services.map((s, i) => {
        const Icon = icons[i];
        return (
          <Link className="service-card" href={`/servicos/#${s.id}`} key={s.id}>
            <Icon size={30} strokeWidth={1.3} aria-hidden="true" />
            <span className="service-number">0{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <span className="text-link">
              Conheça o serviço <ArrowUpRight size={17} aria-hidden="true" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
export function ContactCTA() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">VAMOS CONVERSAR?</p>
          <h2>
            Sua próxima peça começa
            <br />
            com uma boa conversa.
          </h2>
          <p>Conte o que você precisa. A Nice cuida dos detalhes com você.</p>
        </div>
        <Link className="button cream" href="/orcamento/">
          Solicitar orçamento <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Link href="/" className="footer-brand">
              Ateliê <em>Nice</em>
            </Link>
            <p>{business.slogan}</p>
            <small>Antes, {business.previousName}.</small>
          </div>
          <div>
            <h2>Feito com cuidado</h2>
            {services.map((s) => (
              <Link key={s.id} href={`/servicos/#${s.id}`}>
                {s.title}
              </Link>
            ))}
          </div>
          <div>
            <h2>Venha conversar</h2>
            <p>
              <MapPin size={16} aria-hidden="true" /> {business.address}
            </p>
            <a href={business.whatsapp} target="_blank" rel="noreferrer">
              {business.phone}
            </a>
            <p>Atendimento presencial, por telefone e WhatsApp.</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} {business.name}
          </span>
          <span>Costura artesanal em Diadema · SP</span>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={whatsappUrl(
          "Olá, Nice! Gostaria de saber mais sobre os serviços do ateliê.",
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar com a Nice pelo WhatsApp (abre em nova aba)"
      >
        <MessageCircle size={25} />
        <span>Fale com a Nice</span>
      </a>
    </>
  );
}
