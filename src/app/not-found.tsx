import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container page-intro not-found">
      <p className="eyebrow">404 · PÁGINA NÃO ENCONTRADA</p>
      <h1>
        Vamos retomar
        <br />o fio da conversa?
      </h1>
      <p>A página que você procura não está aqui.</p>
      <Link href="/" className="button">
        Voltar ao início
      </Link>
    </section>
  );
}
