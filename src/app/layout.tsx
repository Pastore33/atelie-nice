import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/shared";
import { business } from "@/lib/data";
import { siteUrl } from "@/lib/seo";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Ateliê Nice | Costura artesanal em Diadema",
    template: "%s | Ateliê Nice",
  },
  description: business.slogan,
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
};
export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    alternateName: business.previousName,
    description:
      "Ateliê de costura em Diadema: uniformes escolares e profissionais, roupas sob medida, ajustes e reformas.",
    telephone: business.phone,
    address: { "@type": "PostalAddress", ...business.location },
    ...(siteUrl ? { url: siteUrl, image: `${siteUrl}/images/nice.webp` } : {}),
  };
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
