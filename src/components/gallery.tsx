"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { photos } from "@/lib/data";
export function Gallery() {
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const shift = (amount: number) =>
    setActive((i) => (i + amount + photos.length) % photos.length);
  return (
    <>
      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <button
            className="gallery-item"
            key={photo.src}
            onClick={() => {
              setActive(i);
              dialog.current?.showModal();
            }}
            aria-label={`Ampliar: ${photo.caption}`}
          >
            <Image {...photo} sizes="(max-width:760px) 100vw, 50vw" />
            <span>
              {photo.caption}
              <Expand size={18} aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Galeria de imagens ampliadas"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") shift(1);
          if (e.key === "ArrowLeft") shift(-1);
        }}
      >
        <div className="lightbox-body">
          <button
            className="lightbox-close"
            aria-label="Fechar imagem"
            autoFocus
            onClick={() => dialog.current?.close()}
          >
            <X />
          </button>
          <Image {...photos[active]} sizes="90vw" />
          <div className="lightbox-controls">
            <button aria-label="Imagem anterior" onClick={() => shift(-1)}>
              <ChevronLeft />
            </button>
            <p aria-live="polite">
              {photos[active].caption} · {active + 1}/{photos.length}
            </p>
            <button aria-label="Próxima imagem" onClick={() => shift(1)}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
