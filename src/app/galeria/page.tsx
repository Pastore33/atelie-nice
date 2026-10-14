import { PageIntro, ContactCTA } from "@/components/shared";
import { Gallery } from "@/components/gallery";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Galeria do ateliê",
    "Imagens fornecidas pelo Ateliê Nice: conheça o universo da costura artesanal em Diadema.",
    "/galeria/",
  );
export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="UM OLHAR MAIS DE PERTO"
        title="O universo do Ateliê Nice."
      >
        Imagens fornecidas para apresentar a Nice e o ambiente da costura. Elas
        não constituem um catálogo de trabalhos realizados.
      </PageIntro>
      <section
        className="container section gallery-section"
        aria-label="Imagens do ateliê"
      >
        <Gallery />
        <p className="gallery-help">
          Toque em uma imagem para ampliar. Use as setas do teclado para navegar
          e Esc para fechar.
        </p>
      </section>
      <ContactCTA />
    </>
  );
}
